import data from "@/data/products.json";

export type Color = "creme" | "blanc" | "noir" | "gris" | "bleu" | "vert" | "jaune" | "orange" | "rouge" | "rose" | "violet";

export type Product = {
  slug: string;
  name: string;
  code: string;
  /** Couleur dominante de la façade, utilisée par le filtre de la collection. */
  color: Color;
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
  color: p.color as Color,
  colorway: p.colorway,
  hook: p.hook,
  shot: p.shot,
  story: p.story,
  priceCents: PRICE_CENTS,
  remaining: stock[p.slug] ?? SERIES,
}));

export const colors: { id: Color; label: string; hex: string }[] = [
  { id: "creme", label: "Crème", hex: "#EFE6D2" },
  { id: "blanc", label: "Blanc", hex: "#FFFFFF" },
  { id: "noir", label: "Noir", hex: "#161616" },
  { id: "gris", label: "Gris", hex: "#6F747B" },
  { id: "bleu", label: "Bleu", hex: "#1E4BD2" },
  { id: "vert", label: "Vert", hex: "#1F7A5C" },
  { id: "jaune", label: "Jaune", hex: "#E0A526" },
  { id: "orange", label: "Orange", hex: "#C8623A" },
  { id: "rouge", label: "Rouge", hex: "#D12B2B" },
  { id: "rose", label: "Rose", hex: "#E9BFC0" },
  { id: "violet", label: "Violet", hex: "#6B3FA0" },
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
