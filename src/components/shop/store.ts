"use client";

import { useSyncExternalStore } from "react";
import { MAX_QTY } from "./limits";

/**
 * Tiny localStorage-backed stores for the shop (bag + wishlist).
 * Built on useSyncExternalStore so the server render and first client render agree
 * (both empty), then the saved state appears. Storage can throw (private mode, blocked
 * site data), so every read/write is wrapped and the shop still works in memory.
 */
function createPersistentStore<T>(key: string, initial: T, validate: (v: unknown) => v is T) {
  let state = initial;
  let loaded = false;
  const listeners = new Set<() => void>();

  const read = () => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (validate(parsed)) return parsed;
      }
    } catch {
      /* storage unavailable */
    }
    return initial;
  };

  const ensureLoaded = () => {
    if (loaded || typeof window === "undefined") return;
    loaded = true;
    state = read();
    window.addEventListener("storage", (e) => {
      if (e.key !== key) return;
      state = read();
      listeners.forEach((l) => l());
    });
  };

  return {
    get: () => {
      ensureLoaded();
      return state;
    },
    set: (next: T | ((prev: T) => T)) => {
      ensureLoaded();
      state = typeof next === "function" ? (next as (prev: T) => T)(state) : next;
      try {
        window.localStorage.setItem(key, JSON.stringify(state));
      } catch {
        /* storage unavailable: keep in memory */
      }
      listeners.forEach((l) => l());
    },
    subscribe: (l: () => void) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    serverSnapshot: () => initial,
  };
}

/* Bag ------------------------------------------------------------------------ */

/**
 * A bag line stores only ids + quantity; names and prices are always read from the catalog.
 * `meta` carries gift card details (recipient, message, send date, custom amount).
 */
export type CartLine = { slug: string; variantId?: string; qty: number; meta?: Record<string, string> };

export { MAX_QTY };

// Lines with meta (gift cards) are always separate: two cards to two people are two lines.
const lineKey = (l: Pick<CartLine, "slug" | "variantId" | "meta">) =>
  `${l.slug}::${l.variantId ?? ""}${l.meta ? `::${JSON.stringify(l.meta)}` : ""}`;

const EMPTY_LINES: CartLine[] = [];

const isLines = (v: unknown): v is CartLine[] =>
  Array.isArray(v) &&
  v.every((l) => l && typeof l === "object" && typeof l.slug === "string" && typeof l.qty === "number");

const cartStore = createPersistentStore<CartLine[]>("accexx-shop-bag", EMPTY_LINES, isLines);

export const cart = {
  add(slug: string, variantId: string | undefined, qty = 1, meta?: Record<string, string>) {
    cartStore.set((lines) => {
      const key = lineKey({ slug, variantId, meta });
      const existing = lines.find((l) => lineKey(l) === key);
      if (existing) {
        return lines.map((l) => (l === existing ? { ...l, qty: Math.min(MAX_QTY, l.qty + qty) } : l));
      }
      return [...lines, { slug, variantId, qty: Math.min(MAX_QTY, qty), ...(meta ? { meta } : {}) }];
    });
    drawer.open();
  },
  setQty(line: CartLine, qty: number) {
    if (qty < 1) return cart.remove(line);
    cartStore.set((lines) => lines.map((l) => (lineKey(l) === lineKey(line) ? { ...l, qty: Math.min(MAX_QTY, qty) } : l)));
  },
  remove(line: CartLine) {
    cartStore.set((lines) => lines.filter((l) => lineKey(l) !== lineKey(line)));
  },
  clear() {
    cartStore.set(EMPTY_LINES);
  },
};

export const useCart = () => useSyncExternalStore(cartStore.subscribe, cartStore.get, cartStore.serverSnapshot);

export { lineKey };

/** Adds several products at once (Frequently bought together). Opens the drawer once. */
export const addMany = (items: { slug: string; variantId?: string }[]) => {
  items.forEach((i) => cart.add(i.slug, i.variantId, 1));
};

/* Selected variant per product (product page: photo follows the colour picker) -- */

const selection = new Map<string, string | undefined>();
const selectionListeners = new Set<() => void>();

export const selectVariant = (slug: string, variantId: string | undefined) => {
  selection.set(slug, variantId);
  selectionListeners.forEach((l) => l());
};

export const useSelectedVariant = (slug: string) =>
  useSyncExternalStore(
    (l) => {
      selectionListeners.add(l);
      return () => selectionListeners.delete(l);
    },
    () => selection.get(slug),
    () => undefined,
  );

/* Drawer open state (not persisted) ------------------------------------------ */

let drawerOpen = false;
const drawerListeners = new Set<() => void>();
const setDrawer = (v: boolean) => {
  drawerOpen = v;
  drawerListeners.forEach((l) => l());
};

export const drawer = {
  open: () => setDrawer(true),
  close: () => setDrawer(false),
};

export const useDrawerOpen = () =>
  useSyncExternalStore(
    (l) => {
      drawerListeners.add(l);
      return () => drawerListeners.delete(l);
    },
    () => drawerOpen,
    () => false,
  );

/* Wishlist ------------------------------------------------------------------- */

const EMPTY_WISHLIST: string[] = [];
const isStrings = (v: unknown): v is string[] => Array.isArray(v) && v.every((s) => typeof s === "string");
const wishlistStore = createPersistentStore<string[]>("accexx-shop-wishlist", EMPTY_WISHLIST, isStrings);

export const wishlist = {
  toggle(slug: string) {
    wishlistStore.set((list) => (list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug]));
  },
};

export const useWishlist = () => useSyncExternalStore(wishlistStore.subscribe, wishlistStore.get, wishlistStore.serverSnapshot);
