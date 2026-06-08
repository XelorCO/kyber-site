import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: 'Kyber local vs Kyber cloud : lequel vous protège vraiment ? | Blog Kyber',
  description:
    'Keeper Security a intégré Kyber1024 dans son cloud. Mais le chiffrement post-quantique dans le cloud protège-t-il vraiment vos mots de passe ? Analyse complète du modèle local vs cloud.',
  keywords: [
    'kyber local cloud',
    'gestionnaire mots de passe local cloud',
    'keeper kyber chiffrement',
    'chiffrement post-quantique cloud',
    'harvest now decrypt later',
    'lastpass brèche sécurité',
    'gestionnaire mots de passe sécurisé france',
    'zero knowledge cloud',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/kyber-local-vs-cloud',
  },
  openGraph: {
    type: 'article',
    title: 'Kyber local vs Kyber cloud : lequel vous protège vraiment ?',
    description: 'Le chiffrement post-quantique dans le cloud est-il suffisant ? Analyse des modèles local vs cloud après les incidents LastPass et l\'annonce Keeper.',
    url: 'https://kyber-security.fr/blog/kyber-local-vs-cloud',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kyber local vs Kyber cloud : lequel vous protège vraiment ?',
  description: 'Le chiffrement post-quantique dans le cloud est-il suffisant ? Analyse des modèles local vs cloud après les incidents LastPass et l\'annonce Keeper.',
  author: {
    '@type': 'Person',
    name: 'Enzo Paccard',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kyber Security',
    url: 'https://kyber-security.fr',
  },
  datePublished: '2026-06-08',
  dateModified: '2026-06-08',
  inLanguage: 'fr-FR',
  url: 'https://kyber-security.fr/blog/kyber-local-vs-cloud',
  mainEntityOfPage: 'https://kyber-security.fr/blog/kyber-local-vs-cloud',
};

export default function ArticleKyberLocalCloud() {
  return (
    <div className="min-h-screen bg-[#070711] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6">

          {/* ── EN-TÊTE ARTICLE ── */}
          <div className="py-12">
            <Link href="/blog" className="text-slate-500 hover:text-slate-300 text-sm transition-colors mb-8 inline-block">
              ← Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-3 py-1 rounded-full border text-blue-400 bg-blue-500/10 border-blue-500/20">
                Analyse
              </span>
              <span className="text-slate-500 text-xs">8 juin 2026</span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-500 text-xs">8 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Kyber local vs Kyber cloud : lequel vous protège vraiment ?
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              En mars 2026, Keeper Security a annoncé l&apos;intégration du chiffrement Kyber dans son gestionnaire
              cloud. La nouvelle a été saluée comme une avancée majeure. Mais une question fondamentale reste
              sans réponse : est-ce que Kyber dans le cloud vous protège réellement ?
            </p>
          </div>

          {/* ── CORPS DE L'ARTICLE ── */}
          <article className="prose prose-invert prose-slate max-w-none">

            <div className="space-y-8 text-slate-300 leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ce que &ldquo;Kyber dans le cloud&rdquo; signifie vraiment
                </h2>
                <p>
                  Kyber1024 est un algorithme d&apos;encapsulation de clé (KEM) standardisé par le NIST en 2024
                  sous le nom <strong className="text-white">ML-KEM (FIPS 203)</strong>. Il résout le problème
                  de l&apos;échange de clés résistant aux ordinateurs quantiques — remplaçant RSA et ECDH dans
                  les protocoles de communication.
                </p>
                <p className="mt-4">
                  Quand Keeper dit &ldquo;nous utilisons Kyber&rdquo;, voici ce que cela signifie concrètement :
                  les clés échangées entre votre appareil et leurs serveurs sont protégées avec Kyber. C&apos;est
                  une amélioration réelle sur le <em>transport</em> — personne ne peut intercepter votre session
                  de connexion avec un ordinateur quantique.
                </p>
                <p className="mt-4">
                  Mais votre coffre reste <strong className="text-white">stocké sur leurs serveurs</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Le problème fondamental du modèle cloud
                </h2>
                <p>
                  Voici comment fonctionne un gestionnaire de mots de passe cloud, même avec du chiffrement
                  post-quantique :
                </p>
                <ol className="mt-4 space-y-3 list-none pl-0">
                  {[
                    'Votre coffre chiffré est stocké sur des serveurs distants',
                    'Quand vous vous connectez, votre mot de passe maître dérive une clé qui déchiffre localement le coffre',
                    'Cette opération se passe côté client — c\'est ce qu\'on appelle le "zero-knowledge"',
                    'Mais votre coffre chiffré existe physiquement sur un serveur que vous ne contrôlez pas',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-blue-400 font-mono text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4">
                  Le chiffrement Kyber protège le <em>canal de communication</em>. Il ne protège pas contre
                  le scénario où un attaquant <strong className="text-white">vole directement la base de données
                  chiffrée</strong> depuis les serveurs du prestataire.
                </p>
              </section>

              <section>
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-red-300 mb-3">
                    Les incidents qui ont tout changé
                  </h2>
                  <p>
                    En décembre 2022, LastPass a révélé une brèche catastrophique :
                    <strong className="text-white"> des millions de coffres chiffrés avaient été volés</strong> depuis
                    leurs serveurs. Pas déchiffrés — volés dans leur état chiffré.
                  </p>
                  <p className="mt-3">
                    La conséquence immédiate : les attaquants peuvent tenter de forcer le mot de passe maître
                    de chaque utilisateur, hors ligne, sans limite de temps. Les utilisateurs avec des mots de
                    passe faibles ont vu leurs comptes compromis dans les mois suivants. Des portefeuilles
                    crypto ont été vidés.
                  </p>
                  <p className="mt-3">
                    <strong className="text-red-300">La leçon :</strong> si votre coffre existe sur des serveurs tiers,
                    il peut être volé. Peu importe la qualité du chiffrement en transit.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  &ldquo;Harvest now, decrypt later&rdquo; : la menace silencieuse
                </h2>
                <p>
                  Des acteurs étatiques et des organisations criminelles avancées collectent dès maintenant
                  des données chiffrées avec une stratégie simple : stocker aujourd&apos;hui, déchiffrer quand
                  les capacités quantiques seront disponibles.
                </p>
                <p className="mt-4">
                  Si un attaquant vole un coffre Bitwarden ou Keeper aujourd&apos;hui — même chiffré avec Kyber
                  sur le transport — et que dans 15 ans des ordinateurs quantiques permettent de casser le
                  chiffrement symétrique sous-jacent ou d&apos;attaquer le mot de passe maître par force brute
                  accélérée, ce coffre sera déchiffré.
                </p>
                <p className="mt-4">
                  C&apos;est précisément pour cette raison que l&apos;intégration de Kyber <em>uniquement</em> sur
                  le transport ne suffit pas. Il faut que le chiffrement post-quantique s&apos;applique au fichier
                  coffre lui-même — et que ce fichier ne soit jamais accessible depuis l&apos;extérieur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ce que &ldquo;100% local&rdquo; change vraiment
                </h2>
                <p>
                  Avec Kyber (l&apos;application), votre coffre existe <strong className="text-white">uniquement
                  sur votre disque dur</strong>. Il n&apos;y a pas de compte Kyber-security.fr. Pas de serveur
                  de synchronisation. Pas de base de données centralisée à voler.
                </p>
                <p className="mt-4">
                  Ce que cela signifie concrètement :
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    'Personne ne peut voler votre coffre depuis nos serveurs — il n\'y est pas',
                    'Aucune brèche chez nous ne compromet vos mots de passe',
                    'Vous contrôlez la sauvegarde : clé USB, disque chiffré, cloud personnel',
                    'Zéro dépendance à notre continuité d\'activité',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  <strong className="text-white">Un ordinateur quantique ne peut pas attaquer ce qu&apos;il ne peut
                  pas atteindre.</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Kyber1024 local : le chiffrement post-quantique là où ça compte
                </h2>
                <p>
                  Dans Kyber, Kyber1024 ne protège pas seulement le transport — il protège le fichier coffre
                  lui-même. Le flux complet :
                </p>
                <div className="mt-6 bg-[#0d0d1a] border border-white/10 rounded-xl p-6 space-y-3">
                  {[
                    { step: 'Votre passphrase', color: 'text-slate-300' },
                    { step: '↓ Argon2id (64 MB RAM) → seed cryptographique', color: 'text-cyan-300' },
                    { step: '↓ Kyber1024 KEM → paire de clés post-quantique', color: 'text-blue-300' },
                    { step: '↓ HKDF-SHA256 → clé de chiffrement finale', color: 'text-purple-300' },
                    { step: '↓ AES-256-GCM → fichier .vault chiffré sur disque', color: 'text-green-300' },
                  ].map(({ step, color }) => (
                    <div key={step} className={`text-sm font-mono ${color}`}>{step}</div>
                  ))}
                </div>
                <p className="mt-4">
                  Ce fichier <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">.vault</code> est
                  illisible sans votre passphrase. Même si quelqu&apos;un met la main dessus physiquement,
                  Argon2id rend la force brute impraticable sur GPU ou ASIC.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Et la conformité RGPD dans tout ça ?
                </h2>
                <p>
                  L&apos;ANSSI publie depuis début 2026 des guides poussant les organisations françaises à migrer
                  vers des solutions post-quantiques. Dans le même temps, stocker des données sensibles sur
                  des serveurs américains reste un sujet brûlant du point de vue RGPD — le Cloud Act américain
                  permet aux autorités américaines d&apos;accéder aux données hébergées par des entreprises US.
                </p>
                <p className="mt-4">
                  Avec Kyber, il n&apos;y a pas de données sur des serveurs tiers. Aucun transfert transatlantique.
                  Aucune dépendance à un prestataire soumis au Cloud Act. Votre coffre reste en France,
                  sur votre machine.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6">En résumé</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 pr-4 text-slate-400 font-medium"></th>
                        <th className="text-center py-2 px-4 text-slate-300 font-medium">Cloud PQC<br/><span className="text-xs font-normal text-slate-500">(Keeper, etc.)</span></th>
                        <th className="text-center py-2 px-4 text-blue-300 font-medium">Local PQC<br/><span className="text-xs font-normal text-blue-400">(Kyber)</span></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { critere: 'Coffre stocké', cloud: 'Serveurs tiers', local: 'Votre disque' },
                        { critere: 'Risque de brèche serveur', cloud: 'Oui', local: 'Non' },
                        { critere: 'PQC sur le transport', cloud: 'Oui', local: 'N/A' },
                        { critere: 'PQC sur le coffre', cloud: 'Partiel', local: 'Oui (Kyber1024)' },
                        { critere: 'Harvest now decrypt later', cloud: 'Possible', local: 'Impossible' },
                        { critere: 'Souveraineté RGPD', cloud: 'Dépend', local: 'Totale' },
                      ].map(({ critere, cloud, local }) => (
                        <tr key={critere}>
                          <td className="py-2.5 pr-4 text-slate-400">{critere}</td>
                          <td className="py-2.5 px-4 text-center text-slate-400">{cloud}</td>
                          <td className="py-2.5 px-4 text-center text-green-400 font-medium bg-blue-500/5">{local}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-3">Conclusion</h2>
                  <p>
                    Le chiffrement post-quantique est une nécessité absolue pour 2026 et au-delà. Mais il ne suffit
                    pas si votre coffre est stocké sur un serveur accessible depuis internet. Pour une protection
                    maximale, il faut les deux : <strong className="text-white">chiffrement PQC et stockage local</strong>.
                  </p>
                  <p className="mt-3">
                    C&apos;est précisément ce que Kyber offre depuis le premier jour — et pourquoi être le seul
                    à se trouver à cette intersection précise n&apos;est pas un hasard.
                  </p>
                </div>
              </section>

            </div>
          </article>

          {/* ── CTA ARTICLE ── */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-slate-400 text-sm mb-6">
              Vous voulez passer au chiffrement post-quantique local ? Kyber est gratuit jusqu&apos;à 3 mots de passe.
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
                En savoir plus sur Kyber1024 →
              </Link>
            </div>
          </div>

          {/* ── NAVIGATION ARTICLES ── */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <Link href="/blog" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              ← Retour au blog
            </Link>
          </div>

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
