"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { CapPhoto, type CapView } from "./CapPhoto";

const views: CapView[] = ["main", "detail", "worn"];
const labels: Record<CapView, string> = { main: "Vue d'ensemble", detail: "Détail de l'écusson", worn: "Casquette portée" };

/**
 * Carrousel des visuels d'un modèle : glissement au doigt, flèches à la souris.
 * `href` rend chaque image cliquable (cartes) ; `thumbs` affiche les vignettes (fiche produit).
 */
export function CapSlider({ slug, name, sizes, href, thumbs, priority }: { slug: string; name: string; sizes: string; href?: string; thumbs?: boolean; priority?: boolean }) {
  const track = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const go = (k: number) => track.current?.scrollTo({ left: k * track.current.clientWidth, behavior: "smooth" });
  const onScroll = () => {
    const el = track.current;
    if (el) setI(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="slider">
      <div className="slider-frame">
        <div className="slides" ref={track} onScroll={onScroll}>
          {views.map((v, k) => {
            const photo = <CapPhoto slug={slug} name={name} view={v} sizes={sizes} priority={priority && k === 0} />;
            return href ? (
              <Link key={v} href={href} className="slide" tabIndex={k === 0 ? undefined : -1}>
                {photo}
              </Link>
            ) : (
              <div key={v} className="slide">
                {photo}
              </div>
            );
          })}
        </div>
        <button className="slider-nav slider-prev" aria-label="Image précédente" disabled={i === 0} onClick={() => go(i - 1)}>
          ‹
        </button>
        <button className="slider-nav slider-next" aria-label="Image suivante" disabled={i === views.length - 1} onClick={() => go(i + 1)}>
          ›
        </button>
        {!thumbs && (
          <div className="slider-dots" aria-hidden="true">
            {views.map((v, k) => (
              <i key={v} data-on={k === i || undefined} />
            ))}
          </div>
        )}
      </div>
      {thumbs && (
        <div className="gallery-thumbs">
          {views.map((v, k) => (
            <button key={v} aria-pressed={k === i} aria-label={labels[v]} onClick={() => go(k)}>
              <CapPhoto slug={slug} name={name} view={v} sizes="96px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
