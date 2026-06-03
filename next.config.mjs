/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Interdit au navigateur d'afficher le site dans une iframe (anti-clickjacking)
  { key: 'X-Frame-Options', value: 'DENY' },
  // Empêche le sniffing de type MIME
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Protection XSS navigateurs anciens
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  // Force HTTPS pendant 2 ans, inclut les sous-domaines
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Contrôle les infos de referrer envoyées aux tiers
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Désactive les API sensibles non utilisées
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Content Security Policy — autorise uniquement les ressources légitimes
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://api.stripe.com https://kyber-security.fr",
      "frame-src https://js.stripe.com https://hooks.stripe.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
  // Désactive la détection de type de contenu
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
