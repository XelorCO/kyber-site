export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#faf8f6] text-stone-900 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-7xl mb-8">🎉</div>
        <h1 className="text-4xl font-bold mb-4 text-stone-900">Paiement réussi !</h1>
        <p className="text-stone-500 text-lg mb-8">
          Votre licence{' '}
          <strong className="text-stone-900">Kyber Pro</strong> vous sera envoyée
          par email dans quelques minutes.
        </p>

        <div className="bg-white border border-stone-200 rounded-2xl p-6 text-left mb-8 shadow-sm">
          <p className="font-semibold mb-4 flex items-center gap-2 text-stone-900">
            <span>📋</span> Comment activer votre licence :
          </p>
          <ol className="space-y-3 text-stone-500 text-sm">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-rose-400 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span>Ouvrez l&apos;application <strong className="text-stone-900">Kyber</strong> sur votre ordinateur</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-rose-400 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span>Dans la barre latérale gauche, cliquez sur <strong className="text-stone-900">⚙️ Paramètres</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-rose-400 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span>Faites défiler jusqu&apos;à la section <strong className="text-stone-900">Licence Kyber</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-rose-400 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
              <span>Collez votre clé reçue par email dans le champ et cliquez sur <strong className="text-stone-900">Activer la licence</strong></span>
            </li>
          </ol>
        </div>

        <p className="text-stone-400 text-sm mb-6">
          Pas de mail reçu dans 5 minutes ?{' '}
          <a href="mailto:contact@kyber-security.fr" className="text-blue-600 hover:text-blue-700 transition">
            Contactez-nous
          </a>
        </p>

        <a href="/" className="text-stone-400 hover:text-stone-900 text-sm transition">
          ← Retour à l'accueil
        </a>
      </div>
    </div>
  );
}
