import Image from "next/image";
import Link from "next/link";
import { Cap } from "@/components/Cap";
import { ProductCard } from "@/components/ProductCard";
import { ShotArt } from "@/components/ShotArt";
import { clubEdition, products } from "@/lib/products";
import { site } from "@/lib/site";

const rules = [
  [
    "01",
    "Dix exemplaires par modèle",
    "Chaque modèle est produit en dix exemplaires. Une fois la série vendue, il rejoint les archives de la maison et n'est pas réédité.",
  ],
  [
    "02",
    "Une numérotation individuelle",
    "Chaque casquette porte son numéro, de 01/10 à 10/10, attribué dans l'ordre des commandes.",
  ],
  [
    "03",
    "Un exemplaire par commande",
    "Chaque commande est limitée à un exemplaire par modèle, afin que la série soit portée par dix joueurs différents.",
  ],
  [
    "04",
    "Des éditions réservées aux clubs",
    "Certains modèles sont dessinés aux couleurs d'un club partenaire et vendus exclusivement à son comptoir.",
  ],
];

export default function Home() {
  const hero = products[0];
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            {site.collection} · {products.length} modèles · {site.seriesSize} exemplaires par modèle
          </p>
          <h1>
            De la piste <em>au club-house</em>
          </h1>
          <p className="lead">
            HAT-TRICK33 dessine des casquettes trucker pour les joueurs de padel. Chaque modèle est produit en{" "}
            {site.seriesSize} exemplaires numérotés et n'est jamais réédité.
          </p>
          <div className="actions">
            <Link href="#collection" className="btn btn-ball">
              Découvrir la collection
            </Link>
            <Link href="/clubs" className="btn btn-line">
              Clubs partenaires
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-cap">
            <Cap colors={hero.colors} code={hero.code} id="hero" title={`Casquette ${hero.name}`} />
            <Image className="sticker" src="/logo.png" alt="" width={1200} height={929} sizes="190px" />
          </div>
          <p className="hero-caption">
            {hero.name}, exemplaire n° 01/{site.seriesSize}
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

      <section className="section" id="collection">
        <header className="section-head">
          <p className="eyebrow">{site.collection}</p>
          <h2>Cinq modèles inspirés des coups du padel</h2>
          <p className="muted">
            Chaque casquette porte le nom d'un coup que tout joueur de club connaît. Ce vocabulaire commun fait de la
            collection un repère entre pratiquants, sur la piste comme en dehors.
          </p>
        </header>
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
          <Link href="/clubs" className="card card-club">
            <div className="card-visual">
              <span className="tag tag-light">En club uniquement</span>
              <Cap colors={clubEdition} code="CLUB" id="club" title="Édition club" />
            </div>
            <div className="card-body">
              <h3>Édition Club</h3>
              <span>En club</span>
            </div>
            <p className="muted">Un modèle aux couleurs du club, vendu exclusivement à son comptoir.</p>
          </Link>
        </div>
      </section>

      <section className="section shots">
        <header className="section-head">
          <p className="eyebrow">Les coups</p>
          <h2>Chaque casquette a son coup</h2>
          <p className="muted">
            Cinq personnages, cinq gestes du padel. Chacun porte le modèle auquel son coup a donné son nom.
          </p>
        </header>
        <div className="shots-grid">
          {products.map((p) => (
            <Link key={p.slug} href={`/casquettes/${p.slug}`} className="shot">
              <ShotArt slug={p.slug} />
              <h3>{p.name}</h3>
              <p className="muted">{p.shot}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section rules">
        <header className="section-head">
          <p className="eyebrow">Les principes de la maison</p>
          <h2>Une pièce conçue comme un signe d'appartenance</h2>
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
          <h2>Une collection présente là où le padel se vit</h2>
          <p className="muted">
            Le padel se pratique à quatre et se prolonge au club-house. La collection est disponible en ligne et au
            comptoir des clubs partenaires, au plus près des joueurs.
          </p>
          <div className="actions">
            <Link href="/clubs" className="btn">
              Voir les clubs partenaires
            </Link>
            <Link href="/clubs#devenir-partenaire" className="btn btn-ghost">
              Devenir club partenaire
            </Link>
          </div>
        </div>
        <blockquote>
          « Sur une piste, la casquette est la première chose que l'on remarque chez un joueur. »
          <cite>HAT-TRICK33, note d'intention</cite>
        </blockquote>
      </section>
    </>
  );
}
