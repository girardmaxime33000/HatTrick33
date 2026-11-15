import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { articles, getArticle } from "@/lib/journal";
import { getProduct } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => articles.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArticle((await params).slug);
  return a ? { title: a.title, description: a.intro } : {};
}

export default async function ArticlePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const product = getProduct(a.slug);

  return (
    <article className="article">
      <div className="article-body">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Journal", href: "/journal" }, { label: a.title }]} />
        <h1>{a.title}</h1>
        <p className="hook">{a.intro}</p>
        {a.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </div>
      {product && (
        <aside className="article-aside">
          <p className="muted small">La casquette</p>
          <ProductCard p={product} />
        </aside>
      )}
    </article>
  );
}
