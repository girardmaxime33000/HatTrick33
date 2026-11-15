"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { colors, products, type Color } from "@/lib/products";

type Sort = "collection" | "name" | "stock";

export function CollectionGrid() {
  const [color, setColor] = useState<Color | "all">("all");
  const [sort, setSort] = useState<Sort>("collection");
  const available = colors.filter((c) => products.some((p) => p.color === c.id));
  let list = color === "all" ? [...products] : products.filter((p) => p.color === color);
  if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "fr"));
  // Derniers exemplaires d'abord, séries épuisées en fin de liste.
  if (sort === "stock") list.sort((a, b) => (a.remaining || 99) - (b.remaining || 99));

  return (
    <>
      <div className="toolbar">
        <div className="filters" role="group" aria-label="Filtrer par couleur">
          <button aria-pressed={color === "all"} onClick={() => setColor("all")}>
            Toutes
          </button>
          {available.map((c) => (
            <button key={c.id} aria-pressed={color === c.id} onClick={() => setColor(c.id)}>
              <i style={{ background: c.hex }} />
              {c.label}
            </button>
          ))}
        </div>
        <label className="sort">
          Trier par
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="collection">Ordre de la collection</option>
            <option value="name">Nom, de A à Z</option>
            <option value="stock">Derniers exemplaires</option>
          </select>
        </label>
      </div>
      <p className="count" aria-live="polite">
        {list.length} {list.length > 1 ? "modèles" : "modèle"}
      </p>
      <div className="grid">
        {list.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </>
  );
}
