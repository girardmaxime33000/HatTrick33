import type { Metadata } from "next";
import { Cap } from "@/components/Cap";
import { ClubForm } from "@/components/ClubForm";
import { clubEdition } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clubs partenaires",
  description: "Où trouver les casquettes HAT-TRICK33 en club de padel, et comment devenir club partenaire.",
};

/** Ajouter ici les clubs partenaires signés : { name, city, edition? } */
const clubs: { name: string; city: string; edition?: string }[] = [];

export default function Clubs() {
  return (
    <>
      <section className="section page-head">
        <p className="eyebrow">Clubs partenaires</p>
        <h1>Au comptoir, entre les tubes de balles et la tireuse.</h1>
        <p className="lead-dark">
          Une sélection du {site.drop} est disponible dans les clubs partenaires. Certains ont aussi leur propre édition,
          aux couleurs du club, qu'on ne trouve nulle part ailleurs.
        </p>
      </section>

      <section className="section">
        {clubs.length === 0 ? (
          <div className="empty">
            <h2>Les premiers clubs arrivent.</h2>
            <p className="muted">
              On sélectionne en ce moment les clubs du lancement. Ton club devrait en faire partie ? Montre cette page à
              l'accueil.
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
          <h2>Une casquette que seuls tes membres peuvent porter.</h2>
          <ul className="bullets">
            <li>
              <b>Édition club.</b> Un modèle aux couleurs de ton club, en série de {site.seriesSize} numérotée, vendu
              uniquement chez toi.
            </li>
            <li>
              <b>Sélection du drop.</b> Les modèles de la collection en cours, au comptoir, sans passer par le site.
            </li>
            <li>
              <b>Petites séries.</b> Rien ne dort en réserve : quand la série est vendue, on passe à la suivante.
            </li>
          </ul>
          <div className="club-cap">
            <Cap colors={clubEdition} code="CLUB" id="club-page" title="Édition club" />
          </div>
        </div>
        <ClubForm />
      </section>
    </>
  );
}
