import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Meilleur gestionnaire de mots de passe Windows 11 en 2026' },
  description:
    "Windows Hello, coffre-fort intégré à Chrome, Bitwarden, KeePass ou solution locale : comparatif complet des gestionnaires de mots de passe sur Windows 11 en 2026, et pourquoi le stockage local change tout.",
  keywords: [
    'gestionnaire de mots de passe windows 11',
    'meilleur gestionnaire de mots de passe windows',
    'password manager windows 11 2026',
    'gestionnaire mots de passe local windows',
    'coffre-fort windows 11',
    'windows hello mots de passe',
    'gestionnaire mdp gratuit windows',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/gestionnaire-mots-de-passe-windows-11',
  },
  openGraph: {
    title: 'Meilleur gestionnaire de mots de passe Windows 11 en 2026',
    description: "Comparatif complet : Windows Hello, coffre-fort Chrome/Edge, Bitwarden, KeePass, Kyber. Quel gestionnaire choisir sur Windows 11 en 2026 ?",
    url: 'https://kyber-security.fr/blog/gestionnaire-mots-de-passe-windows-11',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meilleur gestionnaire de mots de passe Windows 11 en 2026',
    description: 'Comparatif complet des gestionnaires de mots de passe sur Windows 11 en 2026.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Meilleur gestionnaire de mots de passe Windows 11 en 2026',
  description: "Comparatif des solutions de gestion de mots de passe disponibles sur Windows 11 : coffre-fort intégré, gestionnaires cloud et gestionnaires locaux.",
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
  author: { '@type': 'Person', name: 'Enzo Paccard', url: 'https://kyber-security.fr/a-propos' },
  publisher: { '@type': 'Organization', name: 'Kyber Security', url: 'https://kyber-security.fr' },
  url: 'https://kyber-security.fr/blog/gestionnaire-mots-de-passe-windows-11',
  inLanguage: 'fr-FR',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kyber-security.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Meilleur gestionnaire de mots de passe Windows 11 en 2026', item: 'https://kyber-security.fr/blog/gestionnaire-mots-de-passe-windows-11' },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Le coffre-fort de mots de passe intégré à Windows 11 suffit-il ?',
      acceptedAnswer: { '@type': 'Answer', text: "Le gestionnaire intégré à Chrome ou Edge sur Windows 11 synchronise vos mots de passe avec votre compte Google ou Microsoft. C'est pratique, mais cela recrée exactement le risque du cloud : vos identifiants quittent votre machine et dépendent de la sécurité du compte associé." },
    },
    {
      '@type': 'Question',
      name: 'Windows Hello remplace-t-il un gestionnaire de mots de passe ?',
      acceptedAnswer: { '@type': 'Answer', text: "Non. Windows Hello déverrouille votre session ou authentifie certains sites compatibles passkeys, mais il ne génère ni ne stocke l'ensemble de vos mots de passe existants sur tous vos comptes. Un gestionnaire dédié reste nécessaire." },
    },
    {
      '@type': 'Question',
      name: 'Un gestionnaire de mots de passe local est-il compatible avec Windows 11 ?',
      acceptedAnswer: { '@type': 'Answer', text: "Oui. Kyber est conçu et testé nativement pour Windows 11 (installeur .exe et .msi), avec un fichier .vault chiffré stocké localement sur le disque, sans compte ni synchronisation cloud imposée." },
    },
  ],
};

export default function ArticleWindows11() {
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
              <span className="text-stone-500 text-xs">3 août 2026 · 8 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-100 leading-tight">
              Meilleur gestionnaire de mots de passe Windows 11 en 2026
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed">
              Coffre-fort intégré à Edge ou Chrome, Windows Hello, gestionnaires cloud ou solution locale :
              Windows 11 propose plusieurs façons de gérer ses mots de passe. Elles ne se valent pas toutes.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-stone-400">
              <span>Par</span>
              <Link href="/a-propos" className="font-medium text-stone-100 hover:text-blue-400 transition-colors">
                Enzo Paccard
              </Link>
              <span>·</span>
              <span>Fondateur de Kyber Security</span>
            </div>
          </header>

          {/* ── CONTENU ── */}
          <div className="prose prose-stone max-w-none space-y-10 text-stone-300 leading-relaxed">

            {/* LE PIEGE DU GESTIONNAIRE INTEGRE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Le piège du gestionnaire « déjà installé »</h2>
              <p>
                Sur Windows 11, la solution la plus utilisée n&apos;est ni Bitwarden ni 1Password : c&apos;est le
                gestionnaire intégré à Edge ou Chrome, activé par défaut. Aucune installation, aucun choix conscient.
                Le problème n&apos;est pas la qualité du chiffrement de ces navigateurs / il est correct. Le problème
                est l&apos;endroit où finissent vos mots de passe : synchronisés avec votre compte Microsoft ou Google,
                sur des serveurs que vous ne contrôlez pas.
              </p>
              <div className="bg-red-950/50 border border-red-800 rounded-xl p-5">
                <h3 className="font-semibold text-red-200 mb-2">Windows Hello ne gère pas vos mots de passe existants</h3>
                <p className="text-red-300 text-sm">
                  Windows Hello (visage, empreinte, code PIN) est excellent pour déverrouiller votre session ou
                  valider une passkey sur un site compatible. Mais il ne stocke, ne génère et ne remplit
                  automatiquement aucun mot de passe classique sur vos comptes existants. Les deux problèmes sont
                  distincts, malgré la confusion fréquente.
                </p>
              </div>
            </section>

            {/* CE QUI COMPTE VRAIMENT */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Les critères qui comptent réellement</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Où vos mots de passe sont-ils physiquement stockés ?',
                  'Faut-il un compte pour utiliser l\'application ?',
                  'Le chiffrement résiste-t-il aux futurs ordinateurs quantiques ?',
                  'Le modèle est-il un abonnement ou un achat unique ?',
                  'L\'éditeur a-t-il déjà subi une brèche de sécurité ?',
                  'L\'application fonctionne-t-elle hors connexion internet ?',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-stone-300 bg-[#151922] border border-stone-700 rounded-lg px-3 py-2">
                    <span className="text-blue-400 flex-shrink-0">◆</span>
                    {point}
                  </div>
                ))}
              </div>
            </section>

            {/* COMPARATIF */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Comparatif sur Windows 11</h2>
              <div className="overflow-x-auto rounded-2xl border border-stone-800 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-800 border-b border-stone-800">
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Critère</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Coffre navigateur</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300">Bitwarden / 1Password</th>
                      <th className="text-left px-4 py-3 font-semibold text-stone-300 bg-blue-950/50">Kyber</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Stockage', 'Cloud (compte Google/MS)', 'Cloud (serveurs de l\'éditeur)', '100% local (.vault)'],
                      ['Compte requis', 'Oui', 'Oui', 'Non'],
                      ['Modèle tarifaire', 'Gratuit', 'Abonnement annuel', 'Paiement unique (29 €)'],
                      ['Post-quantique', '✗ Non', '✗ Non', '✓ Kyber1024 (NIST FIPS 203)'],
                      ['Fonctionne hors ligne', 'Partiellement', 'Partiellement', '✓ Toujours'],
                      ['Chiffrement de fichiers', '✗ Non', '✗ Non', '✓ Format .kyber natif'],
                      ['Origine des données', 'États-Unis', 'États-Unis', 'France'],
                    ].map(([critere, navig, tiers, kyber]) => (
                      <tr key={critere} className="border-b border-stone-800 last:border-0">
                        <td className="px-4 py-2.5 font-medium text-stone-300 bg-stone-900">{critere}</td>
                        <td className="px-4 py-2.5 text-stone-400">{navig}</td>
                        <td className="px-4 py-2.5 text-stone-400">{tiers}</td>
                        <td className="px-4 py-2.5 text-stone-200 bg-blue-950/50">{kyber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* POURQUOI LOCAL SUR WINDOWS 11 */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Pourquoi le local a plus de sens sur Windows 11</h2>
              <p>
                Windows 11 dispose déjà d&apos;un système de fichiers chiffrable (BitLocker) et d&apos;un stockage
                sécurisé matériel (TPM 2.0) sur la quasi-totalité des machines récentes. L&apos;OS est donc, par
                construction, une bonne base pour héberger un coffre local plutôt que de renvoyer systématiquement
                vos identifiants vers un serveur distant. Kyber s&apos;appuie sur cette réalité : le fichier{' '}
                <code className="text-stone-200 bg-stone-800 px-1.5 py-0.5 rounded text-sm">.vault</code> reste sur
                votre disque, protégé par Argon2id et AES-256-GCM, avec une couche Kyber1024 post-quantique en plus.
              </p>
              <p>
                Kyber est aujourd&apos;hui disponible nativement pour Windows 11 (installeur .exe et .msi, mises à
                jour automatiques signées). Les versions Linux et macOS sont en développement / si vous êtes
                exclusivement sur Windows, c&apos;est déjà utilisable dès aujourd&apos;hui.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Le coffre-fort de mots de passe intégré à Windows 11 suffit-il ?',
                    a: "Le gestionnaire intégré à Chrome ou Edge sur Windows 11 synchronise vos mots de passe avec votre compte Google ou Microsoft. C'est pratique, mais cela recrée exactement le risque du cloud : vos identifiants quittent votre machine et dépendent de la sécurité du compte associé.",
                  },
                  {
                    q: 'Windows Hello remplace-t-il un gestionnaire de mots de passe ?',
                    a: "Non. Windows Hello déverrouille votre session ou authentifie certains sites compatibles passkeys, mais il ne génère ni ne stocke l'ensemble de vos mots de passe existants sur tous vos comptes. Un gestionnaire dédié reste nécessaire.",
                  },
                  {
                    q: 'Un gestionnaire de mots de passe local est-il compatible avec Windows 11 ?',
                    a: "Oui. Kyber est conçu et testé nativement pour Windows 11 (installeur .exe et .msi), avec un fichier .vault chiffré stocké localement sur le disque, sans compte ni synchronisation cloud imposée.",
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
                Sur Windows 11, le gestionnaire « le plus pratique » (celui déjà activé dans le navigateur) n&apos;est
                pas le plus sûr. Un gestionnaire local dédié, sans compte ni synchronisation cloud imposée, exploite
                mieux ce que Windows 11 offre déjà en matière de sécurité matérielle, avec en prime une protection
                post-quantique que ni les navigateurs ni les principaux gestionnaires cloud ne proposent aujourd&apos;hui.
              </p>
            </section>

          </div>

          {/* ── CTA ── */}
          <div className="mt-16 bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-stone-100">Installez Kyber sur Windows 11</h2>
            <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
              Gratuit jusqu&apos;à 10 mots de passe. Aucun compte requis. Le coffre reste sur votre disque.
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
            <Link href="/blog/alternative-lastpass-gratuite" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Alternative à LastPass →
            </Link>
          </nav>

        </article>
      </main>

      <NavFooter />
    </div>
  );
}
