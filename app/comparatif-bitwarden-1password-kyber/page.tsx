import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: 'Comparatif gestionnaires de mots de passe 2026 : Kyber vs Bitwarden vs 1Password | Kyber',
  description:
    'Comparatif complet 2026 : Kyber, Bitwarden, 1Password, KeePass, LastPass. Stockage local vs cloud, chiffrement post-quantique, RGPD, open source. Lequel choisir en France ?',
  keywords: [
    'comparatif gestionnaire mots de passe',
    'alternative bitwarden locale',
    'bitwarden vs 1password',
    'meilleur gestionnaire mots de passe france 2026',
    'gestionnaire mots de passe local cloud',
    'keepass alternative',
    'lastpass alternative',
    'gestionnaire mots de passe open source',
    'gestionnaire mots de passe RGPD',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/comparatif-bitwarden-1password-kyber',
  },
  openGraph: {
    title: 'Comparatif gestionnaires de mots de passe 2026 | Kyber vs Bitwarden vs 1Password',
    description: 'Tableau comparatif : local vs cloud, PQC, RGPD, open source. Quel gestionnaire choisir en 2026 ?',
    url: 'https://kyber-security.fr/comparatif-bitwarden-1password-kyber',
  },
};

const products = [
  {
    name: 'Kyber',
    badge: 'Notre avis',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    local: true,
    pqc: true,
    openSource: true,
    prix: '0€ / 15€ unique',
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
    name: 'LastPass',
    local: false,
    pqc: false,
    openSource: false,
    prix: '3€/mois',
    rgpd: 'Non (serveurs US)',
    incidents: '2022 — 25M coffres volés',
    argon2: false,
    highlight: false,
  },
];

function Check({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="text-green-400 font-bold">✓</span>
  ) : (
    <span className="text-slate-600">✗</span>
  );
}

export default function PageComparatif() {
  return (
    <div className="min-h-screen bg-[#070711] text-white overflow-x-hidden">
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">

          {/* ── HERO ── */}
          <div className="py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Kyber vs Bitwarden vs 1Password vs KeePass{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                2026
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Après la brèche LastPass de 2022 et la montée des menaces quantiques,
              quel gestionnaire de mots de passe choisir en France en 2026 ?
            </p>
          </div>

          {/* ── CONTEXTE ── */}
          <section className="mb-12">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
              <h2 className="font-semibold text-amber-300 mb-3">Le contexte : pourquoi ce comparatif maintenant ?</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                En décembre 2022, LastPass a révélé que des millions de coffres chiffrés avaient été volés
                depuis leurs serveurs. En mars 2026, Keeper Security a annoncé l&apos;intégration du chiffrement
                Kyber1024 — mais dans un modèle cloud. Dans le même temps, l&apos;ANSSI pousse les organisations
                françaises à migrer vers des solutions post-quantiques avant 2030. Ces évolutions rendent
                indispensable une relecture des offres disponibles.
              </p>
            </div>
          </section>

          {/* ── TABLEAU ── */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Tableau comparatif</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-6 text-slate-400 font-medium">Critère</th>
                    {products.map((p) => (
                      <th key={p.name} className={`text-center py-3 px-4 font-medium ${p.highlight ? 'text-blue-300' : 'text-slate-300'}`}>
                        {p.name}
                        {p.highlight && (
                          <span className="block text-xs font-normal text-blue-400 mt-0.5">⭐ Recommandé</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3 pr-6 text-slate-400">Stockage local</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 ${p.highlight ? 'bg-blue-500/5' : ''}`}>
                        <Check ok={p.local} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 text-slate-400">Chiffrement post-quantique</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 ${p.highlight ? 'bg-blue-500/5' : ''}`}>
                        <Check ok={p.pqc} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 text-slate-400">Open source</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 ${p.highlight ? 'bg-blue-500/5' : ''}`}>
                        <Check ok={p.openSource} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 text-slate-400">Argon2id (KDF)</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 ${p.highlight ? 'bg-blue-500/5' : ''}`}>
                        <Check ok={p.argon2} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 text-slate-400">Prix</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 text-xs ${p.highlight ? 'bg-blue-500/5 text-blue-300 font-medium' : 'text-slate-400'}`}>
                        {p.prix}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 text-slate-400">Souveraineté RGPD</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 text-xs ${p.highlight ? 'bg-blue-500/5 text-green-400' : 'text-slate-500'}`}>
                        {p.rgpd}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 text-slate-400">Incidents de sécurité</td>
                    {products.map((p) => (
                      <td key={p.name} className={`text-center py-3 px-4 text-xs ${p.highlight ? 'bg-blue-500/5 text-green-400' : p.incidents.includes('M coffres') ? 'text-red-400' : 'text-slate-500'}`}>
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
            <h2 className="text-2xl font-bold mb-8">Analyse produit par produit</h2>
            <div className="space-y-6">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2 text-green-400">Bitwarden — Le meilleur choix cloud open source</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Bitwarden est l&apos;alternative open source de référence aux solutions cloud propriétaires.
                  Son modèle zero-knowledge est bien implémenté, et aucun incident majeur n&apos;a été reporté.
                  Ses limites : PBKDF2 comme KDF (moins robuste qu&apos;Argon2id), pas de chiffrement post-quantique,
                  et un coffre stocké sur des serveurs américains — ce qui peut poser des questions RGPD.
                  La version auto-hébergée améliore la souveraineté mais reste sans PQC.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2 text-slate-300">1Password — Premium cloud, code fermé</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  1Password offre une excellente expérience utilisateur et un modèle de sécurité solide avec
                  une &ldquo;Secret Key&rdquo; supplémentaire. Mais il est propriétaire (code non auditable),
                  stocke vos données sur des serveurs canadiens/américains, et nécessite un abonnement mensuel.
                  Pas de PQC, pas d&apos;option locale, pas d&apos;open source — trois inconvénients majeurs pour 2026.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2 text-slate-300">KeePass — Le précurseur local, sans PQC</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  KeePass est la référence historique des gestionnaires locaux. Open source, gratuit, aucun cloud.
                  Ses faiblesses : une interface des années 2000, pas de chiffrement post-quantique, pas d&apos;auto-remplissage
                  natif moderne, et un écosystème de plugins peu maintenus. Il reste une bonne option pour les
                  utilisateurs techniques qui veulent du local, mais sans la protection PQC.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2 text-red-400">LastPass — À éviter</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  En 2022, LastPass a subi deux brèches successives : la seconde a permis aux attaquants de voler
                  les coffres chiffrés de millions d&apos;utilisateurs. Ces coffres sont toujours entre les mains
                  des attaquants. Les utilisateurs avec des mots de passe maîtres faibles ont vu leurs comptes
                  compromis. Aucune architecture cloud ne peut complètement se prémunir contre ce type d&apos;attaque.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2 text-blue-300">Kyber — Local + Post-Quantique + Open Source</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Kyber combine les avantages de KeePass (stockage 100% local, souveraineté totale) avec
                  la cryptographie de 2024 (Kyber1024 + AES-256-GCM + Argon2id). Le coffre existe
                  uniquement sur votre disque — aucune brèche dans nos serveurs ne peut compromettre vos
                  mots de passe (il n&apos;y a pas de serveur de coffres). Avec une licence Pro à 15€ paiement
                  unique, c&apos;est aussi le choix le plus économique sur 3 ans.
                </p>
                <div className="mt-4">
                  <Link
                    href="/blog/kyber-local-vs-cloud"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    Lire : &ldquo;Kyber local vs cloud : lequel vous protège vraiment ?&rdquo; →
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* ── CTA ── */}
          <section className="text-center py-8 border-t border-white/5">
            <h2 className="text-2xl font-bold mb-4">Essayer Kyber gratuitement</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Gratuit jusqu&apos;à 3 mots de passe. Migration depuis Bitwarden ou 1Password en 1 minute via import CSV.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 text-sm"
              >
                Télécharger gratuitement
              </Link>
              <Link
                href="/gestionnaire-mots-de-passe-post-quantique"
                className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-all text-sm"
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
