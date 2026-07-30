import Stripe from 'stripe';

export const LAUNCH_LIMIT = 50;
export const LAUNCH_PRICES = { pro: 1500, famille: 2500 } as const;
export const REGULAR_PRICES = { pro: 2900, famille: 4900 } as const;

type Tier = 'pro' | 'famille';
type Counts = Record<Tier, number>;

let cache: { at: number; counts: Counts } | null = null;
const CACHE_MS = 20_000;

// sessions.list plafonne à 100 résultats — largement suffisant au volume actuel,
// à remplacer par l'API Search si le nombre total de sessions dépasse un jour 100
export async function getLaunchCounts(stripe: Stripe): Promise<Counts> {
  const now = Date.now();
  if (cache && now - cache.at < CACHE_MS) return cache.counts;

  const sessions = await stripe.checkout.sessions.list({ limit: 100 });
  const counts: Counts = { pro: 0, famille: 0 };
  for (const s of sessions.data) {
    const redeemed = s.payment_status === 'paid' || s.payment_status === 'no_payment_required';
    if (!redeemed || s.metadata?.launch !== 'true') continue;
    const tier: Tier = s.metadata?.tier === 'famille' ? 'famille' : 'pro';
    counts[tier]++;
  }
  cache = { at: now, counts };
  return counts;
}

export function remainingSlots(count: number): number {
  return Math.max(0, LAUNCH_LIMIT - count);
}
