import { euro, site } from "@/lib/site";

export function AnnounceBar() {
  return (
    <p className="announce">
      Livraison {euro(site.shippingCents)} en France métropolitaine. Retour sous 14 jours.
    </p>
  );
}
