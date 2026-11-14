import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Assurances } from "@/components/Assurances";
import { BuyBar } from "@/components/BuyBar";
import { ProductCard } from "@/components/ProductCard";
import { AddToCart } from "@/components/AddToCart";
import { StripeBadge } from "@/components/StripeBadge";
import { ShotArt } from "@/components/ShotArt";
import { Cap } from "@/components/Cap";
import { getProduct, products, stockLabel } from "@/lib/products";
import { euro, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return p ? { title: p.name, description: p.hook } : {};
}

export default async function ProductPage({ params }: Props) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const soldOut = p.remaining <= 0;

  return (
    <>
    <section className="product">
      <div className="product-visuals">
        <div className="product-visual">
          <Cap colors={p.colors} code={p.code} id={`pdp-${p.slug}`} title={`Casquette ${p.name}`} />
        </div>
        <figure className="product-shot">
          <ShotArt slug={p.slug} />
          <figcaption>
            <b>{p.name}.</b> {p.shot}{" "}
            <Link href={`/journal/${p.slug}`}>Lire l'article</Link>
          </figcaption>
        </figure>
      </div>
      <div className="product-info">
        <Link href="/#collection" className="back">
          ← {site.collection}
        </Link>
        <p className="eyebrow">
          Série de {site.seriesSize} exemplaires · {stockLabel(p, site.seriesSize)}
        </p>
        <h1>{p.name}</h1>
        <p className="hook">{p.hook}</p>
        <p className="price">{euro(p.priceCents)}</p>
        <AddToCart slug={p.slug} soldOut={soldOut} />
        <p className="muted small">Un exemplaire par commande. Le numéro, de 01 à {site.seriesSize}, est attribué dans l'ordre des commandes.</p>
        <Assurances />
        <StripeBadge />
        <p>{p.story}</p>
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
            <dt>Édition</dt>
            <dd>
              {site.seriesSize} exemplaires numérotés, sans réédition
            </dd>
          </div>
          <div>
            <dt>Livraison</dt>
            <dd>{euro(site.shippingCents)} en France métropolitaine</dd>
          </div>
        </dl>
      </div>
    </section>
    <section className="section others">
      <header className="section-head">
        <p className="eyebrow">{site.collection}</p>
        <h2>Les autres modèles de la collection</h2>
      </header>
      <div className="grid">
        {products
          .filter((o) => o.slug !== p.slug)
          .map((o) => (
            <ProductCard key={o.slug} p={o} />
          ))}
      </div>
    </section>
    <BuyBar p={p} />
    </>
  );
}
