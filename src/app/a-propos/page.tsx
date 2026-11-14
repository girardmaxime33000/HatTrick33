import type { Metadata } from "next";
import Image from "next/image";
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
        {site.name} dessine des casquettes trucker pour les joueurs de padel. La marque part d'un constat : le padel est
        un sport de club, où l'on se retrouve autant sur la piste qu'au club-house, et la casquette y est l'accessoire le
        plus visible.
      </p>

      <h2>La démarche</h2>
      <p>
        Chacun des {products.length} modèles de la {site.collection} porte le nom d'un coup du padel et se décline dans un
        coloris qui lui est propre. Tous sont produits en {site.seriesSize} exemplaires numérotés et ne sont pas
        réédités. La collection est vendue en ligne et au comptoir de clubs partenaires, dont certains disposent d'une
        édition à leurs couleurs.
      </p>

      <h2>Les fondateurs</h2>
      <p>
        {site.name} a été fondée par Pierre Rocherie et Maxime Girard. Pierre Rocherie dessine les modèles, sélectionne
        les fabricants et développe le réseau de clubs partenaires. Maxime Girard dirige la boutique en ligne et la
        communication de la marque.
      </p>

      <Image src="/logo.png" alt={site.name} width={1200} height={929} sizes="220px" style={{ width: 220, height: "auto" }} />

      <p>
        <Link href="/collection">Découvrir la collection</Link> · <Link href="/clubs">Clubs partenaires</Link> ·{" "}
        <Link href="/journal">Journal</Link>
      </p>
    </article>
  );
}
