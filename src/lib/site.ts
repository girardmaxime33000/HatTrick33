export const site = {
  name: "HAT-TRICK33",
  baseline: "Casquettes de padel en séries numérotées.",
  collection: "Collection 01",
  seriesSize: 10,
  /** Mode aperçu avant lancement : site non indexé. Passer NEXT_PUBLIC_PREVIEW à "false" à l'ouverture. */
  preview: process.env.NEXT_PUBLIC_PREVIEW !== "false",
  shippingCents: 490,
  /** Délai d'expédition affiché sous le bouton d'achat, ex. "Expédiée sous 3 jours ouvrés". Vide : ligne masquée. */
  shippingDelay: "",
  /** Plage de tour de tête couverte par le réglage snapback. À confirmer avec le fabricant retenu. */
  sizeRange: "55 à 60 cm",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const euro = (cents: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(cents / 100);
