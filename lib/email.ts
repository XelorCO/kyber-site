import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendLicenseEmailParams {
  name: string;
  email: string;
  licenseKey: string;
}

export async function sendLicenseEmail({ name, email, licenseKey }: SendLicenseEmailParams) {
  const firstName = name.split(' ')[0];

  await resend.emails.send({
    from: 'Kyber <noreply@kyber-security.fr>',
    to: [email],
    subject: 'Votre licence Kyber Pro 🔑',
    html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Votre licence Kyber Pro</title>
</head>
<body style="margin:0;padding:20px;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:0 auto;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#3b82f6,#8b5cf6);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
      <h1 style="color:white;margin:0;font-size:32px;font-weight:700;letter-spacing:-0.5px;">Kyber</h1>
      <p style="color:rgba(255,255,255,0.75);margin:8px 0 0;font-size:14px;">Gestionnaire de mots de passe post-quantique</p>
    </div>

    <!-- Body -->
    <div style="background:white;padding:32px;border-radius:0 0 16px 16px;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
      <p style="color:#1e293b;font-size:16px;margin-top:0;">Bonjour <strong>${firstName}</strong>,</p>
      <p style="color:#475569;font-size:15px;line-height:1.6;">
        Merci pour votre achat ! Votre licence <strong>Kyber Pro</strong> est prête.
        Voici votre clé personnelle :
      </p>

      <!-- License key box -->
      <div style="background:#f8fafc;border:2px dashed #3b82f6;border-radius:10px;padding:20px;margin:24px 0;">
        <p style="margin:0 0 10px;color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">
          🔑 Clé de licence
        </p>
        <div style="background:#eff6ff;border-radius:6px;padding:14px;word-break:break-all;font-family:'Courier New',monospace;font-size:12px;color:#1e40af;line-height:1.5;">
          ${licenseKey}
        </div>
      </div>

      <!-- Steps -->
      <h3 style="color:#1e293b;font-size:15px;margin-bottom:12px;">Comment activer :</h3>
      <table style="border-collapse:collapse;width:100%;">
        ${["Ouvrez l'application <strong>Kyber</strong> sur votre ordinateur",
          'Allez dans <strong>Paramètres</strong> (icône ⚙️)',
          'Cliquez sur <strong>Activer la licence</strong>',
          'Copiez-collez la clé ci-dessus et confirmez']
          .map((step, i) => `
          <tr>
            <td style="padding:6px 12px 6px 0;vertical-align:top;width:28px;">
              <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;background:#3b82f6;color:white;border-radius:50%;font-size:12px;font-weight:bold;">${i + 1}</span>
            </td>
            <td style="padding:6px 0;color:#475569;font-size:14px;">${step}</td>
          </tr>`).join('')}
      </table>

      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px 16px;margin-top:24px;">
        <p style="margin:0;color:#166534;font-size:13px;">
          ✓ Cette clé est personnelle et liée à votre adresse email. Conservez-la précieusement.
        </p>
      </div>

      <p style="color:#94a3b8;font-size:13px;margin-top:24px;margin-bottom:0;">
        Des questions ? Répondez à cet email ou écrivez à
        <a href="mailto:contact@kyber-security.fr" style="color:#3b82f6;">contact@kyber-security.fr</a>
      </p>
    </div>

    <!-- Footer -->
    <p style="text-align:center;color:#94a3b8;font-size:12px;margin-top:20px;">
      © 2026 Kyber Security — Made in France 🇫🇷
    </p>
  </div>
</body>
</html>
    `.trim(),
  });
}
