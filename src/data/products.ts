import type { StaticImageData } from "next/image";
import unfinishedLeaderCover from "../../public/images/book-the-unfinished-leader.jpg";
import whyMoveMyCheeseCover from "../../public/images/book-why-move-my-cheese.jpg";

export type ProductBadge = "NEW" | "BESTSELLER";

export type BookFormat = {
  format: "Hardcover" | "Paperback" | "Kindle" | "Audiobook";
  /** USD. Omitted when not yet on sale. */
  price?: number;
  status: "available" | "coming-soon";
  note?: string;
};

export type Product = {
  slug: string;
  name: string;
  /** USD. "From" price shown on cards (current shop price). */
  price: number;
  compareAt?: number;
  badge?: ProductBadge;
  type: "book" | "apparel" | "gift-card";
  author?: string;
  subtitle?: string;
  cover?: StaticImageData;
  formats?: BookFormat[];
  /** Short line under the title, from the cover. */
  flag?: string;
};

// Card prices: reference/text/site_current-shop_shop.accexxinsight.com.txt.
// Formats, format prices and subtitles: Dr. A's email of 2026-09-30 + the cover files.
// Kindle is sold on Amazon; Dr. A prefers not to send buyers to Amazon (see TODO_CLIENT.md).
export const products: Product[] = [
  {
    slug: "the-unfinished-leader",
    name: "The Unfinished Leader",
    subtitle: "Embracing Personal Transformation to Lead Change That Lasts",
    price: 28.99,
    compareAt: 38,
    badge: "NEW",
    flag: "Amazon Best Seller",
    type: "book",
    author: "Dr. Laide R. Alexander",
    cover: unfinishedLeaderCover,
    formats: [
      { format: "Hardcover", price: 28.99, status: "available" },
      { format: "Paperback", price: 24, status: "available" },
      { format: "Kindle", price: 9.99, status: "available" },
      { format: "Audiobook", status: "coming-soon", note: "Coming October 2026" },
    ],
  },
  {
    slug: "why-move-my-cheese",
    name: "Why Move My Cheese?",
    subtitle: "How to Own Your Decisions, Tell the Truth About Your “Why” and Stop Disappearing in Seasons of Change",
    price: 31,
    compareAt: 38,
    badge: "BESTSELLER",
    flag: "Includes a 6-Session Practice Guide",
    type: "book",
    author: "Dr. Laide R. Alexander",
    cover: whyMoveMyCheeseCover,
    formats: [
      { format: "Hardcover", price: 31, status: "available" },
      { format: "Paperback", price: 24, status: "available" },
      { format: "Kindle", price: 9.99, status: "available" },
      { format: "Audiobook", status: "coming-soon", note: "Coming October 2026" },
    ],
  },
  { slug: "o-face-cap", name: "O Face Cap", price: 25.95, compareAt: 29.95, badge: "BESTSELLER", type: "apparel" },
  { slug: "store-gift-card", name: "Store Gift Card", price: 25, badge: "BESTSELLER", type: "gift-card" },
];

export const books = products.filter((p) => p.type === "book");

export const formatPrice = (usd: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(usd);
