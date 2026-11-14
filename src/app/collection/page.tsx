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
          Chaque casquette porte le nom d'un coup du padel et se décline dans un coloris qui lui est propre. Toutes sont
          numérotées et ne seront pas rééditées.
        </p>
      </section>
      <section className="section">
        <CollectionGrid />
      </section>
      <section className="section editorial">
        <h2>Bien choisir sa casquette trucker</h2>
        <div>
          <h3>Qu'est-ce qu'une trucker ?</h3>
          <p>
            La casquette trucker se reconnaît à sa façade en mousse, haute et structurée, et à son arrière en filet. Elle
            est apparue aux États-Unis dans les années 1970, lorsque des entreprises agricoles et des fournisseurs de
            matériel l'offraient aux routiers et aux exploitants. Sa façade lisse, conçue à l'origine pour recevoir un
            logo, en a fait depuis un support d'expression apprécié de la mode et du sport.
          </p>
        </div>
        <div>
          <h3>Une forme adaptée au padel</h3>
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
            Les teintes claires, crème, blanc ou bleu ciel, renvoient la chaleur et conviennent aux parties jouées en
            plein soleil. Les teintes sombres s'accordent à toutes les tenues et se portent facilement en dehors de la
            piste. Les couleurs vives permettent de se distinguer et de reprendre les couleurs d'une paire ou d'un club.
          </p>
        </div>
        <div>
          <h3>Des séries numérotées</h3>
          <p>
            Chaque modèle est produit en {site.seriesSize} exemplaires numérotés. Les séries épuisées ne sont pas
            rééditées et rejoignent les <Link href="/archives">archives</Link>. L'entretien d'une trucker demande peu de
            soin, à condition de respecter quelques{" "}
            <Link href="/journal/entretien-casquette">règles simples</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
