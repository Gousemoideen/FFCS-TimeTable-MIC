# Load Testing

This repo includes a lightweight Node-based load test runner so you can stress the website and API endpoints without adding extra dependencies.

## What It Covers

- Public pages
- Public APIs
- Shared timetable flow
- Optional authenticated timetable APIs

## Quick Start

Start the app first:

```bash
npm run dev
```

Then run a public stress pass:

```bash
npm run load:public
```

You can make it stronger:

```bash
node scripts/load/run-load-test.mjs --group public --concurrency 40 --duration 45 --timeout 10000
```

## Available Groups

- `public`
  Covers `/`, `/mobile`, `/slots`, `/api/slots`, `/api/courses`

- `shared`
  Covers `/share/<id>` and `/api/shared-timetable/<id>`
  Requires:

```bash
export LOAD_TEST_SHARE_ID=<your-share-id>
```

- `auth`
  Covers authenticated timetable APIs
  Requires:

```bash
export LOAD_TEST_COOKIE='<full browser cookie header>'
export LOAD_TEST_OWNER_EMAIL='you@vitstudent.ac.in'
```

Optional for update/get tests:

```bash
export LOAD_TEST_TIMETABLE_ID=<existing-timetable-id>
```

- `all`
  Runs every scenario that has enough env vars configured

## Supported Environment Variables

```bash
export BASE_URL='http://localhost:3000'
export LOAD_TEST_SHARE_ID='<share-id>'
export LOAD_TEST_COOKIE='<cookie header>'
export LOAD_TEST_OWNER_EMAIL='you@vitstudent.ac.in'
export LOAD_TEST_TIMETABLE_ID='<existing-id>'
export LOAD_TEST_TITLE_PREFIX='stress-test'
```

## Output

Each scenario prints:

- total requests
- success count
- failure count
- requests/sec
- average latency
- p50 / p95 / p99 latency
- status code distribution
- sample failures

At the end, it prints an aggregate summary for the whole group.

## Example

```json
{
  "name": "api-courses-search",
  "totalRequests": 1200,
  "successCount": 1188,
  "failureCount": 12,
  "requestsPerSecond": 39.8,
  "avgLatencyMs": 112.4,
  "p50LatencyMs": 88.2,
  "p95LatencyMs": 241.6,
  "p99LatencyMs": 410.9,
  "statusCounts": {
    "200": 1188,
    "429": 12
  }
}
```

## How To Read The Results

- A few `429`s usually mean your rate limiter is working.
- Rising `p95` and `p99` means the app is getting stressed even if `200`s still dominate.
- Lots of request errors or `5xx` means the app or DB is becoming unstable.
- Compare `public` vs `auth` runs separately because authenticated DB writes are much heavier.

## Safety Notes

- Run this against local or staging first.
- Do not hammer production blindly.
- The current rate limiter is app-memory based, so multi-instance production behavior can differ from local results.
- The `auth` group can create new timetables if you enable the save scenario.
