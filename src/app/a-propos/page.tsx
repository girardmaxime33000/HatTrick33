import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: "HAT-TRICK33 dessine des casquettes trucker pour les joueurs de padel, en séries numérotées.",
};

export default function APropos() {
  return (
    <article className="prose">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />
      <h1>À propos de {site.name}</h1>
      <p>
        {site.name} dessine des casquettes trucker pour les joueurs de padel. Le padel se joue à quatre et se termine au
        club-house. La casquette est ce qu'on y garde sur la tête après le match.
      </p>

      <h2>La collection</h2>
      <p>
        Chacun des {products.length} modèles de la {site.collection} porte le nom d'un coup du padel et a
        son propre coloris. Tous sont produits en {site.seriesSize} exemplaires numérotés et ne sont pas
        réédités. La collection est vendue en ligne et au comptoir de clubs partenaires, dont certains disposent d'une
        édition à leurs couleurs.
      </p>

      <h2>Les fondateurs</h2>
      <p>
        {site.name} a été fondée par Pierre Rocherie et Maxime Girard. Pierre Rocherie dessine les modèles, sélectionne
        les fabricants et développe le réseau de clubs partenaires. Maxime Girard dirige la boutique en ligne et la
        communication de la marque.
      </p>

      <p>
        <Link href="/collection">Voir la collection</Link> · <Link href="/clubs">Clubs partenaires</Link> ·{" "}
        <Link href="/journal">Journal</Link>
      </p>
    </article>
  );
}
