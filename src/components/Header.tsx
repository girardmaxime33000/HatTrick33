"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { site } from "@/lib/site";

export function Header() {
  const { slugs } = useCart();
  return (
    <header className="header">
      <Link href="/" className="logo" aria-label={`${site.name} — accueil`}>
        <Image src="/logo.png" alt={site.name} width={1200} height={929} priority sizes="120px" />
      </Link>
      <nav>
        <Link href="/#collection">Collection</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/clubs">Clubs</Link>
        <Link href="/panier" className="cart-link">
          Panier <b>{slugs.length}</b>
        </Link>
      </nav>
    </header>
  );
}
