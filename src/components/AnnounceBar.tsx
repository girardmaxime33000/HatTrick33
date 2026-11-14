import { site } from "@/lib/site";

const items = [
  `Séries de ${site.seriesSize} exemplaires numérotés`,
  "Livraison en France métropolitaine",
  "Retour sous 14 jours",
  "Paiement sécurisé",
];

export function AnnounceBar() {
  return (
    <ul className="announce">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
