import type { StaticImageData } from "next/image";
import unfinishedLeaderCover from "../../public/images/book-the-unfinished-leader.jpg";
import whyMoveMyCheeseCover from "../../public/images/book-why-move-my-cheese.jpg";
import capColours from "../../public/images/products/o-face-cap-colours.jpg";
import capForestGreen from "../../public/images/products/o-face-cap-forest-green.jpg";
import capBlack from "../../public/images/products/o-face-cap-black.jpg";
import capNavy from "../../public/images/products/o-face-cap-navy.jpg";
import capCharcoal from "../../public/images/products/o-face-cap-charcoal.jpg";
import capKhaki from "../../public/images/products/o-face-cap-khaki.jpg";
import capWhite from "../../public/images/products/o-face-cap-white.jpg";
import capSteelBlue from "../../public/images/products/o-face-cap-steel-blue.jpg";
import capOlive from "../../public/images/products/o-face-cap-olive.jpg";
import giftCardImage from "../../public/images/products/store-gift-card.jpg";
import capTan from "../../public/images/products/cap-tan.jpg";
import capMoveMindset from "../../public/images/products/cap-black.jpg";
import capAdaptLead from "../../public/images/products/cap-grey.jpg";
import capMoveDifferent from "../../public/images/products/cap-olive.jpg";
import teeWhite from "../../public/images/products/tee-white.jpg";
import teeBlack from "../../public/images/products/tee-black.jpg";
import teeDarkGrey from "../../public/images/products/tee-dark-grey.jpg";
import teeForestGreen from "../../public/images/products/tee-forest-green.jpg";
import ribMugWhite from "../../public/images/products/rib-mug-white.jpg";
import ribMugNavy from "../../public/images/products/rib-mug-navy.jpg";
import hoodieDisruptBlack from "../../public/images/products/hoodie-disrupt-black.jpg";
import hoodieWmmcBeige from "../../public/images/products/hoodie-wmmc-beige.jpg";
import hoodieValuesGreen from "../../public/images/products/hoodie-values-green.jpg";
import hoodieIconsNavy from "../../public/images/products/hoodie-icons-navy.jpg";
import mugLegacyBlack from "../../public/images/products/mug-legacy-black.jpg";
import mugIconsWhite from "../../public/images/products/mug-icons-white.jpg";
import mugPurposeBlack from "../../public/images/products/mug-purpose-black.jpg";
import tumblerFocus from "../../public/images/products/tumbler-focus.jpg";
import notebookIdeas from "../../public/images/products/notebook-ideas.jpg";
import toteLeadInspire from "../../public/images/products/tote-lead-inspire.jpg";
import pinsSet from "../../public/images/products/pins-set.jpg";
import lanyardWmmc from "../../public/images/products/lanyard-wmmc.jpg";
import stickersPack from "../../public/images/products/stickers-pack.jpg";

export type ProductBadge = "NEW" | "BESTSELLER";

/** Shop filter chips (the current shop shows All / Other / Apparel / Digital; Books split out for clarity). */
export type ProductCategory = "books" | "apparel" | "digital" | "other";

export const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "books", label: "Books" },
  { id: "apparel", label: "Apparel" },
  { id: "digital", label: "Digital" },
  { id: "other", label: "Other" },
];

/** Collections shown as tiles above the grid (the current shop has both, each holding all 4 items). */
export type CollectionId = "leadership" | "summer-drop" | "conference-swag";

export const collections: { id: CollectionId; label: string }[] = [
  { id: "leadership", label: "Leadership" },
  { id: "summer-drop", label: "Summer Drop" },
  // Dr. A's "Official Conference Swag" sheet (2026-10-02): Why Move My Cheese? Conference merch.
  { id: "conference-swag", label: "Conference Swag" },
];

/**
 * Product kinds. Books, the cap and the gift card exist today. Dr. A plans more merch
 * (T-shirts, caps, cups, pens; mostly Why Move My Cheese? Conference swag), so the kinds
 * below are ready for them. Do not add products until she sends the real items + photos.
 */
export type ProductType = "book" | "apparel" | "headwear" | "drinkware" | "stationery" | "gift-card" | "other";

export type BookFormat = {
  format: "Hardcover" | "Paperback" | "Kindle" | "Audiobook";
  /** USD. Omitted when not yet on sale. */
  price?: number;
  status: "available" | "coming-soon";
  note?: string;
};

/**
 * One buyable option of a product: a book format, or a size/colour combination for apparel
 * (e.g. `{ id: "tee-navy-m", label: "Navy / M", options: { Colour: "Navy", Size: "M" } }`).
 * Coming-soon variants are listed but cannot be added to the bag.
 */
export type ProductVariant = {
  id: string;
  label: string;
  /** Option name → value, e.g. { Format: "Hardcover" } or { Size: "L", Colour: "Navy" }. */
  options: Record<string, string>;
  /** USD. Falls back to the product price. */
  price?: number;
  compareAt?: number;
  status: "available" | "coming-soon";
  note?: string;
  sku?: string;
  /** Colour swatch (hex) for Colour options. */
  swatch?: string;
  /** Photo shown when this variant is selected. */
  image?: StaticImageData;
  /** Gift card "Custom" amount: the price comes from the buyer's amount (validated against `giftCard`). */
  custom?: boolean;
  /** GHL payment link for this option. When set, the product page shows "Buy now" (checkout + order in GHL). */
  checkoutUrl?: string;
};

export type GiftCardConfig = {
  /** Custom amount limits, USD. */
  min: number;
  max: number;
  /** Delivered by email; no shipping. */
  delivery: "email";
};

export type Product = {
  slug: string;
  name: string;
  /** USD. "From" price shown on cards (current shop price). */
  price: number;
  compareAt?: number;
  badge?: ProductBadge;
  type: ProductType;
  category: ProductCategory;
  collections: CollectionId[];
  author?: string;
  subtitle?: string;
  cover?: StaticImageData;
  /** Product photo (merch). Books use `cover`. */
  photo?: StaticImageData;
  photoAlt?: string;
  /** Present on gift cards: amount picker + recipient details. */
  giftCard?: GiftCardConfig;
  /** Book formats as Dr. A listed them (includes Kindle for display on /books, which hides it). */
  formats?: BookFormat[];
  /** Buy options in the shop. Products without variants are bought as-is. */
  variants?: ProductVariant[];
  /** Short line under the title, from the cover. */
  flag?: string;
  /** Product copy. Only fill from client-supplied text; never invent. */
  description?: string[];
  /** Label for the typographic placeholder tile when there is no photo yet. */
  placeholderLabel?: string;
  /** Price not supplied yet: shown as "Price coming soon" and not addable to the bag (`price` is ignored). */
  pricePending?: boolean;
};

// GHL payment links per book format (Payments → Payment Links). Currently in GHL TEST mode.
// TODO: Hardcover links + Why Move My Cheese? links; switch the links to Live before launch.
const checkoutLinks: Record<string, string> = {
  "the-unfinished-leader-paperback": "https://link.fastpaydirect.com/payment-link/6ac2d049075ea22a20cdc38a",
};

const bookVariants = (slug: string, formats: BookFormat[], compareAt?: number): ProductVariant[] =>
  formats
    // Kindle ($9.99) is sold only on Amazon and Dr. A does not want to send buyers there,
    // so it is not a buy option (TODO_CLIENT.md: decide if/how to list Kindle).
    .filter((f) => f.format !== "Kindle")
    .map((f) => ({
      id: `${slug}-${f.format.toLowerCase()}`,
      label: f.format,
      options: { Format: f.format },
      price: f.price,
      compareAt: f.format === "Hardcover" ? compareAt : undefined,
      status: f.status,
      note: f.note,
      checkoutUrl: checkoutLinks[`${slug}-${f.format.toLowerCase()}`],
    }));

const unfinishedLeaderFormats: BookFormat[] = [
  { format: "Hardcover", price: 28.99, status: "available" },
  { format: "Paperback", price: 24, status: "available" },
  { format: "Kindle", price: 9.99, status: "available" },
  { format: "Audiobook", status: "coming-soon", note: "Coming October 2026" },
];

const cheeseFormats: BookFormat[] = [
  { format: "Hardcover", price: 31, status: "available" },
  { format: "Paperback", price: 24, status: "available" },
  { format: "Kindle", price: 9.99, status: "available" },
  { format: "Audiobook", status: "coming-soon", note: "Coming October 2026" },
];

// Card prices: reference/text/site_current-shop_shop.accexxinsight.com.txt.
// Formats, format prices and subtitles: Dr. A's email of 2026-09-30 + the cover files.
// Why Move My Cheese? description, cap colours and gift card options: her current shop (screens shared 2026-10-01).

const capColourList: [string, string, StaticImageData][] = [
  ["Forest Green", "#1f3a2e", capForestGreen],
  ["Black", "#111111", capBlack],
  ["Navy", "#1c2a4a", capNavy],
  ["Charcoal", "#3b3b3e", capCharcoal],
  ["Khaki", "#b9a47c", capKhaki],
  ["White", "#f4f2ee", capWhite],
  ["Steel Blue", "#4f7396", capSteelBlue],
  ["Olive", "#4d5536", capOlive],
];

const cheeseTagline = "When the cheese moves, do you disappear or decide?";
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
    category: "books",
    collections: ["leadership", "summer-drop"],
    author: "Dr. Laide R. Alexander",
    cover: unfinishedLeaderCover,
    formats: unfinishedLeaderFormats,
    variants: bookVariants("the-unfinished-leader", unfinishedLeaderFormats, 38),
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
    category: "books",
    collections: ["leadership", "summer-drop"],
    author: "Dr. Laide R. Alexander",
    cover: whyMoveMyCheeseCover,
    description: [
      "Jobs end. Churches shift. Relationships change. Callings evolve. One day you look up and realize: the cheese is not where you left it.",
      "In Why Move My Cheese?, Dr. Laide R. Alexander helps you tell the truth about your “why”: why you stay, why you go, why you hide, and why you hand your power to other people.",
    ],
    formats: cheeseFormats,
    variants: bookVariants("why-move-my-cheese", cheeseFormats, 38),
  },
  {
    slug: "o-face-cap",
    name: "O Face Cap",
    subtitle: cheeseTagline,
    price: 25.95,
    compareAt: 29.95,
    badge: "BESTSELLER",
    type: "headwear",
    category: "apparel",
    collections: ["leadership", "summer-drop"],
    photo: capColours,
    photoAlt: "O Face Cap in eight colours, each with the open-circle emblem",
    variants: capColourList.map(([colour, swatch, image]) => ({
      id: `o-face-cap-${colour.toLowerCase().replace(/ /g, "-")}`,
      label: colour,
      options: { Colour: colour },
      price: 25.95,
      compareAt: 29.95,
      status: "available" as const,
      swatch,
      image,
    })),
  },
  {
    slug: "store-gift-card",
    name: "Store Gift Card",
    subtitle: cheeseTagline,
    price: 25,
    badge: "BESTSELLER",
    type: "gift-card",
    category: "digital",
    collections: ["leadership", "summer-drop"],
    photo: giftCardImage,
    photoAlt: "Why Move My Cheese? store gift card",
    // Custom range is our default (her current shop doesn't show one): TODO_CLIENT.md.
    giftCard: { min: 10, max: 500, delivery: "email" },
    variants: [
      ...[25, 50, 100, 200].map((amount) => ({
        id: `store-gift-card-${amount}`,
        label: `$${amount}`,
        options: { Amount: `$${amount}` },
        price: amount,
        status: "available" as const,
      })),
      { id: "store-gift-card-custom", label: "Custom", options: { Amount: "Custom" }, status: "available", custom: true },
    ],
  },
];


/* Merch, from Dr. A's WhatsApp lineup (2026-10-02, reference/shop-images/merch-lineup-2026-10-02.png).
   Stock per her sheet: caps 3 each (one size); T-shirts 3 each (1 M, 1 L, 1 XL).
   TODO_CLIENT: prices + original photo files (current images are cut from the lineup). */
const PRICE_SOON = "Price coming soon";

const merchCap = (slug: string, name: string, subtitle: string, photo: StaticImageData, photoAlt: string): Product => ({
  slug,
  name,
  subtitle,
  price: 0,
  pricePending: true,
  badge: "NEW",
  type: "headwear",
  category: "apparel",
  collections: ["summer-drop", "conference-swag"],
  photo,
  photoAlt,
  variants: [{ id: `${slug}-one-size`, label: "One Size", options: { Size: "One Size" }, status: "coming-soon", note: PRICE_SOON }],
});

const merchTee = (slug: string, name: string, subtitle: string, photo: StaticImageData, photoAlt: string): Product => ({
  slug,
  name,
  subtitle,
  price: 0,
  pricePending: true,
  badge: "NEW",
  type: "apparel",
  category: "apparel",
  collections: ["summer-drop", "conference-swag"],
  photo,
  photoAlt,
  variants: ["M", "L", "XL"].map((size) => ({
    id: `${slug}-${size.toLowerCase()}`,
    label: size,
    options: { Size: size },
    status: "coming-soon" as const,
    note: PRICE_SOON,
  })),
});

products.push(
  merchCap("logo-cap-tan", "Logo Cap", "Tan · Open-circle logo", capTan, "Tan cap with the Accexx open-circle logo"),
  merchCap("move-mindset-cap", "Move Mindset Cap", "Black · Move Mindset. Move Future.", capMoveMindset, "Black cap: Move Mindset. Move Future."),
  merchCap("adapt-lead-transform-cap", "Adapt. Lead. Transform. Cap", "Grey", capAdaptLead, "Grey cap: Adapt. Lead. Transform."),
  merchCap("move-different-cap", "Move Different. Cap", "Olive", capMoveDifferent, "Olive cap: Move Different."),
  merchTee("move-different-lead-better-tee", "Move Different. Lead Better. Tee", "White T-shirt", teeWhite, "White T-shirt: Move Different. Lead Better."),
  merchTee("adapt-lead-transform-tee", "Adapt. Lead. Transform. Tee", "Black T-shirt", teeBlack, "Black T-shirt: Adapt. Lead. Transform."),
  merchTee("home-work-world-tee", "Icon Tee", "Dark grey T-shirt · Home, work and world icons", teeDarkGrey, "Dark grey T-shirt with home, briefcase and globe icons"),
  merchTee("mindset-strategy-impact-tee", "Mindset. Strategy. Impact. Tee", "Forest green T-shirt", teeForestGreen, "Forest green T-shirt: Mindset. Strategy. Impact."),
  {
    slug: "read-imagine-become-mug",
    name: "Read. Imagine. Become. Mug",
    subtitle: "#R.I.B",
    price: 0,
    pricePending: true,
    badge: "NEW",
    type: "drinkware",
    category: "other",
    collections: ["summer-drop", "conference-swag"],
    photo: ribMugWhite,
    photoAlt: "Concept design: white mug with Read. Imagine. Become. #R.I.B",
    // Concept mockups made at Dr. A's request ("use AI to make some merchandise with #R.I.B"). Replace with real photos.
    description: ["Concept design. Final product photos coming soon."],
    variants: [
      ["White", "#ffffff", ribMugWhite],
      ["Navy", "#1f3864", ribMugNavy],
    ].map(([colour, swatch, image]) => ({
      id: `read-imagine-become-mug-${(colour as string).toLowerCase()}`,
      label: colour as string,
      options: { Colour: colour as string },
      status: "coming-soon" as const,
      note: PRICE_SOON,
      swatch: swatch as string,
      image: image as StaticImageData,
    })),
  },
);


/* Conference swag, from Dr. A's "Official Conference Swag" sheet (2026-10-02,
   reference/shop-images/conference-swag-sheet-2026-10-02.png). Photos are cut from the sheet until HD images arrive.
   TODO_CLIENT: prices, sizes/stock. */
const swag = (
  slug: string,
  name: string,
  subtitle: string,
  type: ProductType,
  category: ProductCategory,
  photo: StaticImageData,
  photoAlt: string,
  option: [string, string] = ["Option", "Standard"],
): Product => ({
  slug,
  name,
  subtitle,
  price: 0,
  pricePending: true,
  badge: "NEW",
  type,
  category,
  collections: ["conference-swag"],
  photo,
  photoAlt,
  variants: [
    {
      id: `${slug}-${option[1].toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      label: option[1],
      options: { [option[0]]: option[1] },
      status: "coming-soon",
      note: PRICE_SOON,
    },
  ],
});

const hoodieSize: [string, string] = ["Size", "Sizes to be announced"];

products.push(
  swag("disrupt-adapt-lead-repeat-hoodie", "Disrupt. Adapt. Lead. Repeat. Hoodie", "Black hoodie · Back print", "apparel", "apparel", hoodieDisruptBlack, "Black hoodie: Disrupt. Adapt. Lead. Repeat.", hoodieSize),
  swag("why-move-my-cheese-hoodie", "Why Move My Cheese? Hoodie", "Beige hoodie · Conference logo", "apparel", "apparel", hoodieWmmcBeige, "Beige hoodie with the Why Move My Cheese? logo", hoodieSize),
  swag("built-on-values-hoodie", "Built on Values. Driven by Purpose. Hoodie", "Green hoodie · Back print", "apparel", "apparel", hoodieValuesGreen, "Green hoodie: Built on Values. Driven by Purpose.", hoodieSize),
  swag("my-home-my-work-my-universe-hoodie", "My Home. My Work. My Universe. Hoodie", "Navy hoodie · Back print", "apparel", "apparel", hoodieIconsNavy, "Navy hoodie with the My Home, My Work, My Universe icons", hoodieSize),
  swag("lead-yourself-mug", "Lead Yourself. Lead Others. Leave a Legacy. Mug", "Black ceramic mug", "drinkware", "other", mugLegacyBlack, "Black mug: Lead Yourself. Lead Others. Leave a Legacy."),
  swag("my-home-my-work-my-universe-mug", "My Home. My Work. My Universe. Mug", "White ceramic mug", "drinkware", "other", mugIconsWhite, "White mug with the My Home, My Work, My Universe icons"),
  swag("purpose-over-position-mug", "Purpose over Position Mug", "Black ceramic mug", "drinkware", "other", mugPurposeBlack, "Black mug: Purpose over Position."),
  swag("focus-adapt-execute-tumbler", "Focus. Adapt. Execute. Repeat. Tumbler", "Insulated, hot & cold", "drinkware", "other", tumblerFocus, "Black tumbler: Focus. Adapt. Execute. Repeat."),
  swag("ideas-plans-impact-notebook", "Ideas. Plans. Impact. Notebook", "Ruled pages, premium cover", "stationery", "other", notebookIdeas, "Black notebook: Ideas. Plans. Impact."),
  swag("lead-inspire-impact-tote", "Lead. Inspire. Impact. Tote Bag", "Durable, reusable", "other", "other", toteLeadInspire, "Black tote bag: Lead. Inspire. Impact."),
  swag("conference-pin-set", "Conference Pin Set", "Set of 3 pins", "other", "other", pinsSet, "Three pins: the open-circle logo, Lead Adapt Transform, and the icons", ["Option", "Set of 3"]),
  swag("why-move-my-cheese-lanyard", "Why Move My Cheese? Lanyard", "Attendee lanyard", "other", "other", lanyardWmmc, "Why Move My Cheese? attendee lanyard"),
  swag("conference-sticker-pack", "Conference Sticker Pack", "High-quality vinyl", "other", "other", stickersPack, "Sticker pack: Adapt. Lead. Transform., the logo, the icons, Purpose over Position", ["Option", "Pack"]),
);

export const books = products.filter((p) => p.type === "book");

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

/** Price of a variant (or the product when no variant). */
export const variantPrice = (p: Product, v?: ProductVariant) => v?.price ?? p.price;

/** First purchasable variant, used as the default selection. */
/** Default selection: an option with a GHL checkout link if there is one, else the first purchasable one. */
export const defaultVariant = (p: Product) =>
  p.variants?.find((v) => v.status === "available" && v.checkoutUrl) ?? p.variants?.find((v) => v.status === "available");

export const formatPrice = (usd: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(usd);
