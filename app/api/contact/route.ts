import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/ratelimit';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return (str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  // Rate limit : 5 requêtes par IP par 10 minutes
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const { allowed } = rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);
  if (!allowed) {
    return NextResponse.json({ error: 'Trop de requêtes. Réessayez dans 10 minutes.' }, { status: 429 });
  }

  const { company, firstName, lastName, email, teamSize, message } = await req.json();

  if (!firstName || !email) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 });
  }

  // Limites de longueur pour éviter les abus
  if (
    String(firstName).length > 100 ||
    String(lastName ?? '').length > 100 ||
    String(company ?? '').length > 200 ||
    String(message ?? '').length > 2000
  ) {
    return NextResponse.json({ error: 'Contenu trop long' }, { status: 400 });
  }

  // Échappement HTML de toutes les données utilisateur avant injection dans l'email
  const safeFirst   = escapeHtml(firstName);
  const safeLast    = escapeHtml(lastName ?? '');
  const safeCompany = escapeHtml(company ?? '—');
  const safeEmail   = escapeHtml(email);
  const safeSize    = escapeHtml(String(teamSize ?? '—'));
  const safeMessage = message
    ? escapeHtml(message).replace(/\n/g, '<br>')
    : null;

  await resend.emails.send({
    from: 'Kyber Contact <noreply@kyber-security.fr>',
    to: [process.env.ADMIN_EMAIL!],
    replyTo: email,
    subject: `[Kyber Entreprise] ${safeFirst} ${safeLast} — ${safeCompany}`,
    html: `
      <h2 style="font-family:sans-serif;">Nouvelle demande entreprise</h2>
      <table style="font-family:sans-serif;border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Société</td><td><strong>${safeCompany}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Contact</td><td>${safeFirst} ${safeLast}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Email</td><td><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Équipe</td><td>${safeSize} personnes</td></tr>
      </table>
      ${safeMessage ? `<p style="font-family:sans-serif;margin-top:16px;"><strong>Message :</strong><br>${safeMessage}</p>` : ''}
    `,
  });

  return NextResponse.json({ success: true });
}
