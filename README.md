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
| Modèles, textes, coloris | `src/data/products.json` |
| Prix, exemplaires restants | `src/lib/products.ts` |
| Avis clients (réels, par modèle) | `src/lib/reviews.ts` |
| Mode aperçu (site non indexé) | `NEXT_PUBLIC_PREVIEW=false` pour le désactiver au lancement |
| Nom, taille des séries, frais de port, plage de tour de tête | `src/lib/site.ts` |
| Clubs partenaires | `src/lib/clubs.ts` |
| Paiement | `STRIPE_SECRET_KEY` dans `.env.local` |
| E-mail des demandes clubs | `NEXT_PUBLIC_CONTACT_EMAIL` |
| Articles du journal | `src/lib/journal.ts` |
| Inscription « prochaine collection » | `NEWSLETTER_WEBHOOK_URL` (section masquée sans cette variable) |
| Lien Instagram en pied de page | `NEXT_PUBLIC_INSTAGRAM_URL` |

Le stock (`remaining`) est statique : le décrémenter à la main après chaque vente tant qu'il n'y a pas de webhook Stripe ni de base de données.

## Visuels produit

Les visuels de `public/caps` sont générés à partir d'une photo de trucker vierge (`assets/base-trucker.jpg`), recolorée selon les coloris de `src/data/products.json`, avec l'écusson du modèle incrusté. Pour les régénérer après une modification des coloris :

```bash
node scripts/render_patches.js /tmp/patches
```

```bash
python scripts/render_caps.py /tmp/patches
```

Le script Python nécessite `numpy` et `pillow`. Ces visuels sont à remplacer par les photos des casquettes produites.

Crédits photo (licence Unsplash) : Fabio T. (trucker de base), Mediamodifier (photo portée, `public/porte.webp`, commune à tous les modèles).

## Avant le lancement

- Définir `NEXT_PUBLIC_PREVIEW=false`.
- Ajouter les avis réels dans `src/lib/reviews.ts` au fur et à mesure.
- Remplacer les visuels de présentation par les photos des casquettes produites.
