import Link from "next/link";
import { Cap } from "./Cap";
import { stockLabel, type Product } from "@/lib/products";
import { euro, site } from "@/lib/site";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/casquettes/${p.slug}`} className={`card${p.remaining <= 0 ? " card-sold" : ""}`}>
      <div className="card-visual">
        <span className={`tag${p.remaining > 0 && p.remaining <= 3 ? " tag-last" : ""}`}>{stockLabel(p, site.seriesSize)}</span>
        <Cap colors={p.colors} code={p.code} id={p.slug} title={`Casquette ${p.name}`} />
      </div>
      <div className="card-body">
        <h3>{p.name}</h3>
        <span>{euro(p.priceCents)}</span>
      </div>
      <p className="muted">{p.colorway}</p>
    </Link>
  );
}
