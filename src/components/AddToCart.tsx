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
        Dans ton panier — finaliser
      </Link>
    );
  }
  return (
    <button className="btn" onClick={() => add(slug)}>
      Prendre la mienne
    </button>
  );
}
