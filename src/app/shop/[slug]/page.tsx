import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductMedia } from "@/components/shop/ProductMedia";
import { BoughtTogether } from "@/components/shop/BoughtTogether";
import { ProductPurchase } from "@/components/shop/ProductPurchase";
import { ProductCard } from "@/components/shop/ProductCard";
import { ReviewForm } from "@/components/shop/ReviewForm";
import { getProduct, products } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const description = product.subtitle
    ? `${product.name}: ${product.subtitle}${product.author ? `, by ${product.author}` : ""}. Buy direct from the Accexx Insight Shop.`
    : `${product.name} from the Accexx Insight Shop.`;
  const images = product.cover ? [{ url: product.cover.src, width: product.cover.width, height: product.cover.height, alt: `${product.name} book cover` }] : undefined;
  return {
    title: `${product.name} | Shop`,
    description,
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: { title: product.name, description, ...(images ? { images } : {}) },
    twitter: { title: product.name, description, ...(images ? { images: images.map((i) => i.url) } : {}) },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const isBook = product.type === "book";
  // Bundle: this item + up to two others (gift cards need recipient details, so they're never auto-added).
  const together = [product, ...products.filter((p) => p.slug !== product.slug && !p.giftCard && !p.pricePending)].slice(0, 3);
  const canBundle = !product.giftCard && !product.pricePending && together.length > 1;

  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="container-site py-10 sm:py-14 lg:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/shop" className="hover:text-navy">
                  Shop
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-navy" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 md:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-[2rem] bg-white ring-1 ring-line md:max-w-none">
              <ProductMedia product={product} />
              {product.badge && (
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-white ${
                    product.badge === "NEW" ? "bg-teal" : "bg-gold"
                  }`}
                >
                  {product.badge}
                </span>
              )}
            </div>

            <div>
              {product.flag && <p className="eyebrow">{product.flag}</p>}
              <h1 className="heading mt-3 text-[2.6rem] leading-[1.05] sm:text-5xl">{product.name}</h1>
              {product.subtitle && <p className="mt-4 font-serif text-2xl font-medium italic leading-snug text-navy/80">{product.subtitle}</p>}
              {product.author && <p className="mt-3 text-sm font-medium text-muted">by {product.author}</p>}
              <div className="mt-8">
                <ProductPurchase product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details ----------------------------------------------------------------- */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="details-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
          <div>
            <h2 id="details-heading" className="heading text-3xl sm:text-4xl">
              {isBook ? "About this book" : "Details"}
            </h2>
            {product.description?.length ? (
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-body">
                {product.description.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ) : (
              // No product copy supplied yet (TODO_CLIENT.md).
              <p className="mt-5 rounded-2xl border border-dashed border-line bg-cream px-5 py-4 text-sm text-muted">
                Full description coming soon.
              </p>
            )}
            {isBook && (
              <p className="mt-6">
                <Link href="/books" className="text-sm font-semibold text-gold-deep underline underline-offset-4 hover:text-navy">
                  More about Dr. A&apos;s books and events
                </Link>
              </p>
            )}
          </div>
          <dl className="h-fit divide-y divide-line rounded-2xl border border-line text-sm">
            {product.author && <Row label="Author" value={product.author} />}
            {product.variants?.length ? (
              <Row
                label={product.giftCard ? "Amounts" : product.type === "book" ? "Formats" : "Colours"}
                value={product.variants.map((v) => (v.status === "available" ? v.label : `${v.label} (${v.note ?? "coming soon"})`)).join(", ")}
              />
            ) : null}
            {product.flag && <Row label="Note" value={product.flag} />}
            <Row
              label={product.giftCard ? "Delivery" : "Shipping & tax"}
              value={product.giftCard ? "No shipping, delivered instantly by email" : "Calculated at checkout"}
            />
          </dl>
        </div>
      </section>

      {canBundle && (
        <section className="border-t border-line bg-white py-14 lg:py-16" aria-labelledby="together-heading">
          <div className="container-site">
            <h2 id="together-heading" className="heading text-3xl sm:text-4xl">
              Frequently bought <em className="text-gold">together</em>
            </h2>
            <div className="mt-8">
              <BoughtTogether items={together} />
            </div>
          </div>
        </section>
      )}

      {/* Reviews ----------------------------------------------------------------- */}
      <section id="reviews" className="scroll-mt-20 border-t border-line bg-cream py-14 lg:py-20" aria-labelledby="reviews-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2 id="reviews-heading" className="heading mt-3 text-3xl sm:text-4xl">
              What readers <em className="text-gold">are saying</em>
            </h2>
            {/* Approved reviews will be listed here once moderation (GHL) is wired up. */}
            <p className="mt-5 text-lg text-body">No reviews yet. Be the first.</p>
            <p className="mt-3 text-sm text-muted">Reviews are published after approval.</p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-navy">Write a review</h3>
            <div className="mt-5">
              <ReviewForm productSlug={product.slug} productName={product.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Related ----------------------------------------------------------------- */}
      {related.length > 0 && (
        <section className="bg-white py-14 lg:py-20" aria-labelledby="related-heading">
          <div className="container-site">
            <h2 id="related-heading" className="heading text-3xl sm:text-4xl">
              You may <em className="text-gold">also like</em>
            </h2>
            <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 px-5 py-4">
      <dt className="font-semibold text-navy">{label}</dt>
      <dd className="text-body">{value}</dd>
    </div>
  );
}
