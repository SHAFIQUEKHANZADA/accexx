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
    "What if the point wasn't to sell a book at a table, but to sit in a room together and let a book become a conversation? Not a lecture. Not a sermon. Not a book club with an assigned reading schedule. Something closer to a living room: armchairs, real light, a passage read aloud together, and space for people to say something true.",
  sequence: [
    { title: "Arrival", body: "Music plays (warm, ambient, conversational volume) as guests find seats and mingle." },
    { title: "The Bell", body: "The bell rings. This is the cue, not an announcement. The room quiets and turns toward the page." },
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

export type GalleryPhoto = { src: string; alt: string; width: number; height: number };

const photo = (src: string, alt: string, width: number, height: number): GalleryPhoto => ({ src, alt, width, height });

/** Photos from Dr. A's WhatsApp (2026-10-01). Originals: reference/whatsapp-images/. */
export const conference2026 = {
  title: "Why Move My Cheese? Leadership Conference 2026",
  // Next conference dates not provided yet (TODO_CLIENT.md).
  nextEdition: null as null | { label: string; venue: string | null },
  photos: [
    photo("/images/events/wmmc-2026-01.jpg", "Dr. Laide Alexander on the panel at the Why Move My Cheese? Leadership Conference 2026", 1394, 928),
    photo("/images/events/wmmc-2026-03.jpg", "Dr. Laide Alexander speaking at the conference", 1512, 1006),
    photo("/images/events/wmmc-2026-05.jpg", "Dr. Laide Alexander at the Why Move My Cheese? backdrop", 1600, 1391),
    photo("/images/events/wmmc-2026-06.jpg", "Dr. Laide Alexander signing a book for an attendee", 1512, 1006),
    photo("/images/events/wmmc-2026-04.jpg", "Dr. Laide Alexander addressing the room", 1502, 1000),
    photo("/images/events/wmmc-2026-14.jpg", "Dr. Laide Alexander receiving a recognition at the conference", 1512, 969),
    photo("/images/events/wmmc-2026-02.jpg", "Conference panel discussion on stage", 1512, 1006),
    photo("/images/events/wmmc-2026-12.jpg", "Dr. Laide Alexander with conference attendees", 1267, 1000),
    photo("/images/events/wmmc-2026-09.jpg", "Dr. Laide Alexander speaking with a microphone at the conference", 1512, 1006),
  ],
};

export const bookLaunch = {
  title: "Book Launch & Signing",
  photos: [
    photo("/images/events/book-launch-01.jpg", "Dr. Laide Alexander speaking at her book launch and signing", 2000, 1420),
    photo("/images/events/book-launch-02.jpg", "Dr. Laide Alexander with a reader holding The Unfinished Leader", 1600, 1575),
    photo("/images/events/book-launch-06.jpg", "Readers with copies of Why Move My Cheese?", 2000, 1333),
    photo("/images/events/book-launch-09.jpg", "Dr. Laide Alexander in conversation at the book launch", 1491, 994),
    photo("/images/events/book-launch-04.jpg", "Dr. Laide Alexander with readers and their signed books", 1491, 994),
    photo("/images/events/book-launch-07.jpg", "Dr. Laide Alexander addressing guests at the book launch", 1491, 994),
    photo("/images/events/book-launch-05.jpg", "Dr. Laide Alexander with readers holding The Unfinished Leader", 1491, 994),
    photo("/images/events/book-launch-14.jpg", "Portrait of Dr. Laide Alexander at the book launch", 863, 1461),
    photo("/images/events/book-launch-17.jpg", "Stacks of Why Move My Cheese? at the signing table", 2000, 1333),
  ],
};

/** Landing-page copy for /inside-the-pages. Verbatim from the source doc; internal planning
 *  sections (host pool, facilitator playbook, Phase 1 roadmap) are deliberately left out. */
export const insideThePagesPage = {
  story: [
    "Two books written. A regular book signing was the obvious next step, the thing every author is told to do. But a table, a stack of books, a line of people, a signature, a polite thank you. It's forgettable. It doesn't hold a conversation. It doesn't let a room actually meet the book, or meet the author.",
    "Inside the Pages with Dr. A started from a different question: what if the point wasn't to sell a book at a table, but to sit in a room together and let a book become a conversation? Not a lecture. Not a sermon. Not a book club with an assigned reading schedule. Something closer to a living room: armchairs, real light, a passage read aloud together, and space for people to say something true.",
    "With six more manuscripts still ahead, this isn't a one-time event format. It's meant to be the ongoing way new books meet their first real audience, and eventually, a way other authors get the same thing.",
  ],
  staging:
    "The same staged set travels to every venue (a backyard, a church, an office lounge), so the room always signals \"this is Inside the Pages\" before anyone says a word.",
  stagingDetail:
    "A recognizable, portable set: the same mustard backdrop and armchairs whether the room is a backyard, a fellowship hall, or an office lounge. The brand travels with the experience, not a fixed venue. And a bell, not an announcement, to mark the moment the room goes quiet and turns toward the page.",
  openFloorIntro:
    "This is what keeps Inside the Pages from being only \"Dr. A's event.\" It turns each session into a genuine resource for anyone in the room who is writing, has written, or wants to write.",
  openFloor: [
    "A short, structured window (2-3 minutes each, 2-4 authors per event) for other authors in the room (attendees, not just the featured panelist) to introduce their own book and where to find it.",
    "Self-identify at check-in (\"Are you an author? Would you like 2 minutes on the Open Floor?\") so this stays organized rather than an unplanned free-for-all.",
    "An Open Floor author today can become a featured guest at a future event.",
  ],
  resources: [
    { type: "Publishers / self-publishing platforms", offer: "What the path from manuscript to published book actually looks like" },
    { type: "Literary agents or editors", offer: "What separates a manuscript that's ready from one that needs more work" },
    { type: "Financial institutions", offer: "Financing options for authors self-funding a publishing or small-press project" },
    { type: "Cover designers / formatters", offer: "The practical production side most first-time authors don't know they need" },
    { type: "Marketing / PR contacts / Technology", offer: "How a book actually finds readers after it's published" },
  ],
  resourcesNote: "Resource types rotate from event to event, rather than trying to have all five at once. This keeps the Resource Corner focused.",
  closing: "More to come. Become a member of the Accexx Circle if you are interested in joining the conversation.",
};
