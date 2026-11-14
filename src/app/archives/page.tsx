import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Archives",
  description: "Les séries épuisées de HAT-TRICK33. Chaque modèle est produit en dix exemplaires et n'est pas réédité.",
};

export default function Archives() {
  const sold = products.filter((p) => p.remaining <= 0);
  return (
    <>
      <section className="section page-head">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Archives" }]} />
        <h1>Les séries épuisées</h1>
        <p className="lead-dark">
          Chaque modèle est produit en {site.seriesSize} exemplaires et n'est pas réédité. Une fois la série vendue, il
          rejoint cette page, qui conserve la mémoire des collections.
        </p>
      </section>
      <section className="section">
        {sold.length === 0 ? (
          <div className="empty">
            <h2>Aucune série n'est épuisée à ce jour</h2>
            <p className="muted">Tous les modèles de la {site.collection} sont encore disponibles.</p>
            <Link href="/collection" className="btn">
              Découvrir la collection
            </Link>
          </div>
        ) : (
          <div className="grid">
            {sold.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
