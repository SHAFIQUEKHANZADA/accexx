# Waiting on the client

Everything below is shown on the site as a placeholder or fallback until Dr. A supplies it.
Update this file whenever an item arrives or a new placeholder is added.

## Brand & images
- [x] Logo: cut out of her file onto a transparent background (navy + white versions, `public/images/accexx-insight-logo*.png`), now in header + footer. An original SVG/high-res file from her designer would still be sharper.
- [x] Book cover files (received 2026-09-30; `public/images/book-*.jpg`).
- [x] Team headshots: Babajide O. Kupoluyi, Jerry Driskill (received 2026-10-01). Jerry's is small (332×363); a larger one would look sharper.
- [ ] **Book store email** with photos, plus the items sent on WhatsApp.
- [x] Dr. A headshot, stage photo, speaking photo, casual portrait, Forbes graphic (received; in `public/images/`).

## From WhatsApp (2026-10-01)
- [ ] **Original files** for the consulting photo, the education photo, and the Inside the Pages set photo (we only have WhatsApp screenshots). Are the consulting/education photos licensed stock?
- [ ] **Videos and pictures in the WhatsApp chat** she mentioned (conference, events). Please export them.

## From WhatsApp #9 (2026-10-01)
- [ ] **7 more consultants:** name, role, bio, photo for each (About › Executive Consultants has room for 8).
- [ ] **Accexx Circle membership number:** set up the GHL workflow that assigns + emails it (site already says it's sent by email).

## Content to confirm
- [ ] **Testimonials (3, home page):** are they real? Names/titles to show? Currently `confirmed: false` in `src/data/testimonials.ts` (a "pending" label shows in development only).
- [ ] **Forbes article link** for "The Greed In It: A Look At Modern Leadership" (Editor's Choice). Shown on the home page without a link.
- [ ] **IACET status.** Site must not claim accreditation; CEUs will show as "Recommended CEUs" behind `showCeus`.
- [ ] **Self-paced course prices** (Leadership Development + BEInspire).
- [x] BEInspire live length: all 10 are 3 contact hours (Pricing Master, 2026-10-01).
- [ ] **Series name spelling:** "BEInspire© Career Series" (draft site) or "BEInspired© Career Workshop Series" (glossary)?
- [ ] **Certification module one-liners:** 31 modules (EL-HOC, TOS-F, RLWS, EVLP, CHOC-F, G-HOC Coach) have titles only in the overviews. Filled with the first sentence of each module's own description from her files (verbatim). Ask her to review on the certification pages.
- [ ] **Hybrid prices** are 92.5% of the in-person price, and her files round some up and some down (e.g. HOC-LP $17,482 vs $17,482.50). The site uses her numbers exactly; confirm.
- [ ] **Why Move My Cheese? Conference dates**, plus **video + photos from the previous conference** (to showcase and announce the next one).
- [ ] **Main tagline wording:** "Every Page. A New Possibility." (WhatsApp) or "Every New Page. A New Possibility." (email 2026-09-30)? Site shows the first until confirmed.
- [ ] **Kindle:** list it (Amazon link) or leave it off, given she doesn't want to send buyers to Amazon?
- [ ] **Inside the Pages:** the picture + note sent on WhatsApp; venues for events #2–#13; Dec 12 time/address/ticketing for The Cannon.
- [ ] **Merch details:** T-shirts, caps, cups, pens: photos, sizes/colours, prices.
- [ ] **Reviews:** reviews of the books only, or also of "the process" (coaching/programs)? Moderated before publishing?

## Pricing & catalog (from `reference/Final Courses/`, 2026-10-01)
- [ ] **Which prices can be shown publicly?** The Pricing Master is labelled "CFO Copy". Proposal: show course cohort prices ("from $X per cohort") and coaching packages; show consulting as duration + "Request a proposal" (no day rate / fee ranges). Confirm or adjust.
- [ ] **Project Unify Training Shop:** 9 courses (module-detail doc) or 10 (pricing sheet, incl. "AI Basics for the Everyday Employee" and "Attention Management in a Distracted Workplace")?
- [ ] **Self-paced prices** are still missing. The Pricing Master only covers live cohorts.

## Contact & integrations
- [x] **Contact number:** `(800) 689-1185` (labeled "Contact number"; zoom / secondary direct number not advertised). Call links to `tel:8006891185`.
- [x] **Contact & Support emails:** General & Calendar: `info@accexxinsight.com`, Student support: `axiacastudent@accexxinsight.com`, Faculty support: `axiacafaculty@accexxinsight.com`.
- [x] **Physical office address:** `1334 Brittmoore Road, Suite 1000B, Houston, TX 77043`.
- [x] **Consultation availability:** Tuesday–Thursday, 9:00 AM–4:00 PM (CT) via Zoom. Calendar invitations sent from `info@accexxinsight.com`.
- [x] **GoHighLevel form integration:** Completed via GHL API v2 (`POST /api/forms`). All 7 forms sync contacts, custom fields, tags, and pipeline opportunities.
- [x] **Social profiles:** LinkedIn, Instagram, YouTube, TikTok, Facebook (all active in footer, contact page, and site settings).
- [x] **GoDaddy delegated access** provided.
- [x] **GHL booking calendar URL** (`NEXT_PUBLIC_GHL_BOOKING_URL`): `https://api.leadconnectorhq.com/widget/booking/oGs0SikqVymjpRw8ibHe`. Embedded directly on `/contact#book`, connected to all "Book Dr. A" and "Book a Discovery Call" buttons.
- [ ] **Course portal URL** (`NEXT_PUBLIC_COURSE_PORTAL_URL`).
- [ ] **Payment provider (Stripe?), shipping and returns rules** for the shop. She wants taxes + shipping calculated at checkout and multiple currencies: which currencies/countries?


## Shop placeholders (2026-10-01)
- [ ] **O Face Cap** and **Store Gift Card** photos (shown as navy typographic "Photo coming soon" tiles). Cap colours/sizes, if any.
- [ ] **Gift card:** digital or physical? Filed under "Digital" for now.
- [ ] **Product descriptions** for all 4 items (product pages show "Full description coming soon").
- [ ] **10% first-order code:** the popup collects emails (`shop-popup`); the code itself must be created in GHL/the payment provider and emailed.
- [ ] **Checkout:** shows "Checkout coming soon" until `CHECKOUT_PROVIDER` is set and the provider (Stripe) is connected.

## Education catalog (built 2026-10-01)
- [ ] **Training Shop: 9 or 10 courses?** Site shows 10 (incl. "AI Basics for the Everyday Employee", which only appears in the Part 4 workbook + pricing sheet).
- [ ] **Short course titles differ between her files:** "Upgrade Your Inner Operating System" (module doc) vs "…Operating Code" (pricing sheet); "High-Performance Habits: Working Smart in a Low-Predictability Environment" vs "High-Performance Habits". Site uses the module-doc names.
- [ ] **Public prices:** course cohort prices are now shown on all Education pages (from the "CFO Copy" Pricing Master). Consulting fees are hidden (`showConsultingFees = false`). Confirm both.
- [ ] **Delivery format** for Project Unify / Short Courses / Training Shop is shown as "In-person or virtual" (inferred from the pricing sheet's in-person + virtual columns). Confirm.
- [ ] **Speaking:** topics/keynote titles and speaking fee (none in her files).
- [ ] **Consulting photo licence** (`consulting-meeting.jpg`, stock).
- [ ] **Team:** LinkedIn URLs for Dr. A, Babajide and Jerry (the live site shows LinkedIn / X buttons that don't link anywhere).

## Shop update (2026-10-01): cap + gift card from her current shop
- [x] O Face Cap photo + 8 colours (Forest Green, Black, Navy, Charcoal, Khaki, White, Steel Blue, Olive).
- [x] Store Gift Card image; amounts $25 / $50 / $100 / $200 / Custom; recipient email, name, message, send date; delivered by email (so it's digital, no shipping).
- [x] Why Move My Cheese? description ("Jobs end. Churches shift…").
- [ ] **Gift card custom amount range:** site uses $10–$500 (her shop doesn't show one). Confirm.
- [ ] **Gift card delivery:** who sends the card email + code (GHL workflow or Stripe)? Needed before gift cards can be sold.
- [ ] **Shipping & returns:** her current shop shows "Complimentary shipping on every order" and "30-day returns" (likely template defaults). Her email says shipping cost should be included at checkout. Which is right?
- [ ] **Stock levels:** her shop shows "Only 7 left in Forest Green". Not shown on ours until we have real stock numbers.
- [ ] **The Unfinished Leader description** (only Why Move My Cheese? has one so far).

- [ ] "I prefer we use full pages": full-width sections, or separate pages instead of one long home page? (CLIENT_UPDATES #11)
- [ ] Keep the headshot in "Meet Dr. A" on the home page? (CLIENT_UPDATES #11)

- [ ] Official **core values** list (interim: the 8 draft-site values). (CLIENT_UPDATES #12)
- [ ] Layout she texted Hilal for **Meet Dr. A** page, and the pages to mimic for **Consulting** and **Education**. (CLIENT_UPDATES #12)
- [ ] **Videos:** Why Move My Cheese? Conference and Book Launch (mp4 or links). (CLIENT_UPDATES #12)
- [ ] More photos: In the room / conference (people, not just Dr. A), books, book launch; merchandise list for the shop. (CLIENT_UPDATES #12)

- [ ] **Merch prices** (4 caps, 4 T-shirts, mug) and **original photo files** (current ones are cut from the lineup image). (CLIENT_UPDATES #13)
- [ ] Approve the **#R.I.B mug** concept design (or send a real cup photo). (CLIENT_UPDATES #13)
- [ ] **Webinar + conference attendee lists** (CSV) and **certificate of attendance** wording/design. (CLIENT_UPDATES #13)

- [ ] Approve the **SMS opt-in wording** on the signup forms ("Yes, text me updates from Accexx Insight. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help."). Also used for the A2P 10DLC application. (CLIENT_UPDATES #17)
- [ ] Forward **Dr. Laide's latest email** with wording changes, and confirm **which two images** to remove (meeting 2026-10-03).
- [ ] Company website links for **client logos**; **LinkedIn post links** for the blog. (CLIENT_UPDATES #17)

- [ ] **Core value definitions** (one line each for Empathy, Integrity, Clarity, Empowerment, Purposeful Action, Accountability, Resilience, Connection) from her email. (CLIENT_UPDATES #20)
- [ ] **Partner logos** (she will send). (CLIENT_UPDATES #20)
