export const site = {
  name: "HAT-TRICK33",
  baseline: "Le signe des joueurs.",
  drop: "Drop 01",
  seriesSize: 10,
  shippingCents: 490,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const euro = (cents: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(cents / 100);
