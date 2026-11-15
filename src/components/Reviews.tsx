import { Stars } from "./Stars";
import type { Review } from "@/lib/reviews";

export function Reviews({ reviews }: { reviews: Review[] }) {
  if (!reviews.length) return null;
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  return (
    <section className="section reviews" id="avis">
      <header className="section-head">
        <h2>Avis</h2>
        <p>
          <Stars value={avg} /> {avg.toFixed(1).replace(".", ",")} sur 5, {reviews.length} avis
        </p>
      </header>
      <ul className="reviews-list">
        {reviews.map((r) => (
          <li className="review" key={r.author + r.title}>
            <Stars value={r.rating} label={`${r.rating} sur 5`} />
            <h3>{r.title}</h3>
            <p>{r.body}</p>
            <p className="muted small">{r.author}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
