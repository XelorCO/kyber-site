import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Argon2id vs PBKDF2 vs bcrypt : quel KDF choisir en 2026 ? | Kyber Security' },
  description:
    "Comparatif complet des algorithmes de dérivation de clé : Argon2id, PBKDF2, bcrypt, scrypt. Performances, sécurité GPU/ASIC, recommandations OWASP 2026.",
  keywords: [
    'Argon2id vs PBKDF2',
    'argon2id bcrypt scrypt comparatif',
    'meilleur KDF 2026',
    'dérivation clé mot de passe',
    'résistance GPU hashage',
    'OWASP recommandations KDF',
    'argon2id paramètres',
    'hashage mot de passe sécurisé',
    'password hashing algorithm',
    'bcrypt obsolète',
    'memory hard function',
    'argon2 winner PHC',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/argon2id-vs-pbkdf2',
  },
  openGraph: {
    type: 'article',
    title: 'Argon2id vs PBKDF2 vs bcrypt : quel KDF choisir en 2026 ?',
    description: "Comparatif des KDF modernes : sécurité GPU/ASIC, résistance brute-force, recommandations OWASP. Argon2id est le gagnant / voici pourquoi.",
    url: 'https://kyber-security.fr/blog/argon2id-vs-pbkdf2',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Argon2id vs PBKDF2 vs bcrypt comparatif' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Argon2id vs PBKDF2 vs bcrypt : quel KDF choisir en 2026 ?',
    description: "Comparatif complet des algorithmes de dérivation de clé. Argon2id gagne / voici les chiffres.",
    images: ['/opengraph-image'],
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Argon2id vs PBKDF2 vs bcrypt : quel est le meilleur KDF en 2026 ?',
  description: "Analyse technique des algorithmes de dérivation de clé : Argon2id, PBKDF2, bcrypt, scrypt. Comparatif sécurité, performances et recommandations.",
  author: { '@type': 'Person', name: 'Enzo Paccard' },
  publisher: {
    '@type': 'Organization',
    name: 'Kyber Security',
    url: 'https://kyber-security.fr',
  },
  datePublished: '2026-06-09',
  dateModified: '2026-06-09',
  inLanguage: 'fr-FR',
  url: 'https://kyber-security.fr/blog/argon2id-vs-pbkdf2',
  mainEntityOfPage: 'https://kyber-security.fr/blog/argon2id-vs-pbkdf2',
};

const kdfs = [
  {
    name: 'bcrypt',
    annee: '1999',
    type: 'Temps uniquement',
    gpu: '❌ Faible résistance',
    asic: '❌ Faible résistance',
    parallelisme: '✓ Non (séquentiel)',
    memoire: '/ (~4 KB)',
    owasp: '⚠︎ Acceptable (legacy)',
    color: 'amber',
    verdict: 'Acceptable pour les anciens systèmes. Ne pas utiliser pour du nouveau code.',
  },
  {
    name: 'PBKDF2',
    annee: '2000',
    type: 'Itérations CPU',
    gpu: '❌ Très faible',
    asic: '❌ Très faible',
    parallelisme: '✓ Non (séquentiel)',
    memoire: '/ (négligeable)',
    owasp: '⚠︎ 600 000 itérations min',
    color: 'red',
    verdict: 'Standardisé NIST/FIPS. Utilisé partout malgré sa faiblesse. À éviter si possible.',
  },
  {
    name: 'scrypt',
    annee: '2009',
    type: 'Mémoire + CPU',
    gpu: '✓ Bonne résistance',
    asic: '✓ Bonne résistance',
    parallelisme: '~ Partiel',
    memoire: '✓ Configurable',
    owasp: '✓ Recommandé',
    color: 'blue',
    verdict: 'Bien mais paramétrage complexe et implémentations parfois incorrectes.',
  },
  {
    name: 'Argon2id',
    annee: '2015',
    type: 'Mémoire + CPU + //él.',
    gpu: '✓✓ Très forte',
    asic: '✓✓ Très forte',
    parallelisme: '✓ Natif',
    memoire: '✓✓ Configurable',
    owasp: '✓✓ Premier choix',
    color: 'green',
    verdict: 'Gagnant du Password Hashing Competition (PHC). Standard de fait en 2026.',
  },
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kyber-security.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Argon2id vs PBKDF2 vs bcrypt : quel est le meilleur KDF en 2026 ?", item: 'https://kyber-security.fr/blog/argon2id-vs-pbkdf2' },
  ],
};

export default function ArticleKDF() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbLd]) }}
      />
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6">

          <div className="py-12">
            <Link href="/blog" className="text-stone-400 hover:text-stone-100 text-sm transition-colors mb-8 inline-block">
              ← Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-3 py-1 rounded-full border text-cyan-300 bg-cyan-50 border-cyan-200">
                Technique
              </span>
              <span className="text-stone-400 text-xs">9 juin 2026</span>
              <span className="text-stone-500 text-xs">·</span>
              <span className="text-stone-400 text-xs">9 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Argon2id vs PBKDF2 vs bcrypt : quel est le meilleur KDF en 2026 ?
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed">
              La force d&apos;un gestionnaire de mots de passe dépend autant de son algorithme de dérivation de clé
              que de son chiffrement. Entre Argon2id, PBKDF2, bcrypt et scrypt / lequel résiste vraiment
              à un attaquant équipé d&apos;une ferme GPU en 2026 ?
            </p>
          </div>

          <article className="prose prose-stone max-w-none">
            <div className="space-y-8 text-stone-300 leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">
                  C&apos;est quoi un KDF, exactement ?
                </h2>
                <p>
                  Un <strong className="text-stone-100">KDF (Key Derivation Function)</strong> transforme un mot de passe
                  humain / court, mémorisable, potentiellement faible / en une clé cryptographique forte.
                  C&apos;est la fonction qui se place entre &ldquo;l&apos;utilisateur tape son mot de passe maître&rdquo;
                  et &ldquo;les données sont déchiffrées&rdquo;.
                </p>
                <p className="mt-4">
                  Un bon KDF doit rendre la force brute coûteuse : si deviner un mot de passe nécessite
                  100ms sur votre machine, un attaquant avec 1000 GPU ne peut tester que ~600 000 mots de
                  passe par seconde. Si votre mot de passe a 8 caractères alphanumériques, c&apos;est
                  3 jours de calcul maximum. Avec 12 caractères, c&apos;est des millions d&apos;années.
                </p>
                <p className="mt-4">
                  La différence entre les KDF modernes se joue sur une question : un attaquant peut-il
                  <strong className="text-stone-100"> paralléliser massivement</strong> cette opération sur GPU ou ASIC ?
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">
                  Le problème des GPU : pourquoi bcrypt et PBKDF2 sont dépassés
                </h2>
                <p>
                  Un GPU moderne contient des milliers de cœurs parallèles. Pour des fonctions qui ne consomment
                  que du CPU et de la bande passante mémoire classique, un attaquant peut lancer des milliers
                  de tentatives simultanées.
                </p>
                <div className="mt-6 bg-stone-900 border border-stone-700 rounded-xl p-6">
                  <p className="text-sm text-stone-400 mb-4">Comparaison de la résistance aux attaques GPU :</p>
                  <div className="space-y-3">
                    {[
                      { algo: 'PBKDF2-SHA256 (600k iter)', gpu: '~1 500 000 H/s', couleur: 'text-red-400' },
                      { algo: 'bcrypt (cost 12)', gpu: '~5 000 H/s', couleur: 'text-amber-600' },
                      { algo: 'scrypt (N=32768, r=8)', gpu: '~500 H/s', couleur: 'text-blue-400' },
                      { algo: 'Argon2id (m=64MB, t=3)', gpu: '~50 H/s', couleur: 'text-green-400' },
                    ].map(({ algo, gpu, couleur }) => (
                      <div key={algo} className="flex justify-between items-center text-sm">
                        <span className="text-stone-300">{algo}</span>
                        <span className={`font-mono ${couleur}`}>{gpu}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 mt-4">* Approximations sur RTX 4090 avec hashcat. Les valeurs varient selon la config exacte.</p>
                </div>
                <p className="mt-4">
                  PBKDF2 permet 1,5 million de tentatives par seconde sur un GPU grand public.
                  Argon2id, grâce à sa contrainte mémoire, n&apos;en permet que 50.
                  <strong className="text-stone-100"> Un facteur 30 000.</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">Comparatif détaillé</h2>
                <div className="space-y-4">
                  {kdfs.map(({ name, annee, type, gpu, asic, memoire, owasp, color, verdict }) => (
                    <div key={name} className={`bg-${color}-50 border border-${color}-200 rounded-xl p-5`}>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="font-bold text-stone-100 text-lg">{name}</span>
                          <span className="text-xs text-stone-500 ml-2">({annee})</span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-${color}-100 text-${color}-700`}>{type}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                        {[
                          ['Résistance GPU', gpu],
                          ['Résistance ASIC', asic],
                          ['Mémoire', memoire],
                          ['OWASP 2026', owasp],
                        ].map(([k, v]) => (
                          <div key={k} className="flex flex-col">
                            <span className="text-stone-500">{k}</span>
                            <span className="text-stone-300">{v}</span>
                          </div>
                        ))}
                      </div>
                      <p className={`text-xs text-${color}-700 italic`}>{verdict}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">
                  Argon2id : comment ça marche ?
                </h2>
                <p>
                  Argon2id est le lauréat du <strong className="text-stone-100">Password Hashing Competition (PHC)</strong>,
                  un concours académique organisé en 2015 sur le modèle du concours AES du NIST.
                  Il combine les deux variantes Argon2i et Argon2d :
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { name: 'Argon2d', desc: "Résistant aux attaques GPU et ASIC grâce aux accès mémoire dépendants des données. Vulnérable aux attaques side-channel." },
                    { name: 'Argon2i', desc: "Accès mémoire indépendants des données (protection side-channel). Légèrement moins résistant aux GPU." },
                    { name: 'Argon2id', desc: "Hybride : première moitié Argon2i (protection side-channel), deuxième moitié Argon2d (résistance GPU/ASIC). Le meilleur des deux mondes." },
                  ].map(({ name, desc }) => (
                    <li key={name} className="flex gap-3 items-start">
                      <span className="text-blue-400 font-mono text-sm flex-shrink-0 mt-0.5 w-20">{name}</span>
                      <span className="text-sm">{desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Les trois paramètres clés à configurer :
                </p>
                <div className="mt-4 bg-stone-900 border border-stone-700 rounded-xl p-5 space-y-3">
                  {[
                    { param: 'm_cost (mémoire)', val: '64 MB minimum', note: 'Plus c\'est élevé, plus la parallélisation GPU est difficile. Kyber utilise 64 MB.' },
                    { param: 't_cost (itérations)', val: '3 minimum', note: 'Nombre de passes sur la mémoire. Augmente le temps sans réduire la mémoire.' },
                    { param: 'p_cost (parallélisme)', val: '1/4', note: 'Nombre de threads autorisés. N\'affecte pas la sécurité fondamentale.' },
                  ].map(({ param, val, note }) => (
                    <div key={param} className="flex flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono text-blue-300">{param}</span>
                        <span className="text-sm font-mono text-green-300">{val}</span>
                      </div>
                      <span className="text-xs text-stone-500">{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">
                  Pourquoi PBKDF2 est encore partout malgré ses faiblesses
                </h2>
                <p>
                  PBKDF2 a été standardisé par le NIST (SP 800-132) et approuvé FIPS. Dans des environnements
                  très réglementés / administration, défense, compliance financière / la certification FIPS
                  est souvent une obligation contractuelle, pas un choix technique.
                </p>
                <p className="mt-4">
                  C&apos;est pour ça que 1Password, Bitwarden et la plupart des gestionnaires cloud utilisent PBKDF2
                  (avec 600 000+ itérations). Ce n&apos;est pas de l&apos;incompétence / c&apos;est une contrainte de conformité.
                </p>
                <p className="mt-4">
                  Kyber n&apos;a pas ces contraintes. On peut choisir l&apos;algorithme le plus sûr sans avoir à
                  cocher des cases de compliance gouvernementale. Le choix d&apos;Argon2id était donc évident.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">
                  L&apos;interaction avec les algorithmes post-quantiques
                </h2>
                <p>
                  Un point souvent ignoré : Argon2id et Kyber1024 sont <strong className="text-stone-100">complémentaires</strong>,
                  pas redondants.
                </p>
                <p className="mt-4">
                  Argon2id protège contre la force brute sur le <em>mot de passe maître</em> humain.
                  Kyber1024 protège le chiffrement du <em>coffre lui-même</em> contre les ordinateurs quantiques.
                  L&apos;un s&apos;attaque au problème de l&apos;entropie humaine faible ; l&apos;autre à la menace quantique future.
                </p>
                <p className="mt-4">
                  Sans Argon2id, même avec Kyber1024, un attaquant pourrait forcer le mot de passe maître sur GPU.
                  Sans Kyber1024, même avec Argon2id parfait, un ordinateur quantique pourrait casser le
                  chiffrement du coffre directement. Les deux couches sont nécessaires.
                </p>
              </section>

              <section>
                <div className="bg-blue-950/50 border border-blue-800 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-stone-100 mb-3">Recommandation finale</h2>
                  <p className="text-sm mb-3">
                    Pour tout nouveau système en 2026, <strong className="text-stone-100">utilisez Argon2id</strong> avec au
                    minimum :
                  </p>
                  <div className="bg-[#151922] border border-stone-700 rounded-lg p-4 font-mono text-sm">
                    <span className="text-green-300">m_cost</span>
                    <span className="text-stone-500"> = </span>
                    <span className="text-blue-300">65536</span>
                    <span className="text-stone-500"> # 64 MB</span>
                    <br />
                    <span className="text-green-300">t_cost</span>
                    <span className="text-stone-500"> = </span>
                    <span className="text-blue-300">3</span>
                    <span className="text-stone-500"> # 3 itérations</span>
                    <br />
                    <span className="text-green-300">p_cost</span>
                    <span className="text-stone-500"> = </span>
                    <span className="text-blue-300">1</span>
                    <span className="text-stone-500"> # 1 thread</span>
                  </div>
                  <p className="text-sm mt-3 text-stone-400">
                    C&apos;est exactement les paramètres utilisés dans Kyber. Ces valeurs suivent les recommandations
                    OWASP 2026 (section &ldquo;Password Storage Cheat Sheet&rdquo;).
                  </p>
                </div>
              </section>

            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-stone-700">
            <p className="text-stone-400 text-sm mb-6">
              Kyber combine Argon2id + Kyber1024 pour une protection maximale de vos mots de passe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold transition-all text-sm text-white shadow-md"
              >
                Télécharger Kyber gratuitement →
              </Link>
              <Link
                href="/chiffrement-kyber1024"
                className="border border-stone-700 hover:border-stone-700 bg-[#151922] hover:bg-stone-900 px-6 py-3 rounded-xl font-semibold transition-all text-sm text-stone-300 shadow-sm"
              >
                Voir le flux cryptographique complet →
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-700 flex justify-between items-center text-sm">
            <Link href="/blog/cryptographie-post-quantique" className="text-stone-400 hover:text-stone-100 transition-colors">
              ← C&apos;est quoi la PQC ?
            </Link>
            <Link href="/blog/ordinateurs-quantiques-mots-de-passe" className="text-stone-400 hover:text-stone-100 transition-colors">
              QC et mots de passe →
            </Link>
          </div>

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
