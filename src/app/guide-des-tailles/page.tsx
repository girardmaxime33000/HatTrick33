import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SizeGuide } from "@/components/SizeGuide";

export const metadata: Metadata = {
  title: "Guide des tailles",
  description: "Mesurer son tour de tête et régler sa casquette trucker HAT-TRICK33.",
};

export default function GuideDesTailles() {
  return (
    <article className="prose">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Guide des tailles" }]} />
      <h1>Guide des tailles</h1>
      <SizeGuide />

      <h2>Un doute sur la taille</h2>
      <p>
        Si la casquette ne convient pas, elle peut être retournée dans les 14 jours suivant sa réception. Les modalités
        figurent sur la page <Link href="/retours">Retours et remboursements</Link>.
      </p>
    </article>
  );
}
