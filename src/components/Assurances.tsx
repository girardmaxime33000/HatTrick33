import Link from "next/link";
import { euro, site } from "@/lib/site";

/** Conditions d'achat, affichées sous le bouton d'achat. */
export function Assurances() {
  return (
    <ul className="assurances">
      {site.shippingDelay && <li>{site.shippingDelay}</li>}
      <li>Livraison {euro(site.shippingCents)}, France métropolitaine</li>
      <li>
        <Link href="/retours">Retour sous 14 jours</Link>
      </li>
      <li>Paiement par carte, via Stripe</li>
    </ul>
  );
}
