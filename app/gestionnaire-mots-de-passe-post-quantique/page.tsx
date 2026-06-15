import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Kyber',
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Windows 10, Windows 11, Linux',
      url: 'https://kyber-security.fr',
      inLanguage: 'fr-FR',
      offers: [
        { '@type': 'Offer', name: 'Kyber Gratuit', price: '0', priceCurrency: 'EUR', description: "Jusqu'à 3 mots de passe" },
        { '@type': 'Offer', name: 'Kyber Pro', price: '24.99', priceCurrency: 'EUR', description: 'Mots de passe illimités, licence perpétuelle' },
      ],
      featureList: ['Chiffrement post-quantique Kyber1024', 'AES-256-GCM', 'Argon2id', 'Auto-remplissage', '100% local, zéro cloud'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Mes mots de passe sont-ils envoyés sur internet ?', acceptedAnswer: { '@type': 'Answer', text: "Non. Kyber fonctionne entièrement en local. Vos mots de passe sont chiffrés et stockés sur votre appareil uniquement. Aucune donnée ne transite par nos serveurs." } },
        { '@type': 'Question', name: 'Que se passe-t-il si je perds ma passphrase ?', acceptedAnswer: { '@type': 'Answer', text: "La passphrase est la seule clé de votre coffre. Si vous la perdez, personne ne peut récupérer vos données. Notez-la dans un endroit physique sécurisé." } },
        { '@type': 'Question', name: 'Puis-je migrer depuis Bitwarden ou 1Password ?', acceptedAnswer: { '@type': 'Answer', text: "Oui. Exportez votre coffre en CSV depuis votre gestionnaire actuel, puis utilisez la fonction d'import CSV de Kyber. La migration prend moins d'une minute." } },
        { '@type': 'Question', name: 'Est-ce que Kyber est open source ?', acceptedAnswer: { '@type': 'Answer', text: "Oui. Le code source de l'application Kyber est disponible sur GitHub. Vous pouvez auditer le code et vérifier les algorithmes." } },
        { '@type': 'Question', name: 'Kyber fonctionne-t-il sur Mac ?', acceptedAnswer: { '@type': 'Answer', text: "Le support macOS est en cours de développement. Kyber est actuellement disponible sur Windows 10/11 et Linux (Debian, Ubuntu, Fedora, Kali)." } },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: { absolute: 'Gestionnaire mots de passe post-quantique | Kyber' },
  description:
    'Premier gestionnaire mots de passe post-quantique français. Kyber1024 + AES-256-GCM + Argon2id. 100% local, zéro cloud, open source. Gratuit.',
  keywords: [
    'gestionnaire mots de passe post-quantique',
    'gestionnaire mots de passe local',
    'gestionnaire mots de passe français',
    'coffre-fort numérique',
    'logiciel sécurité mots de passe',
    'kyber1024 gestionnaire',
    'password manager post quantum',
    'alternative bitwarden locale',
    'gestionnaire mots de passe sans cloud',
    'souveraineté numérique',
    'gestionnaire mots de passe RGPD',
    'gestionnaire mots de passe open source',
    'logiciel sécurité français',
    'ANSSI post-quantique',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/gestionnaire-mots-de-passe-post-quantique',
  },
  openGraph: {
    title: 'Gestionnaire mots de passe post-quantique | Kyber',
    description: 'Kyber1024 + AES-256-GCM. 100% local, zéro cloud. Premier gestionnaire post-quantique français. Gratuit.',
    url: 'https://kyber-security.fr/gestionnaire-mots-de-passe-post-quantique',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kyber — Gestionnaire de mots de passe post-quantique' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestionnaire mots de passe post-quantique | Kyber',
    description: 'Kyber1024 + AES-256-GCM. 100% local, zéro cloud. Premier gestionnaire post-quantique français.',
    images: ['/opengraph-image'],
  },
};

const features = [
  {
    color: 'text-blue-600',
    title: 'Kyber1024 Post-Quantique',
    desc: "Algorithme d'encapsulation de clé standardisé par le NIST en 2024 (ML-KEM). Résistant à l'algorithme de Shor et aux futurs ordinateurs quantiques. Votre coffre sera encore sécurisé dans 20 ans.",
    link: '/chiffrement-kyber1024',
    linkLabel: 'En savoir plus sur Kyber1024 →',
  },
  {
    color: 'text-rose-600',
    title: 'AES-256-GCM',
    desc: 'Chiffrement symétrique authentifié de niveau militaire. Le "GCM" garantit que vos données ne peuvent pas être modifiées sans être détectées. Standard utilisé par les banques et l\'armée.',
  },
  {
    color: 'text-cyan-700',
    title: 'Argon2id — Dérivation de clé',
    desc: 'Vainqueur de la Password Hashing Competition 2015. Paramétré à 64 MB de mémoire : rend les attaques GPU et ASIC économiquement impossibles. Votre passphrase ne peut pas être forcée brute.',
  },
  {
    color: 'text-amber-600',
    title: 'Auto-remplissage',
    desc: "Kyber détecte automatiquement les champs mot de passe dans n'importe quelle application de votre système. Injection en un clic sans jamais copier-coller votre mot de passe dans le presse-papiers.",
  },
  {
    color: 'text-green-700',
    title: 'Analyse de sécurité',
    desc: 'Tableau de bord complet : détection des mots de passe faibles (entropie < 50 bits), réutilisés sur plusieurs sites, ou trop anciens. Score de sécurité global de votre coffre.',
  },
  {
    color: 'text-amber-700',
    title: 'Import universel (CSV)',
    desc: 'Migrez depuis Bitwarden, 1Password, LastPass ou n\'importe quel gestionnaire exportant en CSV. Migration complète en quelques secondes, sans effort.',
    link: '/comparatif-bitwarden-1password-kyber',
    linkLabel: 'Voir le comparatif →',
  },
  {
    color: 'text-rose-700',
    title: 'Chiffrement de fichiers',
    desc: "Chiffrez n'importe quel fichier ou dossier entier avec le même algorithme Kyber1024 + AES-256-GCM. Format .kyber lié à votre coffre : illisible sans votre passphrase.",
  },
  {
    color: 'text-teal-700',
    title: 'Générateur de mots de passe',
    desc: 'Génération cryptographiquement sûre via le CSPRNG du système. Longueur, caractères spéciaux, chiffres : tout est paramétrable. Entropie affichée en temps réel en bits.',
  },
  {
    color: 'text-indigo-700',
    title: '100% local — Zéro cloud',
    desc: "Votre coffre .vault est un fichier chiffré sur votre disque. Aucune donnée ne transite par internet. Pas de compte, pas de télémétrie, pas de serveur de notre côté. Vous êtes le seul propriétaire.",
  },
  {
    color: 'text-pink-700',
    title: 'Multi-coffres',
    desc: "Créez plusieurs coffres indépendants : personnel, professionnel, famille. Chaque coffre a sa propre passphrase et sa propre paire de clés Kyber1024. Cloisonnement total.",
  },
];

export default function PageGestionnaire() {
  return (
    <div className="min-h-screen bg-[#faf8f6] text-stone-900 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <NavHeader />

      <main className="pt-24">

        {/* ── HERO ── */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/6 w-[400px] h-[400px] bg-rose-200/30 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm mb-8 font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Standard NIST 2024 — ML-KEM (Kyber1024)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-stone-900">
              Gestionnaire de mots de passe{' '}
              <span className="bg-gradient-to-r from-blue-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                post-quantique
              </span>
            </h1>
            <p className="text-lg text-stone-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Kyber est le premier gestionnaire de mots de passe 100% local et post-quantique conçu en France.
              Votre coffre est chiffré avec Kyber1024 + AES-256-GCM et ne quitte jamais votre machine.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 via-rose-400 to-amber-400 hover:opacity-90 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-white shadow-md"
              >
                Télécharger gratuitement
              </Link>
              <Link
                href="/#pricing"
                className="border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-stone-700 shadow-sm"
              >
                Voir les tarifs →
              </Link>
            </div>
          </div>
        </section>

        {/* ── MENACE QUANTIQUE ── */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-stone-300 rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-stone-900">
                Pourquoi votre gestionnaire actuel ne suffit plus
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Bitwarden, 1Password, LastPass — tous reposent sur des algorithmes conçus dans les années 1990 :
                  RSA et ECDH. Ces algorithmes seront vulnérables aux ordinateurs quantiques dès qu&apos;ils
                  seront suffisamment puissants. L&apos;horizon estimé : <strong className="text-stone-900">2030–2040</strong>.
                </p>
                <p>
                  Plus grave encore : la stratégie &ldquo;harvest now, decrypt later&rdquo; est déjà en cours.
                  Des acteurs étatiques stockent aujourd&apos;hui des données chiffrées pour les déchiffrer
                  quand les capacités quantiques seront disponibles. Vos mots de passe actuels, même chiffrés,
                  pourraient être compromis dans 10 ans.
                </p>
                <p>
                  Kyber utilise <strong className="text-stone-900">Kyber1024 (ML-KEM)</strong>, standardisé par le
                  NIST en 2024 comme référence mondiale post-quantique. Combiné à AES-256-GCM et Argon2id,
                  votre coffre est protégé contre les attaques classiques <em>et</em> quantiques.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/chiffrement-kyber1024"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  Comprendre le chiffrement Kyber1024 en détail →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FONCTIONNALITÉS ── */}
        <section className="py-16 px-6 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Toutes les fonctionnalités</h2>
              <p className="text-stone-500 max-w-xl mx-auto">
                Chaque composant a été choisi pour sa résistance aux attaques classiques et quantiques.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white border border-stone-300 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all shadow-sm"
                >
                  <h3 className={`font-semibold text-lg mb-3 ${f.color}`}>{f.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-3">{f.desc}</p>
                  {f.link && (
                    <Link href={f.link} className="text-blue-600 hover:text-blue-700 text-xs transition-colors">
                      {f.linkLabel}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARCHITECTURE ── */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-stone-900">Architecture de sécurité</h2>
            <div className="bg-white border border-stone-300 rounded-2xl p-8 shadow-sm">
              <p className="text-stone-400 text-sm mb-8 text-center">
                Flux de chiffrement de votre passphrase jusqu&apos;aux données chiffrées
              </p>
              <div className="flex flex-col items-center gap-3 text-sm">
                {[
                  { step: '1', label: 'Votre passphrase', color: 'border-stone-300 text-stone-700' },
                  { arrow: true },
                  { step: '2', label: 'Argon2id (64 MB mémoire)', sublabel: 'Résistant GPU / ASIC / force brute', color: 'border-cyan-300 text-cyan-700' },
                  { arrow: true },
                  { step: '3', label: 'Kyber1024 KEM', sublabel: 'Encapsulation post-quantique (NIST ML-KEM)', color: 'border-blue-300 text-blue-700' },
                  { arrow: true },
                  { step: '4', label: 'HKDF-SHA256', sublabel: 'Dérivation de clé finale', color: 'border-rose-300 text-rose-700' },
                  { arrow: true },
                  { step: '5', label: 'AES-256-GCM', sublabel: 'Chiffrement authentifié de vos données', color: 'border-green-300 text-green-700' },
                ].map((item, i) =>
                  'arrow' in item ? (
                    <div key={i} className="text-stone-300 text-lg">↓</div>
                  ) : (
                    <div key={i} className={`border ${item.color} rounded-xl px-6 py-3 text-center w-full max-w-sm bg-stone-50`}>
                      <span className="font-medium">{item.label}</span>
                      {item.sublabel && (
                        <div className="text-xs text-stone-400 mt-0.5">{item.sublabel}</div>
                      )}
                    </div>
                  )
                )}
              </div>
              <p className="text-stone-400 text-xs text-center mt-8">
                Votre clé maîtresse n&apos;est jamais stockée — elle est re-dérivée à chaque ouverture de coffre.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-6 bg-stone-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-stone-900">Questions fréquentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Mes mots de passe sont-ils envoyés sur internet ?',
                  a: "Non. Kyber fonctionne entièrement en local. Vos données sont chiffrées et stockées sur votre appareil uniquement. Aucune donnée ne transite par nos serveurs — nous n'en avons d'ailleurs aucun pour stocker vos données.",
                },
                {
                  q: 'Que se passe-t-il si je perds ma passphrase ?',
                  a: "La passphrase est la seule clé de votre coffre. Si vous la perdez, personne — y compris nous — ne peut récupérer vos données. C'est le prix de la sécurité absolue. Nous recommandons de la noter dans un endroit physique sécurisé.",
                },
                {
                  q: "Puis-je migrer depuis Bitwarden ou 1Password ?",
                  a: "Oui. Exportez votre coffre en CSV depuis votre gestionnaire actuel, puis utilisez la fonction d'import CSV de Kyber. La migration prend moins d'une minute.",
                },
                {
                  q: "Est-ce que Kyber est open source ?",
                  a: "Oui. Le code source de l'application Kyber est disponible sur GitHub. Vous pouvez auditer le code, vérifier les algorithmes utilisés, et contribuer.",
                },
                {
                  q: "Kyber fonctionne-t-il sur Mac ?",
                  a: "Le support macOS est en cours de développement. Kyber est actuellement disponible sur Windows 10/11 et Linux (Debian, Ubuntu, Fedora, Kali).",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white border border-stone-300 rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-3 text-stone-900">{q}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-stone-900">Prêt à passer au post-quantique ?</h2>
            <p className="text-stone-500 mb-8">
              Gratuit jusqu&apos;à 3 mots de passe. Licence Pro à 24,99€ paiement unique, à vie.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 via-rose-400 to-amber-400 hover:opacity-90 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-white shadow-md"
              >
                Télécharger gratuitement
              </Link>
              <Link
                href="/comparatif-bitwarden-1password-kyber"
                className="border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-stone-700 shadow-sm"
              >
                Voir le comparatif →
              </Link>
            </div>
          </div>
        </section>

      </main>

      <NavFooter />
    </div>
  );
}
