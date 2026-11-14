import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guide des tailles",
  description: "Mesurer son tour de tête et régler sa casquette trucker HAT-TRICK33.",
};

export default function GuideDesTailles() {
  return (
    <article className="prose">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Guide des tailles" }]} />
      <h1>Guide des tailles</h1>
      <p>
        Les casquettes de la collection sont proposées en taille unique. Le réglage snapback, à l'arrière, couvre un tour
        de tête de {site.sizeRange} environ.
      </p>

      <h2>Mesurer son tour de tête</h2>
      <ol>
        <li>Munissez-vous d'un mètre ruban souple ou, à défaut, d'une ficelle.</li>
        <li>Passez-le autour de la tête, à l'horizontale, environ un centimètre au-dessus des sourcils et des oreilles.</li>
        <li>Relevez la mesure sans serrer. Avec une ficelle, reportez la longueur obtenue sur une règle.</li>
        <li>Arrondissez au centimètre supérieur.</li>
      </ol>

      <h2>Régler la casquette</h2>
      <p>
        La fermeture snapback se compose de deux languettes à pressions. Chaque cran modifie le tour de tête de quelques
        millimètres. La casquette est bien réglée lorsqu'elle tient en place pendant un déplacement rapide, sans marquer
        le front.
      </p>

      <h2>Un doute sur la taille</h2>
      <p>
        Si la casquette ne convient pas, elle peut être retournée dans les 14 jours suivant sa réception. Les modalités
        figurent sur la page <Link href="/retours">Retours et remboursements</Link>.
      </p>
    </article>
  );
}
