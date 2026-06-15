import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/ratelimit';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const { allowed } = rateLimit(`newsletter:${ip}`, 5, 60 * 60 * 1000);
  if (!allowed) {
    return NextResponse.json({ error: 'Trop de requêtes.' }, { status: 429 });
  }

  const body = await req.json();
  const email = String(body.email ?? '').trim().toLowerCase();
  const source = String(body.source ?? 'newsletter').slice(0, 50);

  if (!email || !isValidEmail(email) || email.length > 254) {
    return NextResponse.json({ error: 'Email invalide.' }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID ?? '0');

  if (!apiKey || !listId) {
    // Pas encore configuré — on accepte silencieusement en dev
    console.warn('BREVO_API_KEY ou BREVO_LIST_ID manquant');
    return NextResponse.json({ ok: true });
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true,
      attributes: { SOURCE: source },
    }),
  });

  if (!res.ok && res.status !== 204) {
    const err = await res.text();
    console.error('Brevo error:', err);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
