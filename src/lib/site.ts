export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const site = {
  name: "Accexx Insight",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.accexxinsight.com",
  tagline: "We more than find solutions. We ensure transformation.",
  description:
    "Accexx Insight helps leaders, entrepreneurs, professionals, and organizations turn uncertainty into clarity, strategy, action, and measurable progress.",
  collective: "Dr. A + Executive Consultants — A Collective of Breakthrough.",
};

/**
 * External integrations. All values come from env vars; when one is missing
 * the UI falls back to an internal page rather than a dead link.
 * See TODO_CLIENT.md for what is still outstanding.
 */
export const links = {
  booking: process.env.NEXT_PUBLIC_GHL_BOOKING_URL || "/contact#book",
  coursePortal: process.env.NEXT_PUBLIC_COURSE_PORTAL_URL || "/contact",
  // Phone number not supplied yet: "Call Now" routes to the contact page until it is.
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || null,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || null,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || null,
};

export const callHref = links.phone ? `tel:${links.phone.replace(/[^+\d]/g, "")}` : "/contact";

export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Dr. A", href: "/about", description: "Educator, author, coach and consultant" },
      { label: "Who We Serve", href: "/about#who-we-serve", description: "Organizations, leaders, founders, professionals" },
      { label: "Our Team", href: "/about#team", description: "The people behind the platform" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Overview", href: "/services" },
      { label: "Consulting", href: "/services/consulting", description: "Redesign systems, behaviors and beliefs" },
      { label: "Coaching", href: "/services/coaching", description: "Work at the level of your Human Operating System" },
      { label: "Speaking", href: "/services/speaking", description: "Keynotes, panels and talks" },
    ],
  },
  {
    label: "Education",
    href: "/education",
    children: [
      { label: "Overview", href: "/education" },
      { label: "Certificate Programs", href: "/education/certifications", description: "10 HOC certifications" },
      { label: "Leadership Development", href: "/education/leadership", description: "12 leadership programs" },
      { label: "BEInspire© Career Series", href: "/education/beinspire", description: "10 career workshops" },
      { label: "Project Unify©", href: "/education/project-unify" },
    ],
  },
  {
    label: "Books & Events",
    href: "/books",
    children: [
      { label: "Books", href: "/books", description: "The Unfinished Leader · Why Move My Cheese?" },
      { label: "Why Move My Cheese? Conference", href: "/books#conference" },
      { label: "Shop", href: "/shop", description: "Books & swag" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Education", href: "/education" },
      { label: "Books & Events", href: "/books" },
      { label: "Shop", href: "/shop" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Consulting", href: "/services/consulting" },
      { label: "Coaching", href: "/services/coaching" },
      { label: "Speaking", href: "/services/speaking" },
    ],
  },
  {
    title: "Education",
    links: [
      { label: "Overview", href: "/education" },
      { label: "Certificate Programs", href: "/education/certifications" },
      { label: "Leadership Development", href: "/education/leadership" },
      { label: "Project Unify©", href: "/education/project-unify" },
      { label: "BEInspire© Career Series", href: "/education/beinspire" },
    ],
  },
];
