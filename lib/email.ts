import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return (str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

interface SendThankYouEmailParams {
  email: string;
  amount: string;
}

/**
 * Remerciement après un don. Kyber est gratuit et open source : aucun contenu
 * à livrer, juste un merci et les liens utiles.
 */
export async function sendThankYouEmail({ email, amount }: SendThankYouEmailParams) {
  const safeAmount = escapeHtml(String(amount));

  const { error } = await resend.emails.send({
    from: 'Kyber <noreply@kyber-security.fr>',
    to: [email],
    subject: 'Merci pour votre soutien à Kyber',
    html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Merci pour votre soutien</title>
</head>
<body style="margin:0;padding:20px;background:#0e1015;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:0 auto;">

    <div style="background:linear-gradient(135deg,#3b82f6,#6366f1);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
      <h1 style="color:white;margin:0;font-size:32px;font-weight:700;letter-spacing:-0.5px;">Kyber</h1>
      <p style="color:rgba(255,255,255,0.75);margin:8px 0 0;font-size:14px;">Gestionnaire de mots de passe post-quantique</p>
    </div>

    <div style="background:#151922;padding:32px;border-radius:0 0 16px 16px;">
      <p style="color:#e7e5e4;font-size:16px;margin-top:0;">Merci.</p>
      <p style="color:#a8a29e;font-size:15px;line-height:1.6;">
        Votre don de <strong style="color:#e7e5e4;">${safeAmount} &euro;</strong> a bien &eacute;t&eacute; re&ccedil;u.
        Kyber est et restera gratuit et open source / votre soutien finance directement le temps
        pass&eacute; dessus (audits, portage Linux et macOS, corrections).
      </p>
      <p style="color:#a8a29e;font-size:15px;line-height:1.6;">
        Aucune action de votre part : il n'y a pas de licence &agrave; activer, tout est d&eacute;j&agrave; d&eacute;bloqu&eacute;
        dans l'application.
      </p>

      <div style="margin:24px 0;">
        <a href="https://kyber-security.fr/telechargement" style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#6366f1);color:white;text-decoration:none;padding:12px 22px;border-radius:10px;font-size:14px;font-weight:600;">
          T&eacute;l&eacute;charger Kyber
        </a>
      </div>

      <p style="color:#78716c;font-size:13px;margin-top:24px;margin-bottom:0;">
        Le code est ouvert sur
        <a href="https://github.com/XelorCO/kyber-app" style="color:#818cf8;">GitHub</a>.
        Une question ? R&eacute;pondez &agrave; cet email ou &eacute;crivez &agrave;
        <a href="mailto:contact@kyber-security.fr" style="color:#818cf8;">contact@kyber-security.fr</a>
      </p>
    </div>

    <p style="text-align:center;color:#57534e;font-size:12px;margin-top:20px;">
      &copy; 2026 Kyber / Apache-2.0 / Made in France
    </p>
  </div>
</body>
</html>
    `.trim(),
  });

  if (error) {
    throw new Error(`Resend a refusé l'envoi : ${error.name} — ${error.message}`);
  }
}
