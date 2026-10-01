export type Testimonial = {
  quote: string;
  role: string;
  organization: string;
  /** False until the client confirms the quote is real and approves the attribution. */
  confirmed: boolean;
};

// Source: reference/text/site_draft_upload.x01works.com.ng.txt ("Voices").
// PENDING CLIENT CONFIRMATION: no names were supplied; listed in TODO_CLIENT.md.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Dr. A didn't just consult with our leadership team. She activated us. Six months later, we're operating from a different altitude.",
    role: "Executive Director",
    organization: "Nonprofit, Atlanta",
    confirmed: false,
  },
  {
    quote:
      "Coaching with Dr. A gave me the language, strategy, and courage to walk into rooms I once believed weren't meant for me.",
    role: "Founder & CEO",
    organization: "Consumer brand",
    confirmed: false,
  },
  {
    quote:
      "Her keynote didn't inspire us for an hour. It reframed how our team thinks about breakthrough. Months later, they're still quoting her.",
    role: "Head of People",
    organization: "Fortune 500",
    confirmed: false,
  },
];
