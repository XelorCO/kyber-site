import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';
import FileEncryptor from '@/components/FileEncryptor';

const toolJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Chiffreur de fichiers Kyber',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Navigateur moderne avec WebCrypto',
  url: 'https://kyber-security.fr/chiffrer-fichier',
  description:
    'Chiffrez un fichier en .kyber directement dans votre navigateur : Argon2id + ML-KEM-1024 (Kyber) + AES-256-GCM. 100 % local, aucun envoi de données.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr-FR',
};

export const metadata: Metadata = {
  title: { absolute: 'Chiffrer un fichier en ligne (100 % local) | Kyber Security' },
  description:
    'Chiffrez gratuitement un fichier avec un chiffrement post-quantique (Kyber ML-KEM-1024 + AES-256-GCM + Argon2id), directement dans votre navigateur. Le fichier ne quitte jamais votre machine. Déchiffrable par toute personne ayant le mot de passe.',
  keywords: [
    'chiffrer un fichier en ligne',
    'chiffrement fichier gratuit',
    'chiffrer fichier navigateur',
    'chiffrement post-quantique fichier',
    'protéger un fichier par mot de passe',
    'chiffrer pdf mot de passe',
    'envoyer fichier sécurisé',
    'AES-256 fichier',
    'kyber chiffrement',
  ],
  alternates: { canonical: 'https://kyber-security.fr/chiffrer-fichier' },
  openGraph: {
    title: 'Chiffrer un fichier en ligne / 100 % local, post-quantique',
    description:
      'Argon2id + Kyber ML-KEM-1024 + AES-256-GCM dans votre navigateur. Aucun envoi de données, gratuit, sans inscription.',
    url: 'https://kyber-security.fr/chiffrer-fichier',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Chiffreur de fichiers Kyber' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chiffrer un fichier en ligne / 100 % local, post-quantique',
    description: 'Le fichier ne quitte jamais votre navigateur. Kyber ML-KEM-1024 + AES-256-GCM + Argon2id.',
    images: ['/opengraph-image'],
  },
};

const faq = [
  {
    q: 'Mon fichier est-il envoyé sur un serveur ?',
    a: "Non, jamais. Tout le chiffrement s'exécute dans votre navigateur grâce à WebCrypto et WebAssembly. Vous pouvez couper votre connexion internet une fois la page chargée : l'outil fonctionne toujours. C'est vérifiable dans l'onglet Réseau de votre navigateur / aucune requête ne part pendant le chiffrement.",
  },
  {
    q: 'Qui peut déchiffrer mon fichier .kyber ?',
    a: "Toute personne possédant le fichier ET le mot de passe, depuis cette page, sur n'importe quel appareil. C'est le moyen idéal de transmettre un document sensible : envoyez le fichier .kyber par email, et communiquez le mot de passe par un autre canal (téléphone, SMS, en personne).",
  },
  {
    q: "Que se passe-t-il si j'oublie le mot de passe ?",
    a: "Le fichier est définitivement illisible. Il n'existe aucune porte dérobée, aucun moyen de récupération / ni pour vous, ni pour nous, ni pour personne. C'est précisément ce qui garantit la confidentialité de vos données. Notez le mot de passe dans un gestionnaire comme Kyber.",
  },
  {
    q: 'Quel chiffrement est utilisé exactement ?',
    a: "La même chaîne que le coffre de l'application Kyber : votre mot de passe est dérivé par Argon2id (64 Mio de mémoire, vainqueur de la Password Hashing Competition), combiné à une encapsulation de clé post-quantique ML-KEM-1024 (standard NIST FIPS 203, issu de CRYSTALS-Kyber), puis le fichier est compressé et chiffré par AES-256-GCM, un chiffrement authentifié résistant aux ordinateurs quantiques.",
  },
  {
    q: "Est-ce compatible avec les fichiers .kyber de l'application ?",
    a: "Les fichiers chiffrés depuis l'application de bureau sont liés à la clé de votre coffre : eux ne s'ouvrent que dans l'application. Les fichiers chiffrés sur cette page utilisent un mot de passe autonome et s'ouvrent partout, depuis cette page. Les deux formats sont distincts et détectés automatiquement.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function PageChiffrerFichier() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* ── HERO ── */}
          <div className="py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-100">
              Chiffrez un fichier,{' '}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                sans qu&apos;il quitte votre machine
              </span>
            </h1>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto">
              Chiffrement post-quantique gratuit, directement dans votre navigateur.
              Le fichier <strong className="text-stone-300">.kyber</strong> obtenu peut être ouvert par toute
              personne possédant le mot de passe / sur cette page, depuis n&apos;importe où.
            </p>
          </div>

          {/* ── OUTIL ── */}
          <FileEncryptor />

          {/* ── CAS D'USAGE ── */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-6 text-center text-stone-100">Pour quoi faire ?</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: '→',
                  title: 'Transmettre un document sensible',
                  desc: 'Contrat, pièce d\'identité, RIB… Chiffrez, envoyez le .kyber par email, donnez le mot de passe par téléphone. Même si la boîte mail est compromise, le fichier reste illisible.',
                },
                {
                  icon: '◆',
                  title: 'Stocker dans le cloud sans confiance',
                  desc: 'Déposez vos .kyber sur Drive, Dropbox ou iCloud : l\'hébergeur ne voit qu\'un bloc chiffré. Vous gardez la clé, il garde les octets.',
                },
                {
                  icon: '▤',
                  title: 'Archiver pour les décennies à venir',
                  desc: 'Le chiffrement résiste aux ordinateurs quantiques (« harvest now, decrypt later »). Vos archives d\'aujourd\'hui restent confidentielles demain.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-[#151922] border border-stone-800 rounded-2xl p-6 shadow-sm">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-semibold mb-2 text-stone-100">{title}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-6 text-center text-stone-100">Questions fréquentes</h2>
            <div className="space-y-4">
              {faq.map(({ q, a }) => (
                <details key={q} className="group bg-[#151922] border border-stone-800 rounded-xl px-5 py-4 shadow-sm">
                  <summary className="font-medium text-stone-200 cursor-pointer list-none flex justify-between items-center">
                    {q}
                    <span className="text-stone-500 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <p className="text-sm text-stone-400 leading-relaxed mt-3">{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA APP ── */}
          <section className="mt-16 bg-gradient-to-b from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold mb-3 text-stone-100">Et pour vos mots de passe ?</h2>
            <p className="text-stone-400 mb-6 max-w-xl mx-auto">
              Kyber est aussi un gestionnaire de mots de passe de bureau, 100 % local, avec la même
              chaîne de chiffrement post-quantique. Gratuit jusqu&apos;à 10 mots de passe.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/telechargement"
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-white shadow-md"
              >
                Télécharger Kyber →
              </Link>
              <Link
                href="/generateur-mot-de-passe"
                className="inline-block border border-stone-700 hover:border-stone-600 px-8 py-3.5 rounded-xl font-semibold text-sm text-stone-300 transition-colors"
              >
                Générateur de mot de passe
              </Link>
            </div>
          </section>
        </div>
      </main>

      <NavFooter />
    </div>
  );
}
