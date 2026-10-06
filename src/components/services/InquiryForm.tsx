"use client";

import { useId, useState, type FormEvent } from "react";

import { getTrackingData } from "@/lib/tracking";

type Status = "idle" | "sending" | "done" | "error";

export type InquiryFormType = "consulting-proposal" | "coaching-inquiry" | "speaking-inquiry";

/**
 * Services inquiry form (consulting proposal, coaching, speaking).
 * Posts JSON to /api/forms with `formType`, `topic`, and tracking data.
 */
export function InquiryForm({
  formType,
  topic,
  cta,
  success,
  messageLabel = "How can we help?",
  topicOptions,
}: {
  formType: InquiryFormType;
  /** Pre-set topic (e.g. the engagement code + name). Ignored when `topicOptions` is given. */
  topic?: string;
  cta: string;
  success: string;
  messageLabel?: string;
  /** Optional select so the visitor can pick a topic (e.g. coaching stream). */
  topicOptions?: string[];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [displaySuccess, setDisplaySuccess] = useState(success);
  const id = useId();

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
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="rounded-2xl border border-gold/40 bg-gold-soft px-5 py-4 text-sm font-medium text-gold-deep">
        {displaySuccess}
      </p>
    );
  }

  const field =
    "w-full rounded-xl border border-line bg-white px-4 text-[0.95rem] text-ink placeholder:text-muted focus:border-gold focus:outline-none";
  const label = "mb-1.5 block text-sm font-semibold text-navy";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={label}>
            Name
          </label>
          <input id={`${id}-name`} name="name" autoComplete="name" className={`${field} h-12`} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>
            Email <span className="text-gold-deep">*</span>
          </label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={`${field} h-12`} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={label}>
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className={`${field} h-12`} />
        </div>
        <div>
          <label htmlFor={`${id}-org`} className={label}>
            Organization
          </label>
          <input id={`${id}-org`} name="organization" autoComplete="organization" className={`${field} h-12`} />
        </div>
      </div>

      {topicOptions ? (
        <div>
          <label htmlFor={`${id}-topic`} className={label}>
            I&apos;m interested in
          </label>
          <select id={`${id}-topic`} name="topic" defaultValue={topicOptions[0]} className={`${field} h-12`}>
            {topicOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      ) : (
        topic && <input type="hidden" name="topic" value={topic} />
      )}

      <div>
        <label htmlFor={`${id}-message`} className={label}>
          {messageLabel}
        </label>
        <textarea id={`${id}-message`} name="message" rows={5} className={`${field} py-3`} />
      </div>

      {/* Honeypot: real people never fill this in. */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full rounded-full bg-gold px-6 text-[0.95rem] font-semibold text-white shadow-sm shadow-gold/30 transition-colors hover:bg-gold-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : cta}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}
