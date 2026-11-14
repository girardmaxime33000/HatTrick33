import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/lib/products";
import { site } from "@/lib/site";

export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json({ error: "Le paiement en ligne n'est pas encore activé." }, { status: 503 });
  }

  const body = await req.json().catch(() => null);
  const slugs: unknown = body?.slugs;
  if (!Array.isArray(slugs) || slugs.length === 0) {
    return NextResponse.json({ error: "Panier vide." }, { status: 400 });
  }

  // Prix et disponibilité relus côté serveur ; un exemplaire par modèle.
  const items = [...new Set(slugs.map(String))].map(getProduct);
  if (items.some((p) => !p)) {
    return NextResponse.json({ error: "Un modèle du panier n'existe pas." }, { status: 400 });
  }
  const soldOut = items.find((p) => p!.remaining <= 0);
  if (soldOut) {
    return NextResponse.json({ error: `${soldOut.name} : série épuisée.` }, { status: 409 });
  }

  const stripe = new Stripe(key);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    locale: "fr",
    line_items: items.map((p) => ({
      quantity: 1,
      price_data: {
        currency: "eur",
        unit_amount: p!.priceCents,
        product_data: {
          name: `${p!.name} — ${site.name}`,
          description: `${p!.colorway}. Série de ${site.seriesSize}, exemplaire numéroté.`,
        },
      },
    })),
    shipping_address_collection: { allowed_countries: ["FR"] },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          display_name: "Livraison France métropolitaine",
          fixed_amount: { amount: site.shippingCents, currency: "eur" },
        },
      },
    ],
    metadata: { slugs: items.map((p) => p!.slug).join(",") },
    success_url: `${site.url}/merci`,
    cancel_url: `${site.url}/panier`,
  });

  return NextResponse.json({ url: session.url });
}
