export const metadata = {
  title: 'Politique de confidentialité — Kyber',
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[#070711] text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <a href="/" className="text-slate-500 hover:text-white text-sm transition-colors mb-10 inline-block">
          ← Retour à l'accueil
        </a>

        <h1 className="text-4xl font-bold mb-2">Politique de confidentialité</h1>
        <p className="text-slate-500 text-sm mb-12">Dernière mise à jour : juin 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Responsable du traitement</h2>
            <p>
              Le site <strong className="text-white">kyber-security.fr</strong> est édité par Kyber Security,
              joignable à l'adresse <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">contact@kyber-security.fr</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Données collectées</h2>
            <p className="mb-3">Nous collectons uniquement les données strictement nécessaires :</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-white">Nom et adresse email</strong> — lors de l'achat d'une licence, pour vous envoyer votre clé d'activation.</li>
              <li><strong className="text-white">Données de paiement</strong> — traitées exclusivement par <strong className="text-white">Stripe</strong> (PCI-DSS certifié). Nous n'avons jamais accès à vos coordonnées bancaires.</li>
              <li><strong className="text-white">Formulaire entreprise</strong> — nom, société, email et message, pour répondre à votre demande.</li>
            </ul>
            <p className="mt-3">
              L'application <strong className="text-white">Kyber</strong> (logiciel bureau) fonctionne entièrement en local.
              Aucune donnée de votre coffre-fort n'est transmise à nos serveurs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Finalités du traitement</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Envoi de la clé de licence après achat</li>
              <li>Traitement des demandes entreprise</li>
              <li>Support client</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Sous-traitants</h2>
            <div className="space-y-2">
              <p><strong className="text-white">Stripe</strong> — traitement des paiements (États-Unis / UE). <a href="https://stripe.com/fr/privacy" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener">Politique de confidentialité Stripe</a></p>
              <p><strong className="text-white">Resend</strong> — envoi d'emails transactionnels. <a href="https://resend.com/legal/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener">Politique de confidentialité Resend</a></p>
              <p><strong className="text-white">Vercel</strong> — hébergement du site. <a href="https://vercel.com/legal/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener">Politique de confidentialité Vercel</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Durée de conservation</h2>
            <p>
              Vos données (nom, email) sont conservées pour la durée nécessaire à la gestion de votre licence,
              soit une durée maximale de <strong className="text-white">5 ans</strong> à compter de votre achat,
              conformément aux obligations légales en matière de facturation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Vos droits (RGPD)</h2>
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
            <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de tracking ou publicitaires. Aucun outil d'analyse tiers
              (Google Analytics, etc.) n'est intégré. Seuls les cookies strictement nécessaires au
              fonctionnement du site peuvent être utilisés.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
            <p>
              Pour toute question relative à cette politique :{' '}
              <a href="mailto:contact@kyber-security.fr" className="text-blue-400 hover:text-blue-300 transition-colors">
                contact@kyber-security.fr
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
