import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getLaunchCounts, remainingSlots, LAUNCH_LIMIT } from '@/lib/launch';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET() {
  const counts = await getLaunchCounts(stripe);
  return NextResponse.json({
    limit: LAUNCH_LIMIT,
    pro: remainingSlots(counts.pro),
    famille: remainingSlots(counts.famille),
  });
}
