import Link from "next/link";
import { CapPhoto } from "./CapPhoto";
import { Stars } from "./Stars";
import { stockLabel, type Product } from "@/lib/products";
import { ratingOf } from "@/lib/reviews";
import { euro, site } from "@/lib/site";

export function ProductCard({ p }: { p: Product }) {
  const rating = ratingOf(p.slug);
  return (
    <Link href={`/casquettes/${p.slug}`} className={`card${p.remaining <= 0 ? " card-sold" : ""}`}>
      <div className="card-visual">
        <span className={`tag${p.remaining > 0 && p.remaining <= 3 ? " tag-last" : ""}`}>{stockLabel(p, site.seriesSize)}</span>
        <CapPhoto slug={p.slug} name={p.name} sizes="(max-width: 600px) 50vw, 320px" />
      </div>
      <div className="card-body">
        <h3>{p.name}</h3>
        <span>{euro(p.priceCents)}</span>
      </div>
      <p className="muted">{p.colorway}</p>
      {rating && (
        <p className="card-rating">
          <Stars value={rating.average} />
          <span className="muted">({rating.count})</span>
        </p>
      )}
    </Link>
  );
}
