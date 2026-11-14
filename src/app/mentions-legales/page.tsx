import type { Metadata } from "next";
import Link from "next/link";
import { legal } from "@/lib/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <article className="legal">
      <p className="eyebrow">Informations légales</p>
      <h1>Mentions légales</h1>
      <p className="muted small">Dernière mise à jour : {legal.updated}</p>

      <h2>Éditeur du site</h2>
      <p>
        Le site est édité par <b>{legal.company}</b>, {legal.status.toLowerCase()}.
      </p>
      <ul>
        <li>Dirigeants : {legal.directors.join(" et ")}</li>
        <li>Directeur de la publication : {legal.publisher}</li>
        <li>
          Forme juridique, capital social, siège social, numéro d'immatriculation au RCS et numéro de TVA
          intracommunautaire : publiés sur cette page dès l'immatriculation de la société.
        </li>
        <li>
          Contact :{" "}
          {site.contactEmail ? (
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          ) : (
            "adresse de contact publiée sur cette page à l'ouverture des ventes."
          )}
        </li>
      </ul>

      <h2>Hébergeur</h2>
      <p>
        {legal.host.name}, {legal.host.address} —{" "}
        <a href={legal.host.url} rel="noopener noreferrer" target="_blank">
          vercel.com
        </a>
        .
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Le nom {legal.company}, le logo, les textes, les visuels et les modèles de casquettes présentés sur le site sont
        protégés. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite préalable est
        interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Les données collectées sont celles nécessaires au traitement des commandes (nom, adresse de livraison, adresse
        e-mail) et aux demandes des clubs (nom du club, ville, coordonnées de contact). Elles sont utilisées uniquement
        pour exécuter la commande, répondre à la demande et respecter les obligations légales et comptables. Elles ne
        sont ni vendues ni cédées à des tiers.
      </p>
      <p>
        Le paiement est opéré par Stripe : les données bancaires sont saisies sur la page de paiement de Stripe et ne
        sont jamais transmises à {legal.company} ni conservées par elle.
      </p>
      <p>
        Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés,
        vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité
        sur vos données. Ces droits s'exercent auprès de l'éditeur, aux coordonnées de contact ci-dessus. Vous pouvez
        également introduire une réclamation auprès de la CNIL (cnil.fr).
      </p>

      <h2>Cookies</h2>
      <p>
        Le site n'utilise aucun cookie publicitaire ni traceur de mesure d'audience. Le contenu du panier est conservé
        dans le stockage local de votre navigateur, uniquement pour le fonctionnement du site.
      </p>

      <h2>Conditions de vente</h2>
      <p>
        Les ventes réalisées sur le site sont régies par les{" "}
        <Link href="/cgv">conditions générales de vente</Link>.
      </p>
    </article>
  );
}
