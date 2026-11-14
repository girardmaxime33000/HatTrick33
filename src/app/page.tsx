import Link from "next/link";
import { Cap } from "@/components/Cap";
import { ProductCard } from "@/components/ProductCard";
import { clubEdition, products } from "@/lib/products";
import { site } from "@/lib/site";

const rules = [
  ["01", "Dix exemplaires. Pas onze.", "Chaque modèle sort en série de 10. Quand c'est parti, c'est parti : aucun réassort, aucune réédition."],
  ["02", "Numérotée à l'intérieur.", "De 01/10 à 10/10. Ton numéro est attribué à la commande, dans l'ordre d'arrivée."],
  ["03", "Une par joueur.", "Un seul exemplaire de chaque modèle par commande. Dix casquettes, dix têtes différentes."],
  ["04", "Certaines ne sortent pas du club.", "Les éditions club se trouvent uniquement au comptoir du club dont elles portent les couleurs."],
];

export default function Home() {
  const hero = products[0];
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            {site.drop} · {products.length} modèles · {site.seriesSize} exemplaires chacun
          </p>
          <h1>
            Tout le monde a une raquette. <em>Peu ont la casquette.</em>
          </h1>
          <p className="lead">
            Des trucker pensées pour celles et ceux qui vivent padel, sur la piste comme au club-house. Séries de{" "}
            {site.seriesSize}, numérotées, jamais rééditées.
          </p>
          <div className="actions">
            <Link href="#drop" className="btn btn-ball">
              Voir le drop
            </Link>
            <Link href="/clubs" className="btn btn-line">
              Trouver un club
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <Cap colors={hero.colors} code={hero.code} id="hero" title={`Casquette ${hero.name}`} />
          <p className="hero-caption">
            {hero.name} — n° 01/{site.seriesSize}
          </p>
        </div>
      </section>

      <div className="strip" aria-hidden="true">
        <div>
          {[...products, ...products, ...products].map((p, i) => (
            <span key={i}>{p.name}</span>
          ))}
        </div>
      </div>

      <section className="section" id="drop">
        <header className="section-head">
          <p className="eyebrow">{site.drop}</p>
          <h2>Cinq coups. Cinq casquettes.</h2>
          <p className="muted">
            Chaque modèle porte le nom d'un coup. Ceux qui jouent reconnaissent. Les autres demandent, et c'est là que la
            conversation commence.
          </p>
        </header>
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
          <Link href="/clubs" className="card card-club">
            <div className="card-visual">
              <span className="tag tag-light">Uniquement en club</span>
              <Cap colors={clubEdition} code="CLUB" id="club" title="Édition club" />
            </div>
            <div className="card-body">
              <h3>Édition Club</h3>
              <span>Au comptoir</span>
            </div>
            <p className="muted">Aux couleurs de ton club. Introuvable en ligne.</p>
          </Link>
        </div>
      </section>

      <section className="section rules">
        <header className="section-head">
          <p className="eyebrow">Les règles de la maison</p>
          <h2>Ce n'est pas un équipement. C'est un signe.</h2>
        </header>
        <ol>
          {rules.map(([n, t, d]) => (
            <li key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">En ligne et en club</p>
          <h2>Le match dure une heure trente. Le club-house, toute la soirée.</h2>
          <p className="muted">
            Le padel se joue à quatre et se raconte à dix. Nos casquettes sont en ligne, et au comptoir des clubs
            partenaires, là où on se retrouve après le dernier point.
          </p>
          <div className="actions">
            <Link href="/clubs" className="btn">
              Où les trouver
            </Link>
            <Link href="/clubs#devenir-partenaire" className="btn btn-ghost">
              Tu gères un club ?
            </Link>
          </div>
        </div>
        <blockquote>
          « Belle casquette. Tu joues où ? »<cite>— la seule question qu'on cherche à provoquer</cite>
        </blockquote>
      </section>
    </>
  );
}
