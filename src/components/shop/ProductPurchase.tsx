"use client";

import { useState } from "react";
import { defaultVariant, formatPrice, variantPrice, type Product } from "@/data/products";
import { Minus, Plus } from "./icons";
import { WishlistButton } from "./ProductCard";
import { cart, MAX_QTY, selectVariant } from "./store";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Price, variant picker (formats, colour swatches or gift card amounts), quantity and Add to bag. */
export function ProductPurchase({ product }: { product: Product }) {
  const variants = product.variants ?? [];
  const [variantId, setVariantId] = useState(defaultVariant(product)?.id);
  const [qty, setQty] = useState(1);
  const gift = product.giftCard;

  // Gift card fields
  const [customAmount, setCustomAmount] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [sendDate, setSendDate] = useState("");
  const [error, setError] = useState("");

  const variant = variants.find((v) => v.id === variantId);
  const isCustom = !!variant?.custom;
  const customValue = Number(customAmount);
  const price = isCustom ? (Number.isFinite(customValue) && customValue > 0 ? customValue : 0) : variantPrice(product, variant);
  const compareAt = variant ? variant.compareAt : product.compareAt;
  const purchasable = variants.length ? variant?.status === "available" : true;
  const optionName = variants[0] ? Object.keys(variants[0].options).join(" / ") : "";
  const isColour = optionName === "Colour";

  const choose = (id: string) => {
    setVariantId(id);
    selectVariant(product.slug, id);
  };

  function addToBag() {
    setError("");
    if (!gift) {
      cart.add(product.slug, variant?.id, qty);
      return;
    }
    if (isCustom && (!Number.isFinite(customValue) || customValue < gift.min || customValue > gift.max)) {
      setError(`Enter an amount between ${formatPrice(gift.min)} and ${formatPrice(gift.max)}.`);
      return;
    }
    if (!EMAIL.test(recipientEmail.trim())) {
      setError("Enter the recipient's email address.");
      return;
    }
    const meta: Record<string, string> = { recipientEmail: recipientEmail.trim() };
    if (recipientName.trim()) meta.recipientName = recipientName.trim();
    if (message.trim()) meta.message = message.trim();
    if (sendDate) meta.sendDate = sendDate;
    if (isCustom) meta.amount = String(Math.round(customValue * 100) / 100);
    cart.add(product.slug, variant?.id, qty, meta);
    setRecipientEmail("");
    setRecipientName("");
    setMessage("");
    setSendDate("");
  }

  const field = "h-12 w-full rounded-xl border border-line bg-white px-4 text-sm text-ink placeholder:text-muted focus:border-gold focus:outline-none";

  return (
    <div>
      <p className="text-2xl text-ink">
        <span className="font-semibold">{price ? formatPrice(price) : "Enter an amount"}</span>
        {compareAt && !isCustom && <s className="ml-3 text-lg text-muted">{formatPrice(compareAt)}</s>}
        {compareAt && !isCustom && (
          <span className="ml-3 rounded-full bg-gold-soft px-2.5 py-1 align-middle text-xs font-bold text-gold-deep">
            Save {Math.round((1 - variantPrice(product, variant) / compareAt) * 100)}%
          </span>
        )}
      </p>

      {variants.length > 0 && isColour && (
        <fieldset className="mt-7">
          <legend className="text-sm font-bold uppercase tracking-[0.14em] text-navy">
            Colour <span className="font-medium normal-case tracking-normal text-body">· {variant?.label}</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {variants.map((v) => {
              const checked = v.id === variantId;
              return (
                <label
                  key={v.id}
                  title={v.label}
                  className={`grid size-11 cursor-pointer place-items-center rounded-full transition-shadow ${
                    checked ? "ring-2 ring-navy ring-offset-2" : "ring-1 ring-line hover:ring-navy/40"
                  }`}
                >
                  <input type="radio" name="variant" value={v.id} checked={checked} onChange={() => choose(v.id)} className="sr-only" />
                  <span className="sr-only">{v.label}</span>
                  <span aria-hidden className="size-9 rounded-full border border-black/10" style={{ background: v.swatch }} />
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {variants.length > 0 && !isColour && (
        <fieldset className="mt-7">
          <legend className="text-sm font-bold uppercase tracking-[0.14em] text-navy">{gift ? "Choose an amount" : optionName}</legend>
          <div className={`mt-3 grid gap-2 ${gift ? "grid-cols-3 sm:grid-cols-5" : "sm:grid-cols-2"}`}>
            {variants.map((v) => {
              const available = v.status === "available";
              const checked = v.id === variantId;
              return (
                <label
                  key={v.id}
                  className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-sm transition-colors ${
                    gift ? "justify-center" : ""
                  } ${
                    !available
                      ? "cursor-not-allowed border-dashed border-line bg-cream text-muted"
                      : checked
                        ? "cursor-pointer border-navy bg-navy text-white"
                        : "cursor-pointer border-line bg-white text-navy hover:border-navy/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="variant"
                    value={v.id}
                    checked={checked}
                    disabled={!available}
                    onChange={() => choose(v.id)}
                    className="sr-only"
                  />
                  <span className="font-semibold">{v.label}</span>
                  {!gift && (
                    <span className={available ? (checked ? "text-white/85" : "text-body") : "text-xs font-semibold text-gold-deep"}>
                      {available ? formatPrice(variantPrice(product, v)) : (v.note ?? "Coming soon")}
                    </span>
                  )}
                </label>
              );
            })}
          </div>
          {gift && isCustom && (
            <label className="mt-3 block">
              <span className="text-sm font-semibold text-navy">Amount (USD)</span>
              <input
                type="number"
                inputMode="decimal"
                min={gift.min}
                max={gift.max}
                step="1"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder={`${gift.min}-${gift.max}`}
                className={`mt-1.5 ${field}`}
              />
            </label>
          )}
        </fieldset>
      )}

      {gift && (
        <fieldset className="mt-7 space-y-3">
          <legend className="text-sm font-bold uppercase tracking-[0.14em] text-navy">Send to</legend>
          <label className="block">
            <span className="sr-only">Recipient email</span>
            <input type="email" required value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} placeholder="Recipient email" className={field} />
          </label>
          <label className="block">
            <span className="sr-only">Recipient name (optional)</span>
            <input value={recipientName} onChange={(e) => setRecipientName(e.target.value)} placeholder="Recipient name (optional)" className={field} />
          </label>
          <label className="block">
            <span className="sr-only">Gift message (optional)</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              rows={3}
              placeholder="Gift message (optional)"
              className={`${field} h-auto py-3`}
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-muted">Send date (optional)</span>
            <input type="date" value={sendDate} onChange={(e) => setSendDate(e.target.value)} className={`mt-1 ${field}`} />
            <span className="mt-1 block text-xs text-muted">Leave blank to send right after payment.</span>
          </label>
        </fieldset>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <div className="flex h-12 items-center rounded-full border border-line bg-white">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            disabled={qty <= 1}
            aria-label="Decrease quantity"
            className="grid size-12 place-items-center text-navy hover:text-gold-deep disabled:opacity-40"
          >
            <Minus width={16} height={16} />
          </button>
          <span className="w-8 text-center font-semibold" aria-live="polite" aria-label={`Quantity ${qty}`}>
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(MAX_QTY, q + 1))}
            disabled={qty >= MAX_QTY}
            aria-label="Increase quantity"
            className="grid size-12 place-items-center text-navy hover:text-gold-deep disabled:opacity-40"
          >
            <Plus width={16} height={16} />
          </button>
        </div>
        <button
          type="button"
          disabled={!purchasable}
          onClick={addToBag}
          className="h-12 flex-1 rounded-full bg-gold px-8 text-[0.95rem] font-semibold text-white shadow-sm shadow-gold/30 transition-colors hover:bg-gold-deep disabled:opacity-50 sm:flex-none"
        >
          Add to bag
        </button>
        <WishlistButton slug={product.slug} name={product.name} className="size-12!" />
      </div>
      {error && (
        <p role="alert" className="mt-3 text-sm text-red-700">
          {error}
        </p>
      )}
      <p className="mt-3 text-xs text-muted">
        {gift ? "No shipping. Delivered instantly by email." : "Taxes and shipping are calculated at checkout."}
      </p>
    </div>
  );
}
