import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { Assurances } from "@/components/Assurances";
import { Breadcrumb } from "@/components/Breadcrumb";
import { BuyBar } from "@/components/BuyBar";
import { Gallery } from "@/components/Gallery";
import { ProductCard } from "@/components/ProductCard";
import { Reviews } from "@/components/Reviews";
import { Stars } from "@/components/Stars";
import { getArticle } from "@/lib/journal";
import { getProduct, products, stockLabel } from "@/lib/products";
import { ratingOf, reviewsFor } from "@/lib/reviews";
import { euro, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return p ? { title: p.name, description: `${p.shot} ${p.hook}`, openGraph: { images: [`/caps/${p.slug}.webp`] } } : {};
}

export default async function ProductPage({ params }: Props) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const soldOut = p.remaining <= 0;
  const rating = ratingOf(p.slug);
  const article = getArticle(p.slug);
  const i = products.indexOf(p);
  const others = [1, 2, 3, 4].map((k) => products[(i + k) % products.length]);

  return (
    <>
      <section className="product">
        <Gallery slug={p.slug} name={p.name} />
        <div className="product-info">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: site.collection, href: "/collection" }, { label: p.name }]} />
          <h1>{p.name}</h1>
          {rating && (
            <a href="#avis" className="rating-link">
              <Stars value={rating.average} /> {rating.count} avis
            </a>
          )}
          <p className="hook">{p.hook}</p>
          <p className="price">
            {euro(p.priceCents)} <span className="stock">{stockLabel(p, site.seriesSize)}</span>
          </p>
          <AddToCart slug={p.slug} soldOut={soldOut} />
          <Assurances />
          <p>
            {p.story} {article && <Link href={`/journal/${p.slug}`}>Le coup en détail</Link>}
          </p>
          <dl>
            <div>
              <dt>Coloris</dt>
              <dd>{p.colorway}</dd>
            </div>
            <div>
              <dt>Forme</dt>
              <dd>Trucker, façade mousse, filet arrière respirant</dd>
            </div>
            <div>
              <dt>Réglage</dt>
              <dd>Snapback, taille unique</dd>
            </div>
            <div>
              <dt>Tour de tête</dt>
              <dd>
                {site.sizeRange} environ. <Link href="/guide-des-tailles">Guide des tailles</Link>
              </dd>
            </div>
            <div>
              <dt>Entretien</dt>
              <dd>
                Lavage à la main, à l'eau froide. <Link href="/journal/entretien-casquette">Conseils d'entretien</Link>
              </dd>
            </div>
            <div>
              <dt>Série</dt>
              <dd>
                {site.seriesSize} exemplaires, sans réédition. Numéro attribué dans l'ordre des commandes, un exemplaire
                par commande.
              </dd>
            </div>
          </dl>
          {site.contactEmail && (
            <p className="question">
              Une question ? Écrivez à{" "}
              <a href={`mailto:${site.contactEmail}?subject=${encodeURIComponent(p.name)}`}>{site.contactEmail}</a>.
            </p>
          )}
        </div>
      </section>
      <Reviews reviews={reviewsFor(p.slug)} />
      <section className="section others">
        <header className="section-head">
          <h2>Autres modèles</h2>
        </header>
        <div className="grid">
          {others.map((o) => (
            <ProductCard key={o.slug} p={o} />
          ))}
        </div>
        <div className="actions center">
          <Link href="/collection" className="btn btn-ghost">
            Voir les {products.length} modèles
          </Link>
        </div>
      </section>
      <BuyBar p={p} />
    </>
  );
}
