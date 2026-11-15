"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return <p className="newsletter-done">Inscription enregistrée.</p>;
  }
  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label htmlFor="nl-email" className="sr-only">
        Adresse e-mail
      </label>
      <input id="nl-email" type="email" required placeholder="Adresse e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="btn btn-ball" disabled={state === "loading"}>
        {state === "loading" ? "Envoi en cours…" : "M'inscrire"}
      </button>
      {state === "error" && (
        <p className="error" role="alert">
          L'inscription n'a pas fonctionné. Réessayez.
        </p>
      )}
    </form>
  );
}
