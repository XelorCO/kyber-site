import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

const downloadJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kyber',
  applicationCategory: 'SecurityApplication',
  operatingSystem: ['Windows 10', 'Windows 11', 'Linux'],
  downloadUrl: [
    'https://kyber-security.fr/downloads/Kyber_1.0.0_x64-setup.exe',
    'https://kyber-security.fr/downloads/Kyber_1.0.0_x64_en-US.msi',
    'https://kyber-security.fr/downloads/Kyber_1.0.0_amd64.AppImage',
    'https://kyber-security.fr/downloads/Kyber_1.0.0_amd64.deb',
    'https://kyber-security.fr/downloads/Kyber-1.0.0-1.x86_64.rpm',
  ],
  softwareVersion: '1.0.0',
  releaseNotes: 'Chiffrement Kyber1024 (ML-KEM) + AES-256-GCM + Argon2id. Support Windows et Linux.',
  url: 'https://kyber-security.fr',
  inLanguage: 'fr-FR',
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'EUR', name: 'Kyber Gratuit', description: "Jusqu'à 3 mots de passe" },
    { '@type': 'Offer', price: '15.00', priceCurrency: 'EUR', name: 'Kyber Pro', description: 'Mots de passe illimités, licence perpétuelle' },
  ],
};

export const metadata: Metadata = {
  title: { absolute: 'Télécharger Kyber | Gestionnaire post-quantique gratuit' },
  description:
    'Télécharger Kyber gratuitement sur Windows 10/11 et Linux. Installateur NSIS, MSI, AppImage, .deb, .rpm. Chiffrement Kyber1024 post-quantique.',
  keywords: [
    'télécharger kyber',
    'télécharger gestionnaire mots de passe',
    'kyber windows télécharger',
    'kyber linux télécharger',
    'gestionnaire mots de passe gratuit windows',
    'gestionnaire mots de passe ubuntu',
    'gestionnaire mots de passe gratuit linux',
    'logiciel sécurité gratuit windows',
    'télécharger coffre-fort numérique',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/telechargement',
  },
  openGraph: {
    title: 'Télécharger Kyber | Gestionnaire post-quantique gratuit',
    description: 'Disponible sur Windows 10/11 et Linux. Gratuit jusqu\'à 3 mots de passe. Chiffrement Kyber1024.',
    url: 'https://kyber-security.fr/telechargement',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Télécharger Kyber Security' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Télécharger Kyber | Gestionnaire post-quantique gratuit',
    description: 'Windows & Linux. Gratuit jusqu\'à 3 mots de passe. Kyber1024 + AES-256-GCM.',
    images: ['/opengraph-image'],
  },
};

export default function PageTelechargement() {
  return (
    <div className="min-h-screen bg-[#070711] text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadJsonLd) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">

          {/* ── HERO ── */}
          <div className="py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Télécharger{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Kyber
              </span>{' '}
              gratuitement
            </h1>
            <p className="text-lg text-slate-400 mb-2">
              Gestionnaire de mots de passe post-quantique. Open source. Windows &amp; Linux.
            </p>
            <p className="text-sm text-slate-500">Version 1.0.0 · Juin 2026 · Chiffrement Kyber1024 (ML-KEM)</p>
          </div>

          {/* ── PLATEFORMES ── */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Windows */}
              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/60 transition-all">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                </div>
                <h2 className="font-bold text-lg mb-1">Windows</h2>
                <p className="text-slate-500 text-xs mb-4">Windows 10 &amp; 11 — 64 bits</p>
                <div className="space-y-2">
                  <a
                    href="/downloads/Kyber_1.0.0_x64-setup.exe"
                    download
                    className="flex items-center justify-between w-full text-blue-400 hover:text-blue-300 text-sm font-medium border border-blue-500/30 hover:border-blue-500/60 px-4 py-2.5 rounded-xl transition-all"
                  >
                    <span>Télécharger .exe</span>
                    <span className="text-xs text-slate-500">Installateur NSIS</span>
                  </a>
                  <a
                    href="/downloads/Kyber_1.0.0_x64_en-US.msi"
                    download
                    className="flex items-center justify-between w-full text-slate-400 hover:text-white text-sm font-medium border border-white/10 hover:border-white/20 px-4 py-2.5 rounded-xl transition-all"
                  >
                    <span>Télécharger .msi</span>
                    <span className="text-xs text-slate-500">Microsoft Installer</span>
                  </a>
                </div>
              </div>

              {/* macOS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 opacity-60">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                  </svg>
                </div>
                <h2 className="font-bold text-lg mb-1">macOS</h2>
                <p className="text-slate-500 text-xs mb-4">macOS 12 Monterey et supérieur</p>
                <span className="inline-block w-full text-center text-slate-600 text-sm border border-white/10 px-4 py-2.5 rounded-xl cursor-not-allowed">
                  Disponible bientôt
                </span>
                <p className="text-xs text-slate-600 mt-2 text-center">Apple Silicon &amp; Intel</p>
              </div>

              {/* Linux */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
                <div className="mb-4">
                  <svg className="w-10 h-10" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="32" cy="48" rx="15" ry="18" fill="#2d2d3d"/>
                    <ellipse cx="32" cy="50" rx="9" ry="12" fill="#e8e8f0"/>
                    <circle cx="32" cy="22" r="13" fill="#2d2d3d"/>
                    <circle cx="27" cy="18" r="3.5" fill="white"/>
                    <circle cx="37" cy="18" r="3.5" fill="white"/>
                    <circle cx="28" cy="19" r="1.8" fill="#111827"/>
                    <circle cx="38" cy="19" r="1.8" fill="#111827"/>
                    <ellipse cx="32" cy="27" rx="4.5" ry="3" fill="#f59e0b"/>
                    <ellipse cx="23" cy="72" rx="7" ry="3" fill="#f59e0b"/>
                    <ellipse cx="41" cy="72" rx="7" ry="3" fill="#f59e0b"/>
                    <ellipse cx="16" cy="46" rx="5" ry="11" fill="#2d2d3d" transform="rotate(-15 16 46)"/>
                    <ellipse cx="48" cy="46" rx="5" ry="11" fill="#2d2d3d" transform="rotate(15 48 46)"/>
                  </svg>
                </div>
                <h2 className="font-bold text-lg mb-1">Linux</h2>
                <p className="text-slate-500 text-xs mb-4">Debian, Ubuntu, Fedora, Kali</p>
                <div className="space-y-2">
                  <a
                    href="/downloads/Kyber_1.0.0_amd64.AppImage"
                    download
                    className="flex items-center justify-between w-full text-blue-400 hover:text-blue-300 text-sm font-medium border border-blue-500/30 hover:border-blue-500/60 px-4 py-2.5 rounded-xl transition-all"
                  >
                    <span>Télécharger .AppImage</span>
                    <span className="text-xs text-slate-500">Universel</span>
                  </a>
                  <a
                    href="/downloads/Kyber_1.0.0_amd64.deb"
                    download
                    className="flex items-center justify-between w-full text-slate-400 hover:text-white text-sm font-medium border border-white/10 hover:border-white/20 px-4 py-2.5 rounded-xl transition-all"
                  >
                    <span>Télécharger .deb</span>
                    <span className="text-xs text-slate-500">Debian / Ubuntu</span>
                  </a>
                  <a
                    href="/downloads/Kyber-1.0.0-1.x86_64.rpm"
                    download
                    className="flex items-center justify-between w-full text-slate-400 hover:text-white text-sm font-medium border border-white/10 hover:border-white/20 px-4 py-2.5 rounded-xl transition-all"
                  >
                    <span>Télécharger .rpm</span>
                    <span className="text-xs text-slate-500">Fedora / Red Hat</span>
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* ── INSTRUCTIONS ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Installation</h2>
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="text-blue-400">Windows</span>
                </h3>
                <ol className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-mono flex-shrink-0">1.</span>
                    <span>Téléchargez <strong className="text-white">Kyber_1.0.0_x64-setup.exe</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-mono flex-shrink-0">2.</span>
                    <span>Double-cliquez sur le fichier. Si Windows SmartScreen apparaît, cliquez &ldquo;Informations complémentaires&rdquo; → &ldquo;Exécuter quand même&rdquo;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-mono flex-shrink-0">3.</span>
                    <span>Suivez l&apos;assistant d&apos;installation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-mono flex-shrink-0">4.</span>
                    <span>Kyber est accessible depuis le menu Démarrer</span>
                  </li>
                </ol>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold mb-4">
                  <span className="text-slate-300">Linux (Debian / Ubuntu)</span>
                </h3>
                <ol className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-mono flex-shrink-0">1.</span>
                    <span>Téléchargez le <strong className="text-white">.deb</strong> ou le <strong className="text-white">.AppImage</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-mono flex-shrink-0">2.</span>
                    <span>Pour le .deb :<br />
                      <code className="bg-black/30 px-2 py-0.5 rounded text-xs font-mono">sudo dpkg -i Kyber_1.0.0_amd64.deb</code>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-mono flex-shrink-0">3.</span>
                    <span>Pour l&apos;AppImage :<br />
                      <code className="bg-black/30 px-2 py-0.5 rounded text-xs font-mono">chmod +x Kyber*.AppImage && ./Kyber*.AppImage</code>
                    </span>
                  </li>
                </ol>
              </div>

            </div>
          </section>

          {/* ── CONFIGURATION REQUISE ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Configuration requise</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {[
                { os: 'Windows', req: 'Windows 10 ou 11, 64 bits — 50 MB espace disque' },
                { os: 'Linux', req: 'Distribution 64 bits avec glibc 2.17+ — 60 MB espace disque' },
                { os: 'RAM', req: '512 MB minimum (recommandé : 1 GB+)' },
                { os: 'Processeur', req: 'x86-64 (Intel / AMD) — pas de ARM pour l\'instant' },
              ].map(({ os, req }) => (
                <div key={os} className="bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                  <span className="text-slate-400 font-medium">{os} :</span>
                  <span className="text-slate-300 ml-2">{req}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── PASSER PRO ── */}
          <section className="bg-gradient-to-b from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Passer à Kyber Pro</h2>
            <p className="text-slate-300 mb-2">Mots de passe illimités · Export CSV · Support prioritaire</p>
            <p className="text-blue-400 font-bold text-2xl mb-6">15 € — paiement unique, licence à vie</p>
            <Link
              href="/#pricing"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 text-sm"
            >
              Acheter Kyber Pro →
            </Link>
          </section>

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
