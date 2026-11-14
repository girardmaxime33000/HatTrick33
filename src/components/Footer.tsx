import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="wordmark">
          HAT-TRICK<span>33</span>
        </p>
        <p className="muted">{site.baseline}</p>
      </div>
      <nav>
        <Link href="/#drop">{site.drop}</Link>
        <Link href="/clubs">Trouver un club</Link>
        <Link href="/clubs#devenir-partenaire">Devenir club partenaire</Link>
        <Link href="/panier">Panier</Link>
      </nav>
      <p className="muted small">Séries de {site.seriesSize}. Numérotées. Jamais rééditées.</p>
    </footer>
  );
}
