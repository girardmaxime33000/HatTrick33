"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ClubForm() {
  const [f, setF] = useState({ club: "", ville: "", contact: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Club : ${f.club}\nVille : ${f.ville}\nContact : ${f.contact}\n\n${f.message}`;
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
      `Club partenaire — ${f.club}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>
        Nom du club
        <input required value={f.club} onChange={set("club")} />
      </label>
      <label>
        Ville
        <input required value={f.ville} onChange={set("ville")} />
      </label>
      <label>
        Ton nom et ton téléphone ou e-mail
        <input required value={f.contact} onChange={set("contact")} />
      </label>
      <label>
        Nombre de pistes, couleurs du club, ce que tu as en tête
        <textarea rows={4} value={f.message} onChange={set("message")} />
      </label>
      <button className="btn" disabled={!site.contactEmail}>
        Envoyer la demande
      </button>
      {!site.contactEmail && <p className="muted small">Adresse de contact non configurée (NEXT_PUBLIC_CONTACT_EMAIL).</p>}
    </form>
  );
}
