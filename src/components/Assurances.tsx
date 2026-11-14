import Link from "next/link";
import { euro, site } from "@/lib/site";

/** Bloc de réassurance affiché sous le bouton d'achat. */
export function Assurances() {
  const items: [string, React.ReactNode][] = [
    ["Exemplaire numéroté", `Série de ${site.seriesSize}, sans réédition`],
    ["Livraison", `${euro(site.shippingCents)} en France métropolitaine`],
    [
      "Retour sous 14 jours",
      <>
        Modalités dans les <Link href="/cgv">conditions de vente</Link>
      </>,
    ],
    ["Paiement sécurisé", "Carte bancaire, via Stripe"],
  ];
  return (
    <ul className="assurances">
      {items.map(([title, text]) => (
        <li key={title}>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="10" cy="10" r="10" fill="currentColor" />
            <path d="M5.5 10.5l3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>
            <b>{title}</b>
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}
