import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Image className="footer-logo" src="/logo.png" alt={site.name} width={1200} height={929} sizes="200px" />
        <p className="muted">{site.baseline}</p>
      </div>
      <nav aria-label="Boutique">
        <h2>Boutique</h2>
        <Link href="/collection">{site.collection}</Link>
        <Link href="/archives">Archives</Link>
        <Link href="/guide-des-tailles">Guide des tailles</Link>
        <Link href="/retours">Retours et remboursements</Link>
      </nav>
      <nav aria-label="La marque">
        <h2>La marque</h2>
        <Link href="/a-propos">À propos</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/clubs">Clubs</Link>
        {site.instagramUrl && (
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        )}
        {site.contactEmail && <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>}
      </nav>
      <nav aria-label="Informations légales">
        <h2>Informations</h2>
        <Link href="/cgv">Conditions générales de vente</Link>
        <Link href="/mentions-legales">Mentions légales</Link>
        <p className="pay">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="visa" src="/pay/visa.svg" alt="Visa" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="mc" src="/pay/mastercard.svg" alt="Mastercard" />
        </p>
      </nav>
    </footer>
  );
}
