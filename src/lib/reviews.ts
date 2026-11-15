export type Review = { author: string; rating: number; title: string; body: string };

/**
 * Avis clients, par modèle (clé = slug du produit). Uniquement des avis réels, recueillis après achat.
 * Tant qu'un modèle n'a pas d'avis, aucune note ni section d'avis n'est affichée.
 */
const reviews: Record<string, Review[]> = {};

export const reviewsFor = (slug: string): Review[] => reviews[slug] ?? [];

export function ratingOf(slug: string) {
  const list = reviewsFor(slug);
  if (!list.length) return null;
  return { average: list.reduce((s, r) => s + r.rating, 0) / list.length, count: list.length };
}
