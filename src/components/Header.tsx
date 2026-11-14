"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import { site } from "@/lib/site";

export function Header() {
  const { slugs } = useCart();
  return (
    <header className="header">
      <Link href="/" className="wordmark">
        HAT-TRICK<span>33</span>
      </Link>
      <nav>
        <Link href="/#drop">{site.drop}</Link>
        <Link href="/clubs">Clubs</Link>
        <Link href="/panier" className="cart-link">
          Panier <b>{slugs.length}</b>
        </Link>
      </nav>
    </header>
  );
}
