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
  /** Description courte du coup qui donne son nom au modèle. */
  shot: string;
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
    hook: "Le coup de référence du jeu au filet.",
    shot: "Volée haute jouée à plat, pour conserver la position au filet.",
    story:
      "La bandeja est le coup des joueurs qui tiennent le filet avec régularité. Ce modèle en reprend l'esprit avec une façade crème, un filet et une visière vert profond : une allure sobre, qui s'accorde à toutes les tenues.",
    colorway: "Vert club / crème",
    priceCents: 4200,
    remaining: 10,
    colors: { panel: "#F4EFE4", mesh: "#0E3B2C", visor: "#0E3B2C", patch: "#D7F23C", patchInk: "#12201A" },
  },
  {
    slug: "la-vibora",
    name: "La Víbora",
    code: "VBR",
    hook: "Un noir intégral relevé d'une visière jaune balle.",
    shot: "Volée haute coupée, à l'effet latéral marqué.",
    story:
      "La víbora est un coup coupé et rapide, dont le rebond surprend l'adversaire. Le modèle associe un noir intégral à une visière jaune balle, pour une silhouette affirmée et immédiatement identifiable.",
    colorway: "Noir / jaune balle",
    priceCents: 4200,
    remaining: 10,
    colors: { panel: "#161616", mesh: "#161616", visor: "#D7F23C", patch: "#D7F23C", patchInk: "#161616" },
  },
  {
    slug: "por-tres",
    name: "Por Tres",
    code: "PX3",
    hook: "Le bleu des pistes, en hommage au smash le plus spectaculaire du jeu.",
    shot: "Smash dont le rebond sort de la piste par la grille latérale.",
    story:
      "Le por tres désigne le smash qui sort de la piste par la grille latérale. Ce modèle reprend le bleu des terrains et l'associe à un filet blanc, dans un esprit résolument sportif.",
    colorway: "Bleu piste / blanc",
    priceCents: 4200,
    remaining: 10,
    colors: { panel: "#1E4BD2", mesh: "#F7F5EF", visor: "#1E4BD2", patch: "#F7F5EF", patchInk: "#1E4BD2" },
  },
  {
    slug: "punto-de-oro",
    name: "Punto de Oro",
    code: "ORO",
    hook: "Crème et or, les couleurs du point décisif.",
    shot: "Point décisif, joué à 40 partout.",
    story:
      "À 40 partout, le punto de oro décide du jeu en un seul échange. Le modèle en retient l'élégance, avec une façade crème, un filet sable et une visière dorée.",
    colorway: "Crème / or",
    priceCents: 4200,
    remaining: 10,
    colors: { panel: "#F4EFE4", mesh: "#DCCDAA", visor: "#B58E33", patch: "#B58E33", patchInk: "#FFF9E8" },
  },
  {
    slug: "la-chiquita",
    name: "La Chiquita",
    code: "CHQ",
    hook: "Une teinte terre cuite, pensée pour l'après-match.",
    shot: "Balle courte et lente, jouée dans les pieds de l'adversaire.",
    story:
      "La chiquita est une balle courte et précise, jouée dans les pieds de l'adversaire. Le modèle adopte une teinte terre cuite et un filet crème, des couleurs chaudes qui trouvent naturellement leur place en terrasse.",
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
