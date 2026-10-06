"use client";

import { useState, type FormEvent } from "react";

import { getTrackingData } from "@/lib/tracking";

type Status = "idle" | "sending" | "done" | "error";

/**
 * Signup (name, email, optional phone + SMS opt-in) that posts to /api/forms with a `formType` and tracking data.
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
  const [phone, setPhone] = useState("");
  const [displaySuccess, setDisplaySuccess] = useState(success);
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
        body: JSON.stringify({ ...data, ...getTrackingData(), formType }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string; message?: string };
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      if (json.message) setDisplaySuccess(json.message);
      setStatus("done");
      form.reset();
      setPhone("");
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
        {displaySuccess}
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
      {/* Phone for SMS follow-up (meeting 2026-10-03). Optional; texting needs the opt-in below (A2P 10DLC). */}
      <label className="block">
        <span className="sr-only">Mobile number (optional)</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Mobile number (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`h-12 w-full rounded-full border px-5 text-sm focus:outline-none ${input}`}
        />
      </label>
      {phone.trim() && (
        // TODO_CLIENT: confirm the SMS opt-in wording (also needed for the A2P 10DLC application).
        <label className={`flex items-start gap-3 px-1 text-xs leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>
          <input type="checkbox" name="smsConsent" value="yes" className="mt-0.5 size-4 shrink-0 accent-gold" />
          <span>
            Yes, text me updates from Accexx Insight. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out,
            HELP for help.
          </span>
        </label>
      )}
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
