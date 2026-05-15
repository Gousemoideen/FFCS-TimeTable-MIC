# Contributing

Thanks for helping improve FFCS Planner.

## Before You Start

- Read [README.md](README.md)
- Read [ENV_SETUP.md](ENV_SETUP.md)
- Read [FEATURE_FLAGS_GUIDE.md](FEATURE_FLAGS_GUIDE.md)
- Read [agents.md](agents.md)

## Development Workflow

1. Create or switch to a branch for your change.
2. Make the smallest focused change that solves the problem.
3. Keep feature-specific behavior behind Flagsmith when appropriate.
4. Test the affected flow locally.
5. Run linting before opening a PR.

## Good Practices

- Prefer reusable patterns over one-off code.
- Keep environment-specific values in `.env.local`.
- Remove temporary flags after the feature is fully rolled out.
- Keep docs updated when behavior changes.
- Do not commit secrets or private environment values.

## Feature Flag Changes

If your change affects rollout or visibility:

- add the flag name to [lib/featureFlags.ts](lib/featureFlags.ts)
- document the rollout in [FEATURE_FLAGS_GUIDE.md](FEATURE_FLAGS_GUIDE.md)
- test the flag with your own account first
- expand the rollout gradually

## Recommended Checks

Before pushing changes, run:

```bash
npm run lint
```

If you changed the app behavior, also do a manual smoke test in the browser.

## Pull Requests

When opening a PR:

- summarize what changed
- mention any env updates or new flags
- note any manual steps that reviewers need
- include screenshots if the UI changed

## Access Or Permissions

If a change needs restricted access, use the admin path described in [agents.md](agents.md).
