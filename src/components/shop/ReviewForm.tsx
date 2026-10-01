"use client";

import { useState, type FormEvent } from "react";
import { Star } from "./icons";

type Status = "idle" | "sending" | "done" | "error";

/** Product review form → /api/forms (formType "product-review"). Reviews are moderated before publishing. */
export function ReviewForm({ productSlug, productName }: { productSlug: string; productName: string }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!rating) {
      setStatus("error");
      setMessage("Please choose a star rating.");
      return;
    }
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.delete("ratingChoice");
    const data = Object.fromEntries(fd);
    setStatus("sending");
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, rating, productSlug, productName, formType: "product-review" }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setStatus("done");
      form.reset();
      setRating(0);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="rounded-2xl border border-gold/40 bg-gold-soft px-5 py-4 text-sm font-medium text-gold-deep">
        Thank you for your review. It will appear here once it has been approved.
      </p>
    );
  }

  const input = "w-full rounded-2xl border border-line bg-white px-4 text-sm text-ink placeholder:text-muted focus:border-gold focus:outline-none";
  const shown = hover || rating;

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <fieldset>
        <legend className="text-sm font-semibold text-navy">Your rating</legend>
        <div className="mt-2 flex gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="cursor-pointer text-gold" onMouseEnter={() => setHover(n)}>
              <input type="radio" name="ratingChoice" value={n} checked={rating === n} onChange={() => setRating(n)} className="peer sr-only" />
              <span className="sr-only">
                {n} {n === 1 ? "star" : "stars"}
              </span>
              <Star filled={n <= shown} width={28} height={28} className="rounded peer-focus-visible:outline-2 peer-focus-visible:outline-gold-deep" />
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-navy">Name</span>
          <input name="name" required autoComplete="name" className={`mt-1.5 h-12 ${input}`} />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy">Email</span>
          <input name="email" type="email" required autoComplete="email" className={`mt-1.5 h-12 ${input}`} />
          <span className="mt-1 block text-xs text-muted">Not published.</span>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-semibold text-navy">Your review</span>
        <textarea name="review" required rows={5} maxLength={3000} className={`mt-1.5 py-3 ${input}`} />
      </label>
      {/* Honeypot: real people never fill this in. */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 rounded-full bg-navy px-8 text-[0.95rem] font-semibold text-white transition-colors hover:bg-navy-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit review"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {message}
        </p>
      )}
    </form>
  );
}
