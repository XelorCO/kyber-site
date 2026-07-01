import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

const comparatifJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle est la meilleure alternative à Bitwarden en France ?',
      acceptedAnswer: { '@type': 'Answer', text: "Kyber est une alternative 100% locale et open source à Bitwarden. Contrairement à Bitwarden qui stocke les coffres dans le cloud, Kyber garde vos mots de passe uniquement sur votre disque. Il est également le seul à intégrer le chiffrement post-quantique Kyber1024 (ML-KEM NIST 2024)." },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre un gestionnaire local et cloud ?',
      acceptedAnswer: { '@type': 'Answer', text: "Un gestionnaire local (Kyber, KeePass) stocke vos mots de passe chiffrés sur votre appareil. Un gestionnaire cloud (Bitwarden, 1Password, Dashlane, LastPass) les stocke sur des serveurs distants. Le local offre une meilleure protection contre les brèches serveur / comme l'a prouvé l'incident LastPass 2022." },
    },
    {
      '@type': 'Question',
      name: 'LastPass est-il encore sécurisé en 2026 ?',
      acceptedAnswer: { '@type': 'Answer', text: "Après la brèche de 2022 où des millions de coffres chiffrés ont été volés depuis leurs serveurs, LastPass n'est plus recommandé. La plupart des experts conseillent de migrer vers Bitwarden, 1Password, KeePass, ou Kyber." },
    },
    {
      '@type': 'Question',
      name: 'Dashlane est-il une bonne alternative en France ?',
      acceptedAnswer: { '@type': 'Answer', text: "Dashlane est une entreprise française (Paris) avec des serveurs en Europe, ce qui le rend mieux positionné pour le RGPD que les alternatives américaines. Cependant, il reste un gestionnaire cloud (pas de stockage local) et ne propose pas de chiffrement post-quantique." },
    },
  ],
};

export const metadata: Metadata = {
  title: { absolute: 'Comparatif gestionnaires mots de passe 2026 | Kyber' },
  description:
    'Kyber, Bitwarden, 1Password, Dashlane, KeePass, LastPass / comparatif 2026. Local vs cloud, PQC, RGPD, open source. Lequel choisir en France ?',
  keywords: [
    'comparatif gestionnaire mots de passe',
    'alternative bitwarden locale',
    'bitwarden vs 1password',
    'meilleur gestionnaire mots de passe france 2026',
    'gestionnaire mots de passe local cloud',
    'keepass alternative',
    'lastpass alternative',
    'dashlane alternative',
    'gestionnaire mots de passe open source',
    'gestionnaire mots de passe RGPD',
    'gestionnaire mots de passe souveraineté',
    'comparatif logiciel mots de passe france',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/comparatif-bitwarden-1password-kyber',
  },
  openGraph: {
    title: 'Comparatif gestionnaires mots de passe 2026 | Kyber',
    description: 'Kyber, Bitwarden, 1Password, Dashlane, KeePass, LastPass / tableau comparatif : local vs cloud, PQC, RGPD.',
    url: 'https://kyber-security.fr/comparatif-bitwarden-1password-kyber',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Comparatif gestionnaires mots de passe 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparatif gestionnaires mots de passe 2026 | Kyber',
    description: 'Kyber vs Bitwarden vs 1Password vs Dashlane vs KeePass. Tableau comparatif local/cloud, PQC, RGPD.',
    images: ['/opengraph-image'],
  },
};

const products = [
  {
    name: 'Kyber',
    badge: 'Notre avis',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    local: true,
    pqc: true,
    openSource: true,
    prix: '0€ / 24,99€ unique',
    rgpd: 'Totale',
    incidents: 'Aucun',
    argon2: true,
    highlight: true,
  },
  {
    name: 'Bitwarden',
    local: false,
    pqc: false,
    openSource: true,
    prix: '0€ / 3€/mois',
    rgpd: 'Partielle (serveurs US)',
    incidents: 'Aucun connu',
    argon2: false,
    highlight: false,
  },
  {
    name: '1Password',
    local: false,
    pqc: false,
    openSource: false,
    prix: '3€/mois',
    rgpd: 'Partielle (serveurs US)',
    incidents: 'Aucun connu',
    argon2: false,
    highlight: false,
  },
  {
    name: 'KeePass',
    local: true,
    pqc: false,
    openSource: true,
    prix: '0€',
    rgpd: 'Totale',
    incidents: 'Aucun',
    argon2: false,
    highlight: false,
  },
  {
    name: 'Dashlane',
    local: false,
    pqc: false,
    openSource: false,
    prix: '4€/mois',
    rgpd: 'Bonne (entreprise FR)',
    incidents: 'Aucun majeur',
    argon2: false,
    highlight: false,
  },
  {
    name: 'LastPass',
    local: false,
    pqc: false,
    openSource: false,
    prix: '3€/mois',
    rgpd: 'Non (serveurs US)',
    incidents: '2022 / 25M coffres volés',
    argon2: false,
    highlight: false,
  },
];

function Check({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="text-green-600 font-bold">✓</span>
  ) : (
    <span className="text-stone-300">✗</span>
  );
}

export default function PageComparatif() {
  return (
    <div className="min-h-screen bg-[#f4f2ef] text-stone-900 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparatifJsonLd) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">

          {/* ── HERO ── */}
          <div className="py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-stone-900">
              Kyber vs Bitwarden vs 1Password vs Dashlane vs KeePass{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                2026
              </span>
            </h1>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Après la brèche LastPass de 2022 et la montée des menaces quantiques,
              quel gestionnaire de mots de passe choisir en France en 2026 ?
            </p>
          </div>

          {/* ── CONTEXTE ── */}
          <section className="mb-12">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="font-semibold text-amber-700 mb-3">Le contexte : pourquoi ce comparatif maintenant ?</h2>
              <p className="text-stone-700 text-sm leading-relaxed">
                En décembre 2022, LastPass a révélé que des millions de coffres chiffrés avaient été volés
                depuis leurs serveurs. En mars 2026, Keeper Security a annoncé l&apos;intégration du chiffrement
                Kyber1024 / mais dans un modèle cloud. Dans le même temps, l&apos;ANSSI pousse les organisations
                françaises à migrer vers des solutions post-quantiques avant 2030. Ces évolutions rendent
                indispensable une relecture des offres disponibles.
              </p>
            </div>
          </section>

          {/* ── TABLEAU ── */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-stone-900">Tableau comparatif</h2>
            <div className="overflow-x-auto bg-white rounded-2xl border border-stone-300 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-300">
                    <th className="text-left py-3 pr-6 pl-6 text-stone-500 font-medium">Critère</th>
                    {products.map((p) => (
                      <th key={p.name} className={`text-center py-3 px-4 font-medium ${p.highlight ? 'text-blue-600' : 'text-stone-700'}`}>
                        {p.name}
                        {p.highlight && (
                          <span className="block text-xs font-normal text-blue-500 mt-0.5">★ Recommandé</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr>
                    <td className="py-3 pr-6 pl-6 text-stone-500">Stockage local</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 ${p.highlight ? 'bg-blue-50/50' : ''}`}>
                        <Check ok={p.local} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 pl-6 text-stone-500">Chiffrement post-quantique</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 ${p.highlight ? 'bg-blue-50/50' : ''}`}>
                        <Check ok={p.pqc} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 pl-6 text-stone-500">Open source</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 ${p.highlight ? 'bg-blue-50/50' : ''}`}>
                        <Check ok={p.openSource} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 pl-6 text-stone-500">Argon2id (KDF)</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 ${p.highlight ? 'bg-blue-50/50' : ''}`}>
                        <Check ok={p.argon2} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 pl-6 text-stone-500">Prix</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 text-xs ${p.highlight ? 'bg-blue-50/50 text-blue-600 font-medium' : 'text-stone-500'}`}>
                        {p.prix}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 pl-6 text-stone-500">Souveraineté RGPD</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 text-xs ${p.highlight ? 'bg-blue-50/50 text-green-600' : 'text-stone-400'}`}>
                        {p.rgpd}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 pl-6 text-stone-500">Incidents de sécurité</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 text-xs ${p.highlight ? 'bg-blue-50/50 text-green-600' : p.incidents.includes('M coffres') ? 'text-red-600' : 'text-stone-400'}`}>
                        {p.incidents}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── ANALYSE PAR PRODUIT ── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-stone-900">Analyse produit par produit</h2>
            <div className="space-y-6">

              <div className="bg-white border border-stone-400 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-green-700">Bitwarden / Le meilleur choix cloud open source</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Bitwarden est l&apos;alternative open source de référence aux solutions cloud propriétaires.
                  Son modèle zero-knowledge est bien implémenté, et aucun incident majeur n&apos;a été reporté.
                  Ses limites : PBKDF2 comme KDF (moins robuste qu&apos;Argon2id), pas de chiffrement post-quantique,
                  et un coffre stocké sur des serveurs américains / ce qui peut poser des questions RGPD.
                  La version auto-hébergée améliore la souveraineté mais reste sans PQC.
                </p>
              </div>

              <div className="bg-white border border-stone-400 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-stone-700">1Password / Premium cloud, code fermé</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  1Password offre une excellente expérience utilisateur et un modèle de sécurité solide avec
                  une &ldquo;Secret Key&rdquo; supplémentaire. Mais il est propriétaire (code non auditable),
                  stocke vos données sur des serveurs canadiens/américains, et nécessite un abonnement mensuel.
                  Pas de PQC, pas d&apos;option locale, pas d&apos;open source / trois inconvénients majeurs pour 2026.
                </p>
              </div>

              <div className="bg-white border border-stone-400 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-stone-700">KeePass / Le précurseur local, sans PQC</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  KeePass est la référence historique des gestionnaires locaux. Open source, gratuit, aucun cloud.
                  Ses faiblesses : une interface des années 2000, pas de chiffrement post-quantique, pas d&apos;auto-remplissage
                  natif moderne, et un écosystème de plugins peu maintenus. Il reste une bonne option pour les
                  utilisateurs techniques qui veulent du local, mais sans la protection PQC.
                </p>
              </div>

              <div className="bg-white border border-stone-400 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-stone-700">Dashlane / Le meilleur choix cloud européen</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Dashlane est une entreprise fondée à Paris, avec des serveurs en Europe / un avantage RGPD réel
                  par rapport aux alternatives américaines. Son interface est excellente et son modèle de sécurité
                  solide. Ses limites : pas de chiffrement post-quantique, pas de stockage local, pas d&apos;open source,
                  et un tarif élevé (4€/mois). Pour une équipe française cherchant un gestionnaire cloud conforme RGPD,
                  c&apos;est la meilleure option dans cette catégorie / mais sans la protection PQC.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2 text-red-700">LastPass / À éviter</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  En 2022, LastPass a subi deux brèches successives : la seconde a permis aux attaquants de voler
                  les coffres chiffrés de millions d&apos;utilisateurs. Ces coffres sont toujours entre les mains
                  des attaquants. Les utilisateurs avec des mots de passe maîtres faibles ont vu leurs comptes
                  compromis. Aucune architecture cloud ne peut complètement se prémunir contre ce type d&apos;attaque.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2 text-blue-700">Kyber / Local + Post-Quantique + Open Source</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Kyber combine les avantages de KeePass (stockage 100% local, souveraineté totale) avec
                  la cryptographie de 2024 (Kyber1024 + AES-256-GCM + Argon2id). Le coffre existe
                  uniquement sur votre disque / aucune brèche dans nos serveurs ne peut compromettre vos
                  mots de passe (il n&apos;y a pas de serveur de coffres). Avec une licence Pro à 24,99€ paiement
                  unique, c&apos;est aussi le choix le plus économique sur 3 ans.
                </p>
                <div className="mt-4">
                  <Link
                    href="/blog/kyber-local-vs-cloud"
                    className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                  >
                    Lire : &ldquo;Kyber local vs cloud : lequel vous protège vraiment ?&rdquo; →
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* ── CTA ── */}
          <section className="text-center py-8 border-t border-stone-300">
            <h2 className="text-2xl font-bold mb-4 text-stone-900">Essayer Kyber gratuitement</h2>
            <p className="text-stone-500 mb-8 max-w-md mx-auto">
              Gratuit jusqu&apos;à 3 mots de passe. Migration depuis Bitwarden ou 1Password en 1 minute via import CSV.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-white shadow-md"
              >
                Télécharger gratuitement
              </Link>
              <Link
                href="/gestionnaire-mots-de-passe-post-quantique"
                className="border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm text-stone-700 shadow-sm"
              >
                Voir toutes les fonctionnalités →
              </Link>
            </div>
          </section>

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
