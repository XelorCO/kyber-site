import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Alternative à LastPass 2026 : gratuite, locale et sans abonnement' },
  description:
    "Vous cherchez une alternative à LastPass après la fuite de 2022 ou la hausse des prix ? Découvrez Kyber : gestionnaire de mots de passe 100% local, gratuit et open source, sans abonnement.",
  keywords: [
    'alternative lastpass gratuite',
    'alternative lastpass 2026',
    'lastpass alternative sécurisée',
    'quitter lastpass',
    'migrer lastpass',
    'lastpass piratage',
    'lastpass fuite de données',
    'gestionnaire mots de passe sans abonnement',
    'meilleure alternative lastpass',
    'lastpass vs kyber',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/alternative-lastpass-gratuite',
  },
  openGraph: {
    title: 'Alternative à LastPass 2026 : gratuite, locale et sans abonnement',
    description: "LastPass a été piraté en 2022 et augmente ses prix chaque année. Voici une alternative locale, gratuite et open source, sans abonnement.",
    url: 'https://kyber-security.fr/blog/alternative-lastpass-gratuite',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alternative à LastPass 2026 : gratuite, locale et sans abonnement',
    description: "LastPass a été piraté en 2022. Voici une alternative locale, gratuite, sans abonnement.",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Alternative à LastPass 2026 : gratuite, locale et sans abonnement',
  description: "Analyse des raisons de quitter LastPass et guide de migration vers Kyber, gestionnaire de mots de passe local post-quantique.",
  datePublished: '2026-07-27',
  dateModified: '2026-07-27',
  author: { '@type': 'Person', name: 'Enzo Paccard', url: 'https://kyber-security.fr/a-propos' },
  publisher: { '@type': 'Organization', name: 'Kyber Security', url: 'https://kyber-security.fr' },
  url: 'https://kyber-security.fr/blog/alternative-lastpass-gratuite',
  inLanguage: 'fr-FR',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kyber-security.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Alternative à LastPass 2026 : gratuite, locale et sans abonnement', item: 'https://kyber-security.fr/blog/alternative-lastpass-gratuite' },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'LastPass est-il encore sûr à utiliser en 2026 ?',
      acceptedAnswer: { '@type': 'Answer', text: "LastPass a corrigé les failles exploitées en 2022, mais le modèle reste le même : vos coffres chiffrés sont stockés sur des serveurs tiers, exposés à toute future brèche. C'est un risque structurel, pas un bug ponctuel." },
    },
    {
      '@type': 'Question',
      name: 'Une alternative locale comme Kyber est-elle vraiment gratuite ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Kyber est 100 % gratuit et open source. Aucune limite de mots de passe, aucune licence à acheter, aucune carte bancaire requise.' },
    },
    {
      '@type': 'Question',
      name: 'Comment exporter mes mots de passe depuis LastPass ?',
      acceptedAnswer: { '@type': 'Answer', text: "Dans l'extension LastPass : icône LastPass → Options avancées → Exporter → Fichier CSV. Le fichier contient vos mots de passe en clair, à supprimer immédiatement après import." },
    },
  ],
};

export default function ArticleLastPass() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd, faqLd]) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6">

          {/* ── HEADER ── */}
          <header className="py-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-3 py-1 rounded-full border text-indigo-300 bg-indigo-950/50 border-indigo-800">
                Comparatif
              </span>
              <span className="text-stone-500 text-xs">27 juillet 2026 · 8 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-100 leading-tight">
              Alternative à LastPass 2026 : gratuite, locale et sans abonnement
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed">
              Fuite de données en 2022, hausses de prix répétées, coffres chiffrés stockés sur des serveurs
              qu&apos;on ne contrôle pas / les raisons de quitter LastPass ne manquent pas. Voici ce qui
              change réellement avec un gestionnaire 100% local.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-stone-400">
              <span>Par</span>
              <Link href="/a-propos" className="font-medium text-stone-100 hover:text-blue-400 transition-colors">
                Enzo Paccard
              </Link>
              <span>·</span>
              <span>Pentesteur / Fondateur de Kyber Security</span>
            </div>
          </header>

          {/* ── CONTENU ── */}
          <div className="prose prose-stone max-w-none space-y-10 text-stone-300 leading-relaxed">

            {/* CE QUI S'EST PASSÉ */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Ce qui s&apos;est passé chez LastPass</h2>
              <p>
                En août 2022, LastPass a subi une intrusion dans son environnement de développement.
                En décembre 2022, l&apos;entreprise a confirmé qu&apos;un attaquant avait volé une copie
                chiffrée des coffres clients, ainsi que des données non chiffrées (URLs, noms de domaines,
                adresses IP). Les coffres restaient protégés par le mot de passe maître de chaque utilisateur /
                mais un attaquant possède désormais une copie hors ligne, qu&apos;il peut tenter de casser
                indéfiniment, sans limite de tentatives ni verrouillage de compte.
              </p>
              <div className="bg-red-950/50 border border-red-800 rounded-xl p-5">
                <h3 className="font-semibold text-red-200 mb-2">Pourquoi c&apos;est structurel, pas accidentel</h3>
                <p className="text-red-300 text-sm">
                  Le problème n&apos;est pas que LastPass ait mal codé un jour. C&apos;est que le modèle
                  {' '}<strong>cloud</strong> centralise des millions de coffres chiffrés sur les mêmes serveurs /
                  une cible unique et permanente. Même avec un chiffrement parfait, une brèche donne à
                  l&apos;attaquant un temps illimité pour attaquer votre mot de passe maître hors ligne.
                </p>
              </div>
            </section>

            {/* LE MODÈLE LOCAL */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Le modèle local supprime le risque à la source</h2>
              <p>
                Un gestionnaire local comme Kyber ne stocke jamais vos mots de passe sur un serveur.
                Le fichier <code className="text-stone-200 bg-stone-800 px-1.5 py-0.5 rounded text-sm">.vault</code> chiffré
                reste sur votre disque. Il n&apos;existe aucune base de données centrale à pirater / aucune
                entreprise tierce ne peut être compromise à votre place.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Aucun serveur / rien à pirater à distance',
                  'Fichier .vault chiffré sous votre seul contrôle',
                  'Aucun abonnement / paiement unique',
                  'Kyber1024 post-quantique en plus de l\'AES-256',
                  'Fonctionne hors ligne en permanence',
                  'Extension navigateur compagnon (pas de coffre cloud caché)',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-stone-300 bg-green-950/50 border border-green-800 rounded-lg px-3 py-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    {point}
                  </div>
                ))}
              </div>
            </section>

            {/* COMPARAISON */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Comparaison : LastPass vs Kyber</h2>
              <div className="overflow-x-auto rounded-2xl border border-stone-800 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-800 border-b border-stone-800">
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Critère</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">LastPass</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300 bg-blue-950/50">Kyber Security</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Stockage', 'Cloud (serveurs LastPass)', '100% local (.vault)'],
                      ['Modèle tarifaire', 'Abonnement annuel', 'Paiement unique (29 €)'],
                      ['Gratuit', 'Limité, 1 seul type d\'appareil', '10 mots de passe illimités dans le temps'],
                      ['Incident connu', 'Brèche confirmée en 2022', 'Aucun (rien à pirater côté serveur)'],
                      ['Post-quantique', '✗ Non', '✓ Kyber1024 (NIST FIPS 203)'],
                      ['Chiffrement', 'AES-256 (côté serveur)', 'AES-256-GCM + Argon2id (local)'],
                      ['Extension navigateur', '✓ Cloud-connectée', '✓ Compagnon (relie l\'app locale)'],
                      ['Chiffrement de fichiers', '✗ Non', '✓ Format .kyber natif'],
                      ['Origine', 'États-Unis (GoTo)', 'France'],
                    ].map(([critere, lastpass, kyber]) => (
                      <tr key={critere} className="border-b border-stone-800 last:border-0">
                        <td className="px-4 py-2.5 font-medium text-stone-300 bg-stone-900">{critere}</td>
                        <td className="px-4 py-2.5 text-stone-400">{lastpass}</td>
                        <td className="px-4 py-2.5 text-stone-200 bg-blue-950/50">{kyber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* MIGRATION */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Comment migrer de LastPass vers Kyber</h2>
              <p>
                LastPass permet d&apos;exporter vos identifiants au format CSV, que Kyber importe directement.
                Comptez moins de 5 minutes.
              </p>
              <div className="space-y-3 mt-4">
                {[
                  {
                    step: '1',
                    title: 'Exporter depuis LastPass',
                    desc: "Cliquez sur l'icône de l'extension LastPass → Options avancées → Exporter → Vers un fichier CSV. Entrez votre mot de passe maître pour confirmer.",
                  },
                  {
                    step: '2',
                    title: 'Installer Kyber',
                    desc: 'Téléchargez Kyber depuis kyber-security.fr/telechargement et créez un nouveau coffre avec une passphrase forte et différente de celle de LastPass.',
                  },
                  {
                    step: '3',
                    title: 'Importer le CSV',
                    desc: 'Dans Kyber : Paramètres → Importer CSV. Sélectionnez le fichier exporté. Toutes vos entrées apparaissent immédiatement.',
                  },
                  {
                    step: '4',
                    title: 'Supprimer le CSV et fermer le compte LastPass',
                    desc: 'Le fichier CSV contient vos mots de passe en clair : supprimez-le et videz la corbeille. Résiliez ensuite votre abonnement LastPass.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 bg-[#151922] border border-stone-700 rounded-xl px-5 py-4 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-stone-100 mb-1">{item.title}</div>
                      <div className="text-stone-400 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'LastPass est-il encore sûr à utiliser en 2026 ?',
                    a: "LastPass a corrigé les failles exploitées en 2022, mais le modèle reste le même : vos coffres chiffrés sont stockés sur des serveurs tiers, exposés à toute future brèche. C'est un risque structurel, pas un bug ponctuel.",
                  },
                  {
                    q: 'Une alternative locale comme Kyber est-elle vraiment gratuite ?',
                    a: "Oui, Kyber est gratuit jusqu'à 10 mots de passe, sans limite de temps et sans carte bancaire requise. La version Pro (29 € en paiement unique, pas d'abonnement) lève cette limite.",
                  },
                  {
                    q: 'Est-ce que je perds la synchronisation multi-appareils ?',
                    a: "Kyber ne synchronise pas automatiquement dans le cloud (c'est un choix de sécurité). Vous pouvez copier manuellement le fichier .vault entre vos appareils, ou utiliser votre propre solution de synchronisation de fichiers.",
                  },
                ].map((faq) => (
                  <details key={faq.q} className="bg-[#151922] border border-stone-700 rounded-xl px-5 py-4 shadow-sm group">
                    <summary className="font-medium text-stone-100 cursor-pointer list-none flex items-center justify-between gap-3 text-sm">
                      {faq.q}
                      <span className="text-stone-500 flex-shrink-0 group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-3 text-stone-400 text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CONCLUSION */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Conclusion</h2>
              <p>
                LastPass reste un produit fonctionnel, mais le modèle cloud porte un risque structurel
                qu&apos;aucun correctif ne peut éliminer complètement : vos données chiffrées existent
                quelque part hors de votre contrôle. Passer à un gestionnaire local comme Kyber supprime
                ce risque à la racine, sans abonnement récurrent et avec une protection post-quantique
                que LastPass n&apos;offre pas.
              </p>
            </section>

          </div>

          {/* ── CTA ── */}
          <div className="mt-16 bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-stone-100">Quittez LastPass en 5 minutes</h2>
            <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
              Téléchargez Kyber gratuitement. Importez votre export CSV LastPass.
              Vos mots de passe restent sur votre machine.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all shadow-md"
              >
                Télécharger Kyber gratuitement
              </Link>
              <Link
                href="/comparatif-bitwarden-1password-kyber"
                className="border border-stone-700 hover:border-stone-700 px-6 py-3 rounded-xl font-semibold text-sm text-stone-300 transition-all"
              >
                Voir le comparatif complet →
              </Link>
            </div>
          </div>

          {/* ── NAVIGATION BLOG ── */}
          <nav className="mt-12 flex items-center justify-between">
            <Link href="/blog" className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
              ← Retour au blog
            </Link>
            <Link href="/blog/keepass-alternative-post-quantique" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Alternative à KeePass →
            </Link>
          </nav>

        </article>
      </main>

      <NavFooter />
    </div>
  );
}
