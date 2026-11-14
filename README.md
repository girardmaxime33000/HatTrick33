# HAT-TRICK33 — boutique padel

Boutique en ligne de casquettes trucker pour joueurs de padel. Next.js (App Router) + Stripe Checkout.

Positionnement de marque : [`docs/positionnement.md`](docs/positionnement.md).

## Lancer

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Configurer

| Quoi | Où |
|---|---|
| Modèles, prix, coloris, exemplaires restants | `src/lib/products.ts` |
| Nom, taille des séries, frais de port | `src/lib/site.ts` |
| Clubs partenaires | `src/app/clubs/page.tsx` (tableau `clubs`) |
| Paiement | `STRIPE_SECRET_KEY` dans `.env.local` |
| E-mail des demandes clubs | `NEXT_PUBLIC_CONTACT_EMAIL` |

Le stock (`remaining`) est statique : le décrémenter à la main après chaque vente tant qu'il n'y a pas de webhook Stripe ni de base de données.

Les visuels produit sont des illustrations SVG (`src/components/Cap.tsx`), à remplacer par les photos.
