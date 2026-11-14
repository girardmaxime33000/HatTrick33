import type { Metadata } from "next";
import { CollectionGrid } from "@/components/CollectionGrid";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.collection,
  description: `Les ${products.length} modèles de la ${site.collection} : casquettes trucker de padel en séries de ${site.seriesSize} exemplaires numérotés.`,
};

export default function Collection() {
  return (
    <>
      <section className="section page-head">
        <p className="eyebrow">{site.collection}</p>
        <h1>{products.length} modèles, {site.seriesSize} exemplaires chacun</h1>
        <p className="lead-dark">
          Chaque casquette porte le nom d'un coup du padel et se décline dans un coloris qui lui est propre. Toutes sont
          numérotées et ne seront pas rééditées.
        </p>
      </section>
      <section className="section">
        <CollectionGrid />
      </section>
    </>
  );
}
