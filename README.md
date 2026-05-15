This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Create your local environment file first:

```bash
cp .env.example .env.local
```

To enable feature flags with Flagsmith, set `NEXT_PUBLIC_FLAGSMITH_ENVIRONMENT_ID` in `.env.local`.

For rollout rules, naming, and cleanup steps, see [docs/feature-flags.md](docs/feature-flags.md).
For agent-facing repository guidance, see [docs/agents.md](docs/agents.md).

## Helpful Docs

- [docs/feature-flags.md](docs/feature-flags.md) - rollout rules and flag lifecycle
- [docs/troubleshooting.md](docs/troubleshooting.md) - common setup and runtime fixes
- [CONTRIBUTING.md](CONTRIBUTING.md) - workflow, checks, and PR guidance

## Feature Flag Checklist

When adding a new flag:

1. Add the flag name to [lib/featureFlags.ts](lib/featureFlags.ts).
2. Create the matching flag in Flagsmith.
3. Test it on your own account first.
4. Expand gradually and remove the flag after full rollout.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
