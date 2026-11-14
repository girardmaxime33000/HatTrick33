import { Stars } from "./Stars";
import type { Review } from "@/lib/reviews";

export const DemoNotice = () => (
  <p className="demo-notice">Avis d'exemple, affichés pour la prévisualisation de la boutique avant son lancement.</p>
);

export function ReviewCard({ r }: { r: Review }) {
  return (
    <li className="review">
      <Stars value={r.rating} label={`${r.rating} sur 5`} />
      <h3>{r.title}</h3>
      <p>{r.body}</p>
      <p className="muted small">{r.author}</p>
    </li>
  );
}

export function Reviews({ reviews }: { reviews: Review[] }) {
  if (!reviews.length) return null;
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const dist = [5, 4, 3, 2, 1].map((n) => reviews.filter((r) => r.rating === n).length);
  return (
    <section className="section reviews" id="avis">
      <header className="section-head">
        <p className="eyebrow">Avis clients</p>
        <h2>L'avis des joueurs</h2>
        <DemoNotice />
      </header>
      <div className="reviews-grid">
        <div className="reviews-summary">
          <p className="reviews-avg">{avg.toFixed(1).replace(".", ",")}</p>
          <Stars value={avg} />
          <p className="muted small">
            {reviews.length} avis
          </p>
          <ul>
            {dist.map((c, k) => (
              <li key={k}>
                <span>{5 - k}</span>
                <i>
                  <b style={{ width: `${(c / reviews.length) * 100}%` }} />
                </i>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className="reviews-list">
          {reviews.map((r) => (
            <ReviewCard key={r.author} r={r} />
          ))}
        </ul>
      </div>
    </section>
  );
}
