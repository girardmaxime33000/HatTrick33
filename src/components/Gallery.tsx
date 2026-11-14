"use client";

import { useState } from "react";
import { CapPhoto } from "./CapPhoto";

export function Gallery({ slug, name }: { slug: string; name: string }) {
  const [detail, setDetail] = useState(false);
  return (
    <div className="gallery">
      <div className="gallery-main">
        <CapPhoto slug={slug} name={name} detail={detail} sizes="(max-width: 820px) 100vw, 640px" priority />
      </div>
      <div className="gallery-thumbs">
        {[false, true].map((d) => (
          <button key={String(d)} aria-pressed={detail === d} aria-label={d ? "Afficher le détail de l'écusson" : "Afficher la vue d'ensemble"} onClick={() => setDetail(d)}>
            <CapPhoto slug={slug} name={name} detail={d} sizes="96px" />
          </button>
        ))}
      </div>
      <p className="muted small">Visuels de présentation réalisés à partir d'une photographie, avant production de la série.</p>
    </div>
  );
}
