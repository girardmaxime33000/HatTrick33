import Image from "next/image";

/** Visuel produit (public/caps). `detail` affiche le gros plan sur l'écusson. */
export function CapPhoto({ slug, name, detail, sizes, priority }: { slug: string; name: string; detail?: boolean; sizes: string; priority?: boolean }) {
  return (
    <Image
      className="cap-photo"
      src={`/caps/${slug}${detail ? "-detail" : ""}.webp`}
      alt={detail ? `Détail de l'écusson, casquette ${name}` : `Casquette ${name}`}
      width={detail ? 900 : 1000}
      height={detail ? 900 : 1000}
      sizes={sizes}
      priority={priority}
    />
  );
}
