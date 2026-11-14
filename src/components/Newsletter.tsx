import { NewsletterForm } from "./NewsletterForm";

/** Affichée uniquement lorsque le service d'inscription est configuré (NEWSLETTER_WEBHOOK_URL). */
export function Newsletter() {
  if (!process.env.NEWSLETTER_WEBHOOK_URL) return null;
  return (
    <section className="section newsletter">
      <div>
        <p className="eyebrow">Prochaine collection</p>
        <h2>Être informé avant l'ouverture des ventes</h2>
        <p>
          Chaque série compte dix exemplaires. Les inscrits reçoivent la date de sortie de la prochaine collection avant
          sa mise en ligne. Un e-mail par collection, sans autre sollicitation.
        </p>
      </div>
      <NewsletterForm />
    </section>
  );
}
