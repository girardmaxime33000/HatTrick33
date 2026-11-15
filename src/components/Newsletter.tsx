import { NewsletterForm } from "./NewsletterForm";

/** Affichée uniquement lorsque le service d'inscription est configuré (NEWSLETTER_WEBHOOK_URL). */
export function Newsletter() {
  if (!process.env.NEWSLETTER_WEBHOOK_URL) return null;
  return (
    <section className="section newsletter">
      <div>
        <h2>Prochaine collection</h2>
        <p>
          Laissez votre adresse : vous recevrez la date de sortie avant la mise en ligne. Un e-mail par collection, rien
          d'autre.
        </p>
      </div>
      <NewsletterForm />
    </section>
  );
}
