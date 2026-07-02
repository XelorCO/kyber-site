# kyber-security.fr / Site officiel de Kyber

Site vitrine + vente de licences du gestionnaire de mots de passe post-quantique Kyber.
Live : https://kyber-security.fr (Vercel, domaine Ionos).

## Stack

- Next.js (App Router) + TypeScript + Tailwind
- **Paiement** : Stripe Checkout (prix inline `price_data`, mode LIVE) / webhook `checkout.session.completed`
- **Licences** : Ed25519 (`lib/license.ts`, clé privée en variable d'env `LICENSE_PRIVATE_KEY`)
- **Email** : Resend (`lib/email.ts`)
- **Chiffrement de fichiers web** : `/chiffrer-fichier`, 100% navigateur (`lib/kyberfile.ts`, format KYBP)

## Tarifs (juillet 2026)

| Offre | Prix | Modèle |
|---|---|---|
| Gratuit | 0 EUR / 10 mots de passe | / |
| Pro | 29 EUR (prix de lancement, 39 EUR à la sortie macOS + extension) | Paiement unique, licence v1.x à vie |
| Famille | 49 EUR / 5 postes | Paiement unique |
| Équipe | 19 EUR/utilisateur/an, min. 5 postes | Abonnement annuel sans engagement (contact) |
| Entreprise | Sur devis | / |

Les montants du checkout sont dans `app/api/create-checkout-session/route.ts`
(`unit_amount`, en centimes). Le tier (`pro` / `famille`) transite par `metadata`
et détermine la licence générée par le webhook.

## Flux d'achat

1. Modale homepage → `POST /api/create-checkout-session` (name, email, tier)
2. Stripe Checkout → paiement → webhook `/api/webhooks/stripe`
3. Webhook : `generateLicenseKey({name, email, tier})` → `sendLicenseEmail` (Resend)
4. Le client colle la clé dans l'app : Paramètres → Licence Kyber → Activer

## Distribution de l'app

- Binaires dans `public/downloads/` (installateurs Windows signés minisign)
- Manifest updater : `public/updates/latest.json` / à mettre à jour à CHAQUE release (voir README du repo `kyber-app`)

## SEO / GEO

- `app/sitemap.ts`, `app/robots.ts`, JSON-LD par page, breadcrumbs sur le blog
- `public/llms.txt` + `public/llms-full.txt` : documentation pour les assistants IA / à maintenir à chaque changement de prix ou de fonctionnalité

## Directives design (Enzo)

- Thème sombre graphite (`#0e1015`, cartes `#151922`), accent bleu → indigo
- AUCUN emoji sur le site / symboles typographiques uniquement (◆ ✓ ✗ → ↓)
- AUCUN tiret long (— –) dans les textes / utiliser « / »
- Curseur custom losange (gem)

## Dev

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # vérification avant push
```

Variables d'env requises (Vercel) : `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`,
`STRIPE_WEBHOOK_SECRET`, `RESEND_API_KEY`, `LICENSE_PRIVATE_KEY`, `NEXT_PUBLIC_BASE_URL`, `ADMIN_EMAIL`.
