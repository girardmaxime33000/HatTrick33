import { site } from "@/lib/site";

/** Contenu du guide des tailles, partagé entre la page dédiée et la fiche produit. */
export function SizeGuide({ heading: H = "h2" }: { heading?: "h2" | "h3" }) {
  return (
    <>
      <p>
        Taille unique. Le réglage snapback, à l'arrière, couvre un tour de tête de {site.sizeRange} environ.
      </p>
      <H>Mesurer son tour de tête</H>
      <ol>
        <li>Prenez un mètre ruban souple ou, à défaut, une ficelle.</li>
        <li>Passez-le autour de la tête, à l'horizontale, un centimètre au-dessus des sourcils et des oreilles.</li>
        <li>Relevez la mesure sans serrer. Avec une ficelle, reportez la longueur sur une règle.</li>
        <li>Arrondissez au centimètre supérieur.</li>
      </ol>
      <H>Régler la casquette</H>
      <p>
        La fermeture snapback a deux languettes à pressions. Chaque cran change le tour de tête de quelques millimètres.
        Elle est bien réglée quand elle tient pendant un déplacement rapide sans marquer le front.
      </p>
    </>
  );
}
