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
        <h1>Merci pour votre commande</h1>
        <p className="muted">
          Un e-mail de confirmation vient de vous être adressé. Votre casquette sera expédiée avec son numéro de série.
        </p>
        <Link href="/" className="btn">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
