import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  let body: { email?: unknown; source?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const source = typeof body.source === "string" ? body.source.slice(0, 80) : "unknown";

  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const hook = process.env.SUBSCRIBE_WEBHOOK_URL;
  if (!hook) {
    // No provider wired up yet. Fail loudly rather than pretend the address was saved.
    return NextResponse.json(
      { error: "Sign-up isn't switched on yet. Please try again soon." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source, at: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Provider returned ${res.status}`);
  } catch (err) {
    console.error("subscribe failed", err);
    return NextResponse.json({ error: "Couldn't sign you up. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
