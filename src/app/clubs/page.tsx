import type { Metadata } from "next";
import { CapPhoto } from "@/components/CapPhoto";
import { ClubForm } from "@/components/ClubForm";
import { clubs, hasClubEdition } from "@/lib/clubs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clubs partenaires",
  description: "Les clubs de padel partenaires de HAT-TRICK33 et les modalités pour proposer la collection dans votre club.",
};


export default function Clubs() {
  return (
    <>
      <section className="section page-head">
        <h1>Clubs partenaires</h1>
        <p className="lead-dark">
          Une partie de la {site.collection} est vendue au comptoir des clubs partenaires.
          {hasClubEdition && " Certains ont une édition à leurs couleurs, vendue uniquement sur place."}
        </p>
      </section>

      <section className="section">
        {clubs.length === 0 ? (
          <div className="empty">
            <h2>Aucun club partenaire pour l'instant</h2>
            <p className="muted">
              Les premiers clubs sont en cours de sélection. Vous gérez un club ? Le formulaire est juste en dessous.
            </p>
          </div>
        ) : (
          <ul className="club-list">
            {clubs.map((c) => (
              <li key={c.name}>
                <h3>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noopener noreferrer">
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </h3>
                <p className="muted">{c.city}</p>
                {c.edition && <span className="tag">Édition club : {c.edition}</span>}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="section split dark" id="devenir-partenaire">
        <div>
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
              <b>Petites quantités.</b> {site.seriesSize} exemplaires par modèle : peu de stock à avancer.
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
