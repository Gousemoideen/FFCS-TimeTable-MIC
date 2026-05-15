# Feature Flags Guide

This project uses Flagsmith to roll out UI changes safely and gradually.

For agent and repository-level instructions, see [docs/agents.md](docs/agents.md).

## What Feature Flags Are For

Use a flag when you want to:

- release a feature only to yourself first
- test a new UI flow on a small group
- turn a feature off quickly if it breaks
- compare two versions of the same screen
- keep unfinished code hidden from normal users

## When To Create A New Flag

Create a new flag when the change is:

- visible to users
- risky enough that you want a fallback
- something you may roll out in stages
- temporary or experimental

Do not create a flag for tiny styling changes that do not affect behavior.

## Naming Rules

Use short, descriptive names that describe the behavior.

Good examples:

- `show_saved_page_redesign`
- `enable_new_course_card`
- `use_simplified_share_modal`

Avoid names like:

- `test1`
- `flag123`
- `temp_feature`

## Where To Define Flags In Code

Keep the flag names in [lib/featureFlags.ts](lib/featureFlags.ts).

That file is the source of truth for feature flag names used in the app.

Call the admin for the usage of the flag something like `isBetaTimetableFlowEnabled` or `shouldShowSavedPageRedesign`.

## How To Use A Flag In The App

1. Add the flag name to [lib/featureFlags.ts](lib/featureFlags.ts).
2. Read the flag in the component where the feature appears.
3. Show the new UI when the flag is enabled.
4. Show the old UI when the flag is disabled.
5. Keep the fallback version working.

Example pattern:

- flag on = new experience
- flag off = current experience

## Flagsmith Dashboard Procedure

When you want to launch a new feature:

1. Open the correct Flagsmith project.
2. Confirm the environment matches `NEXT_PUBLIC_FLAGSMITH_ENVIRONMENT_ID` in [.env.local](.env.local).
3. Create a new flag with a clear name.
4. Start with the default state set to off.
5. Add a rule or segment for your own account.
6. Turn the flag on for that account.
7. Save the change.
8. Refresh the app and verify the new UI appears.

## Safe Rollout Procedure

Use this order:

1. **Internal test** - only your account.
2. **Small beta group** - a few trusted users.
3. **Gradual rollout** - expand to more users in stages.
4. **Full rollout** - everyone gets the feature.
5. **Cleanup** - remove the old code path and retire the flag.

## What To Check Before Expanding A Flag

Before increasing rollout, confirm:

- the new UI loads without errors
- no important button or flow is broken
- the old fallback still behaves correctly
- the feature works after refresh and login
- no data is lost or duplicated

## Cleanup Rules

Once the feature is fully rolled out:

- remove temporary flag checks from the code
- delete unused flag names from [lib/featureFlags.ts](lib/featureFlags.ts)
- remove the flag from Flagsmith if it is no longer needed
- keep the app simpler by removing dead fallback paths

## Suggested Uses In This App

Good places to use feature flags in this repo:

- landing page experiments
- saved timetable UI changes
- timetable builder flow changes
- share modal redesigns
- new course selection cards

## Notes For This Repo

If you add another flag later, follow the same pattern:

- define it in [lib/featureFlags.ts](lib/featureFlags.ts)
- target it in Flagsmith
- test it on your account first
- expand the rollout only after it is stable

## Quick Checklist

- [ ] Flag name is descriptive
- [ ] Flag exists in [lib/featureFlags.ts](lib/featureFlags.ts)
- [ ] Default state is off
- [ ] Only the right users can see it first
- [ ] Fallback UI still works
- [ ] Flag is removed after full rollout
