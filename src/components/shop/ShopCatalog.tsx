"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { categories, collections, products, type CollectionId, type ProductCategory } from "@/data/products";
import { ProductCard } from "./ProductCard";

type Sort = "featured" | "price-asc" | "price-desc";

/** Collections row, filter chips, sort and the product grid. */
export function ShopCatalog() {
  const [collection, setCollection] = useState<CollectionId | "all">("all");
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const [sort, setSort] = useState<Sort>("featured");

  const visible = useMemo(() => {
    const list = products.filter(
      (p) => (collection === "all" || p.collections.includes(collection)) && (category === "all" || p.category === category),
    );
    // Items without a price yet always sort last.
    const byPrice = (dir: 1 | -1) => (a: (typeof list)[number], b: (typeof list)[number]) =>
      Number(!!a.pricePending) - Number(!!b.pricePending) || dir * (a.price - b.price);
    if (sort === "price-asc") return [...list].sort(byPrice(1));
    if (sort === "price-desc") return [...list].sort(byPrice(-1));
    return list;
  }, [collection, category, sort]);

  const covers = products.filter((p) => p.cover);
  const tiles: { id: CollectionId | "all"; label: string; count: number }[] = [
    { id: "all", label: "All products", count: products.length },
    ...collections.map((c) => ({ ...c, count: products.filter((p) => p.collections.includes(c.id)).length })),
  ];

  return (
    <div>
      {/* Collections */}
      <div className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0" role="group" aria-label="Collections">
        {tiles.map((t, i) => {
          const active = collection === t.id;
          const cover = i > 0 ? covers[(i - 1) % covers.length]?.cover : undefined;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setCollection(t.id)}
              aria-pressed={active}
              className={`relative flex h-20 w-44 shrink-0 snap-start items-end overflow-hidden rounded-2xl p-4 text-left transition-shadow sm:w-52 ${
                active ? "bg-navy text-white ring-2 ring-gold" : "bg-cream text-navy ring-1 ring-line hover:ring-gold/60"
              }`}
            >
              {cover && (
                <Image src={cover} alt="" fill sizes="208px" className={`object-cover object-top ${active ? "opacity-25" : "opacity-30"}`} />
              )}
              <span className="relative">
                <span className="block text-sm font-bold">{t.label}</span>
                <span className={`block text-xs ${active ? "text-white/75" : "text-muted"}`}>{t.count} items</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Filters + sort */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((c) => {
            const active = category === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                aria-pressed={active}
                className={`h-9 rounded-full px-4 text-sm font-semibold transition-colors ${
                  active ? "bg-navy text-white" : "border border-line bg-white text-navy hover:border-navy/40"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
        <label className="flex items-center gap-2 text-sm text-body">
          <span>Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="h-9 rounded-full border border-line bg-white px-3 text-sm font-semibold text-navy focus:border-gold focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </label>
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} products shown
      </p>

      {visible.length ? (
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-dashed border-line bg-cream px-6 py-14 text-center">
          <p className="heading text-2xl">Nothing here yet.</p>
          <p className="mt-2 text-sm text-body">New items are on the way. Try another filter.</p>
          <button
            type="button"
            onClick={() => {
              setCategory("all");
              setCollection("all");
            }}
            className="mt-5 text-sm font-semibold text-gold-deep underline underline-offset-4 hover:text-navy"
          >
            Show all products
          </button>
        </div>
      )}
    </div>
  );
}
