"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { formatPrice } from "@/data/products";
import { Close } from "@/components/ui/icons";
import { ProductImage } from "./ProductImage";
import { resolveLine } from "./resolve";
import { Bag, Minus, Plus } from "./icons";
import { cart, drawer, lineKey, MAX_QTY, useCart, useDrawerOpen } from "./store";

/**
 * Shop shell: mounts the bag drawer and the floating bag button around the shop pages.
 * `checkoutEnabled` comes from the server (CHECKOUT_PROVIDER set) in src/app/shop/layout.tsx.
 */
export function CartProvider({ children, checkoutEnabled }: { children: ReactNode; checkoutEnabled: boolean }) {
  return (
    <>
      {children}
      <BagButton />
      <BagDrawer checkoutEnabled={checkoutEnabled} />
    </>
  );
}

function useBagCount() {
  return useCart().reduce((n, l) => n + l.qty, 0);
}

function BagButton() {
  const count = useBagCount();
  const open = useDrawerOpen();
  return (
    <button
      type="button"
      onClick={drawer.open}
      aria-label={`Open bag, ${count} ${count === 1 ? "item" : "items"}`}
      className={`fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-navy px-5 text-sm font-semibold text-white shadow-lg shadow-navy/30 transition-[opacity,transform] hover:bg-navy-deep ${
        open ? "pointer-events-none translate-y-4 opacity-0" : ""
      }`}
    >
      <Bag />
      <span>Bag</span>
      <span className="grid min-w-6 place-items-center rounded-full bg-gold px-1.5 text-xs leading-6 text-white">{count}</span>
    </button>
  );
}

type CheckoutState = { kind: "idle" } | { kind: "loading" } | { kind: "message"; text: string };

function BagDrawer({ checkoutEnabled }: { checkoutEnabled: boolean }) {
  const open = useDrawerOpen();
  const lines = useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  const [checkout, setCheckout] = useState<CheckoutState>({ kind: "idle" });

  const resolved = lines.map((l) => ({ line: l, item: resolveLine(l.slug, l.variantId, l.qty, l.meta) }));
  const subtotal = resolved.reduce((sum, r) => sum + (r.item ? r.item.unitPrice * r.item.qty : 0), 0);
  const hasItems = resolved.some((r) => r.item);

  // Escape closes; lock page scroll and move focus into the panel while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && drawer.close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function onCheckout() {
    setCheckout({ kind: "loading" });
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: lines }),
      });
      const json = (await res.json().catch(() => ({}))) as { status?: string; url?: string; message?: string };
      if (json.status === "redirect" && json.url) {
        window.location.assign(json.url);
        return;
      }
      setCheckout({ kind: "message", text: json.message ?? "Checkout is unavailable right now. Please try again soon." });
    } catch {
      setCheckout({ kind: "message", text: "Checkout is unavailable right now. Please try again soon." });
    }
  }

  return (
    <div className={`fixed inset-0 z-70 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={drawer.close}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Your bag"
        tabIndex={-1}
        inert={!open}
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl outline-none transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="heading text-2xl">Your bag</h2>
          <button type="button" onClick={drawer.close} aria-label="Close bag" className="grid size-10 place-items-center rounded-full text-navy hover:bg-cream">
            <Close width={20} height={20} />
          </button>
        </div>

        {hasItems ? (
          <ul className="flex-1 divide-y divide-line overflow-y-auto px-5">
            {resolved.map(({ line, item }) =>
              item ? (
                <li key={lineKey(line)} className="flex gap-4 py-5">
                  <Link href={`/shop/${item.product.slug}`} onClick={drawer.close} className="relative aspect-4/5 w-20 shrink-0 overflow-hidden rounded-lg ring-1 ring-line">
                    <ProductImage product={item.product} sizes="80px" />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-semibold leading-snug text-navy">{item.product.name}</p>
                        {item.variant && (
                          <p className="text-xs text-muted">
                            {item.variant.custom ? formatPrice(item.unitPrice) : item.variant.label}
                          </p>
                        )}
                        {item.meta?.recipientEmail && (
                          <p className="truncate text-xs text-muted">
                            To {item.meta.recipientName ? `${item.meta.recipientName} · ` : ""}
                            {item.meta.recipientEmail}
                            {item.meta.sendDate ? ` · ${item.meta.sendDate}` : ""}
                          </p>
                        )}
                      </div>
                      <p className="shrink-0 text-sm font-semibold text-ink">{formatPrice(item.unitPrice * item.qty)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center rounded-full border border-line">
                        <button
                          type="button"
                          onClick={() => cart.setQty(line, line.qty - 1)}
                          aria-label={`Decrease quantity of ${item.product.name}`}
                          className="grid size-9 place-items-center text-navy hover:text-gold-deep"
                        >
                          <Minus width={16} height={16} />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold" aria-live="polite">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => cart.setQty(line, line.qty + 1)}
                          disabled={line.qty >= MAX_QTY}
                          aria-label={`Increase quantity of ${item.product.name}`}
                          className="grid size-9 place-items-center text-navy hover:text-gold-deep disabled:opacity-40"
                        >
                          <Plus width={16} height={16} />
                        </button>
                      </div>
                      <button type="button" onClick={() => cart.remove(line)} className="text-xs font-semibold text-muted underline underline-offset-4 hover:text-navy">
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={lineKey(line)} className="flex items-center justify-between gap-3 py-4 text-sm text-muted">
                  <span>An item in your bag is no longer available.</span>
                  <button type="button" onClick={() => cart.remove(line)} className="font-semibold underline underline-offset-4 hover:text-navy">
                    Remove
                  </button>
                </li>
              ),
            )}
          </ul>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <Bag width={40} height={40} className="text-gold" />
            <p className="heading mt-4 text-2xl">Your bag is empty.</p>
            <p className="mt-2 text-sm text-body">Every page, a new possibility. Start with a book.</p>
            <button type="button" onClick={drawer.close} className="mt-6 h-11 rounded-full bg-gold px-6 text-sm font-semibold text-white hover:bg-gold-deep">
              Continue shopping
            </button>
          </div>
        )}

        {hasItems && (
          <div className="border-t border-line bg-cream px-5 py-5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-navy">Subtotal</span>
              <span className="text-lg font-semibold text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-muted">Taxes and shipping are calculated at checkout.</p>
            {checkoutEnabled ? (
              <button
                type="button"
                onClick={onCheckout}
                disabled={checkout.kind === "loading"}
                className="mt-4 h-12 w-full rounded-full bg-gold text-[0.95rem] font-semibold text-white transition-colors hover:bg-gold-deep disabled:opacity-60"
              >
                {checkout.kind === "loading" ? "Starting checkout…" : "Checkout"}
              </button>
            ) : (
              <>
                <button type="button" disabled aria-describedby="checkout-soon" className="mt-4 h-12 w-full cursor-not-allowed rounded-full bg-navy/15 text-[0.95rem] font-semibold text-navy/70">
                  Checkout coming soon
                </button>
                <p id="checkout-soon" className="mt-2 text-xs leading-relaxed text-body">
                  We&apos;re finishing secure online payments. Your bag is saved on this device, so you can come back to it.
                </p>
              </>
            )}
            {checkout.kind === "message" && (
              <p role="status" className="mt-3 rounded-xl bg-gold-soft px-4 py-3 text-xs font-medium text-gold-deep">
                {checkout.text}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
