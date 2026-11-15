"use client";

import Link from "next/link";
import { useState } from "react";
import { CapPhoto } from "@/components/CapPhoto";
import { useCart } from "@/components/CartProvider";
import { getProduct, type Product } from "@/lib/products";
import { euro, site } from "@/lib/site";

export default function Panier() {
  const { slugs, remove, ready } = useCart();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const items = slugs.map(getProduct).filter((p): p is Product => !!p);
  const subtotal = items.reduce((s, p) => s + p.priceCents, 0);

  const checkout = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slugs }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Paiement indisponible.");
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Paiement indisponible.");
      setLoading(false);
    }
  };

  return (
    <section className="section cart">
      <h1>Panier</h1>
      {!ready ? null : items.length === 0 ? (
        <div className="empty">
          <h2>Votre panier est vide</h2>
          <Link href="/collection" className="btn">
            Voir la collection
          </Link>
        </div>
      ) : (
        <div className="cart-grid">
          <ul>
            {items.map((p) => (
              <li key={p.slug}>
                <div className="cart-thumb">
                  <CapPhoto slug={p.slug} name={p.name} sizes="110px" />
                </div>
                <div>
                  <h3>
                    <Link href={`/casquettes/${p.slug}`}>{p.name}</Link>
                  </h3>
                  <p className="muted">{p.colorway}</p>
                  <button className="link" onClick={() => remove(p.slug)}>
                    Retirer
                  </button>
                </div>
                <span>{euro(p.priceCents)}</span>
              </li>
            ))}
          </ul>
          <aside>
            <p>
              <span>Sous-total</span>
              <span>{euro(subtotal)}</span>
            </p>
            <p>
              <span>Livraison France</span>
              <span>{euro(site.shippingCents)}</span>
            </p>
            <p className="total">
              <span>Total TTC</span>
              <span>{euro(subtotal + site.shippingCents)}</span>
            </p>
            <button className="btn" onClick={checkout} disabled={loading}>
              {loading ? "Redirection…" : "Payer"}
            </button>
            {error && (
              <p className="error" role="alert">
                {error}
              </p>
            )}
            <p className="muted small">
              Paiement par carte sur la page sécurisée de Stripe. En payant, vous acceptez les{" "}
              <Link href="/cgv">conditions générales de vente</Link>. <Link href="/retours">Retour sous 14 jours</Link>.
            </p>
          </aside>
        </div>
      )}
    </section>
  );
}
