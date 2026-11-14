import type { Metadata } from "next";
import { CapPhoto } from "@/components/CapPhoto";
import { ClubForm } from "@/components/ClubForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clubs partenaires",
  description: "Les clubs de padel partenaires de HAT-TRICK33 et les modalités pour proposer la collection dans votre club.",
};

/** Ajouter ici les clubs partenaires signés : { name, city, edition? } */
const clubs: { name: string; city: string; edition?: string }[] = [];

export default function Clubs() {
  return (
    <>
      <section className="section page-head">
        <p className="eyebrow">Clubs partenaires</p>
        <h1>La collection, au comptoir des clubs partenaires</h1>
        <p className="lead-dark">
          Une sélection de la {site.collection} est proposée dans les clubs partenaires. Certains disposent en outre d'une
          édition à leurs couleurs, vendue exclusivement sur place.
        </p>
      </section>

      <section className="section">
        {clubs.length === 0 ? (
          <div className="empty">
            <h2>Les premiers clubs partenaires seront annoncés prochainement</h2>
            <p className="muted">
              La sélection des clubs du lancement est en cours. Les responsables de club peuvent dès à présent déposer
              une demande au moyen du formulaire ci-dessous.
            </p>
          </div>
        ) : (
          <ul className="club-list">
            {clubs.map((c) => (
              <li key={c.name}>
                <h3>{c.name}</h3>
                <p className="muted">{c.city}</p>
                {c.edition && <span className="tag">Édition club : {c.edition}</span>}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="section split dark" id="devenir-partenaire">
        <div>
          <p className="eyebrow">Pour les clubs</p>
          <h2>Une édition aux couleurs de votre club</h2>
          <ul className="bullets">
            <li>
              <b>Édition club.</b> Un modèle dessiné aux couleurs du club, produit en {site.seriesSize} exemplaires
              numérotés et vendu exclusivement à son comptoir.
            </li>
            <li>
              <b>Sélection de la collection.</b> Les modèles de la collection en cours, proposés à vos membres sur place.
            </li>
            <li>
              <b>Petites séries.</b> Des volumes limités, renouvelés à chaque nouvelle série, sans stock à immobiliser.
            </li>
          </ul>
          <div className="club-cap">
            <CapPhoto slug="edition-club" name="Édition club" sizes="260px" />
          </div>
        </div>
        <ClubForm />
      </section>
    </>
  );
}
