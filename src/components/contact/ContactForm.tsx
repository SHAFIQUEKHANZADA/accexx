"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import { getTrackingData } from "@/lib/tracking";

type Status = "idle" | "sending" | "done" | "error";

const field =
  "w-full rounded-2xl border border-line bg-white px-5 text-[0.95rem] text-ink placeholder:text-muted focus:border-gold focus:outline-none";

/** Contact form → /api/forms (formType "contact") → GHL integration. */
export function ContactForm() {
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
        body: JSON.stringify({
          ...data,
          ...getTrackingData(),
          consent: data.consent === "yes",
          formType: "contact",
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string; message?: string };
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
      <div role="status" className="rounded-3xl border border-gold/40 bg-gold-soft p-8 text-center">
        <p className="heading text-3xl">Thank you.</p>
        <p className="mt-3 text-body">
          Your message has been received, and the Accexx Insight team will follow up.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy">
            Name <span className="text-gold-deep">*</span>
          </span>
          <input name="name" required autoComplete="name" className={`h-12 ${field}`} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy">
            Email <span className="text-gold-deep">*</span>
          </span>
          <input name="email" type="email" required autoComplete="email" className={`h-12 ${field}`} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy">
          Phone <span className="font-normal text-muted">(optional)</span>
        </span>
        <input name="phone" type="tel" autoComplete="tel" className={`h-12 ${field}`} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy">
          Message <span className="text-gold-deep">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us what you're working on and how we can help."
          className={`py-3.5 ${field}`}
        />
      </label>
      <label className="flex items-start gap-3 text-sm text-body">
        <input type="checkbox" name="consent" value="yes" required className="mt-0.5 size-4 shrink-0 accent-gold" />
        <span>
          I agree to be contacted by Accexx Insight about my enquiry. See our{" "}
          <Link href="/privacy" className="font-semibold text-gold-deep underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      {/* Honeypot: real people never fill this in. */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full rounded-full bg-gold px-8 text-[0.95rem] font-semibold text-white shadow-sm shadow-gold/30 transition-colors hover:bg-gold-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {message}
        </p>
      )}
    </form>
  );
}
