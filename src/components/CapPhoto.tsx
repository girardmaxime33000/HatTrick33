import Image from "next/image";

export type CapView = "main" | "detail" | "worn";

const src = (slug: string, view: CapView) =>
  view === "worn" ? "/porte.webp" : `/caps/${slug}${view === "detail" ? "-detail" : ""}.webp`;

const alt = (name: string, view: CapView) =>
  view === "detail" ? `Détail de l'écusson, casquette ${name}` : view === "worn" ? "Casquette trucker portée" : `Casquette ${name}`;

/** Visuel produit. `view` : vue d'ensemble, gros plan sur l'écusson, ou casquette portée. */
export function CapPhoto({ slug, name, view = "main", sizes, priority }: { slug: string; name: string; view?: CapView; sizes: string; priority?: boolean }) {
  const side = view === "detail" ? 900 : 1000;
  return <Image className="cap-photo" src={src(slug, view)} alt={alt(name, view)} width={side} height={side} sizes={sizes} priority={priority} />;
}
