import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kyber / Gestionnaire de mots de passe post-quantique';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #070711 0%, #0d0d2e 60%, #07071a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        {/* Blue glow */}
        <div style={{
          position: 'absolute', top: '10%', left: '10%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        {/* Purple glow */}
        <div style={{
          position: 'absolute', bottom: '10%', right: '10%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, zIndex: 1, padding: '0 60px' }}>
          {/* Badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'rgba(59,130,246,0.12)',
            border: '1px solid rgba(59,130,246,0.35)',
            borderRadius: 50, padding: '8px 20px',
            color: '#93c5fd', fontSize: 18,
          }}>
             Premier gestionnaire post-quantique français
          </div>

          {/* Title */}
          <div style={{
            fontSize: 86, fontWeight: 900, letterSpacing: -3,
            background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #22d3ee 100%)',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            Kyber
          </div>

          {/* Subtitle */}
          <div style={{
            fontSize: 26, color: 'rgba(255,255,255,0.65)',
            textAlign: 'center', maxWidth: 700, lineHeight: 1.4,
          }}>
            Protégez vos mots de passe contre les menaces quantiques
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
            {['◆ Kyber1024', '⬡ AES-256-GCM', '✓ Argon2id'].map(tag => (
              <div key={tag} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 10, padding: '10px 20px',
                color: 'rgba(255,255,255,0.75)', fontSize: 20,
              }}>
                {tag}
              </div>
            ))}
          </div>

          {/* Domain */}
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 20, marginTop: 6 }}>
            kyber-security.fr
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
