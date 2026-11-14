import type { Metadata } from "next";
import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/instrument-sans/wght.css";
import "./globals.css";
import { AnnounceBar } from "@/components/AnnounceBar";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Casquettes padel en séries de ${site.seriesSize}`, template: `%s — ${site.name}` },
  description:
    "HAT-TRICK33 dessine des casquettes trucker pour les joueurs de padel, produites en séries de dix exemplaires numérotés. Disponibles en ligne et dans les clubs partenaires.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <AnnounceBar />
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
