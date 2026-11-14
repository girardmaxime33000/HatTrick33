"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/components/CartProvider";

export default function Merci() {
  const { clear, ready } = useCart();
  useEffect(() => {
    if (ready) clear();
  }, [ready, clear]);

  return (
    <section className="section">
      <div className="empty">
        <p className="eyebrow">Commande confirmée</p>
        <h1>Elle est à toi.</h1>
        <p className="muted">
          Ton numéro de série t'attend dans le colis. Tu reçois la confirmation par e-mail. On se croise au club-house.
        </p>
        <Link href="/" className="btn">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
