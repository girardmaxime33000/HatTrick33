import data from "@/data/products.json";

export type Family = "clair" | "sombre" | "vif";

export type Product = {
  slug: string;
  name: string;
  code: string;
  family: Family;
  colorway: string;
  hook: string;
  /** Description courte du coup qui donne son nom au modèle. */
  shot: string;
  story: string;
  priceCents: number;
  /** Exemplaires restants sur la série. À mettre à jour à chaque vente tant qu'il n'y a pas de back-office. */
  remaining: number;
};

const PRICE_CENTS = 4200;
const SERIES = 10;
/** Stock restant par modèle lorsqu'il diffère de la série complète, ex. { "la-bandeja": 3 }. */
const stock: Record<string, number> = {};

export const products: Product[] = data.map((p) => ({
  slug: p.slug,
  name: p.name,
  code: p.code,
  family: p.family as Family,
  colorway: p.colorway,
  hook: p.hook,
  shot: p.shot,
  story: p.story,
  priceCents: PRICE_CENTS,
  remaining: stock[p.slug] ?? SERIES,
}));

export const families: { id: Family; label: string }[] = [
  { id: "clair", label: "Tons clairs" },
  { id: "sombre", label: "Tons sombres" },
  { id: "vif", label: "Couleurs vives" },
];

/** Libellé de disponibilité, avec mise en avant des derniers exemplaires. */
export const stockLabel = (p: Product, seriesSize: number) =>
  p.remaining <= 0
    ? "Série épuisée"
    : p.remaining === 1
      ? "Dernier exemplaire"
      : p.remaining <= 3
        ? `Derniers exemplaires : ${p.remaining}`
        : `${p.remaining} / ${seriesSize} disponibles`;

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
