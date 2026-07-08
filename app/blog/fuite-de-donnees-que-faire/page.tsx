import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Fuite de données : que faire quand votre mot de passe a été piraté ?' },
  description:
    "Votre email apparaît dans une fuite de données ? Le plan d'action complet en 6 étapes : quels mots de passe changer en premier, comment vérifier l'étendue des dégâts, et comment ne plus jamais revivre ça.",
  keywords: [
    'fuite de données que faire',
    'mot de passe piraté que faire',
    'compte piraté',
    'données personnelles fuite',
    'have i been pwned',
    'email dans une fuite de données',
    'mot de passe compromis',
    'piratage compte que faire',
    'credential stuffing',
    'vérifier si mot de passe piraté',
  ],
  alternates: {
    canonical: 'https://kyber-security.fr/blog/fuite-de-donnees-que-faire',
  },
  openGraph: {
    title: 'Fuite de données : que faire quand votre mot de passe a été piraté ?',
    description: "Le plan d'action complet en 6 étapes, dans le bon ordre, pour reprendre le contrôle après une fuite.",
    url: 'https://kyber-security.fr/blog/fuite-de-donnees-que-faire',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuite de données : que faire ?',
    description: "Le plan d'action en 6 étapes quand votre mot de passe a fuité.",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Fuite de données : que faire quand votre mot de passe a été piraté ?',
  description: "Plan d'action en 6 étapes après une fuite de données : priorités, vérifications, et prévention du credential stuffing.",
  datePublished: '2026-07-09',
  dateModified: '2026-07-09',
  author: { '@type': 'Person', name: 'Enzo Paccard', url: 'https://kyber-security.fr/a-propos' },
  publisher: { '@type': 'Organization', name: 'Kyber Security', url: 'https://kyber-security.fr' },
  url: 'https://kyber-security.fr/blog/fuite-de-donnees-que-faire',
  inLanguage: 'fr-FR',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://kyber-security.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kyber-security.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Fuite de données : que faire quand votre mot de passe a été piraté ?', item: 'https://kyber-security.fr/blog/fuite-de-donnees-que-faire' },
  ],
};

export default function ArticleFuiteDonnees() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }} />
      <NavHeader />

      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6">

          {/* ── HEADER ── */}
          <header className="py-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-3 py-1 rounded-full border text-red-300 bg-red-950/50 border-red-800">
                Sécurité
              </span>
              <span className="text-stone-500 text-xs">9 juillet 2026 · 8 min de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-100 leading-tight">
              Fuite de données : que faire quand votre mot de passe a été piraté ?
            </h1>
            <p className="text-lg text-stone-400 leading-relaxed">
              Un email de « notification de sécurité », votre adresse qui apparaît sur
              Have I Been Pwned, un accès suspect... Pas de panique : voici le plan
              d&apos;action complet, dans le bon ordre.
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

            {/* COMPRENDRE */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">D&apos;abord, comprendre ce qui s&apos;est vraiment passé</h2>
              <p>
                « Fuite de données » recouvre des situations très différentes. Avant d&apos;agir,
                déterminez ce qui a fuité :
              </p>
              <div className="space-y-3 mt-4">
                <div className="bg-[#151922] border border-stone-700 rounded-xl px-5 py-4 shadow-sm">
                  <div className="font-semibold text-stone-100 mb-1">Cas 1 : votre email seul a fuité</div>
                  <div className="text-stone-400 text-sm">Gravité faible. Attendez-vous à plus de spam et de phishing ciblé. Aucun mot de passe à changer, mais méfiance renforcée sur les emails « urgents ».</div>
                </div>
                <div className="bg-[#151922] border border-stone-700 rounded-xl px-5 py-4 shadow-sm">
                  <div className="font-semibold text-stone-100 mb-1">Cas 2 : email + mot de passe haché ont fuité</div>
                  <div className="text-stone-400 text-sm">Gravité moyenne à forte selon le hachage utilisé et la force de votre mot de passe. Un mot de passe faible derrière un hachage rapide sera cassé. Changez-le sur ce service, et partout où vous l&apos;avez réutilisé.</div>
                </div>
                <div className="bg-[#151922] border border-stone-700 rounded-xl px-5 py-4 shadow-sm">
                  <div className="font-semibold text-stone-100 mb-1">Cas 3 : email + mot de passe en clair ont fuité</div>
                  <div className="text-stone-400 text-sm">Gravité maximale. Le couple email + mot de passe est déjà dans des listes de credential stuffing testées automatiquement sur des centaines de sites. Agissez dans l&apos;heure.</div>
                </div>
              </div>
              <div className="mt-4 bg-blue-950/50 border border-blue-800 rounded-xl p-4 text-sm text-blue-300">
                <strong>Vérifier l&apos;étendue :</strong> haveibeenpwned.com recense les fuites publiques par
                adresse email. Le service est fiable et utilisé par les professionnels / entrez votre
                adresse et vous verrez dans quelles fuites elle apparaît, et ce qui a fuité à chaque fois.
              </div>
            </section>

            {/* LE PLAN */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Le plan d&apos;action en 6 étapes, dans l&apos;ordre</h2>
              <div className="space-y-3 mt-4">
                {[
                  {
                    step: '1',
                    title: "Sécurisez d'abord votre boîte email principale",
                    desc: "C'est la clé de voûte : quiconque contrôle votre email peut réinitialiser tous vos autres mots de passe. Changez son mot de passe en premier, activez la double authentification, et vérifiez dans les paramètres qu'aucune règle de transfert ou appareil inconnu n'a été ajouté.",
                  },
                  {
                    step: '2',
                    title: 'Changez le mot de passe du service qui a fuité',
                    desc: "Un mot de passe neuf, long, généré aléatoirement. Ne le « modifiez » pas (motdepasse2 ne protège de rien) : remplacez-le entièrement.",
                  },
                  {
                    step: '3',
                    title: 'Changez-le PARTOUT où vous le réutilisiez',
                    desc: "C'est l'étape que tout le monde saute et c'est la plus importante. Le credential stuffing consiste précisément à tester le couple email + mot de passe fuité sur des centaines d'autres sites, automatiquement, dans les heures qui suivent une fuite.",
                  },
                  {
                    step: '4',
                    title: 'Activez la double authentification sur les comptes critiques',
                    desc: "Email, banque, impôts, réseaux sociaux, comptes marchands avec carte enregistrée. Application TOTP de préférence au SMS quand c'est possible.",
                  },
                  {
                    step: '5',
                    title: 'Surveillez les comptes sensibles pendant quelques semaines',
                    desc: "Relevés bancaires, connexions inconnues, emails de réinitialisation que vous n'avez pas demandés. Si des données bancaires ont fuité : opposition immédiate, et signalement sur la plateforme gouvernementale cybermalveillance.gouv.fr.",
                  },
                  {
                    step: '6',
                    title: 'Passez à des mots de passe uniques pour ne plus jamais revivre ça',
                    desc: "La seule raison pour laquelle une fuite se transforme en catastrophe, c'est la réutilisation. Avec un mot de passe unique par service, une fuite reste un incident isolé : vous changez UN mot de passe et c'est terminé.",
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

            {/* CREDENTIAL STUFFING */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Pourquoi la réutilisation est le vrai danger</h2>
              <p>
                Les attaquants n&apos;essaient presque jamais de « deviner » votre mot de passe sur un site
                précis. Ils font l&apos;inverse : ils prennent les milliards de couples email + mot de passe
                issus des fuites passées et les rejouent partout. Les listes s&apos;appellent des « combolists »,
                les outils sont automatisés, et le taux de succès se situe entre 0,1 et 2 % / énorme à
                l&apos;échelle de millions de tentatives.
              </p>
              <p>
                C&apos;est pour ça qu&apos;un mot de passe réutilisé, même excellent, est une bombe à
                retardement : sa force ne le protège pas d&apos;être copié en clair depuis un site mal
                sécurisé, puis rejoué sur votre banque.
              </p>
              <p>
                Il y a aussi un angle plus long terme : les données chiffrées volées aujourd&apos;hui
                pourront être déchiffrées demain / c&apos;est la stratégie
                {' '}<Link href="/blog/ordinateurs-quantiques-mots-de-passe" className="text-blue-400 hover:text-blue-300">harvest now, decrypt later</Link>,
                qui motive le passage à la <Link href="/blog/cryptographie-post-quantique" className="text-blue-400 hover:text-blue-300">cryptographie post-quantique</Link>.
              </p>
            </section>

            {/* PRÉVENTION */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">La prévention en trois habitudes</h2>
              <div className="grid sm:grid-cols-1 gap-3">
                {[
                  'Un mot de passe unique et aléatoire par service, stocké dans un gestionnaire : une fuite = un seul compte concerné, cinq minutes pour tourner la page',
                  "Double authentification sur l'email et les comptes critiques : même un mot de passe volé ne suffit plus",
                  "Un gestionnaire stocké en LOCAL plutôt que dans le cloud : votre coffre ne peut pas apparaître dans la prochaine fuite serveur, puisqu'il n'est sur aucun serveur",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-stone-300 bg-green-950/50 border border-green-800 rounded-lg px-3 py-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                Sur le dernier point : l&apos;affaire LastPass 2022 a montré que les coffres stockés dans
                le cloud peuvent être exfiltrés en masse, puis brute-forcés hors ligne pendant des années.
                Un coffre qui ne quitte jamais votre machine n&apos;a tout simplement pas ce problème /
                c&apos;est <Link href="/blog/kyber-local-vs-cloud" className="text-blue-400 hover:text-blue-300">l&apos;architecture que nous défendons</Link>.
              </p>
            </section>

            {/* CONCLUSION */}
            <section>
              <h2 className="text-2xl font-bold text-stone-100 mb-4">Conclusion</h2>
              <p>
                Une fuite de données n&apos;est grave que si elle se propage. Sécurisez l&apos;email d&apos;abord,
                remplacez le mot de passe fuité partout où il vit, activez la double authentification,
                puis réglez le problème à la racine : des mots de passe uniques, générés, stockés
                localement. La prochaine fuite (il y en aura une) ne sera alors qu&apos;une ligne dans
                l&apos;actualité, pas votre problème.
              </p>
            </section>

          </div>

          {/* ── CTA ── */}
          <div className="mt-16 bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-stone-100">Ne laissez plus une fuite devenir une catastrophe</h2>
            <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
              Kyber génère des mots de passe uniques et les stocke chiffrés en post-quantique,
              100 % sur votre machine. Gratuit jusqu&apos;à 10 mots de passe.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/telechargement"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all shadow-md"
              >
                Télécharger Kyber gratuitement
              </Link>
              <Link
                href="/blog/mot-de-passe-fort-2026"
                className="border border-stone-700 hover:border-stone-500 px-6 py-3 rounded-xl font-semibold text-sm text-stone-300 transition-all"
              >
                Créer un mot de passe fort →
              </Link>
            </div>
          </div>

          {/* ── NAVIGATION BLOG ── */}
          <nav className="mt-12 flex items-center justify-between">
            <Link href="/blog" className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
              ← Retour au blog
            </Link>
            <Link href="/blog/kyber-local-vs-cloud" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Local vs cloud →
            </Link>
          </nav>

        </article>
      </main>

      <NavFooter />
    </div>
  );
}
