import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { Cap } from "@/components/Cap";
import { getProduct, products } from "@/lib/products";
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
    <section className="product">
      <div className="product-visual">
        <Cap colors={p.colors} code={p.code} id={`pdp-${p.slug}`} title={`Casquette ${p.name}`} />
      </div>
      <div className="product-info">
        <Link href="/#drop" className="back">
          ← {site.drop}
        </Link>
        <p className="eyebrow">
          Série de {site.seriesSize} · {soldOut ? "épuisée" : `${p.remaining} restantes`}
        </p>
        <h1>{p.name}</h1>
        <p className="hook">{p.hook}</p>
        <p className="price">{euro(p.priceCents)}</p>
        <AddToCart slug={p.slug} soldOut={soldOut} />
        <p className="muted small">Une par joueur. Ton numéro (01 à {site.seriesSize}) est attribué à la commande.</p>
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
  );
}
