import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { company, firstName, lastName, email, teamSize, message } = await req.json();

  if (!firstName || !email) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
  }

  await resend.emails.send({
    from: 'Kyber Contact <noreply@kyber-security.fr>',
    to: [process.env.ADMIN_EMAIL!],
    replyTo: email,
    subject: `[Kyber Entreprise] ${firstName} ${lastName} — ${company}`,
    html: `
      <h2 style="font-family:sans-serif;">Nouvelle demande entreprise</h2>
      <table style="font-family:sans-serif;border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Société</td><td><strong>${company}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Contact</td><td>${firstName} ${lastName}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Équipe</td><td>${teamSize} personnes</td></tr>
      </table>
      ${message ? `<p style="font-family:sans-serif;margin-top:16px;"><strong>Message :</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
    `,
  });

  return NextResponse.json({ success: true });
}
