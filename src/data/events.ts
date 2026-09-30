export type SeriesEvent = {
  number: number;
  /** ISO date when the exact day is known, otherwise YYYY-MM. */
  date: string;
  label: string;
  venue: string | null;
};

// Source: reference/text/Inside The Pages With Dr. A - web.txt
export const insideThePages = {
  name: "Inside the Pages with Dr. A",
  tagline: "Every Book. Different Perspective.",
  lede: "Where books become conversations.",
  summary:
    "What if the point wasn't to sell a book at a table, but to sit in a room together and let a book become a conversation? Not a lecture. Not a sermon. Not a book club with an assigned reading schedule. Something closer to a living room — armchairs, real light, a passage read aloud together, and space for people to say something true.",
  sequence: [
    { title: "Arrival", body: "Music plays — warm, ambient, conversational volume — as guests find seats and mingle." },
    { title: "The Bell", body: "The bell rings. This is the cue, not an announcement — the room quiets and turns toward the page." },
    { title: "Reading Together", body: "The passage is read aloud, or an audio excerpt plays, while the room follows along in genuine quiet." },
    { title: "Return to Warmth", body: "Music returns at the close, alongside light finger food and drinks." },
  ],
  scheduleTitle: "Make It A Date! Bring A Date!",
  schedule: [
    { number: 1, date: "2026-12-12", label: "Dec 12, 2026", venue: "The Cannon" },
    { number: 2, date: "2027-01", label: "Jan 2027", venue: null },
    { number: 3, date: "2027-03", label: "Mar 2027", venue: null },
    { number: 4, date: "2027-05", label: "May 2027", venue: null },
    { number: 5, date: "2027-07", label: "Jul 2027", venue: null },
    { number: 6, date: "2027-09", label: "Sep 2027", venue: null },
    { number: 7, date: "2027-11", label: "Nov 2027", venue: null },
    { number: 8, date: "2028-01", label: "Jan 2028", venue: null },
    { number: 9, date: "2028-03", label: "Mar 2028", venue: null },
    { number: 10, date: "2028-05", label: "May 2028", venue: null },
    { number: 11, date: "2028-07", label: "Jul 2028", venue: null },
    { number: 12, date: "2028-09", label: "Sep 2028", venue: null },
    { number: 13, date: "2028-11", label: "Nov 2028", venue: null },
  ] satisfies SeriesEvent[],
};
