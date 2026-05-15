# Troubleshooting

Use this guide when the app, environment, or integrations do not behave as expected.

## Local Setup Issues

### `.env.local` is missing or stale

- Make sure `.env.local` exists in the repo root.
- Copy the latest values from your secret manager or from the template in `.env.example`.
- Restart `npm run dev` after changing environment variables.

### App starts but data does not load

- Check `MONGODB_URI` is set correctly.
- Verify the MongoDB cluster allows your IP address.
- Confirm the database user has read/write access.
- Look for connection errors in the terminal output.

### Google login does not work

- Confirm `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are correct.
- Verify the callback URL matches `http://localhost:3000/api/auth/callback/google` for local development.
- Make sure `NEXTAUTH_URL` matches the current app URL.

### NextAuth session is missing

- Check `NEXTAUTH_SECRET` is set.
- Clear cookies and try again.
- Restart the dev server after editing auth-related env variables.

## Rate Limiting Issues

### API requests are being limited too early

- Verify `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are set.
- Check the Upstash dashboard for usage and limits.
- Remember that authenticated routes are rate-limited per user email.
- Public routes are rate-limited per client fingerprint or IP.

### Rate limits are not behaving consistently

- Restart the dev server after changing Redis env values.
- Confirm the app can reach the Upstash REST endpoint.
- Check whether the fallback in-memory limiter is being used because Redis config is missing.

## Flagsmith Issues

### Feature flag does not appear in the app

- Verify `NEXT_PUBLIC_FLAGSMITH_ENVIRONMENT_ID` is correct.
- Make sure the feature flag exists in the matching Flagsmith environment.
- Confirm the flag name in the dashboard matches the code in [lib/featureFlags.ts](lib/featureFlags.ts).
- Restart the dev server after updating `.env.local`.

### A flag is on in Flagsmith but the UI does not change

- Confirm you are logged in with the same email that was targeted in Flagsmith.
- Refresh the page after login.
- Check the component actually reads the flag.
- Make sure the flag logic has a visible fallback when the flag is off.

## Build Or Type Issues

### TypeScript or lint errors after edits

- Run `npm run lint`.
- Check for unused imports or invalid CSS module imports.
- If a file is new, make sure it is referenced correctly from the app.

### CSS import errors

- Keep global CSS imports in [app/globals.css](app/globals.css).
- Do not side-effect import plain CSS files directly from page components unless the project structure supports it.

## When To Ask For Help

Ask the admin or maintainers when:

- you need access to a restricted Flagsmith feature or environment
- the MongoDB credentials or Atlas access are missing
- the app is pointing to the wrong production environment
- a data migration or destructive change is required

## Quick Recovery Steps

1. Stop the dev server.
2. Fix the relevant env values or code.
3. Restart `npm run dev`.
4. Re-test the exact flow that failed.
