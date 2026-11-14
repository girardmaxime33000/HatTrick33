"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Cart = {
  slugs: string[];
  ready: boolean;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const Ctx = createContext<Cart | null>(null);
const KEY = "ht33-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setSlugs(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(slugs));
    } catch {}
  }, [slugs, ready]);

  const value = useMemo<Cart>(
    () => ({
      slugs,
      ready,
      // Règle de la marque : une casquette par modèle et par joueur.
      add: (slug) => setSlugs((s) => (s.includes(slug) ? s : [...s, slug])),
      remove: (slug) => setSlugs((s) => s.filter((x) => x !== slug)),
      clear: () => setSlugs([]),
    }),
    [slugs, ready],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart hors CartProvider");
  return c;
}
