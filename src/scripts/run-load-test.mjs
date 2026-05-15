import process from "node:process";
import { performance } from "node:perf_hooks";
import { SCENARIO_GROUPS } from "./scenarios.mjs";

const args = new Map();
for (let i = 2; i < process.argv.length; i += 1) {
  const arg = process.argv[i];
  if (arg.startsWith("--")) {
    const key = arg.slice(2);
    const value = process.argv[i + 1] && !process.argv[i + 1].startsWith("--") ? process.argv[i + 1] : "true";
    args.set(key, value);
    if (value !== "true") i += 1;
  }
}

if (args.has("help")) {
  console.log(`
Usage:
  node scripts/load/run-load-test.mjs --group public --concurrency 20 --duration 30 --timeout 8000
  node scripts/load/run-load-test.mjs --group auth --scenario api-get-timetable
  node scripts/load/run-load-test.mjs --group auth --scenario api-get-timetable --requests 550

Options:
  --group         public | shared | auth | all   (default: public)
  --scenario      run one scenario by name       (default: all in group)
  --requests      exact requests per scenario     (default: disabled)
  --concurrency   parallel workers per scenario  (default: 10)
  --duration      seconds to run each scenario   (default: 20)
  --timeout       request timeout in ms          (default: 8000)
  --pause         ms between scenarios           (default: 250)

Environment:
  BASE_URL=http://localhost:3000
  LOAD_TEST_SHARE_ID=<shareId>
  LOAD_TEST_COOKIE="<full cookie header>"
  LOAD_TEST_OWNER_EMAIL=<user email>
  LOAD_TEST_TIMETABLE_ID=<existing timetable id>
  LOAD_TEST_TITLE_PREFIX=stress-test
`);
  process.exit(0);
}

const group = args.get("group") || "public";
const scenarioName = args.get("scenario") || "";
const maxRequests = Number.parseInt(args.get("requests") || "0", 10);
const concurrency = Number.parseInt(args.get("concurrency") || "10", 10);
const durationSeconds = Number.parseInt(args.get("duration") || "20", 10);
const timeoutMs = Number.parseInt(args.get("timeout") || "8000", 10);
const pauseMs = Number.parseInt(args.get("pause") || "250", 10);

let scenarios = SCENARIO_GROUPS[group];

if (!scenarios || scenarios.length === 0) {
  console.error(`No scenarios available for group "${group}". Check your env vars or group name.`);
  process.exit(1);
}

if (scenarioName) {
  const selected = scenarios.filter((scenario) => scenario.name === scenarioName);
  if (selected.length === 0) {
    console.error(`Scenario "${scenarioName}" was not found in group "${group}".`);
    console.error(`Available scenarios: ${scenarios.map((scenario) => scenario.name).join(", ")}`);
    process.exit(1);
  }
  scenarios = selected;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const percentile = (values, p) => {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(sorted.length - 1, Math.ceil((p / 100) * sorted.length) - 1);
  return sorted[index];
};

const summarize = (name, result, startedAt, endedAt) => {
  const durationMs = Math.max(endedAt - startedAt, 1);
  const successCount = result.records.filter((r) => r.ok).length;
  const failureCount = result.records.length - successCount;
  const statusCounts = result.records.reduce((acc, record) => {
    const key = String(record.status ?? "ERR");
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const latencies = result.records.map((r) => r.durationMs);
  const avgLatency = latencies.length ? latencies.reduce((sum, value) => sum + value, 0) / latencies.length : 0;

  return {
    name,
    totalRequests: result.records.length,
    successCount,
    failureCount,
    durationMs,
    requestsPerSecond: (result.records.length / durationMs) * 1000,
    avgLatencyMs: avgLatency,
    p50LatencyMs: percentile(latencies, 50),
    p95LatencyMs: percentile(latencies, 95),
    p99LatencyMs: percentile(latencies, 99),
    statusCounts,
    sampleFailures: result.records.filter((r) => !r.ok).slice(0, 5).map((r) => ({
      status: r.status ?? "ERR",
      error: r.error ?? null,
      durationMs: r.durationMs,
    })),
  };
};

const runScenario = async (scenario) => {
  const endAt = Date.now() + durationSeconds * 1000;
  const records = [];

  const worker = async () => {
    while (Date.now() < endAt) {
      if (maxRequests > 0 && records.length >= maxRequests) {
        break;
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);
      const started = performance.now();

      try {
        const response = await fetch(scenario.url, {
          method: scenario.method,
          headers: scenario.headers,
          body: scenario.bodyFactory ? scenario.bodyFactory() : scenario.body,
          signal: controller.signal,
        });
        const ended = performance.now();
        const ok = (scenario.expectedStatuses || [200]).includes(response.status);
        records.push({
          ok,
          status: response.status,
          durationMs: ended - started,
        });
      } catch (error) {
        const ended = performance.now();
        records.push({
          ok: false,
          status: null,
          durationMs: ended - started,
          error: error instanceof Error ? error.message : String(error),
        });
      } finally {
        clearTimeout(timeout);
      }

      if (maxRequests > 0 && records.length >= maxRequests) {
        break;
      }
    }
  };

  const startedAt = performance.now();
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  const endedAt = performance.now();

  return summarize(scenario.name, { records }, startedAt, endedAt);
};

const main = async () => {
  console.log(`Starting load test group "${group}" with ${scenarios.length} scenario(s).`);
  console.log(`Concurrency=${concurrency}, Duration=${durationSeconds}s, Timeout=${timeoutMs}ms`);
  console.log("");

  const summaries = [];

  for (const scenario of scenarios) {
    console.log(`Running ${scenario.name} -> ${scenario.method} ${scenario.url}`);
    const summary = await runScenario(scenario);
    summaries.push(summary);
    console.log(JSON.stringify(summary, null, 2));
    console.log("");
    await sleep(pauseMs);
  }

  const aggregate = summaries.reduce(
    (acc, summary) => {
      acc.totalRequests += summary.totalRequests;
      acc.successCount += summary.successCount;
      acc.failureCount += summary.failureCount;
      acc.durationMs += summary.durationMs;
      return acc;
    },
    { totalRequests: 0, successCount: 0, failureCount: 0, durationMs: 0 }
  );

  console.log("=== Aggregate Summary ===");
  console.log(
    JSON.stringify(
      {
        group,
        scenarios: summaries.length,
        totalRequests: aggregate.totalRequests,
        successCount: aggregate.successCount,
        failureCount: aggregate.failureCount,
        requestsPerSecond:
          aggregate.durationMs > 0 ? (aggregate.totalRequests / aggregate.durationMs) * 1000 : 0,
      },
      null,
      2
    )
  );
};

main().catch((error) => {
  console.error("Load test runner failed:", error);
  process.exit(1);
});
