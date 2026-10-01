"use client";

import { useEffect, useRef, useState } from "react";
import { SignupForm } from "@/components/ui/SignupForm";
import { Close } from "@/components/ui/icons";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";

const KEY = "accexx-shop-popup-seen";
const DELAY_MS = 12000;

/** "10% off your first order" popup: once per visitor, after a delay or a good scroll. */
export function ShopPopup() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(KEY) === "1";
    } catch {
      /* storage blocked: show once per page view at most */
    }
    if (seen) return;

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      cleanup();
      try {
        window.localStorage.setItem(KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.45) show();
    };
    const timer = window.setTimeout(show, DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }
    return cleanup;
  }, []);

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-80 grid place-items-center p-4">
      <div className="absolute inset-0 bg-ink/45" onClick={() => setOpen(false)} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        tabIndex={-1}
        className="relative w-full max-w-md animate-fade-up overflow-hidden rounded-3xl bg-white p-7 text-center shadow-2xl outline-none sm:p-9"
      >
        <UnfinishedCircle className="pointer-events-none absolute -right-16 -top-16 size-48 text-gold/60" />
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 grid size-10 place-items-center rounded-full text-navy hover:bg-cream"
        >
          <Close width={18} height={18} />
        </button>
        <p className="eyebrow relative">Accexx Insight Shop</p>
        <h2 id="popup-title" className="heading relative mt-3 text-4xl">
          10% off your <em className="text-gold">first order</em>
        </h2>
        <p className="relative mt-3 text-[0.95rem] text-body">Join our list and we&apos;ll send a code to use at checkout.</p>
        <div className="relative mt-6 text-left">
          <SignupForm formType="shop-popup" cta="Get 10% off" success="Thank you! Watch your inbox for your code." />
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="relative mt-4 text-sm font-medium text-muted underline-offset-4 hover:text-navy hover:underline"
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
