import Link from "next/link";
import { CapPhoto } from "@/components/CapPhoto";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { clubs } from "@/lib/clubs";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

const rules = [
  ["Dix exemplaires", "Chaque modèle est produit dix fois. Une fois les dix vendus, il n'est pas refait."],
  ["Un numéro", `Chaque casquette porte le sien, de 01/${site.seriesSize} à ${site.seriesSize}/${site.seriesSize}, attribué dans l'ordre des commandes.`],
  ["Un par commande", "Une commande ne peut contenir qu'un exemplaire d'un même modèle. Dix exemplaires, dix joueurs."],
];

export default function Home() {
  const hero = products[0];
  const featured = products.slice(0, 8);
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>Ayez plus de style que le mec en face</h1>
          <p className="lead">
            Des casquettes trucker pour les joueurs de padel. {products.length} modèles, {site.seriesSize} exemplaires
            numérotés de chacun, jamais réédités.
          </p>
          <div className="actions">
            <Link href="/collection" className="btn btn-ball">
              Voir la collection
            </Link>
          </div>
        </div>
        <Link href={`/casquettes/${hero.slug}`} className="hero-visual">
          <CapPhoto slug={hero.slug} name={hero.name} sizes="(max-width: 820px) 340px, 480px" priority />
          <p className="hero-caption">
            {hero.name}. {hero.hook}
          </p>
        </Link>
      </section>

      <section className="section" id="collection">
        <header className="section-head">
          <h2>{site.collection}</h2>
          <p className="muted">
            Chaque casquette porte le nom d'un coup du padel : bandeja, víbora, por tres. Son code en trois lettres figure sur
            l'écusson.
          </p>
        </header>
        <div className="grid">
          {featured.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
        <div className="actions center">
          <Link href="/collection" className="btn">
            Voir les {products.length} modèles
          </Link>
        </div>
      </section>

      <section className="section rules">
        <header className="section-head">
          <h2>Comment fonctionne une série</h2>
        </header>
        <ol>
          {rules.map(([t, d]) => (
            <li key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section club-band">
        <h2>En club</h2>
        <p className="muted">
          {clubs.length > 0
            ? "Une partie de la collection est vendue au comptoir des clubs partenaires. Certains ont une édition à leurs couleurs, vendue uniquement sur place."
            : `Nous dessinons pour les clubs une édition à leurs couleurs, en ${site.seriesSize} exemplaires, vendue uniquement à leur comptoir. Les premiers clubs partenaires sont en cours de sélection.`}
        </p>
        <div className="actions">
          {clubs.length > 0 && (
            <Link href="/clubs" className="btn">
              Voir les clubs
            </Link>
          )}
          <Link href="/clubs#devenir-partenaire" className="btn btn-ghost">
            Proposer mon club
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
