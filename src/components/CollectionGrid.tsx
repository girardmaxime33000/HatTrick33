"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { families, products, type Family } from "@/lib/products";

export function CollectionGrid() {
  const [family, setFamily] = useState<Family | "all">("all");
  const list = family === "all" ? products : products.filter((p) => p.family === family);
  return (
    <>
      <div className="filters" role="group" aria-label="Filtrer par teinte">
        <button aria-pressed={family === "all"} onClick={() => setFamily("all")}>
          Tous les modèles <span>{products.length}</span>
        </button>
        {families.map((f) => (
          <button key={f.id} aria-pressed={family === f.id} onClick={() => setFamily(f.id)}>
            {f.label} <span>{products.filter((p) => p.family === f.id).length}</span>
          </button>
        ))}
      </div>
      <div className="grid">
        {list.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </>
  );
}
