"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "done" | "error";

export function CircleSignup() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "accexx-circle" }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="rounded-2xl border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-gold-light">
        Welcome to the Accexx Circle. You&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">First name</span>
          <input
            name="firstName"
            autoComplete="given-name"
            placeholder="First name"
            className="h-12 w-full rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="sr-only">Email address</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email address"
            className="h-12 w-full rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
          />
        </label>
      </div>
      {/* Honeypot: real people never fill this in. */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full rounded-full bg-gold text-[0.95rem] font-medium text-ink transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {status === "sending" ? "Joining…" : "Join the Accexx Circle"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-300">
          {message}
        </p>
      )}
    </form>
  );
}
