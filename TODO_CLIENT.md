# Waiting on the client

Everything below is shown on the site as a placeholder or fallback until Dr. A supplies it.
Update this file whenever an item arrives or a new placeholder is added.

## Brand & images
- [ ] **Logo on a transparent background (SVG or PNG).** We have `reference/bio-images/wide preview 1.png`, but it sits on a dark-grey box. The header/footer use a matching text wordmark until then; favicon + share image are placeholder monograms.
- [x] Book cover files (received 2026-09-30; `public/images/book-*.jpg`).
- [ ] **Team headshots**: Babajide O. Kupoluyi, Jerry Driskill (About page).
- [ ] **Book store email** with photos, plus the items sent on WhatsApp.
- [x] Dr. A headshot, stage photo, speaking photo, casual portrait, Forbes graphic (received; in `public/images/`).

## Content to confirm
- [ ] **Testimonials (3, home page):** are they real? Names/titles to show? Currently `confirmed: false` in `src/data/testimonials.ts` (a "pending" label shows in development only).
- [ ] **Forbes article link** for "The Greed In It: A Look At Modern Leadership" (Editor's Choice). Shown on the home page without a link.
- [ ] **IACET status.** Site must not claim accreditation; CEUs will show as "Recommended CEUs" behind `showCeus`.
- [ ] **Self-paced course prices** (Leadership Development + BEInspire).
- [ ] **Why Move My Cheese? Conference dates**, plus **video + photos from the previous conference** (to showcase and announce the next one).
- [ ] **Main tagline wording:** "Every Page. A New Possibility." (WhatsApp) or "Every New Page. A New Possibility." (email 2026-09-30)? Site shows the first until confirmed.
- [ ] **Kindle:** list it (Amazon link) or leave it off, given she doesn't want to send buyers to Amazon?
- [ ] **Inside the Pages:** the picture + note sent on WhatsApp; venues for events #2–#13; Dec 12 time/address/ticketing for The Cannon.
- [ ] **Merch details:** T-shirts, caps, cups, pens: photos, sizes/colours, prices.
- [ ] **Reviews:** reviews of the books only, or also of "the process" (coaching/programs)? Moderated before publishing?

## Contact & integrations
- [ ] **Phone number** for "Call Now" (currently links to /contact). Env: `NEXT_PUBLIC_CONTACT_PHONE`.
- [ ] **Contact email** (footer "Email" links to /contact). Env: `NEXT_PUBLIC_CONTACT_EMAIL`.
- [ ] **LinkedIn / Instagram URLs** (footer links to /contact). Env: `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_INSTAGRAM_URL`.
- [ ] **GHL form webhook URL** (`GHL_FORM_WEBHOOK_URL`). Accexx Circle signup is not delivered anywhere until set.
- [ ] **GHL booking calendar URL** (`NEXT_PUBLIC_GHL_BOOKING_URL`). "Book Dr. A" / "Book a Discovery Call" go to /contact until set.
- [ ] **Course portal URL** (`NEXT_PUBLIC_COURSE_PORTAL_URL`).
- [ ] **Payment provider (Stripe?), shipping and returns rules** for the shop. She wants taxes + shipping calculated at checkout and multiple currencies: which currencies/countries?
