"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export function AddToCart({ slug, soldOut }: { slug: string; soldOut: boolean }) {
  const { slugs, add } = useCart();
  if (soldOut) {
    return (
      <button className="btn" disabled>
        Série épuisée
      </button>
    );
  }
  if (slugs.includes(slug)) {
    return (
      <Link href="/panier" className="btn btn-ghost">
        Voir le panier
      </Link>
    );
  }
  return (
    <button className="btn" onClick={() => add(slug)}>
      Ajouter au panier
    </button>
  );
}
