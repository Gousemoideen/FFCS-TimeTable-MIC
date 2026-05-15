# Repository Agent Instructions

This repository uses Flagsmith for feature rollout and experimentation.

## For Users

- Use Flagsmith-controlled features instead of hardcoding one-off toggles.
- If you need access to a restricted feature, dashboard, or rollout rule, contact the admin.
- Do not edit protected access settings unless the admin has approved it.

## For AI Agents

- Prefer Flagsmith when adding or testing feature-specific behavior.
- Read [docs/feature-flags.md](docs/feature-flags.md) before creating or changing a flag.
- Ask the user to contact the admin for access to restricted features, environments, or permissions.
- Keep feature rollouts gradual and reversible.
- Remove temporary flags and dead code after a feature is fully rolled out.

## Practical Rule

If a change affects who can see a feature, gate it behind a Flagsmith flag.
If a change affects who can edit or access something sensitive, direct the request to the admin.
