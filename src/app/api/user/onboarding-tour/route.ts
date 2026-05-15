import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import getClientPromise from '@/lib/mongodb-client';
import { authOptions } from '../../auth/[...nextauth]/authOptions';

export const dynamic = 'force-dynamic';

const PLANNER_TOUR_FIELD = 'onboardingTours.plannerOnboardingTourCompletedAt';

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const email = session.user.email.trim().toLowerCase();
        const client = await getClientPromise();
        const user = await client
            .db()
            .collection('users')
            .findOne(
                { email },
                { projection: { onboardingTours: 1 } },
            );

        return NextResponse.json({
            completed: Boolean(user?.onboardingTours?.plannerOnboardingTourCompletedAt),
        });
    } catch (error) {
        console.error('[onboarding-tour/get] Error:', error);
        return NextResponse.json({ error: 'Failed to fetch onboarding state' }, { status: 500 });
    }
}

export async function POST() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const email = session.user.email.trim().toLowerCase();
        const client = await getClientPromise();
        await client
            .db()
            .collection('users')
            .updateOne(
                { email },
                { $set: { [PLANNER_TOUR_FIELD]: new Date() } },
            );

        return NextResponse.json({ success: true, completed: true });
    } catch (error) {
        console.error('[onboarding-tour/post] Error:', error);
        return NextResponse.json({ error: 'Failed to save onboarding state' }, { status: 500 });
    }
}
