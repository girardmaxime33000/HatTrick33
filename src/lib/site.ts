export const site = {
  name: "HAT-TRICK33",
  baseline: "Casquettes de padel en séries numérotées.",
  collection: "Collection 01",
  seriesSize: 10,
  /** Mode aperçu avant lancement : avis d'exemple affichés, site non indexé. Passer NEXT_PUBLIC_PREVIEW à "false" à l'ouverture. */
  preview: process.env.NEXT_PUBLIC_PREVIEW !== "false",
  shippingCents: 490,
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const euro = (cents: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(cents / 100);
