export type CapColors = {
  panel: string;
  mesh: string;
  visor: string;
  patch: string;
  patchInk: string;
};

export type Product = {
  slug: string;
  name: string;
  code: string;
  hook: string;
  story: string;
  colorway: string;
  priceCents: number;
  /** Exemplaires restants sur la série. À mettre à jour à chaque vente tant qu'il n'y a pas de back-office. */
  remaining: number;
  colors: CapColors;
};

export const products: Product[] = [
  {
    slug: "la-bandeja",
    name: "La Bandeja",
    code: "BDJ",
    hook: "Le coup qui tient le filet. La casquette qui tient le club-house.",
    story:
      "La bandeja, c'est le coup de ceux qui ne reculent pas. Pas le plus spectaculaire, le plus respecté. Celle-ci se porte pareil : sans forcer, et tout le monde a compris.",
    colorway: "Vert club / crème",
    priceCents: 4200,
    remaining: 10,
    colors: { panel: "#F4EFE4", mesh: "#0E3B2C", visor: "#0E3B2C", patch: "#D7F23C", patchInk: "#12201A" },
  },
  {
    slug: "la-vibora",
    name: "La Víbora",
    code: "VBR",
    hook: "Coupée, vicieuse, impossible à ignorer.",
    story:
      "Un coup qui mord après le rebond. Noir intégral, visière jaune balle : on te voit arriver depuis le parking, et c'est le but.",
    colorway: "Noir / jaune balle",
    priceCents: 4200,
    remaining: 10,
    colors: { panel: "#161616", mesh: "#161616", visor: "#D7F23C", patch: "#D7F23C", patchInk: "#161616" },
  },
  {
    slug: "por-tres",
    name: "Por Tres",
    code: "PX3",
    hook: "Pour ceux qui sortent la balle. Et qui le font savoir.",
    story:
      "Le smash qui passe la grille latérale. Tu ne le réussis pas tous les jours, mais tu en parles toute la semaine. Bleu piste, filet blanc.",
    colorway: "Bleu piste / blanc",
    priceCents: 4200,
    remaining: 10,
    colors: { panel: "#1E4BD2", mesh: "#F7F5EF", visor: "#1E4BD2", patch: "#F7F5EF", patchInk: "#1E4BD2" },
  },
  {
    slug: "punto-de-oro",
    name: "Punto de Oro",
    code: "ORO",
    hook: "40-40. Un seul point. Tu sais qui le joue.",
    story:
      "Le point en or ne se donne pas, il se prend. Crème et or, pour celui ou celle vers qui le partenaire se tourne quand ça compte.",
    colorway: "Crème / or",
    priceCents: 4200,
    remaining: 10,
    colors: { panel: "#F4EFE4", mesh: "#DCCDAA", visor: "#B58E33", patch: "#B58E33", patchInk: "#FFF9E8" },
  },
  {
    slug: "la-chiquita",
    name: "La Chiquita",
    code: "CHQ",
    hook: "Discrète dans les pieds. Pas sur la tête.",
    story:
      "La balle courte qui casse le rythme et fait monter au filet. Le coup des joueurs malins. Terre cuite et crème, pour l'après-match en terrasse.",
    colorway: "Terre cuite / crème",
    priceCents: 4200,
    remaining: 10,
    colors: { panel: "#C8623A", mesh: "#F4EFE4", visor: "#9E4423", patch: "#F4EFE4", patchInk: "#9E4423" },
  },
];

export const clubEdition: CapColors = {
  panel: "#12201A",
  mesh: "#12201A",
  visor: "#12201A",
  patch: "#F4EFE4",
  patchInk: "#12201A",
};

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
