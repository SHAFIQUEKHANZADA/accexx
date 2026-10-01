"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "done" | "error";

/**
 * Email signup that posts to /api/forms (→ GHL webhook) with a `formType`.
 * `tone="dark"` for navy panels, `tone="light"` for white/cream sections.
 */
export function SignupForm({
  formType,
  cta,
  success,
  tone = "light",
  authorOption = false,
}: {
  formType: string;
  cta: string;
  success: string;
  tone?: "light" | "dark";
  /** Adds the Inside the Pages "Open Floor" author opt-in. */
  authorOption?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const dark = tone === "dark";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType }),
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
      <p
        role="status"
        className={`rounded-2xl border px-5 py-4 text-sm font-medium ${
          dark ? "border-gold/40 bg-white/10 text-gold-light" : "border-gold/40 bg-gold-soft text-gold-deep"
        }`}
      >
        {success}
      </p>
    );
  }

  const input = dark
    ? "border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-gold-light"
    : "border-line bg-white text-ink placeholder:text-muted focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">First name</span>
          <input
            name="firstName"
            autoComplete="given-name"
            placeholder="First name"
            className={`h-12 w-full rounded-full border px-5 text-sm focus:outline-none ${input}`}
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
            className={`h-12 w-full rounded-full border px-5 text-sm focus:outline-none ${input}`}
          />
        </label>
      </div>
      {authorOption && (
        <label className={`flex items-start gap-3 px-1 text-sm ${dark ? "text-white/80" : "text-body"}`}>
          <input type="checkbox" name="isAuthor" value="yes" className="mt-0.5 size-4 accent-gold" />
          I&apos;m an author and would like 2 minutes on the Open Floor.
        </label>
      )}
      {/* Honeypot: real people never fill this in. */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full rounded-full bg-gold text-[0.95rem] font-semibold text-white transition-colors hover:bg-gold-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : cta}
      </button>
      {status === "error" && (
        <p role="alert" className={`text-sm ${dark ? "text-red-300" : "text-red-700"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
