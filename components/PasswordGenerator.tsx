'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

/* ────────────────────────────────────────────────────────────
   Tirage aléatoire cryptographique, sans biais modulo.
   Tout se passe dans le navigateur : aucune requête réseau.
   ──────────────────────────────────────────────────────────── */
function randBelow(max: number): number {
  const limit = Math.floor(0x100000000 / max) * max;
  const buf = new Uint32Array(1);
  let v = 0;
  do {
    crypto.getRandomValues(buf);
    v = buf[0];
  } while (v >= limit);
  return v % max;
}

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randBelow(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ── Jeux de caractères ── */
const SETS = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  digits: '0123456789',
  symbols: '!@#$%&*+-=?_.:;()[]{}/<>~^',
};
const AMBIGUOUS = 'Il1O0o|`\'"';

/* ── Liste de mots français pour les phrases secrètes ──
   Mots courts, sans accent, faciles à taper et à dicter.
   L'entropie affichée est calculée sur la taille réelle de la liste. */
const RAW_WORDS = `
abricot absence academie accent acheter acier acteur action addition adresse affiche agenda agneau aiguille ailier aimant airbag ajouter alarme album alcool alerte algue aliment allee allumer alpage altitude amande ambiance ambre amiral amorce ampoule analyse ananas ancetre ancre anglais angle animal anneau annonce antenne apercu appareil appel appui aquarium arbitre arbre arcade archive ardoise arene argent argile armoire arome arrivee arsenal artiste asperge assiette astre atelier athlete atome attache aubaine auberge audace augment aurore autobus automne avalanche avantage avenir averse avion avocat azote
bagage baguette baie balcon baleine ballon bambou banane bandeau banque baobab baril barrage bassin bateau baton bavoir bazar beignet belier benne berceau berger besace bijou bilan billet biscuit bison blague blanche bleuet blindage bocage bolide bonbon bonheur bordure botanic botte bouchon boucle boudin bougie boulier bouquet bourse boussole bouton branche brasier brebis breve bricole brigade brindille brioche brique brochure bronze brosse brouette bruine brume budget buffle buisson bureau butane
cabane cabine cachet cactus cadeau cadran cafe cage cahier caillou caisse calcul calibre calme camion campagne canal canard candeur canevas canif canon capitale capot capsule caramel carbone cardon carnet carotte carreau cartable carton cascade casier casque cassis castor cathode cavalier caverne ceinture celeri cellule cendre centre cerceau cercle cerise cerveau chaine chalet chameau champ chandail chapeau charbon chariot charme chateau chaudron chemin cheval chevre chiffre chimie chocolat chorale chouette chrome cible cidre cigale cigogne cimaise cinema cintre circuit cirque ciseau citron civette clairon clameur clarte clavier clemence client climat cloche clou cobalt cobra cochon cocon code coffre cognac colline colombe colonne combat comete commerce compas concert conduit confort congre console contour convoi copain copeau coquille corail corbeau cordage cornet corolle corps cortege costume cotelette coton couche coude couleur coupole courant courbe couronne cousin couteau couvert crabe craie crampon crane cratere cravate crayon creche credit creme creneau crevette cristal critere crochet croissant croquis cuillere cuisine cuivre culture cumulus cure cyclone cygne
dahlia damier danseur dattier dauphin debat debit debut decor dedale defi degre delai delta demain dentelle depart depot dessin destin detail deux devoir diamant diesel digital digue dinde diplome direct disque distance divan dizaine docteur domaine domino donjon dorade dortoir dossier douane douceur douche douzaine dragon drapeau droite duvet dynamo
eau ebauche ecaille echange echelle eclair eclipse ecluse ecole ecran ecrou ecume edifice effort egout elan electron elephant eleve elixir eloge email embarque emeraude emission emploi empreinte encre endroit energie enfance engin enigme enquete ensemble entree envie epaule epave epice epine eponge epreuve equerre equipe erable escale escalier escargot espace espoir essai essence estuaire etable etage etain etang etendue etincelle etiquette etoile etude euro evasion eveil evier examen excuse exemple exercice exil expert exploit export express extrait
fable facade facteur faisan falaise famille fanal fanfare fantome farine faucon faune fauteuil faveur fenetre fente ferme fermoir festin feuille fibre ficelle fiche figue figure filet filtre final finesse flacon flamant flamme flanelle flotte flute focale foire folie fonction fondant fontaine forage force foret forme formule fortune fossile foudre fougere foulard fourche foyer fracas fraise franche frange frein fresque friandise frimas frise fromage froment frontal fruit fugue fumee fusain fusee fusion futur
gabarit gadget gaillard galaxie galerie galet gamme garage garde gateau gaufre gazelle gazon geant gelee gemme general genou genre geste gibier gilet girafe givre glacier glaive gland globe glose gomme gorge goudron gousse gouttiere grade graine grammaire granit graphite grappe gravier gravure grenade grenier grille grimpeur grotte groupe grue guepard guichet guidon guitare
habitat hache haie halte hameau hamac hangar harmonie harpe hasard hauteur havane herbe hermine heros hexagone hibou histoire hiver homard horizon horloge hotel houle housse hublot humeur hydrogene hymne
idee igloo image immeuble impact index indice industrie infini insecte insigne instant instinct intrigue invite iode iris ivoire
jachere jade jaguar jalon jambe jardin jargon jasmin jaune javelot jeton jockey joie jonc jongleur jonquille joueur journal jugement jumelle jungle jupon jury
kayak kermesse kilo kiwi
labeur laboratoire lacet lagon laine laiton lampe lance langage lanterne lapin large larme lasagne lavande lecture legende legume lentille lettre levier lexique lezard liane liberte libraire licorne liege lierre lieu ligne lilas limace limite lingot lion liqueur liseron liste litige littoral livre local locomotive logique loisir losange lotus loupe lucarne lueur lumiere lune lustre luth lutin luxe lycee lynx
machine macon madrier magasin magie maillot maison maitre malle mandat manege mangue manoir manteau maquette marbre marche mardi marge marin marmite marquise marteau martin masque massif matelas matiere maxime meandre mecanique medaille meduse melodie melon membre memoire menthe menu merle mesange message mesure metal meteore metier metre meuble microbe midi miel milan milieu millet mimosa mineral minute miroir mistral mixture mobile module moineau moisson molaire moment monde moniteur montagne monument moral morse mosaique moteur motif mouette moulin moustique mouton muraille murmure muscade museau musee musique mystere
nacelle nacre nageur naissance nappe narrateur nature nautique navette navire nectar nefle negatif neige nerf nettoyage neuf neutron niveau noisette nomade nombre nord normal notice nougat nouvelle novembre noyau nuage nuance nuit numero nylon
oasis obelisque objectif objet obstacle ocean octave odeur oeillet office oiseau olive ombre omelette onde ongle opale opera option orage orange orbite orchestre ordinateur oreille organe orgue origine orme ornement orque ortie oseille otarie ouragan oursin outil ouverture ovale oxygene
pagaie page paille pain palace palette palmier panache pancarte panda panier panneau panorama pantalon papaye papier papillon paquet parade parapluie parasol parcours parfum parole parquet partage passage pastel pastille patate patin patrimoine paturage paume paupiere pavillon pecheur pedale peigne peinture pelican pelouse pendule penombre pente pepite percale perle perroquet persil peuplier phare phrase piano piece pierre pigeon pilier pilote pinceau pincee pingouin pintade pioche pirate piscine piste pivoine placard plage plaine planche planete plaque plateau platine plongeur pluie plume poche podium poesie poignee poirier poisson poivre polaire pollen pommier pompe poney pont porcelaine portail portique poterie potiron poudre poulie poumon poutre prairie praline premier presence presse preuve prisme prive prix produit profil projet promesse prunelle public pulpe pupitre pyramide
quai qualite quartier quenelle question queue quiche quille quinte quotient
rabot racine radar radeau radis rafale rail raisin ramage rameau rampe rapide raquette rature ravin rayon realite recette recif recolte record recours refuge regard region registre reglage relais relief remede remorque renard rencontre renne repere repos reptile reseau reserve residu ressort restaurant retour reunion revenu reverbere reveil rhubarbe ribambelle richesse rideau rigole rime riviere robot rocher roman romarin ronce rondelle rosee roseau rossignol rotule roulette route rouage royaume ruban rubis ruche ruelle rumeur ruse rythme
sable sabot sachet safran saison salade salon sanglier santal sapin sardine satellite saule saumon sauge savane savon scarabee scene schema science scooter sculpture seau secret secteur seigle sejour selle semaine semelle sentier sequoia serein serpent serre service seuil sextant siecle siege sifflet signal silence sillon similaire singe sirene sirop soiree soleil solide sommet sonate sonde sorbet sortie soucoupe souffle source sourire souris soutien spatule spectre sphere spirale sportif square stade station statue steppe stock studio style stylo sucre suffixe sujet supplice surface surprise sursaut symbole synode syrop systeme
table tableau tabouret tache taille talent talon tambour tampon tandem tangage tapis tarte tasse taupe taureau technique teinte telescope temoin tempete temple tenaille tendon tenue terrasse terroir texte theatre theiere thermos thon thym tiare ticket tigre tilleul timbre tirage tiroir tisane tissu titane toile toiture tomate tonneau topaze torche tornade torrent tortue total toucan touffe toupie tour tournoi trace tradition trafic train traineau trajet trame tranche transit trappe travail treize trefle treillis tremplin tresor triangle tribu tricot tringle triomphe tronc trophee tropique trottoir troupeau truite tuile tulipe tunnel turbine tuyau
ukulele ultime unite univers urbain usage usine ustensile utile
vacarme vague vaisseau valise vallee valve vanille vapeur varech vase vautour vedette veille velours velo vendange verger verre verrou versant vertige veste viaduc viande victoire village vinaigre violon vipere virage virgule visage vitesse vitrail vitrine vivier voilier voisin voiture volcan volet volume voyage vue
wagon
xylophone
yacht yaourt yoga
zebre zenith zeste zinc zodiaque zone
`
  .trim()
  .split(/\s+/);

const WORDS = Array.from(new Set(RAW_WORDS));

/* ── Estimation du temps de cassage ── */
const GUESSES_PER_SEC = 1e12; // rig GPU hors ligne contre un hash rapide

function formatDuration(seconds: number): string {
  if (seconds < 1) return 'instantané';
  const units: [number, string, string][] = [
    [60, 'seconde', 'secondes'],
    [60, 'minute', 'minutes'],
    [24, 'heure', 'heures'],
    [365, 'jour', 'jours'],
  ];
  let value = seconds;
  for (const [factor, sing, plur] of units) {
    if (value < factor) {
      const v = Math.round(value);
      return `${v} ${v > 1 ? plur : sing}`;
    }
    value /= factor;
  }
  // value est maintenant en années
  if (value < 1000) return `${Math.round(value)} ans`;
  if (value < 1e6) return `${Math.round(value / 1e3)} milliers d'années`;
  if (value < 1e9) return `${Math.round(value / 1e6)} millions d'années`;
  if (value < 1e12) return `${Math.round(value / 1e9)} milliards d'années`;
  const exp = Math.floor(Math.log10(value));
  return `10^${exp} années`;
}

function strengthOf(bits: number) {
  if (bits < 50) return { label: 'Faible', tone: 'text-red-300 bg-red-950/50 border-red-800', bar: 'from-red-500 to-red-400', pct: Math.max(8, (bits / 128) * 100) };
  if (bits < 70) return { label: 'Moyen', tone: 'text-amber-300 bg-amber-950/50 border-amber-800', bar: 'from-amber-500 to-amber-400', pct: (bits / 128) * 100 };
  if (bits < 100) return { label: 'Fort', tone: 'text-blue-300 bg-blue-950/50 border-blue-800', bar: 'from-blue-500 to-indigo-500', pct: (bits / 128) * 100 };
  return { label: 'Excellent', tone: 'text-green-300 bg-green-950/50 border-green-800', bar: 'from-green-500 to-emerald-400', pct: Math.min(100, (bits / 128) * 100) };
}

type Mode = 'chars' | 'phrase';

export default function PasswordGenerator() {
  const [mode, setMode] = useState<Mode>('chars');

  // Mode caractères
  const [length, setLength] = useState(20);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useDigits, setUseDigits] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [noAmbiguous, setNoAmbiguous] = useState(true);

  // Mode phrase secrète
  const [wordCount, setWordCount] = useState(7);
  const [separator, setSeparator] = useState('-');
  const [capitalize, setCapitalize] = useState(true);
  const [addNumber, setAddNumber] = useState(false);

  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);
  const [ready, setReady] = useState(false);

  /* Pool de caractères actif */
  const pools = useMemo(() => {
    const strip = (s: string) => (noAmbiguous ? [...s].filter((c) => !AMBIGUOUS.includes(c)).join('') : s);
    const list: string[] = [];
    if (useLower) list.push(strip(SETS.lower));
    if (useUpper) list.push(strip(SETS.upper));
    if (useDigits) list.push(strip(SETS.digits));
    if (useSymbols) list.push(strip(SETS.symbols));
    return list;
  }, [useLower, useUpper, useDigits, useSymbols, noAmbiguous]);

  const poolSize = pools.join('').length;

  /* Entropie réelle du réglage courant */
  const bits = useMemo(() => {
    if (mode === 'chars') {
      if (poolSize === 0) return 0;
      return length * Math.log2(poolSize);
    }
    const perWord = Math.log2(WORDS.length);
    return wordCount * perWord + (addNumber ? Math.log2(10000) : 0);
  }, [mode, length, poolSize, wordCount, addNumber]);

  const generate = useCallback(() => {
    if (mode === 'chars') {
      if (pools.length === 0) {
        setValue('');
        return;
      }
      const all = pools.join('');
      const chars: string[] = [];
      // Au moins un caractère de chaque jeu sélectionné
      for (const set of pools) chars.push(set[randBelow(set.length)]);
      while (chars.length < length) chars.push(all[randBelow(all.length)]);
      setValue(shuffle(chars).slice(0, Math.max(length, pools.length)).join(''));
    } else {
      const words: string[] = [];
      for (let i = 0; i < wordCount; i++) {
        const w = WORDS[randBelow(WORDS.length)];
        words.push(capitalize ? w[0].toUpperCase() + w.slice(1) : w);
      }
      let out = words.join(separator);
      if (addNumber) out += separator + String(randBelow(10000)).padStart(4, '0');
      setValue(out);
    }
    setCopied(false);
  }, [mode, pools, length, wordCount, capitalize, separator, addNumber]);

  // Première génération côté client uniquement (pas d'écart d'hydratation)
  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) generate();
  }, [ready, generate]);

  const copy = async () => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const strength = strengthOf(bits);
  const offline = formatDuration(Math.pow(2, bits - 1) / GUESSES_PER_SEC);

  const toggles: { label: string; on: boolean; set: (v: boolean) => void; hint: string }[] = [
    { label: 'Minuscules', on: useLower, set: setUseLower, hint: 'a / z' },
    { label: 'Majuscules', on: useUpper, set: setUseUpper, hint: 'A / Z' },
    { label: 'Chiffres', on: useDigits, set: setUseDigits, hint: '0 / 9' },
    { label: 'Symboles', on: useSymbols, set: setUseSymbols, hint: '! @ #' },
  ];

  return (
    <div className="bg-[#151922] border border-stone-800 rounded-2xl p-6 md:p-8 shadow-sm">
      {/* ── Sélecteur de mode ── */}
      <div className="flex gap-2 mb-6">
        {([
          ['chars', 'Mot de passe'],
          ['phrase', 'Phrase secrète'],
        ] as [Mode, string][]).map(([m, label]) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
              mode === m
                ? 'bg-blue-950/50 border-blue-800 text-blue-300'
                : 'bg-[#1b2130] border-stone-800 text-stone-400 hover:text-stone-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Sortie ── */}
      <div className="bg-[#0e1015] border border-stone-800 rounded-xl p-5 mb-4">
        <div
          className="font-mono text-lg md:text-xl text-stone-100 break-all select-all min-h-[3.5rem] flex items-center"
          aria-live="polite"
        >
          {value || (ready ? 'Sélectionnez au moins un jeu de caractères' : ' ')}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={generate}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-opacity shadow-sm"
        >
          ↻ Générer
        </button>
        <button
          onClick={copy}
          disabled={!value}
          className="border border-stone-700 hover:border-stone-600 disabled:opacity-40 px-5 py-2.5 rounded-xl font-semibold text-sm text-stone-300 transition-colors"
        >
          {copied ? '✓ Copié' : '⧉ Copier'}
        </button>
      </div>

      {/* ── Force ── */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2 gap-3 flex-wrap">
          <span className="text-sm text-stone-400">Entropie</span>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-stone-200">{bits.toFixed(1)} bits</span>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${strength.tone}`}>
              {strength.label}
            </span>
          </div>
        </div>
        <div className="h-2 rounded-full bg-stone-800 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${strength.bar} transition-all duration-300`}
            style={{ width: `${Math.min(100, strength.pct)}%` }}
          />
        </div>
        <p className="text-xs text-stone-500 mt-3">
          Temps de cassage moyen hors ligne, à raison de 10<sup>12</sup> essais par seconde (rig GPU contre un hash
          rapide) : <span className="text-stone-300 font-medium">{offline}</span>
        </p>
      </div>

      {/* ── Réglages ── */}
      {mode === 'chars' ? (
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="pg-length" className="text-sm text-stone-300">
                Longueur
              </label>
              <span className="font-mono text-sm text-stone-200">{length}</span>
            </div>
            <input
              id="pg-length"
              type="range"
              min={8}
              max={64}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between text-xs text-stone-600 mt-1">
              <span>8</span>
              <span>64</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-2">
            {toggles.map(({ label, on, set, hint }) => (
              <button
                key={label}
                onClick={() => set(!on)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-colors ${
                  on
                    ? 'bg-blue-950/40 border-blue-800 text-stone-100'
                    : 'bg-[#1b2130] border-stone-800 text-stone-500'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={on ? 'text-blue-400' : 'text-stone-600'}>{on ? '✓' : '✗'}</span>
                  {label}
                </span>
                <span className="font-mono text-xs text-stone-500">{hint}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setNoAmbiguous(!noAmbiguous)}
            className={`flex items-center gap-2 text-sm transition-colors ${
              noAmbiguous ? 'text-stone-200' : 'text-stone-500'
            }`}
          >
            <span className={noAmbiguous ? 'text-blue-400' : 'text-stone-600'}>{noAmbiguous ? '✓' : '✗'}</span>
            Exclure les caractères ambigus (I, l, 1, O, 0, guillemets)
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="pg-words" className="text-sm text-stone-300">
                Nombre de mots
              </label>
              <span className="font-mono text-sm text-stone-200">{wordCount}</span>
            </div>
            <input
              id="pg-words"
              type="range"
              min={3}
              max={12}
              value={wordCount}
              onChange={(e) => setWordCount(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between text-xs text-stone-600 mt-1">
              <span>3</span>
              <span>12</span>
            </div>
          </div>

          <div>
            <span className="text-sm text-stone-300 block mb-2">Séparateur</span>
            <div className="flex flex-wrap gap-2">
              {[
                ['-', 'tiret'],
                ['.', 'point'],
                ['_', 'underscore'],
                [' ', 'espace'],
              ].map(([sep, name]) => (
                <button
                  key={name}
                  onClick={() => setSeparator(sep)}
                  className={`px-4 py-2 rounded-lg text-sm border transition-colors ${
                    separator === sep
                      ? 'bg-blue-950/50 border-blue-800 text-blue-300'
                      : 'bg-[#1b2130] border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <span className="font-mono">{sep === ' ' ? '␣' : sep}</span>{' '}
                  <span className="text-xs text-stone-500">{name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setCapitalize(!capitalize)}
              className={`flex items-center gap-2 text-sm transition-colors ${capitalize ? 'text-stone-200' : 'text-stone-500'}`}
            >
              <span className={capitalize ? 'text-blue-400' : 'text-stone-600'}>{capitalize ? '✓' : '✗'}</span>
              Majuscule en début de mot
            </button>
            <button
              onClick={() => setAddNumber(!addNumber)}
              className={`flex items-center gap-2 text-sm transition-colors ${addNumber ? 'text-stone-200' : 'text-stone-500'}`}
            >
              <span className={addNumber ? 'text-blue-400' : 'text-stone-600'}>{addNumber ? '✓' : '✗'}</span>
              Ajouter un nombre à 4 chiffres
            </button>
          </div>

          <p className="text-xs text-stone-500 leading-relaxed">
            Liste de {WORDS.length} mots français sans accent, soit {Math.log2(WORDS.length).toFixed(1)} bits par mot.
            La majuscule et le séparateur ne comptent pas dans l&apos;entropie affichée : ils sont prévisibles pour
            un attaquant qui connaît la méthode, et l&apos;estimation reste donc honnête.
          </p>
        </div>
      )}

      {/* ── Garantie ── */}
      <div className="mt-8 pt-6 border-t border-stone-800 flex items-start gap-3">
        <span className="text-blue-400 mt-0.5 flex-shrink-0">◆</span>
        <p className="text-xs text-stone-500 leading-relaxed">
          Génération locale via <code className="text-stone-400">crypto.getRandomValues</code>, le générateur
          cryptographique de votre navigateur, avec rejet du biais modulo. Rien n&apos;est envoyé, journalisé ni
          stocké : vous pouvez couper votre connexion internet, la page continue de fonctionner.
        </p>
      </div>
    </div>
  );
}
