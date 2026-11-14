import Image from "next/image";
import Link from "next/link";
import { StripeBadge } from "./StripeBadge";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Image className="footer-logo" src="/logo.png" alt={site.name} width={1200} height={929} sizes="200px" />
        <p className="muted">{site.baseline}</p>
      </div>
      <nav>
        <Link href="/#collection">{site.collection}</Link>
        <Link href="/clubs">Clubs partenaires</Link>
        <Link href="/clubs#devenir-partenaire">Devenir club partenaire</Link>
        <Link href="/panier">Panier</Link>
      </nav>
      <nav>
        <Link href="/cgv">Conditions générales de vente</Link>
        <Link href="/mentions-legales">Mentions légales</Link>
        <StripeBadge light />
      </nav>
      <p className="muted small">Casquettes produites en séries de {site.seriesSize} exemplaires numérotés, sans réédition.</p>
    </footer>
  );
}
