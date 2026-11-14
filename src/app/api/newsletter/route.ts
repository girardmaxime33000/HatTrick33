import { NextResponse } from "next/server";

/** Transmet l'adresse au service d'e-mailing via un webhook (Brevo, Mailchimp, Make, Zapier…). */
export async function POST(req: Request) {
  const hook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!hook) return NextResponse.json({ error: "Inscription non activée." }, { status: 503 });

  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }

  const res = await fetch(hook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source: "site" }),
  }).catch(() => null);
  if (!res?.ok) return NextResponse.json({ error: "Service indisponible." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
