import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Retours et remboursements",
  description: "Délai de rétractation de 14 jours, modalités de retour et de remboursement des casquettes HAT-TRICK33.",
};

export default function Retours() {
  return (
    <article className="prose">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Retours et remboursements" }]} />
      <h1>Retours et remboursements</h1>
      <p>
        Vous disposez de 14 jours à compter de la réception de votre commande pour changer d'avis, sans avoir à motiver
        votre décision.
      </p>

      <h2>Comment retourner une casquette</h2>
      <ol>
        <li>
          Informez-nous de votre décision par e-mail
          {site.contactEmail ? (
            <>
              {" "}
              à <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            </>
          ) : (
            <>
              , à l'adresse indiquée dans les <Link href="/mentions-legales">mentions légales</Link>
            </>
          )}
          , en précisant le modèle et la date de commande.
        </li>
        <li>Renvoyez la casquette dans les 14 jours suivant cette notification, non portée et dans son état d'origine.</li>
        <li>Conservez la preuve de dépôt du colis.</li>
      </ol>

      <h2>Remboursement</h2>
      <p>
        Le remboursement intervient dans les 14 jours suivant votre notification, par le moyen de paiement utilisé lors
        de la commande. Il comprend le prix de la casquette et les frais de livraison initiaux. Il peut être différé
        jusqu'à la réception du colis ou de la preuve de son expédition. Les frais de retour restent à votre charge.
      </p>

      <h2>Produit défectueux</h2>
      <p>
        Toutes les casquettes bénéficient de la garantie légale de conformité de deux ans. Les séries n'étant pas
        rééditées, un produit défectueux est remplacé sous réserve de disponibilité et, à défaut, remboursé.
      </p>

      <p>
        Le détail de ces dispositions figure aux articles 7 et 8 des{" "}
        <Link href="/cgv">conditions générales de vente</Link>.
      </p>
    </article>
  );
}
