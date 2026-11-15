import type { Metadata } from "next";
import Link from "next/link";
import { legal } from "@/lib/legal";
import { euro, site } from "@/lib/site";

export const metadata: Metadata = { title: "Conditions générales de vente" };

export default function CGV() {
  const contact = site.contactEmail ? (
    <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
  ) : (
    <>
      l'adresse indiquée dans les <Link href="/mentions-legales">mentions légales</Link>
    </>
  );

  return (
    <article className="legal">
      <h1>Conditions générales de vente</h1>
      <p className="muted small">Dernière mise à jour : {legal.updated}</p>

      <h2>1. Objet et champ d'application</h2>
      <p>
        Les présentes conditions générales de vente (CGV) régissent les ventes de casquettes conclues à distance sur le
        site entre {legal.company}, {legal.status.toLowerCase()} (le « Vendeur », identifié dans les{" "}
        <Link href="/mentions-legales">mentions légales</Link>), et toute personne physique majeure agissant en qualité
        de consommateur (le « Client »). Toute commande implique l'acceptation sans réserve des CGV en vigueur au jour
        de la commande. Les ventes réalisées au comptoir des clubs partenaires sont conclues avec le club concerné et ne
        relèvent pas des présentes CGV.
      </p>

      <h2>2. Produits</h2>
      <p>
        Les casquettes sont proposées en séries limitées de {site.seriesSize} exemplaires numérotés par modèle, sans
        réédition. Le numéro de l'exemplaire est attribué par le Vendeur dans l'ordre des commandes et ne peut pas être
        choisi. Chaque commande est limitée à un exemplaire par modèle. Les offres sont valables dans la limite des
        exemplaires disponibles. Les visuels du site sont les plus fidèles possible ; de légères différences de teinte
        peuvent exister selon l'écran utilisé.
      </p>

      <h2>3. Prix</h2>
      <p>
        Les prix sont indiqués en euros, toutes taxes comprises, hors frais de livraison. Les frais de livraison sont
        indiqués dans le panier avant la validation de la commande. Le prix applicable est celui affiché au moment de
        la commande.
      </p>

      <h2>4. Commande</h2>
      <p>
        Le Client sélectionne ses articles, vérifie le contenu de son panier, puis valide sa commande en procédant au
        paiement. La vente est conclue à la confirmation du paiement. Un e-mail de confirmation est adressé au Client.
        Si un exemplaire commandé se révèle indisponible, le Client en est informé sans délai et intégralement
        remboursé au plus tard dans les 14 jours.
      </p>

      <h2>5. Paiement</h2>
      <p>
        Le paiement est exigible en totalité à la commande. Il s'effectue par carte bancaire via la plateforme de
        paiement sécurisé Stripe. Le Vendeur n'a accès à aucune donnée bancaire du Client.
      </p>

      <h2>6. Livraison</h2>
      <p>
        Les commandes sont livrées en France métropolitaine, à l'adresse indiquée par le Client, moyennant des frais de{" "}
        {euro(site.shippingCents)} par commande. La livraison intervient au plus tard dans les 30 jours suivant la
        commande. En cas de dépassement de ce délai, le Client peut résoudre la vente dans les conditions prévues par le
        Code de la consommation et obtenir le remboursement des sommes versées. Les risques sont transférés au Client à
        la remise du colis. Il appartient au Client de signaler au transporteur et au Vendeur tout colis endommagé ou
        manquant.
      </p>

      <h2>7. Droit de rétractation</h2>
      <p>
        Le Client dispose d'un délai de 14 jours à compter de la réception de sa commande pour exercer son droit de
        rétractation, sans avoir à motiver sa décision. Il en informe le Vendeur par une déclaration dénuée d'ambiguïté
        envoyée à {contact}, par exemple au moyen du formulaire ci-dessous.
      </p>
      <p>
        Le produit doit être renvoyé au plus tard 14 jours après la notification de la rétractation, dans son état
        d'origine, non porté, complet. Les frais de retour sont à la charge du Client. Le Vendeur rembourse la totalité
        des sommes versées, frais de livraison standard inclus, dans les 14 jours suivant la notification ; il peut
        différer le remboursement jusqu'à la réception du produit ou la preuve de son expédition. Le remboursement est
        effectué par le moyen de paiement utilisé lors de la commande. La responsabilité du Client peut être engagée en
        cas de dépréciation du produit résultant de manipulations autres que celles nécessaires pour s'assurer de sa
        nature et de ses caractéristiques.
      </p>
      <blockquote className="legal-form">
        <b>Formulaire de rétractation</b>
        <br />À l'attention de {legal.company}.
        <br />
        Je notifie par la présente ma rétractation du contrat portant sur la vente du produit suivant : …
        <br />
        Commandé le … / reçu le …
        <br />
        Nom et adresse du Client : …
        <br />
        Date et signature (en cas d'envoi sur papier) : …
      </blockquote>

      <h2>8. Garanties légales</h2>
      <p>
        Le Client bénéficie de la garantie légale de conformité (articles L.217-3 et suivants du Code de la
        consommation), pendant deux ans à compter de la délivrance du produit, et de la garantie des vices cachés
        (articles 1641 à 1649 du Code civil), pendant deux ans à compter de la découverte du vice. En cas de défaut de
        conformité, le Client peut demander la réparation ou le remplacement du produit ou, si ces solutions sont
        impossibles ou non mises en œuvre dans un délai de 30 jours, une réduction du prix ou la résolution de la vente.
        Les séries n'étant pas rééditées, le remplacement s'entend sous réserve de disponibilité ; à défaut, le produit
        est remboursé. Les demandes sont à adresser à {contact}.
      </p>

      <h2>9. Réserve de propriété</h2>
      <p>Les produits demeurent la propriété du Vendeur jusqu'au paiement complet du prix.</p>

      <h2>10. Responsabilité</h2>
      <p>
        Le Vendeur ne saurait être tenu responsable de l'inexécution du contrat due à un cas de force majeure, au fait
        du Client ou au fait imprévisible et insurmontable d'un tiers.
      </p>

      <h2>11. Données personnelles</h2>
      <p>
        Les données collectées lors de la commande sont traitées dans les conditions décrites dans les{" "}
        <Link href="/mentions-legales">mentions légales</Link>.
      </p>

      <h2>12. Réclamations et médiation</h2>
      <p>
        Toute réclamation est à adresser en priorité au Vendeur, à {contact}. À défaut de solution amiable, le Client
        peut recourir gratuitement à un médiateur de la consommation. Le nom et les coordonnées du médiateur dont
        relève le Vendeur seront indiqués ici dès l'immatriculation de la société.
      </p>

      <h2>13. Droit applicable</h2>
      <p>
        Les présentes CGV sont soumises au droit français. En cas de litige, et à défaut d'accord amiable, les tribunaux
        français sont compétents dans les conditions de droit commun.
      </p>
    </article>
  );
}
