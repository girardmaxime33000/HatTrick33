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
        <h1>Commande confirmée</h1>
        <p className="muted">
          Vous allez recevoir un e-mail de confirmation. Le numéro de votre exemplaire est attribué à l'expédition.
        </p>
        <Link href="/collection" className="btn">
          Retour à la collection
        </Link>
      </div>
    </section>
  );
}
