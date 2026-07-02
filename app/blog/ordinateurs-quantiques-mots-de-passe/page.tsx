import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Faut-il avoir peur des ordinateurs quantiques pour ses mots de passe ? | Kyber Security' },
  description:
    "Timeline réaliste du Q-day, menace harvest-now-decrypt-later, et ce que vous pouvez faire dès aujourd'hui pour protéger vos mots de passe des ordinateurs quantiques.",
  keywords: [
    'ordinateurs quantiques mots de passe',
    'Q-day timeline réaliste',
    'menace quantique mots de passe',
    'harvest now decrypt later',
    'quand ordinateur quantique cassera chiffrement',
    'protection quantique gestionnaire mots de passe',
    'IBM quantique progression',
    'NSA post-quantum migration',
    'ANSSI migration cryptographie',
    'Q-day 2030 2035',
    'ordinateur quantique RSA briser',
    'post-quantique maintenant',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/ordinateurs-quantiques-mots-de-passe',
  },
  openGraph: {
    type: 'article',
    title: 'Faut-il avoir peur des QC pour ses mots de passe ?',
    description: "Timeline réaliste du Q-day et ce que vous pouvez faire maintenant. Menace harvest-now-decrypt-later, progression IBM, recommandations NSA/ANSSI.",
    url: 'https://kyber-security.fr/blog/ordinateurs-quantiques-mots-de-passe',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Ordinateurs quantiques et mots de passe' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faut-il avoir peur des QC pour ses mots de passe ?',
    description: "Timeline réaliste du Q-day et ce que vous pouvez faire maintenant. Harvest-now-decrypt-later expliqué.",
    images: ['/opengraph-image'],
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Faut-il avoir peur des ordinateurs quantiques pour ses mots de passe ?',
  description: "Timeline réaliste du Q-day, menace harvest-now-decrypt-later, et actions concrètes pour protéger ses données face à la menace quantique.",
  author: { '@type': 'Person', name: 'Enzo Paccard' },
  publisher: {
    '@type': 'Organization',
    name: 'Kyber Security',
    url: 'https://kyber-security.fr',
  },
  datePublished: '2026-06-09',
  dateModified: '2026-06-09',
  inLanguage: 'fr-FR',
  url: 'https://kyber-security.fr/blog/ordinateurs-quantiques-mots-de-passe',
  mainEntityOfPage: 'https://kyber-security.fr/blog/ordinateurs-quantiques-mots-de-passe',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kyber-security.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Faut-il avoir peur des ordinateurs quantiques pour ses mots de passe ?", item: 'https://kyber-security.fr/blog/ordinateurs-quantiques-mots-de-passe' },
  ],
};

export default function ArticleQCMotsDePasse() {
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
              <span className="text-xs font-medium px-3 py-1 rounded-full border text-red-700 bg-red-950/50 border-red-800">
                Sécurité
              </span>
              <span className="text-stone-400 text-xs">9 juin 2026</span>
              <span className="text-stone-500 text-xs">·</span>
              <span className="text-stone-400 text-xs">8 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Faut-il avoir peur des ordinateurs quantiques pour ses mots de passe ?
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed">
              &ldquo;Les ordinateurs quantiques sont encore loin.&rdquo; Cette phrase revient souvent pour justifier
              l&apos;inaction. Mais la vraie question n&apos;est pas &ldquo;quand le Q-day arrivera-t-il ?&rdquo;
              / c&apos;est &ldquo;depuis quand vos données sont-elles déjà collectées ?&rdquo;
            </p>
          </div>

          <article className="prose prose-stone max-w-none">
            <div className="space-y-8 text-stone-300 leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">
                  La réponse courte : oui, et pas pour les raisons que vous pensez
                </h2>
                <p>
                  La menace des ordinateurs quantiques sur les mots de passe est réelle, mais elle ne fonctionne
                  pas comme dans les films. Personne ne va se connecter à votre compte Gmail avec un ordinateur
                  quantique le jour du Q-day. La menace est plus insidieuse / et elle est déjà active.
                </p>
                <p className="mt-4">
                  Il y a deux scénarios d&apos;attaque distincts, avec des horizons temporels très différents :
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4">
                  <div className="bg-amber-950/50 border border-amber-800 rounded-xl p-5">
                    <h3 className="font-semibold text-amber-300 mb-2">Scénario A / Attaque directe sur le coffre (futur)</h3>
                    <p className="text-sm">
                      Un QC casse le chiffrement AES-256 ou attaque la dérivation de clé. Horizon : <strong>2030/2040</strong>.
                      Si vous utilisez Argon2id + AES-256, vous êtes protégé même contre ça.
                    </p>
                  </div>
                  <div className="bg-red-950/50 border border-red-800 rounded-xl p-5">
                    <h3 className="font-semibold text-red-700 mb-2">Scénario B / Harvest now, decrypt later (maintenant)</h3>
                    <p className="text-sm">
                      Un adversaire vole votre coffre <em>aujourd&apos;hui</em> / chiffré / et attend d&apos;avoir les capacités
                      quantiques pour le déchiffrer. Si votre coffre est sur un cloud, ce risque est <strong>immédiat</strong>.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">
                  Harvest now, decrypt later : la menace silencieuse déjà en cours
                </h2>
                <p>
                  L&apos;expression &ldquo;harvest now, decrypt later&rdquo; (HNDL) désigne une stratégie simple :
                  collecter des données chiffrées dès maintenant et les déchiffrer plus tard, quand la puissance
                  de calcul disponible le permettra.
                </p>
                <p className="mt-4">
                  Ce n&apos;est pas une théorie. Les agences de renseignement de plusieurs pays l&apos;admettent
                  implicitement dans leurs publications. La NSA a publié en 2022 sa feuille de route de
                  migration post-quantique en précisant que &ldquo;les adversaires collectent des données
                  aujourd&apos;hui en anticipation des futurs ordinateurs quantiques&rdquo;.
                </p>
                <div className="mt-6 bg-stone-900 border border-stone-700 rounded-xl p-6">
                  <p className="text-sm text-stone-400 mb-3">Qui est concerné par HNDL ?</p>
                  <ul className="space-y-2 text-sm">
                    {[
                      { icon: '●', color: 'text-red-500', text: 'Données devant rester confidentielles 10+ ans (secrets d\'entreprise, propriété intellectuelle, informations médicales)' },
                      { icon: '●', color: 'text-red-500', text: 'Communications diplomatiques et gouvernementales' },
                      { icon: '●', color: 'text-amber-500', text: 'Mots de passe de comptes permanents (ils ne changent pas pendant des années)' },
                      { icon: '●', color: 'text-amber-500', text: 'Coffres de mots de passe stockés sur des serveurs cloud tiers' },
                      { icon: '●', color: 'text-green-500', text: 'Données éphémères (sessions web, streaming, communications jetables)' },
                    ].map(({ icon, color, text }) => (
                      <li key={text} className="flex gap-3 items-start">
                        <span className={`flex-shrink-0 ${color}`}>{icon}</span>
                        <span className="text-stone-300">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4">
                  Vos mots de passe bancaires, vos accès professionnels, vos emails / si stockés dans un
                  gestionnaire cloud / entrent dans la catégorie rouge.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">
                  Timeline réaliste du Q-day
                </h2>
                <p>
                  Les estimations officielles et académiques convergent sur une fenêtre de risque, même
                  si les incertitudes restent importantes. Voici les jalons documentés :
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      periode: '2019',
                      titre: 'Suprématie quantique Google',
                      desc: "Google annonce avoir accompli en 200 secondes un calcul qu'un supercalculateur classique ne pourrait résoudre en 10 000 ans. Problème très spécifique, non applicable à la cryptographie / mais preuve que la progression est réelle.",
                      couleur: 'stone',
                    },
                    {
                      periode: '2023',
                      titre: 'IBM dépasse 1000 qubits (Condor)',
                      desc: "IBM publie son processeur Condor à 1121 qubits. Le défi reste la correction d'erreurs : il faut ~1000 qubits physiques par qubit logique fiable. Casser RSA-2048 nécessite ~4000 qubits logiques.",
                      couleur: 'blue',
                    },
                    {
                      periode: '2025/2026',
                      titre: 'Google Willow & progrès correction d\'erreur',
                      desc: "Google annonce des percées en correction d'erreurs quantiques avec Willow. Les experts estiment que la correction d'erreur à grande échelle est désormais une question d'ingénierie, non de physique fondamentale.",
                      couleur: 'amber',
                    },
                    {
                      periode: '2030/2035',
                      titre: 'Fenêtre du Q-day (consensus agences)',
                      desc: "NSA (2022), GCHQ (2023), BSI (2023) et ANSSI (2022) recommandent toutes de finaliser la migration post-quantique avant 2030. L'ANSSI estime qu'un ordinateur quantique cryptographiquement pertinent est plausible dans cette fenêtre.",
                      couleur: 'red',
                    },
                  ].map(({ periode, titre, desc, couleur }) => (
                    <div key={periode} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-20">
                        <span className={`text-sm font-mono font-bold text-${couleur}-600`}>{periode}</span>
                      </div>
                      <div className="bg-[#151922] border border-stone-700 rounded-xl p-4 flex-1 shadow-sm">
                        <h3 className="font-semibold text-stone-100 text-sm mb-1">{titre}</h3>
                        <p className="text-xs text-stone-400">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">
                  Pourquoi les gestionnaires cloud sont plus vulnérables
                </h2>
                <p>
                  La question clé pour la menace HNDL : est-ce que vos données chiffrées sont accessibles
                  depuis l&apos;extérieur en ce moment ?
                </p>
                <p className="mt-4">
                  Pour Bitwarden, 1Password, LastPass, Keeper et tous les gestionnaires cloud : <strong className="text-stone-100">oui</strong>.
                  Leurs serveurs sont accessibles depuis internet. Leurs bases de données chiffrées sont
                  des cibles. L&apos;incident LastPass de 2022 l&apos;a prouvé dramatiquement.
                </p>
                <div className="mt-6 bg-red-950/50 border border-red-800 rounded-xl p-5">
                  <h3 className="font-semibold text-red-700 mb-2">L&apos;incident LastPass (décembre 2022)</h3>
                  <p className="text-sm">
                    Des millions de coffres chiffrés ont été exfiltrés depuis les serveurs de LastPass.
                    Ces coffres existent quelque part, en possession d&apos;acteurs malveillants.
                    Si un ordinateur quantique suffisamment puissant arrive d&apos;ici 2035, ces coffres seront
                    potentiellement déchiffrables / 13 ans après le vol.
                  </p>
                  <p className="text-sm mt-2 text-red-400">
                    Les utilisateurs avec des mots de passe maîtres faibles ont déjà vu leurs comptes
                    compromis par force brute classique dans les mois suivants.
                  </p>
                </div>
                <p className="mt-4">
                  Un coffre local ne peut pas être volé à distance. Un attaquant ne peut pas exfiltrer
                  ce qui n&apos;est pas sur un serveur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">
                  Ce que vous pouvez faire dès aujourd&apos;hui
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      priorite: 'Urgent',
                      action: 'Migrer vers un gestionnaire local post-quantique',
                      detail: 'Si vous utilisez un gestionnaire cloud, vos coffres chiffrés sont des cibles HNDL. Migrer vers un stockage local élimine ce risque immédiatement.',
                      couleur: 'red',
                    },
                    {
                      priorite: 'Important',
                      action: 'Choisir un mot de passe maître fort (16+ caractères)',
                      detail: 'Même face aux QC, Argon2id avec un mot de passe de 16 caractères aléatoires rend la force brute infaisable. Le maillon faible reste l\'humain.',
                      couleur: 'amber',
                    },
                    {
                      priorite: 'Conseillé',
                      action: 'Vérifier que vos outils utilisent AES-256 (pas AES-128)',
                      detail: "L'algorithme de Grover réduit la sécurité AES par √. AES-128 devient ~64 bits effectifs. AES-256 reste à 128 bits effectifs / largement suffisant.",
                      couleur: 'blue',
                    },
                    {
                      priorite: 'Recommandé',
                      action: 'Adopter les algorithmes NIST PQC pour les nouvelles clés',
                      detail: "Pour les développeurs : migrer vers ML-KEM (Kyber1024) pour les nouveaux systèmes. Pour les utilisateurs : choisir des outils qui l'ont déjà fait.",
                      couleur: 'green',
                    },
                  ].map(({ priorite, action, detail, couleur }) => (
                    <div key={action} className={`bg-${couleur}-50 border border-${couleur}-200 rounded-xl p-5`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-${couleur}-100 text-${couleur}-700`}>
                          {priorite}
                        </span>
                      </div>
                      <h3 className="font-semibold text-stone-100 mb-1">{action}</h3>
                      <p className="text-sm text-stone-400">{detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-stone-100 mb-4">
                  Les objections courantes répondues
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      objection: '"Le Q-day est peut-être dans 20 ans, j\'ai le temps."',
                      reponse: "HNDL ne nécessite pas d'attendre le Q-day. Si votre coffre est sur un cloud, il peut être volé maintenant et déchiffré plus tard. Le risque commence aujourd'hui.",
                    },
                    {
                      objection: '"Les gestionnaires cloud utilisent aussi du chiffrement fort."',
                      reponse: "Le chiffrement est fort. Le problème n'est pas le chiffrement / c'est que le coffre chiffré existe sur un serveur accessible depuis internet, et peut être volé. LastPass avait aussi du chiffrement fort.",
                    },
                    {
                      objection: '"Les gouvernements et banques n\'ont pas migré, donc ce n\'est pas urgent."',
                      reponse: "NSA, GCHQ, ANSSI, BSI ont toutes publié des directives de migration urgentes entre 2022 et 2024. Les grands systèmes migrent plus lentement à cause de leur complexité. Ce n'est pas une indication de la priorité réelle.",
                    },
                    {
                      objection: '"Kyber1024 n\'est peut-être pas lui-même sans faille."',
                      reponse: "ML-KEM (Kyber1024) a passé 8 ans d'évaluation académique mondiale avant d'être standardisé par le NIST en août 2024. C'est actuellement le standard de fait de la cryptographie post-quantique.",
                    },
                  ].map(({ objection, reponse }) => (
                    <div key={objection} className="border border-stone-700 rounded-xl p-5 bg-[#151922] shadow-sm">
                      <p className="text-sm font-medium text-stone-300 italic mb-2">{objection}</p>
                      <p className="text-sm text-stone-400">{reponse}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="bg-blue-950/50 border border-blue-800 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-stone-100 mb-3">Conclusion</h2>
                  <p className="text-sm mb-3">
                    Oui, il faut se préoccuper des ordinateurs quantiques pour ses mots de passe / mais
                    pas pour les raisons instinctives. La vraie menace n&apos;est pas un QC qui se &ldquo;connecte&rdquo;
                    à vos comptes demain : c&apos;est la collecte silencieuse de vos données chiffrées aujourd&apos;hui,
                    en vue d&apos;un déchiffrement futur.
                  </p>
                  <p className="text-sm text-stone-400">
                    La bonne nouvelle : le problème a une solution simple et disponible dès maintenant.
                    Stocker vos mots de passe localement avec un chiffrement post-quantique (Kyber1024 + Argon2id)
                    neutralise la menace HNDL complètement. Pas besoin d&apos;attendre le Q-day / ni de le craindre.
                  </p>
                </div>
              </section>

            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-stone-700">
            <p className="text-stone-400 text-sm mb-6">
              Passez au chiffrement post-quantique local dès aujourd&apos;hui. Gratuit jusqu&apos;à 3 mots de passe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold transition-all text-sm text-white shadow-md"
              >
                Télécharger Kyber gratuitement →
              </Link>
              <Link
                href="/blog/kyber-local-vs-cloud"
                className="border border-stone-700 hover:border-stone-700 bg-[#151922] hover:bg-stone-900 px-6 py-3 rounded-xl font-semibold transition-all text-sm text-stone-300 shadow-sm"
              >
                Local vs cloud : analyse complète →
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-700 flex justify-between items-center text-sm">
            <Link href="/blog/argon2id-vs-pbkdf2" className="text-stone-400 hover:text-stone-100 transition-colors">
              ← Argon2id vs PBKDF2
            </Link>
            <Link href="/blog" className="text-stone-400 hover:text-stone-100 transition-colors">
              Tous les articles →
            </Link>
          </div>

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
