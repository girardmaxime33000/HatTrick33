import Image from "next/image";
import Link from "next/link";
import { CapPhoto } from "@/components/CapPhoto";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { DemoNotice, ReviewCard } from "@/components/Reviews";
import { products } from "@/lib/products";
import { featuredReviews } from "@/lib/reviews";
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
  const featured = products.slice(0, 8);
  const reviews = featuredReviews();
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>
            Ayez plus de style <em>que le mec en face</em>
          </h1>
          <p className="lead">
            HAT-TRICK33 dessine des casquettes trucker pour les joueurs de padel. Chaque modèle est produit en{" "}
            {site.seriesSize} exemplaires numérotés et n'est jamais réédité.
          </p>
          <div className="actions">
            <Link href="/collection" className="btn btn-ball">
              Découvrir la collection
            </Link>
            <Link href="/clubs" className="btn btn-line">
              Clubs partenaires
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-cap">
            <CapPhoto slug={hero.slug} name={hero.name} sizes="(max-width: 820px) 340px, 480px" priority />
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
          <h2>{products.length} modèles inspirés des coups du padel</h2>
          <p className="muted">
            Chaque casquette porte le nom d'un coup que tout joueur de club connaît. Ce vocabulaire commun fait de la
            collection un repère entre pratiquants, sur la piste comme en dehors.
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

      {reviews.length > 0 && (
        <section className="section">
          <header className="section-head">
            <p className="eyebrow">Avis clients</p>
            <h2>L'avis des joueurs</h2>
            <DemoNotice />
          </header>
          <ul className="reviews-list reviews-row">
            {reviews.map((r) => (
              <ReviewCard key={r.author} r={r} />
            ))}
          </ul>
        </section>
      )}

      <section className="section split club-band">
        <div>
          <p className="eyebrow">En ligne et en club</p>
          <h2>Une collection présente là où le padel se vit</h2>
          <p className="muted">
            Le padel se pratique à quatre et se prolonge au club-house. La collection est disponible en ligne et au
            comptoir des clubs partenaires, au plus près des joueurs. Certains clubs disposent d'une édition à leurs
            couleurs, vendue exclusivement sur place.
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
        <figure className="ambiance">
          <Image src="/ambiance.webp" alt="Joueur ajustant sa casquette avant un match" width={1000} height={1000} sizes="(max-width: 820px) 100vw, 480px" />
          <figcaption>Photographie d'illustration</figcaption>
        </figure>
      </section>

      <Newsletter />
    </>
  );
}
