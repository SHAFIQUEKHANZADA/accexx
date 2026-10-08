export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const site = {
  name: "Accexx Insight",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.accexxinsight.com",
  tagline: "We do more than find solutions. We enable transformation.",
  description:
    "Accexx Insight helps leaders, entrepreneurs, professionals, and organizations turn uncertainty into clarity, strategy, action, and measurable progress.",
  collective: "Dr. A + Executive Consultants: A Collective of Breakthrough.",
};

/**
 * External integrations. All values come from env vars; when one is missing
 * the UI falls back to an internal page rather than a dead link.
 * See TODO_CLIENT.md for what is still outstanding.
 */
export const links = {
  // Every "Book Dr. A" / "Book a Discovery Call" button goes to the calendar embedded on /contact,
  // so visitors stay on the site. The GHL widget URL itself is only used for that embed.
  booking: "/contact#book",
  bookingEmbed: process.env.NEXT_PUBLIC_GHL_BOOKING_URL || null,
  coursePortal: process.env.NEXT_PUBLIC_COURSE_PORTAL_URL || "/contact",
  // The store now runs as a separate site (2026-10-09). /shop on this site redirects there.
  shop: process.env.NEXT_PUBLIC_SHOP_URL || "https://shop.accexxinsight.com",

  // Confirmed contact information
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "(800) 689-1185",
  phoneSecondary: process.env.NEXT_PUBLIC_CONTACT_PHONE_SECONDARY || "(281) 985-1765",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@accexxinsight.com",
  studentSupportEmail: process.env.NEXT_PUBLIC_STUDENT_SUPPORT_EMAIL || "axiacastudent@accexxinsight.com",
  facultySupportEmail: process.env.NEXT_PUBLIC_FACULTY_SUPPORT_EMAIL || "axiacafaculty@accexxinsight.com",
  address: "1334 Brittmoore Road, Suite 1000B, Houston, TX 77043",
  addressCityState: "Houston, TX",

  // Consultation availability
  consultationHours: "Tuesday–Thursday, 9:00 AM–4:00 PM",
  meetingMethod: "Zoom",

  // Social profiles supplied
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/laidealexander/",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/iamdrlaidea/",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://www.youtube.com/@Dr.LaideAlexander",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "https://www.tiktok.com/@drlaidealexander/",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/profile.php?id=61584887520106",
};

export const callHref = `tel:${links.phone.replace(/[^+\d]/g, "")}`;
export const callHrefSecondary = `tel:${links.phoneSecondary.replace(/[^+\d]/g, "")}`;

export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Accexx Insight", href: "/about", description: "Who we are, what we do, our values" },
      { label: "Meet Dr. A", href: "/about/dr-a", description: "The visionary behind Accexx Insight" },
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
      // Education sits under Services (Dr. A, 2026-10-01: "so the header is neater and not crowded").
      { label: "Education", href: "/education", description: "Certifications, leadership programs, courses & workshops" },
    ],
  },
  {
    label: "Books & Events",
    href: "/books",
    children: [
      { label: "Books", href: "/books", description: "The Unfinished Leader · Why Move My Cheese?" },
      { label: "Why Move My Cheese? Conference", href: "/books#conference", description: "Leadership Conference 2026 highlights" },
      { label: "Inside the Pages with Dr. A", href: "/inside-the-pages", description: "Where books become conversations" },
      { label: "Shop", href: "https://shop.accexxinsight.com", description: "Books & swag" },
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
      { label: "Shop", href: "https://shop.accexxinsight.com" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Consulting", href: "/services/consulting" },
      { label: "Coaching", href: "/services/coaching" },
      { label: "Speaking", href: "/services/speaking" },
      { label: "Inside the Pages", href: "/inside-the-pages" },
    ],
  },
  {
    title: "Education",
    links: [
      { label: "Overview", href: "/education" },
      { label: "HOC Certifications", href: "/education/certifications" },
      { label: "Leadership Development", href: "/education/leadership" },
      { label: "BEInspire© Career Series", href: "/education/beinspire" },
      { label: "Project Unify© Certificates", href: "/education/project-unify" },
      { label: "HOC Short Courses", href: "/education/short-courses" },
    ],
  },
];
