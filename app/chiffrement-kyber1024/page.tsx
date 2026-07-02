import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Kyber1024 : chiffrement post-quantique NIST | Kyber' },
  description:
    'Comprendre Kyber1024 (ML-KEM FIPS 203), AES-256-GCM et Argon2id. Pourquoi RSA ne suffit plus, et comment Kyber résiste aux ordinateurs quantiques.',
  keywords: [
    'kyber1024',
    'ML-KEM',
    'FIPS 203',
    'chiffrement post-quantique',
    'algorithme post-quantique NIST',
    'cryptographie post-quantique explication',
    'AES-256-GCM explication',
    'argon2id dérivation clé',
    'ordinateur quantique mots de passe danger',
    'résistance quantique chiffrement',
    'kyber1024 vs aes-256',
    'lattice cryptography',
    'ANSSI chiffrement post-quantique',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/chiffrement-kyber1024',
  },
  openGraph: {
    title: 'Kyber1024 : chiffrement post-quantique NIST | Kyber',
    description: 'Kyber1024, AES-256-GCM, Argon2id : comment fonctionne le chiffrement hybride post-quantique de Kyber. Guide technique complet.',
    url: 'https://kyber-security.fr/chiffrement-kyber1024',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kyber1024 / Chiffrement post-quantique' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyber1024 : chiffrement post-quantique NIST | Kyber',
    description: 'ML-KEM FIPS 203 + AES-256-GCM + Argon2id. Guide complet sur la cryptographie post-quantique.',
    images: ['/opengraph-image'],
  },
};

export default function PageChiffrement() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">

          {/* ── HERO ── */}
          <div className="py-16 text-center">
            <div className="inline-flex items-center gap-2 border border-blue-800 bg-blue-950/50 text-blue-300 px-4 py-1.5 rounded-full text-sm mb-8 font-medium">
              NIST FIPS 203 / ML-KEM (Kyber1024)
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-stone-100">
              Kyber1024 : le standard{' '}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                post-quantique
              </span>{' '}
              du NIST
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed">
              Comprendre les trois piliers cryptographiques qui protègent votre coffre Kyber :
              Kyber1024, AES-256-GCM, et Argon2id.
            </p>
          </div>

          {/* ── KYBER1024 ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-stone-100">Qu&apos;est-ce que Kyber1024 ?</h2>
            <div className="space-y-4 text-stone-400 leading-relaxed">
              <p>
                Kyber1024 est un <strong className="text-stone-100">algorithme d&apos;encapsulation de clé</strong> (KEM /
                Key Encapsulation Mechanism) basé sur la cryptographie en treillis (lattice cryptography).
                En août 2024, le NIST l&apos;a standardisé sous le nom <strong className="text-stone-100">ML-KEM</strong> (FIPS 203),
                le désignant comme la référence mondiale pour la cryptographie post-quantique à clé publique.
              </p>
              <p>
                Contrairement à RSA qui repose sur la difficulté de factoriser de grands entiers, Kyber1024 repose
                sur le problème <strong className="text-stone-100">Module Learning With Errors (MLWE)</strong> / un problème
                mathématique pour lequel aucun algorithme quantique efficace n&apos;est connu à ce jour.
              </p>
              <p>
                Le &ldquo;1024&rdquo; dans Kyber1024 désigne le niveau de sécurité le plus élevé de la famille Kyber,
                équivalent à <strong className="text-stone-100">256 bits de sécurité classique</strong> / soit le double
                du niveau requis par le gouvernement américain pour les données top secrètes.
              </p>
            </div>
          </section>

          {/* ── POURQUOI RSA NE SUFFIT PLUS ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-stone-100">Pourquoi RSA et ECDH ne suffisent plus</h2>
            <div className="bg-red-950/50 border border-red-800 rounded-xl p-6 mb-6">
              <p className="text-red-700 text-sm font-medium mb-2">La menace concrète</p>
              <p className="text-stone-400 text-sm leading-relaxed">
                L&apos;algorithme de Shor, exécuté sur un ordinateur quantique suffisamment puissant, peut factoriser
                un entier RSA-2048 en quelques heures. Les estimations actuelles situent l&apos;horizon à{' '}
                <strong className="text-stone-100">2030/2040</strong> pour les premiers ordinateurs quantiques &ldquo;cryptographiquement pertinents&rdquo;.
              </p>
            </div>
            <div className="space-y-4 text-stone-400 leading-relaxed">
              <p>
                Des acteurs bien équipés (États, organisations criminelles avancées) collectent déjà des flux
                de données chiffrées avec la stratégie &ldquo;harvest now, decrypt later&rdquo; : stocker maintenant,
                déchiffrer quand les capacités quantiques seront disponibles.
              </p>
              <p>
                Si votre gestionnaire de mots de passe actuel utilise RSA ou ECDH pour protéger vos données,
                une brèche dans leurs serveurs aujourd&apos;hui pourrait compromettre vos mots de passe dans 10 ans.
              </p>
            </div>
          </section>

          {/* ── AES-256-GCM ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-stone-100">AES-256-GCM : le chiffrement symétrique authentifié</h2>
            <div className="space-y-4 text-stone-400 leading-relaxed">
              <p>
                Kyber1024 est un KEM / il sert à <em>encapsuler</em> une clé symétrique de manière post-quantique.
                Le chiffrement réel des données s&apos;effectue avec <strong className="text-stone-100">AES-256-GCM</strong>.
              </p>
              <p>
                Ce n&apos;est pas un choix par défaut : AES-256-GCM est le mode de chiffrement recommandé par
                le NIST pour les données sensibles. Le &ldquo;GCM&rdquo; (Galois/Counter Mode) apporte
                l&apos;<strong className="text-stone-100">authentification intégrée</strong> : toute modification de vos
                données chiffrées est détectée immédiatement. Impossible de manipuler votre coffre sans que
                la vérification échoue.
              </p>
              <p>
                AES-256 est résistant aux ordinateurs quantiques dans son mode symétrique : l&apos;algorithme
                de Grover réduit sa sécurité de 256 à 128 bits effectifs, ce qui reste largement au-dessus
                du seuil de sécurité requis.
              </p>
            </div>
          </section>

          {/* ── ARGON2ID ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-stone-100">Argon2id : protéger votre passphrase</h2>
            <div className="space-y-4 text-stone-400 leading-relaxed">
              <p>
                Votre passphrase humaine n&apos;a pas assez d&apos;entropie pour être utilisée directement comme
                clé cryptographique. <strong className="text-stone-100">Argon2id</strong>, vainqueur de la Password Hashing
                Competition (PHC) en 2015, la transforme en une clé de 256 bits solide.
              </p>
              <p>
                Sa particularité : il est <strong className="text-stone-100">intentionnellement lent et gourmand en mémoire</strong>.
                Kyber le paramètre à 64 MB de RAM et plusieurs itérations. Résultat : sur un GPU haut de gamme
                ou un ASIC spécialisé, le coût de chaque tentative de force brute reste prohibitif.
              </p>
              <p>
                Contrairement à PBKDF2 (utilisé par Bitwarden) ou bcrypt, Argon2id résiste nativement aux
                attaques matérielles parallèles / la mémoire requise ne peut pas être contournée.
              </p>
            </div>
          </section>

          {/* ── FLUX COMPLET ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-stone-100">Le flux complet de chiffrement</h2>
            <div className="bg-[#151922] border border-stone-700 rounded-2xl p-8 shadow-sm">
              <div className="space-y-3">
                {[
                  {
                    n: '01',
                    title: 'Votre passphrase',
                    desc: 'Entrée uniquement dans votre mémoire RAM / jamais stockée sur disque',
                    color: 'text-stone-300',
                  },
                  {
                    n: '02',
                    title: 'Argon2id → seed (256 bits)',
                    desc: 'Dérivation résistante GPU / transforme votre passphrase en graine cryptographique',
                    color: 'text-indigo-300',
                  },
                  {
                    n: '03',
                    title: 'Kyber1024 KEM',
                    desc: 'Génération d\'une paire de clés post-quantique + encapsulation / résistant aux ordinateurs quantiques',
                    color: 'text-blue-300',
                  },
                  {
                    n: '04',
                    title: 'HKDF-SHA256',
                    desc: 'Extraction et expansion de la clé partagée en une clé de chiffrement finale uniforme',
                    color: 'text-indigo-300',
                  },
                  {
                    n: '05',
                    title: 'AES-256-GCM → fichier .vault',
                    desc: 'Chiffrement authentifié de vos mots de passe / toute modification non autorisée est détectée',
                    color: 'text-green-300',
                  },
                ].map(({ n, title, desc, color }) => (
                  <div key={n} className="flex gap-4 items-start">
                    <span className="text-stone-600 font-mono text-xs mt-1 flex-shrink-0 w-6">{n}</span>
                    <div>
                      <p className={`font-semibold text-sm ${color}`}>{title}</p>
                      <p className="text-stone-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ TECHNIQUE ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-stone-100">Questions techniques</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Kyber1024 a-t-il été audité ?',
                  a: "Kyber1024 a été soumis à cinq ans d'analyse cryptographique publique dans le cadre du processus de standardisation du NIST (2016/2024). Des dizaines d'équipes de recherche du monde entier ont tenté de le casser. Il est aujourd'hui le ML-KEM standardisé FIPS 203.",
                },
                {
                  q: "La clé privée Kyber est-elle stockée quelque part ?",
                  a: "La clé secrète Kyber est elle-même chiffrée avec AES-256-GCM avant d'être stockée dans votre fichier .vault. Sans votre passphrase (et donc sans la clé Argon2id), elle est illisible. Même si quelqu'un vole votre fichier .vault, il ne peut pas accéder à la clé privée.",
                },
                {
                  q: "Pourquoi un chiffrement hybride Kyber + AES ?",
                  a: "Kyber1024 est un KEM / il établit une clé partagée post-quantique. AES-256-GCM est un algorithme de chiffrement symétrique authentifié / il chiffre les données réelles. Les deux se complètent : Kyber apporte la résistance quantique, AES apporte la performance et l'authenticité.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-[#151922] border border-stone-700 rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-3 text-sm text-stone-100">{q}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="text-center py-8 border-t border-stone-700">
            <p className="text-stone-400 mb-6">
              Ces algorithmes protègent chacun de vos mots de passe dans Kyber.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-white shadow-md"
              >
                Télécharger Kyber
              </Link>
              <Link
                href="/gestionnaire-mots-de-passe-post-quantique"
                className="border border-stone-700 hover:border-stone-700 bg-[#151922] hover:bg-stone-900 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-stone-300 shadow-sm"
              >
                Voir toutes les fonctionnalités →
              </Link>
            </div>
          </div>

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
