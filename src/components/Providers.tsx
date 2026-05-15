'use client';

import { useEffect, useRef } from 'react';
import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import flagsmith from '@flagsmith/flagsmith';
import { FlagsmithProvider as FlagsmithSDKProvider, useFlagsmith } from '@flagsmith/flagsmith/react';
import { TimetableProvider } from '@/lib/TimeTableContext';
import { PreferencesProvider } from '@/lib/PreferencesContext';
import AuthCacheSync from '@/components/AuthCacheSync';
import PlannerOnboardingTour from '@/components/PlannerOnboardingTour';
import posthog from 'posthog-js';

const isFlagsmithEnabled = Boolean(process.env.NEXT_PUBLIC_FLAGSMITH_ENVIRONMENT_ID);

const flagsmithOptions = isFlagsmithEnabled
    ? {
          environmentID: process.env.NEXT_PUBLIC_FLAGSMITH_ENVIRONMENT_ID,
          cacheFlags: true,
          enableAnalytics: true,
          ...(process.env.NEXT_PUBLIC_FLAGSMITH_API_URL ? { api: process.env.NEXT_PUBLIC_FLAGSMITH_API_URL } : {}),
      }
    : undefined;

function PostHogAuthSync() {
    const { data: session, status } = useSession();
    const lastIdentifiedEmail = useRef<string | null>(null);

    useEffect(() => {
        if (status !== 'authenticated') {
            lastIdentifiedEmail.current = null;
            return;
        }

        const email = session?.user?.email;
        if (!email || lastIdentifiedEmail.current === email) return;

        posthog.identify(email, {
            email,
            name: session.user?.name ?? undefined,
        });
        posthog.capture('login_succeeded', {
            provider: 'google',
        });
        lastIdentifiedEmail.current = email;
    }, [session, status]);

    return null;
}

function FlagsmithAuthSync() {
    const { data: session, status } = useSession();
    const flagsmithClient = useFlagsmith();
    const lastIdentifiedEmail = useRef<string | null>(null);

    useEffect(() => {
        if (!isFlagsmithEnabled) {
            return;
        }

        if (status === 'loading') {
            return;
        }

        if (status !== 'authenticated' || !session?.user?.email) {
            if (lastIdentifiedEmail.current) {
                void flagsmithClient.logout();
            }
            lastIdentifiedEmail.current = null;
            return;
        }

        const email = session.user.email.trim().toLowerCase();
        if (lastIdentifiedEmail.current === email) return;

        lastIdentifiedEmail.current = email;
        void flagsmithClient.identify(email, {
            email,
            name: session.user?.name ?? '',
        }).catch(() => {
            lastIdentifiedEmail.current = null;
        });
    }, [flagsmithClient, session?.user?.email, session?.user?.name, status]);

    return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <FlagsmithSDKProvider flagsmith={flagsmith} options={flagsmithOptions}>
                <PostHogAuthSync />
                {isFlagsmithEnabled ? <FlagsmithAuthSync /> : null}
                <PreferencesProvider>
                    <TimetableProvider>
                        <AuthCacheSync />
                        {children}
                        <PlannerOnboardingTour />
                    </TimetableProvider>
                </PreferencesProvider>
            </FlagsmithSDKProvider>
        </SessionProvider>
    );
}
