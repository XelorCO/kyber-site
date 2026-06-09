import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: "Qu'est-ce que la cryptographie post-quantique ? | Kyber Security" },
  description:
    "Comprendre la cryptographie post-quantique en 2026 : algorithme de Shor, menace quantique, standards NIST (ML-KEM, CRYSTALS-Kyber). Guide complet accessible.",
  keywords: [
    'cryptographie post-quantique',
    'qu est ce que la cryptographie post-quantique',
    'algorithme de Shor',
    'ordinateur quantique cryptographie',
    'NIST post-quantique standards',
    'ML-KEM CRYSTALS Kyber',
    'RSA quantique vulnérabilité',
    'chiffrement résistant quantique',
    'ANSSI migration post-quantique',
    'FIPS 203 ML-KEM',
    'lattice cryptography',
    'sécurité informatique 2026',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/cryptographie-post-quantique',
  },
  openGraph: {
    type: 'article',
    title: "Qu'est-ce que la cryptographie post-quantique ?",
    description: "Guide complet : algorithme de Shor, menace quantique, standards NIST. Comprendre pourquoi RSA et AES sont en danger et comment s'en protéger.",
    url: 'https://kyber-security.fr/blog/cryptographie-post-quantique',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Cryptographie post-quantique expliquée' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Qu'est-ce que la cryptographie post-quantique ?",
    description: "Algorithme de Shor, menace quantique, standards NIST : tout comprendre en 10 min.",
    images: ['/opengraph-image'],
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Qu'est-ce que la cryptographie post-quantique ?",
  description: "Guide accessible sur la cryptographie post-quantique : algorithme de Shor, menace des ordinateurs quantiques sur RSA/AES, standards NIST ML-KEM.",
  author: { '@type': 'Person', name: 'Enzo Paccard' },
  publisher: {
    '@type': 'Organization',
    name: 'Kyber Security',
    url: 'https://kyber-security.fr',
  },
  datePublished: '2026-06-09',
  dateModified: '2026-06-09',
  inLanguage: 'fr-FR',
  url: 'https://kyber-security.fr/blog/cryptographie-post-quantique',
  mainEntityOfPage: 'https://kyber-security.fr/blog/cryptographie-post-quantique',
};

export default function ArticlePQC() {
  return (
    <div className="min-h-screen bg-[#070711] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6">

          <div className="py-12">
            <Link href="/blog" className="text-slate-500 hover:text-slate-300 text-sm transition-colors mb-8 inline-block">
              ← Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-3 py-1 rounded-full border text-purple-400 bg-purple-500/10 border-purple-500/20">
                Éducation
              </span>
              <span className="text-slate-500 text-xs">9 juin 2026</span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-500 text-xs">10 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Qu&apos;est-ce que la cryptographie post-quantique ?
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Les ordinateurs quantiques vont briser RSA, ECDSA et tout ce qui sécurise internet aujourd&apos;hui.
              Pas dans 50 ans — dans moins de 15 ans selon les estimations sérieuses. Voici ce que ça signifie,
              et comment la cryptographie post-quantique répond au problème.
            </p>
          </div>

          <article className="prose prose-invert prose-slate max-w-none">
            <div className="space-y-8 text-slate-300 leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Pourquoi la cryptographie actuelle est vulnérable
                </h2>
                <p>
                  Toute la sécurité d&apos;internet repose sur un principe simple : certains problèmes mathématiques
                  sont faciles dans un sens et impossibles dans l&apos;autre. La factorisation de grands nombres
                  est le pilier de <strong className="text-white">RSA</strong>. Le logarithme discret sur les
                  courbes elliptiques est la base de <strong className="text-white">ECDSA</strong> et
                  <strong className="text-white"> ECDH</strong>.
                </p>
                <p className="mt-4">
                  Pour donner un ordre de grandeur : factoriser un nombre de 2048 bits avec les meilleurs
                  algorithmes classiques prendrait des milliards d&apos;années sur les supercalculateurs actuels.
                  C&apos;est pourquoi RSA-2048 est considéré sûr aujourd&apos;hui.
                </p>
                <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
                  <p className="text-amber-200 font-medium">
                    Le problème : ces difficultés mathématiques n&apos;existent que pour les ordinateurs classiques.
                    Un ordinateur quantique suffisamment puissant peut résoudre ces deux problèmes en temps polynomial.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  L&apos;algorithme de Shor : la bombe à retardement
                </h2>
                <p>
                  En 1994, le mathématicien Peter Shor a démontré théoriquement qu&apos;un ordinateur quantique
                  pouvait factoriser des grands nombres en <strong className="text-white">temps polynomial</strong> —
                  c&apos;est-à-dire exponentiellement plus vite qu&apos;un ordinateur classique.
                </p>
                <p className="mt-4">
                  L&apos;algorithme de Shor exploite deux principes quantiques fondamentaux :
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { titre: 'Superposition', desc: "Un qubit peut être 0 et 1 simultanément. Un registre de n qubits peut représenter 2ⁿ états en parallèle." },
                    { titre: 'Interférence quantique', desc: "Les chemins menant aux mauvaises réponses s'annulent, ceux menant à la bonne se renforcent." },
                  ].map(({ titre, desc }) => (
                    <li key={titre} className="flex gap-3 items-start">
                      <span className="text-blue-400 font-mono text-sm flex-shrink-0 mt-0.5">→</span>
                      <span><strong className="text-white">{titre}</strong> : {desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  En pratique : factoriser RSA-2048 nécessiterait environ <strong className="text-white">4 000 qubits
                  logiques</strong> (soit des millions de qubits physiques en tenant compte de la correction d&apos;erreur).
                  IBM a franchi la barre des 1 000 qubits en 2023. La progression est réelle.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Qu&apos;est-ce qui est vraiment menacé ?
                </h2>
                <div className="space-y-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
                    <h3 className="font-semibold text-red-300 mb-2">Cassé par Shor (algorithmes asymétriques)</h3>
                    <ul className="space-y-1 text-sm">
                      {['RSA (TLS, email, signatures)', 'ECDSA / ECDH (Bitcoin, TLS 1.3, Signal)', 'DSA, DH classique'].map(item => (
                        <li key={item} className="flex gap-2">
                          <span className="text-red-400">✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5">
                    <h3 className="font-semibold text-yellow-300 mb-2">Affaibli par Grover (symétrique)</h3>
                    <p className="text-sm mb-2">
                      L&apos;algorithme de Grover réduit la complexité de la force brute par une racine carrée.
                      AES-128 devient équivalent à AES-64 bits effectifs.
                    </p>
                    <ul className="space-y-1 text-sm">
                      {['AES-128 → insuffisant', 'AES-256 → toujours sûr', 'SHA-256 → toujours sûr', 'SHA-384 / SHA-512 → sûrs'].map(item => (
                        <li key={item} className="flex gap-2">
                          <span className="text-yellow-400">~</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                    <h3 className="font-semibold text-green-300 mb-2">Résistants aux quantiques</h3>
                    <ul className="space-y-1 text-sm">
                      {['AES-256-GCM', 'SHA-256 / SHA-3', 'Argon2id (KDF)', 'ChaCha20-Poly1305'].map(item => (
                        <li key={item} className="flex gap-2">
                          <span className="text-green-400">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  La réponse du NIST : standardisation en 2024
                </h2>
                <p>
                  En 2016, le NIST (National Institute of Standards and Technology) a lancé un concours mondial
                  pour sélectionner des algorithmes post-quantiques. Après 8 ans d&apos;évaluation, quatre standards
                  ont été publiés en août 2024 :
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      name: 'ML-KEM (FIPS 203)',
                      aka: 'CRYSTALS-Kyber',
                      type: 'Échange de clés (KEM)',
                      base: 'Réseaux euclidiens (Module-LWE)',
                      color: 'blue',
                    },
                    {
                      name: 'ML-DSA (FIPS 204)',
                      aka: 'CRYSTALS-Dilithium',
                      type: 'Signatures numériques',
                      base: 'Réseaux euclidiens (Module-LWE)',
                      color: 'purple',
                    },
                    {
                      name: 'SLH-DSA (FIPS 205)',
                      aka: 'SPHINCS+',
                      type: 'Signatures numériques',
                      base: 'Fonctions de hachage',
                      color: 'cyan',
                    },
                    {
                      name: 'FN-DSA (FIPS 206)',
                      aka: 'FALCON',
                      type: 'Signatures numériques',
                      base: 'Réseaux NTRU',
                      color: 'green',
                    },
                  ].map(({ name, aka, type, base, color }) => (
                    <div key={name} className={`bg-${color}-500/10 border border-${color}-500/20 rounded-xl p-5`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="font-bold text-white">{name}</span>
                          <span className={`ml-2 text-xs text-${color}-400`}>({aka})</span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-${color}-500/20 text-${color}-300`}>{type}</span>
                      </div>
                      <p className="text-sm text-slate-400">Base mathématique : {base}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Les réseaux euclidiens : pourquoi c&apos;est difficile pour un QC
                </h2>
                <p>
                  ML-KEM (et donc Kyber1024 qu&apos;on utilise) repose sur un problème appelé
                  <strong className="text-white"> Module Learning With Errors (M-LWE)</strong>. Sans entrer dans
                  les détails mathématiques, l&apos;idée est la suivante :
                </p>
                <div className="mt-6 bg-[#0d0d1a] border border-white/10 rounded-xl p-6">
                  <p className="text-sm font-mono text-slate-300 mb-3">
                    Étant donné un système d&apos;équations linéaires <span className="text-blue-300">A·s + e = b</span>
                    <br />où <span className="text-purple-300">s</span> est le secret et{' '}
                    <span className="text-yellow-300">e</span> est un vecteur de petit bruit aléatoire...
                  </p>
                  <p className="text-sm text-slate-400">
                    Retrouver <span className="text-purple-300 font-mono">s</span> est calculatoirement infaisable,
                    même avec un ordinateur quantique. Le meilleur algorithme connu (BKZ) reste exponentiel.
                  </p>
                </div>
                <p className="mt-4">
                  C&apos;est fondamentalement différent de la factorisation ou du logarithme discret : aucune
                  généralisation de l&apos;algorithme de Shor ne s&apos;applique aux problèmes de réseaux.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Quelle est la vraie timeline du Q-day ?
                </h2>
                <p>
                  Le &ldquo;Q-day&rdquo; est le moment où un ordinateur quantique sera suffisamment puissant pour casser
                  RSA-2048 en pratique. Les estimations varient, mais un consensus se dégage dans la communauté :
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    { periode: '2026–2030', couleur: 'text-green-400', desc: 'Quantiques bruités (NISQ). Utiles pour certaines simulations, pas pour la cryptographie.' },
                    { periode: '2030–2035', couleur: 'text-yellow-400', desc: 'Zone d\'incertitude. Premiers systèmes à correction d\'erreur. NSA, ANSSI et ENISA recommandent la migration dès maintenant.' },
                    { periode: '2035–2040', couleur: 'text-red-400', desc: 'Fenêtre probable du Q-day selon les agences de sécurité gouvernementales (NSA, GCHQ, BSI).' },
                  ].map(({ periode, couleur, desc }) => (
                    <div key={periode} className="flex gap-4 items-start">
                      <span className={`${couleur} font-mono text-sm flex-shrink-0 w-24`}>{periode}</span>
                      <span className="text-sm text-slate-400">{desc}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  La raison pour laquelle il faut agir <strong className="text-white">maintenant</strong> et pas en
                  2034 : la menace &ldquo;harvest now, decrypt later&rdquo;. Des données chiffrées aujourd&apos;hui avec
                  RSA peuvent être stockées par des adversaires et déchiffrées le jour où le Q-day arrive.
                  Pour les données qui doivent rester confidentielles pendant plus de 10 ans, le problème est immédiat.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Comment Kyber applique tout ça concrètement
                </h2>
                <p>
                  Dans l&apos;application Kyber, l&apos;algorithme ML-KEM (Kyber1024, le niveau de sécurité le plus élevé)
                  est utilisé non pas pour sécuriser un canal réseau, mais pour chiffrer le fichier coffre
                  lui-même. Le flux complet :
                </p>
                <div className="mt-6 bg-[#0d0d1a] border border-white/10 rounded-xl p-6 space-y-3">
                  {[
                    { step: '① Passphrase → Argon2id', detail: 'Dérivation résistante aux GPU/ASIC, 64 MB RAM', color: 'text-cyan-300' },
                    { step: '② Seed → ML-KEM-1024 keygen', detail: 'Génération déterministe des clés post-quantiques', color: 'text-blue-300' },
                    { step: '③ KEM encapsulate → shared secret', detail: 'Encapsulation Kyber1024 (ciphertext 1568 octets)', color: 'text-purple-300' },
                    { step: '④ Shared secret → HKDF-SHA256', detail: 'Dérivation de la clé finale 256 bits', color: 'text-violet-300' },
                    { step: '⑤ Clé → AES-256-GCM', detail: 'Chiffrement authentifié du coffre, nonce aléatoire', color: 'text-green-300' },
                  ].map(({ step, detail, color }) => (
                    <div key={step} className="flex flex-col gap-0.5">
                      <span className={`text-sm font-mono font-medium ${color}`}>{step}</span>
                      <span className="text-xs text-slate-500 pl-4">{detail}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  Ce n&apos;est pas juste un &ldquo;label&rdquo; post-quantique sur un produit existant — c&apos;est Kyber1024
                  qui génère réellement la clé qui chiffre vos mots de passe.
                </p>
              </section>

              <section>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-3">En résumé</h2>
                  <ul className="space-y-2 text-sm">
                    {[
                      "RSA et ECDSA seront brisés par l'algorithme de Shor une fois les QC suffisamment puissants",
                      "AES-256 et SHA-256 restent sûrs — il suffit d'éviter AES-128",
                      "Le NIST a standardisé 4 algorithmes PQC en 2024, dont ML-KEM (Kyber1024)",
                      "La menace harvest-now-decrypt-later rend la migration urgente dès aujourd'hui",
                      "Kyber (l'app) utilise ML-KEM-1024 pour chiffrer le fichier coffre, pas juste le transport",
                    ].map(item => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="text-blue-400 flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-slate-400 text-sm mb-6">
              Prêt à protéger vos mots de passe avec une cryptographie post-quantique réelle ? Kyber est gratuit jusqu&apos;à 3 mots de passe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-xl font-semibold transition-all text-sm"
              >
                Télécharger Kyber gratuitement →
              </Link>
              <Link
                href="/chiffrement-kyber1024"
                className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all text-sm"
              >
                Détails techniques Kyber1024 →
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-sm">
            <Link href="/blog" className="text-slate-500 hover:text-slate-300 transition-colors">
              ← Retour au blog
            </Link>
            <Link href="/blog/argon2id-vs-pbkdf2" className="text-slate-500 hover:text-slate-300 transition-colors">
              Argon2id vs PBKDF2 →
            </Link>
          </div>

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
