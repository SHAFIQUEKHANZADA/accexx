"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "done" | "error";

/**
 * "Request a Cohort" inquiry (not checkout). Posts to /api/forms (→ GHL webhook) with
 * formType "cohort-request" plus the program code and name.
 */
export function CohortRequestForm({
  programCode,
  programName,
  formats = ["In-Person", "Virtual", "Hybrid"],
}: {
  programCode: string;
  programName: string;
  /** Delivery options offered for this program. */
  formats?: string[];
}) {
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
        body: JSON.stringify({ ...data, programCode, programName, formType: "cohort-request" }),
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
      <p role="status" className="rounded-2xl border border-gold/40 bg-gold-soft px-5 py-4 text-sm font-medium text-gold-deep">
        Thank you. We&apos;ve received your request for {programName} and will be in touch to plan your cohort.
      </p>
    );
  }

  const field =
    "w-full rounded-xl border border-line bg-white px-4 text-sm text-ink placeholder:text-muted focus:border-gold focus:outline-none";
  const label = "mb-1.5 block text-sm font-semibold text-navy";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Name</span>
          <input name="name" required autoComplete="name" className={`h-12 ${field}`} />
        </label>
        <label className="block">
          <span className={label}>Email</span>
          <input name="email" type="email" required autoComplete="email" className={`h-12 ${field}`} />
        </label>
        <label className="block">
          <span className={label}>Organization</span>
          <input name="organization" autoComplete="organization" className={`h-12 ${field}`} />
        </label>
        <label className="block">
          <span className={label}>Preferred format</span>
          <select name="preferredFormat" defaultValue="" className={`h-12 ${field}`}>
            <option value="">No preference</option>
            {formats.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className={label}>Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Group size, preferred dates, anything we should know"
          className={`py-3 ${field}`}
        />
      </label>
      {/* Honeypot: real people never fill this in. */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full rounded-full bg-gold px-8 text-[0.95rem] font-semibold text-white transition-colors hover:bg-gold-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request a Cohort"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {message}
        </p>
      )}
    </form>
  );
}
