import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

const downloadJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kyber',
  applicationCategory: 'SecurityApplication',
  operatingSystem: ['Windows 10', 'Windows 11'],
  downloadUrl: [
    'https://kyber-security.fr/downloads/Kyber_1.1.1_x64-setup.exe',
    'https://kyber-security.fr/downloads/Kyber_1.1.1_x64_en-US.msi',
  ],
  softwareVersion: '1.1.0',
  releaseNotes: 'Mises à jour automatiques signées, chiffrement Kyber1024 (ML-KEM) + AES-256-GCM + Argon2id.',
  url: 'https://kyber-security.fr',
  inLanguage: 'fr-FR',
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'EUR', name: 'Kyber Gratuit', description: "Jusqu'à 10 mots de passe" },
    { '@type': 'Offer', price: '29.00', priceCurrency: 'EUR', name: 'Kyber Pro', description: 'Mots de passe illimités, licence perpétuelle' },
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
    description: 'Disponible sur Windows 10/11 et Linux. Gratuit jusqu\'à 10 mots de passe. Chiffrement Kyber1024.',
    url: 'https://kyber-security.fr/telechargement',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Télécharger Kyber Security' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Télécharger Kyber | Gestionnaire post-quantique gratuit',
    description: 'Windows & Linux. Gratuit jusqu\'à 10 mots de passe. Kyber1024 + AES-256-GCM.',
    images: ['/opengraph-image'],
  },
};

export default function PageTelechargement() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadJsonLd) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">

          {/* ── HERO ── */}
          <div className="py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-100">
              Télécharger{' '}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Kyber
              </span>{' '}
              gratuitement
            </h1>
            <p className="text-lg text-stone-400 mb-2">
              Gestionnaire de mots de passe post-quantique. Open source. Windows &amp; Linux.
            </p>
            <p className="text-sm text-stone-500">Version 1.1.0 · Juillet 2026 · Mises à jour automatiques signées · Chiffrement Kyber1024 (ML-KEM)</p>
          </div>

          {/* ── PLATEFORMES ── */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Windows */}
              <div className="bg-[#151922] border border-blue-800 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition-all shadow-sm">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                </div>
                <h2 className="font-bold text-lg mb-1 text-stone-100">Windows</h2>
                <p className="text-stone-500 text-xs mb-4">Windows 10 &amp; 11 / 64 bits</p>
                <div className="space-y-2">
                  <a
                    href="/downloads/Kyber_1.1.1_x64-setup.exe"
                    download
                    className="flex items-center justify-between w-full text-blue-400 hover:text-blue-300 text-sm font-medium border border-blue-800 hover:border-blue-400 px-4 py-2.5 rounded-xl transition-all"
                  >
                    <span>Télécharger .exe</span>
                    <span className="text-xs text-stone-500">Installateur NSIS</span>
                  </a>
                  <a
                    href="/downloads/Kyber_1.1.1_x64_en-US.msi"
                    download
                    className="flex items-center justify-between w-full text-stone-400 hover:text-stone-100 text-sm font-medium border border-stone-700 hover:border-stone-700 px-4 py-2.5 rounded-xl transition-all"
                  >
                    <span>Télécharger .msi</span>
                    <span className="text-xs text-stone-500">Microsoft Installer</span>
                  </a>
                </div>
              </div>

              {/* macOS */}
              <div className="bg-[#151922] border border-stone-700 rounded-2xl p-6 shadow-sm">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-stone-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                  </svg>
                </div>
                <h2 className="font-bold text-lg mb-1 text-stone-100">macOS</h2>
                <p className="text-stone-500 text-xs mb-1">macOS 12 Monterey et supérieur</p>
                <p className="text-xs text-stone-500 mb-3">Apple Silicon &amp; Intel / En développement</p>
                <span className="inline-block w-full text-center text-stone-500 text-sm border border-stone-800 bg-stone-900 px-4 py-2 rounded-xl cursor-not-allowed">
                  Disponible bientôt
                </span>
              </div>

              {/* Linux */}
              <div className="bg-[#151922] border border-stone-700 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition-all shadow-sm">
                <div className="mb-4">
                  <svg className="w-10 h-10" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="32" cy="48" rx="15" ry="18" fill="#78716c"/>
                    <ellipse cx="32" cy="50" rx="9" ry="12" fill="#e7e5e4"/>
                    <circle cx="32" cy="22" r="13" fill="#78716c"/>
                    <circle cx="27" cy="18" r="3.5" fill="white"/>
                    <circle cx="37" cy="18" r="3.5" fill="white"/>
                    <circle cx="28" cy="19" r="1.8" fill="#1c1917"/>
                    <circle cx="38" cy="19" r="1.8" fill="#1c1917"/>
                    <ellipse cx="32" cy="27" rx="4.5" ry="3" fill="#f59e0b"/>
                    <ellipse cx="23" cy="72" rx="7" ry="3" fill="#f59e0b"/>
                    <ellipse cx="41" cy="72" rx="7" ry="3" fill="#f59e0b"/>
                    <ellipse cx="16" cy="46" rx="5" ry="11" fill="#78716c" transform="rotate(-15 16 46)"/>
                    <ellipse cx="48" cy="46" rx="5" ry="11" fill="#78716c" transform="rotate(15 48 46)"/>
                  </svg>
                </div>
                <h2 className="font-bold text-lg mb-1 text-stone-100">Linux</h2>
                <p className="text-stone-500 text-xs mb-1">Debian, Ubuntu, Fedora, Kali</p>
                <p className="text-xs text-stone-500 mb-3">AppImage, .deb, .rpm / Version 1.1.0 en préparation</p>
                <span className="inline-block w-full text-center text-stone-500 text-sm border border-stone-800 bg-stone-900 px-4 py-2 rounded-xl cursor-not-allowed">
                  De retour très bientôt
                </span>
              </div>

            </div>
          </section>

          {/* ── INSTRUCTIONS ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-stone-100">Installation</h2>
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-[#151922] border border-stone-700 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="text-blue-400">Windows</span>
                </h3>
                <ol className="space-y-3 text-sm text-stone-300">
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-mono flex-shrink-0">1.</span>
                    <span>Téléchargez <strong className="text-stone-100">Kyber_1.1.1_x64-setup.exe</strong></span>
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

              <div className="bg-[#151922] border border-stone-700 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold mb-4">
                  <span className="text-stone-300">Mises à jour automatiques</span>
                </h3>
                <ol className="space-y-3 text-sm text-stone-300">
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-mono flex-shrink-0">1.</span>
                    <span>Depuis la version 1.1.0, Kyber vérifie les mises à jour au démarrage et les installe en un clic</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-mono flex-shrink-0">2.</span>
                    <span>Chaque mise à jour est <strong className="text-stone-100">signée cryptographiquement</strong> / l&apos;application refuse tout binaire non officiel</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-mono flex-shrink-0">3.</span>
                    <span>Vérification manuelle possible : <strong className="text-stone-100">Paramètres → Mises à jour</strong></span>
                  </li>
                </ol>
              </div>

            </div>
          </section>

          {/* ── CONFIGURATION REQUISE ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-stone-100">Configuration requise</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {[
                { os: 'Windows', req: 'Windows 10 ou 11, 64 bits / 50 MB espace disque' },
                { os: 'Linux', req: 'Distribution 64 bits avec glibc 2.17+ / 60 MB espace disque' },
                { os: 'RAM', req: '512 MB minimum (recommandé : 1 GB+)' },
                { os: 'Processeur', req: 'x86-64 (Intel / AMD) / pas de ARM pour l\'instant' },
              ].map(({ os, req }) => (
                <div key={os} className="bg-[#151922] border border-stone-700 rounded-xl px-5 py-4 shadow-sm">
                  <span className="text-stone-400 font-medium">{os} :</span>
                  <span className="text-stone-300 ml-2">{req}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── PASSER PRO ── */}
          <section className="bg-gradient-to-b from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold mb-3 text-stone-100">Passer à Kyber Pro</h2>
            <p className="text-stone-300 mb-2">Mots de passe illimités · Export CSV · Support prioritaire</p>
            <p className="text-blue-400 font-bold text-2xl mb-6">29 € / paiement unique, licence à vie</p>
            <Link
              href="/#pricing"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-white shadow-md"
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
