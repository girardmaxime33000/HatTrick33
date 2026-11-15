import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
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
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: site.collection }]} />
        <h1>{products.length} modèles, {site.seriesSize} exemplaires chacun</h1>
        <p className="lead-dark">
          Chaque casquette porte le nom d'un coup du padel. Toutes sont numérotées. Aucune ne sera rééditée.
        </p>
      </section>
      <section className="section">
        <CollectionGrid />
      </section>
      <section className="section editorial">
        <h2>Avant de choisir</h2>
        <div>
          <h3>Qu'est-ce qu'une trucker ?</h3>
          <p>
            La casquette trucker se reconnaît à sa façade en mousse, haute et structurée, et à son arrière en filet. Elle
            est apparue aux États-Unis dans les années 1970, lorsque des entreprises agricoles et des fournisseurs de
            matériel l'offraient aux routiers et aux exploitants. La façade lisse servait à porter leur logo.
          </p>
        </div>
        <div>
          <h3>Sur la piste</h3>
          <p>
            Le filet arrière laisse circuler l'air et évacue la chaleur pendant l'effort. La visière protège du soleil
            sur les pistes extérieures et limite l'éblouissement lors des balles hautes, lobs et smashs. Le réglage
            snapback maintient la casquette en place pendant les déplacements. Le{" "}
            <Link href="/guide-des-tailles">guide des tailles</Link> précise le tour de tête couvert.
          </p>
        </div>
        <div>
          <h3>Choisir son coloris</h3>
          <p>
            Les teintes claires, crème, blanc ou bleu ciel, chauffent moins en plein soleil. Les teintes sombres se
            salissent moins vite. Le filtre par couleur, en haut de page, trie les modèles selon la couleur de la façade.
          </p>
        </div>
        <div>
          <h3>Les séries</h3>
          <p>
            Chaque modèle est produit en {site.seriesSize} exemplaires numérotés. Les séries épuisées ne sont pas
            rééditées et restent visibles dans les <Link href="/archives">archives</Link>. Pour le lavage, voir les{" "}
            <Link href="/journal/entretien-casquette">conseils d'entretien</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
