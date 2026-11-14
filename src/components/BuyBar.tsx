import { AddToCart } from "./AddToCart";
import type { Product } from "@/lib/products";
import { euro } from "@/lib/site";

/** Barre d'achat fixe, affichée sur mobile uniquement. */
export function BuyBar({ p }: { p: Product }) {
  return (
    <div className="buybar">
      <div>
        <b>{p.name}</b>
        <span>{euro(p.priceCents)}</span>
      </div>
      <AddToCart slug={p.slug} soldOut={p.remaining <= 0} />
    </div>
  );
}
