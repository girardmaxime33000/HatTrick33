import type { Metadata } from "next";
import Link from "next/link";
import { CapPhoto } from "@/components/CapPhoto";
import { getProduct } from "@/lib/products";
import { articles } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Les vingt coups du padel qui donnent leur nom aux modèles de la collection, expliqués : principe, geste et usage en match.",
};

export default function Journal() {
  return (
    <>
      <section className="section page-head">
        <p className="eyebrow">Journal</p>
        <h1>Les coups du padel expliqués</h1>
        <p className="lead-dark">
          Chaque modèle de la collection porte le nom d'un coup. Le journal en présente le principe, le geste et
          l'usage en match.
        </p>
      </section>
      <section className="section">
        <div className="journal-grid">
          {articles.map((a) => (
            <Link key={a.slug} href={`/journal/${a.slug}`} className="journal-card">
              <div className="journal-visual">
                <CapPhoto slug={a.slug} name={getProduct(a.slug)?.name ?? ""} sizes="(max-width: 600px) 100vw, 360px" />
              </div>
              <h2>{a.title}</h2>
              <p className="muted">{a.intro}</p>
              <span className="more">Lire l'article</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
