import { CapSlider } from "./CapSlider";

export function Gallery({ slug, name }: { slug: string; name: string }) {
  return (
    <div className="gallery">
      <CapSlider slug={slug} name={name} sizes="(max-width: 820px) 100vw, 640px" thumbs priority />
      <p className="muted small">
        Visuels de présentation. La photo portée montre la forme, pas le coloris du modèle. Les photos des casquettes
        produites les remplaceront.
      </p>
    </div>
  );
}
