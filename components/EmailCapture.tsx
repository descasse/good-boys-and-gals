"use client";

import { useState } from "react";

type State = "idle" | "sending" | "done" | "error";

export default function EmailCapture({ source }: { source: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setState("done");
      setMessage("You're on the list.");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section className="capture" aria-label="Email sign-up">
      <h2>One useful email a week</h2>
      <p>Seasonal reminders and new guides. No spam, unsubscribe any time.</p>
      {state === "done" ? (
        <p role="status" className="capture-ok">{message}</p>
      ) : (
        <form onSubmit={submit}>
          <label htmlFor={`email-${source}`} className="sr-only">Email address</label>
          <input
            id={`email-${source}`}
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn" type="submit" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Sign up"}
          </button>
          {state === "error" ? <p role="alert" className="capture-err">{message}</p> : null}
        </form>
      )}
    </section>
  );
}
