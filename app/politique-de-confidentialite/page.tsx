import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';

export const metadata = {
  title: 'Politique de confidentialité / Kyber',
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-stone-100 overflow-x-hidden">
      <NavHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6 py-8">

          <h1 className="text-4xl font-bold mb-2 text-stone-100">Politique de confidentialité</h1>
          <p className="text-stone-500 text-sm mb-12">Dernière mise à jour : septembre 2026</p>

          <div className="space-y-10 text-stone-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">1. Responsable du traitement</h2>
              <p>
                Le site <strong className="text-stone-100">kyber-security.fr</strong> est édité par :<br />
                <strong className="text-stone-100">Kyber Security</strong> / Enzo Paccard<br />
                SIRET : 94467475300016<br />
                Contact : <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">contact@kyber-security.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">2. Données collectées</h2>
              <p className="mb-3">Nous collectons uniquement les données strictement nécessaires :</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-stone-100">Formulaire entreprise</strong> / nom, société, email et message, pour répondre à votre demande.</li>
              </ul>
              <p className="mt-3">
                L&apos;application <strong className="text-stone-100">Kyber</strong> (logiciel bureau) fonctionne entièrement en local.
                Aucune donnée de votre coffre-fort n&apos;est transmise à nos serveurs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">3. Finalités du traitement</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Traitement des demandes entreprise</li>
                <li>Support client</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">4. Sous-traitants</h2>
              <div className="space-y-2">
                <p><strong className="text-stone-100">Vercel</strong> / hébergement du site. <a href="https://vercel.com/legal/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener">Politique de confidentialité Vercel</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">5. Durée de conservation</h2>
              <p>
                Les données du formulaire entreprise (email, message) sont conservées pour une durée maximale de{' '}
                <strong className="text-stone-100">3 ans</strong> à compter de la dernière interaction, puis supprimées.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">6. Vos droits (RGPD)</h2>
              <p className="mb-3">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (« droit à l'oubli »)</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à{' '}
                <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">
                  contact@kyber-security.fr
                </a>. Nous répondrons dans un délai de 30 jours.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">7. Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies de tracking ou publicitaires. Aucun outil d'analyse tiers
                (Google Analytics, etc.) n'est intégré. Seuls les cookies strictement nécessaires au
                fonctionnement du site peuvent être utilisés.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-100 mb-3">8. Contact</h2>
              <p>
                Pour toute question relative à cette politique :{' '}
                <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">
                  contact@kyber-security.fr
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>

      <NavFooter />
    </div>
  );
}
