import { Metadata } from 'next';
import Link from 'next/link';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata: Metadata = {
  title: { absolute: 'Roadmap Kyber | Fonctionnalités à venir' },
  description:
    'Découvrez les prochaines fonctionnalités de Kyber Security : version macOS, extension navigateur, import KeePass, CLI DevOps et bien plus.',
  alternates: {
    canonical: 'https://kyber-security.fr/roadmap',
  },
  openGraph: {
    title: 'Roadmap Kyber | Fonctionnalités à venir',
    description: 'Version macOS, extension navigateur, import KeePass, CLI DevOps / les prochaines étapes de Kyber Security.',
    url: 'https://kyber-security.fr/roadmap',
    siteName: 'Kyber Security',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

type Status = 'done' | 'in-progress' | 'planned' | 'later';

interface Feature {
  title: string;
  desc: string;
  status: Status;
  eta?: string;
}

const statusLabel: Record<Status, string> = {
  done: 'Disponible',
  'in-progress': 'En cours',
  planned: 'Planifié',
  later: 'Plus tard',
};

const statusStyle: Record<Status, string> = {
  done: 'bg-green-50 text-green-700 border-green-200',
  'in-progress': 'bg-blue-50 text-blue-700 border-blue-200',
  planned: 'bg-amber-50 text-amber-700 border-amber-200',
  later: 'bg-stone-100 text-stone-500 border-stone-200',
};

const statusDot: Record<Status, string> = {
  done: 'bg-green-500',
  'in-progress': 'bg-blue-500 animate-pulse',
  planned: 'bg-amber-400',
  later: 'bg-stone-300',
};

const sections: { title: string; features: Feature[] }[] = [
  {
    title: 'Déjà disponible',
    features: [
      { title: 'Chiffrement Kyber1024 (ML-KEM FIPS 203)', desc: 'Standard NIST 2024 / résistant aux algorithmes quantiques de Shor.', status: 'done' },
      { title: 'AES-256-GCM + Argon2id', desc: 'Chiffrement authentifié et KDF résistant GPU/ASIC.', status: 'done' },
      { title: 'Gestionnaire de mots de passe local', desc: 'Coffres multiples, génération, import CSV, export CSV.', status: 'done' },
      { title: 'Chiffrement de fichiers et dossiers', desc: 'Format .kyber / chiffrement AES-256-GCM lié à votre coffre.', status: 'done' },
      { title: 'Mises à jour automatiques signées', desc: 'Vérification au démarrage, installation en un clic. Chaque binaire est signé / l\'application refuse toute mise à jour non officielle.', status: 'done' },
      { title: 'Chiffrement de fichiers dans le navigateur', desc: 'Outil web gratuit : chiffrez un fichier en .kyber par mot de passe, 100 % local. Déchiffrable partout avec le mot de passe.', status: 'done' },
      { title: 'Scanner de champs de connexion', desc: 'Détection automatique et auto-remplissage dans les apps.', status: 'done' },
      { title: 'Analyse de sécurité', desc: 'Détection des mots de passe faibles, réutilisés ou anciens.', status: 'done' },
      { title: 'Migration coffres v1 → v2', desc: 'Mise à niveau des anciens coffres vers le format Kyber v2.', status: 'done' },
      { title: 'Windows 10/11 (x64)', desc: 'Installateur NSIS + MSI.', status: 'done' },
      { title: 'Linux (x64)', desc: 'AppImage + .deb + .rpm / version 1.1.0 en cours de compilation, de retour très bientôt.', status: 'in-progress' },
      { title: 'Licence Pro Ed25519', desc: 'Système de licences cryptographiques hors-ligne.', status: 'done' },
    ],
  },
  {
    title: 'En développement',
    features: [
      { title: 'macOS (Apple Silicon + Intel)', desc: 'Version .dmg pour macOS 12 Monterey et supérieur. Apple Silicon natif.', status: 'in-progress', eta: 'Été 2026' },
    ],
  },
  {
    title: 'Planifié',
    features: [
      { title: 'Extension navigateur Chrome & Firefox', desc: 'Auto-remplissage web natif / détection des champs de connexion dans le navigateur.', status: 'planned', eta: 'T3 2026' },
      { title: 'Import KeePass (.kdbx)', desc: 'Migration depuis KeePass sans passer par CSV / support des groupes et métadonnées.', status: 'planned', eta: 'T3 2026' },
      { title: 'Sauvegarde chiffrée NAS / USB', desc: 'Sync optionnel vers un emplacement personnalisé / aucun cloud, vous choisissez la destination.', status: 'planned', eta: 'T4 2026' },
      { title: 'Page de changelog public', desc: 'Historique des versions accessible sur le site avec notes de release.', status: 'planned', eta: 'T3 2026' },
    ],
  },
  {
    title: 'Sur la roadmap (2027)',
    features: [
      { title: 'CLI pour DevOps / CI-CD', desc: 'Interface ligne de commande pour intégrer Kyber dans les pipelines d\'automatisation.', status: 'later' },
      { title: 'Mode multi-utilisateurs (équipes)', desc: 'Partage de coffre chiffré par équipe avec gestion des droits.', status: 'later' },
      { title: 'Version mobile iOS & Android', desc: 'Application mobile avec synchronisation locale optionnelle (Bluetooth / USB).', status: 'later' },
      { title: 'Intégration Active Directory / LDAP', desc: 'Pour les grandes organisations avec annuaire d\'entreprise.', status: 'later' },
    ],
  },
];

export default function PageRoadmap() {
  return (
    <div className="min-h-screen bg-[#f4f2ef] text-stone-900 overflow-x-hidden">
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">

          {/* ── HERO ── */}
          <section className="py-16">
            <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm mb-6 font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Mise à jour / Juin 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Roadmap Kyber</h1>
            <p className="text-stone-500 text-lg leading-relaxed">
              Les fonctionnalités disponibles, ce qui est en cours de développement, et ce qui est prévu.
              La roadmap évolue en fonction des retours utilisateurs.
            </p>
          </section>

          {/* ── LÉGENDE ── */}
          <div className="flex flex-wrap gap-3 mb-10">
            {(Object.keys(statusLabel) as Status[]).map((s) => (
              <div key={s} className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border ${statusStyle[s]}`}>
                <span className={`w-2 h-2 rounded-full ${statusDot[s]}`} />
                {statusLabel[s]}
              </div>
            ))}
          </div>

          {/* ── SECTIONS ── */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-bold mb-4 text-stone-700">{section.title}</h2>
                <div className="space-y-3">
                  {section.features.map((f) => (
                    <div
                      key={f.title}
                      className="bg-white border border-stone-400 rounded-xl px-5 py-4 flex items-start gap-4 shadow-sm"
                    >
                      <span className={`mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full ${statusDot[f.status]}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="font-semibold text-stone-900 text-sm">{f.title}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${statusStyle[f.status]}`}>
                            {statusLabel[f.status]}
                          </span>
                          {f.eta && (
                            <span className="text-xs text-stone-400 font-mono">{f.eta}</span>
                          )}
                        </div>
                        <p className="text-stone-500 text-sm mt-1 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* ── VOTE / SUGGESTION ── */}
          <section className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-stone-900">Une fonctionnalité manque ?</h2>
            <p className="text-stone-500 text-sm mb-6 leading-relaxed">
              Vos retours influencent directement la priorité des développements.
              Écrivez-nous pour suggérer une fonctionnalité ou voter pour une existante.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:contact@kyber-security.fr?subject=Suggestion fonctionnalité Kyber"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-6 py-3 rounded-xl font-semibold transition-all text-sm text-white shadow-md"
              >
                Suggérer une fonctionnalité
              </a>
              <Link
                href="/telechargement"
                className="inline-block border border-stone-300 hover:border-stone-400 px-6 py-3 rounded-xl font-semibold transition-all text-sm text-stone-700"
              >
                Télécharger Kyber →
              </Link>
            </div>
          </section>

        </div>
      </main>

      <NavFooter />
    </div>
  );
}
