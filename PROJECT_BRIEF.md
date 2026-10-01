# Accexx Insight — Website Build Brief

Client: **Dr. Laide R. Alexander**, Founder & CEO, Accexx Insight, LLC (Houston, TX).
Built by: Zenvyk / Scaletopia (Shafique). Stack: **Next.js 16 (App Router) + Tailwind v4 + TypeScript** in this repo.

Read `AGENTS.md` first: this Next.js version has breaking changes, so check `node_modules/next/dist/docs/` before using any API.

---

## 1. What the client asked for (her words)

> "Look at both, so we can have a robust and unique site. I want it to have a **fresh yet relevant** feel."
> — referring to `upload.x01works.com.ng` (dark draft) and `www.accexxinsight.com` (current live site)

> "For the books store we can mimic the store as is and make it better (shop.accexxinsight.com).
> Replace: *Lead others. Leave a Legacy.* with **Every Page. A New Possibility.**
> Then replace *Live. Lead. Leave. Impact.* with **Read. Imagine. Become. #R.I.B**"

> "It should **not be showing iStratify at all**."
> — her current sites run on a platform called iStratify; its name leaks into the page title / link
> previews ("iStratify Shop") and the shop header shows a template badge ("MAISON").

So: **one new site that combines the best of her two versions and is better than both**, plus a rebuilt book store with the new taglines, and zero trace of iStratify, MAISON or "Powered by Scrumban AI".

---

## 2. Source material (all in `reference/`)

| File | Use it for |
|---|---|
| `screenshots/draft-site_upload.x01works.com.ng.png` | **Visual direction** (dark, black + gold, premium) |
| `screenshots/current-live-site_accexxinsight.com.png` | Content + sections to keep (team, bio, who we serve) |
| `screenshots/current-shop_shop.accexxinsight.com.png` | Book store layout to mimic and improve |
| `text/site_draft_upload.x01works.com.ng.txt` | Draft site copy (hero, philosophy, services, Meet Dr. A, testimonials, footer) |
| `text/site_current-live_accexxinsight.com.txt` | Live site copy (full bio, team, who we serve, core promise) |
| `text/site_current-shop_shop.accexxinsight.com.txt` | Shop products and prices |
| `text/Accexx Insight - Who We Are.txt` | About page copy (who we are, what we do, who we serve, core promise) |
| `text/Accexx_Insight_Training_Course_Glossary.txt` | Every program code and full name |
| `text/HOC-LP…txt`, `CCAL…`, `LCP…`, `HCHRD…`, `ELHOC…`, `TOSF…`, `RLWS…`, `EVLP…`, `CHOCF…`, `GHOCCoach…` | The 10 HOC certifications: overview, format, hours, CEUs, facilitator, outcome, modules, **prices** |
| `text/LD01-LD12 + overview.txt` | 12 Leadership Development programs (self-paced packages) |
| `text/Leadership_Development_Programs_Curriculum (2).txt` | Live versions of the 12 LD programs (duration, format, audience, modules) |
| `text/BEI01- BEI10 + Overview.txt` | 10 BEInspire career workshops |

The `.docx` originals are next to them. **Use the text files; only copy wording from them, never invent it.**

---

## 3. Design direction

> **SUPERSEDED (2026-10-01, `CLIENT_UPDATES.md` #8):** Dr. A finds the dark version "too dark" and wants it **brighter**, modelled on her live site accexxinsight.com: white/cream backgrounds, navy + gold, clean and simple, less "AI-looking". The dark-theme notes below are kept for history only.

Take the **look** of the x01works draft and the **content depth** of the live site.

- **Theme:** dark and premium. Near-black background (`#0B0B0C`-ish), warm gold accent (`#C9974B` range; the draft's buttons and the italic "Accexx"), off-white text. Light sections allowed for contrast (the shop and long-read pages may be light).
- **Brand colors already used in her LMS:** Navy `#1F3864`, Gold `#B08D57`. Keep gold consistent across site + shop.
- **Type:** elegant serif for headings (draft uses a Cormorant/Garamond-style serif with italic gold accents) + clean sans (Inter) for body.
- **Motion:** subtle. Animated gold light-wave background in the hero (the draft's signature), fade/slide-in on scroll, animated stat counters. Respect `prefers-reduced-motion`.
- **"Fresh yet relevant":** modern, spacious, confident; nothing gimmicky. Mobile-first. Fast (next/image, no heavy libraries unless needed).
- **Improve on both versions:** the draft's hero is mostly empty black space above the fold, so the headline must be visible without scrolling. The live site's stat counters show **"0 workshops"** (broken), so ours must work.

---

## 4. Site map

Navigation (from the draft): **Home · About ▾ · Services ▾ · Education ▾ · Books & Events ▾ · Contact**, plus header buttons **Call Now** and **Join the Accexx Circle** (gold).

```
/                                 Home
/about                            About Dr. A + company + team
/services                         Overview
/services/consulting
/services/coaching
/services/speaking                (CTA: "Book Dr. A")
/education                        Overview of all program families
/education/certifications         10 HOC certifications
/education/certifications/[code]  One page per certification (generated from data)
/education/leadership             12 Leadership Development programs (+ /[code])
/education/beinspire              10 BEInspire workshops (+ /[code])
/education/project-unify          Placeholder (see section 9)
/books                            Books & Events (both books + Why Move My Cheese? Conference)
/shop                             Book store
/shop/[slug]                      Product page
/contact
/privacy
```

---

## 5. Page content

### Home
1. **Hero:** eyebrow "ACCEXX INSIGHT"; headline **"From Access to *Accexx* — Unlock Your Breakthrough"** (gold italic "Accexx"); sub "Helping the overcomer and creator become the best and live the best life."; tagline *"We more than find solutions. We ensure transformation."*; value pills: Empathy, Integrity, Transformation, Empowerment, Resilience, Growth, Connection, Accountability; CTAs **Find Your Breakthrough** (gold) and **Join the Accexx Circle** (outline).
2. **Philosophy:** "Accexx Is More Than Access." Copy from the draft ("Access is the door. Accexx is the key…").
3. **What we offer:** Consulting, Coaching, Speaking, **Education** (the draft has 3; the live site adds Education, so use 4). Use the live site's sharper descriptions ("We don't just diagnose. We redesign…").
4. **Meet Dr. A:** short bio + photo + "Full Bio" link to /about.
5. **Stats:** 72 workshops · 10 certificate programs · 8 school types · US & Africa (numbers from her bio on the live site).
6. **Books strip:** *The Unfinished Leader* and *Why Move My Cheese?* linking to /shop.
7. **Voices (testimonials):** the 3 quotes from the draft. **Flag them as "pending client confirmation"** in the data (see section 9).
8. **Accexx Circle signup** (email) + final CTA "Ready for Your Breakthrough?" with **Book a Discovery Call**.

### About
Full bio from the live site (Educator/Author/Thought Leader; Builder of Communities and Platforms; Coach, Consultant, and Speaker; The Person Behind the Title), **Who We Serve** (Organizations, Leaders & Executives, Entrepreneurs & Founders, Professionals, from "Who We Are"), **Core Promise**, **Team** (Dr. Laide Alexander — Founder & CEO; Babajide O. Kupoluyi — COO; Jerry Driskill — Executive Consultant, with bios from the live site), and the clients she has worked with (McDonald's, PSCC, HCC, Serasana, the Alexander Group, AOPE, Primrose, Corinthian Colleges).

### Services (Consulting / Coaching / Speaking)
Description from both sites + "Who We Serve" relevance + CTA to book (calendar embed, section 7). Consulting page lists the engagement names from the glossary: HR-01…HR-06 and CS-01…CS-05 (**names only; no descriptions exist yet**).

### Education
- **Certifications index:** a card per program with code, full name, one-line description, hours, delivery (Live Virtual or In-Person), and "from $X per cohort".
- **Certification detail** (`[code]`): description, format, duration, facilitator line, expected outcome, module list with hours and one-line summaries, **price table** (In-Person / Virtual / Hybrid / each additional participant), CTA **Request a Cohort** (inquiry form, not checkout).
- **Leadership (LD-01…LD-12)** and **BEInspire (BEI-01…BEI-10)**: index + detail pages from their files (description, who it's for, lessons, duration/format). CTA **Enroll** links to the course portal (section 7). Note in the data that these have **Certificate of Participation only** (LD) and that self-paced prices are **not provided yet**.

### Books & Events
Both books (covers, description, buy buttons to /shop) and the annual **Why Move My Cheese? Conference** (no dates provided, so use "Details coming soon" + interest signup).

### Shop — "mimic the current store and make it better"
Layout from `current-shop` screenshot: hero banner with Dr. Laide's photo + both book covers; headline **"Every Page. A New Possibility."**; script-style line **"Read. Imagine. Become."** with **#R.I.B**; sub "Practical wisdom and proven strategies to help you navigate change, own your 'why,' and lead a life that lasts."; buttons Shop Books / Learn More. Collections (Leadership, Summer Drop), filters (All, Apparel, Digital, Other), sort, product grid, wishlist heart, cart, "10% off your first order" email popup.

Products (exact prices from the current shop):

| Product | Price | Compare-at | Badge |
|---|---|---|---|
| The Unfinished Leader | $28.99 | $38.00 | NEW |
| Why Move My Cheese? | $31.00 | $38.00 | BESTSELLER |
| O Face Cap | $25.95 | $29.95 | BESTSELLER |
| Store Gift Card | $25.00 | — | BESTSELLER |

Drop the "Personalize how you shop" widget and the "MAISON" badge (template leftovers).

### Contact
Contact form (name, email, phone, message, consent), booking calendar embed, social links (Email, LinkedIn, Instagram per the draft footer).

### Footer (from the draft, cleaned)
Logo + "Dr. A + Executive Consultants — A Collective of Breakthrough." Quick Links, Services, Education, Connect columns. "© 2026 Accexx Insight. All rights reserved." + Privacy Policy. **No "Powered by …".**

---

## 6. Data

Put all program content in typed data files, **not hard-coded in pages**:

```
src/data/certifications.ts   10 items
src/data/leadership.ts       12 items
src/data/beinspire.ts        10 items
src/data/products.ts         4 items
src/data/testimonials.ts     3 items (confirmed: false)
src/data/team.ts             3 items
```

Extract them from `reference/text/*` carefully and **verify the counts**: 10 certifications (51 modules total), 12 LD programs, 10 BEI workshops (4 segments each). Each certification: `code, slug, name, tagline, format, contactHours, ceus, facilitator, outcome, modules[{number, title, hours, summary}], prices{inPerson, virtual, hybrid, additionalParticipant}`. The EL-HOC file has its overview pasted twice, so take it once.

Do **not** put the full worksheets, assignments, rubrics or video-script sections on the website. Those are course material and live in the course portal.

---

## 7. Integrations (the backend already exists in GoHighLevel)

The CRM, pipelines, courses and booking calendar are already built in GHL. The site only connects to them. Put every URL/ID in env vars (`.env.local`, with an `.env.example` committed; `.gitignore` ignores `.env*`, so add `!.env.example`):

- `GHL_FORM_WEBHOOK_URL`: all forms (contact, cohort request, coaching/speaking inquiry, Accexx Circle, shop email popup) POST here from a Next.js route handler with a `formType` field. Never expose it client-side.
- `NEXT_PUBLIC_GHL_BOOKING_URL`: "Consultation with Dr. Laide" calendar embed / Book Dr. A / Book a Discovery Call.
- `NEXT_PUBLIC_COURSE_PORTAL_URL`: "Enroll" / "Student Login" links.
- **Checkout:** payment provider not decided (Stripe not connected yet). Build the cart; make "Checkout" call one server function behind `CHECKOUT_PROVIDER` so Stripe Checkout can be dropped in later. Until then the button shows "Checkout coming soon".

---

## 8. SEO and branding rules

- Every route exports `metadata` (title template `%s | Accexx Insight`, description, Open Graph + Twitter image). Shop title: **"Accexx Insight Shop — Books & Swag"**.
- `grep -ri "istratify\|maison\|scrumban"` over `src/` and `public/` must return nothing before a task is called done.
- Favicon / OG image: Accexx Insight branding (placeholder until the logo arrives).
- `sitemap.ts` and `robots.ts`.

---

## 9. Rules — do not invent anything

1. **No made-up prices, dates, stats, testimonials, credentials, phone numbers or emails.** Use only what is in `reference/`. When something is missing, render a clearly marked placeholder and list it in `TODO_CLIENT.md`.
2. **IACET:** the files contradict each other (one says "IACET Accredited Provider", the glossary says programs would still need registering). **Do not state that Accexx is IACET accredited.** Show contact hours; show CEUs as "Recommended CEUs" behind a single flag in the data (`showCeus`) so it can be turned off.
3. **Testimonials** have no names and may be placeholders: keep `confirmed: false` and show them, but list them in `TODO_CLIENT.md`.
4. **Project Unify** (15 certificates) and **HOC Short Courses** (8) have no content in the files, so give them a short placeholder page only.
5. Images: use `public/images/` with descriptive names. Until her originals arrive (she is emailing a "book store" folder with pictures), use tasteful neutral placeholders at the right sizes; never use stock people photos as if they were her.

---

## 10. Still waiting on the client (keep `TODO_CLIENT.md` updated)

- Book store email with photos + items she sent on WhatsApp
- Logo, headshots (Dr. A + team), book cover files
- Confirmation that testimonials are real (and names/titles to show)
- Contact email, phone (for "Call Now"), social URLs
- Payment provider / Stripe, shipping and return rules
- IACET status, self-paced course prices
- Conference dates

---

## 11. Build order

1. **Foundation:** fonts, color tokens, Tailwind theme, layout, header (with dropdowns and mobile menu), footer, SEO defaults. Remove the create-next-app boilerplate.
2. **Home page** (the hero sets the look; get it right first).
3. **Data files** from `reference/text/` (section 6), with a quick count check.
4. Education index + detail pages.
5. About, Services, Books & Events, Contact.
6. Shop (grid, product page, cart, popup).
7. Form route handler → GHL webhook; booking + portal links.
8. Polish: motion, responsive pass at 375 / 768 / 1280 px, Lighthouse (aim 90+), the iStratify grep, `npm run build` clean, `npm run lint` clean.

**Done means:** `npm run build` passes, every page works on mobile, no invented content, `TODO_CLIENT.md` lists every placeholder.

---

## 12. Client update — email of 2026-09-30 ("Accexx shop and Inside the Pages With Dr. A")

Source: Dr. A's email (forwarded) + `reference/Inside The Pages With Dr. A - web.docx` (text in `reference/text/`).

**Taglines:** email gives the main tag as **"Every New Page. A New Possibility."** (earlier WhatsApp said "Every Page. A new possibility."). Site still shows "Every Page." until she confirms which. Lower tag unchanged: "Read. Imagine. Become." + #R.I.B.

**Books (formats + prices, USD):**

| Book | Hardcover | Paperback | Kindle | Audio |
|---|---|---|---|---|
| The Unfinished Leader (Amazon Best Seller) | $28.99 | $24.00 | $9.99 | Coming October 2026 |
| Why Move My Cheese? | $31.00 | $24.00 | $9.99 | Coming October 2026 |

She does **not** want to send buyers to Amazon (Amazon takes 75%), so sell direct; Kindle is Amazon-only, so how/if to list it is open. Cover files: `public/images/book-*.jpg`.

**Design note:** the circle on *The Unfinished Leader* cover is intentionally *almost closed* — "it speaks to the unfinished leader or people that we are." Use the open circle as a brand motif, never a closed ring.

**Shop requirements (step 6):**
- Product **reviews** (for the books "or the process").
- **Taxes and shipping** calculated in checkout/fulfilment.
- Catalog will grow: **T-shirts, caps, cups, pens** and more — product data must support variants (size/colour) and new types.
- **Multiple currencies** (she asked if possible). Stripe Checkout (Adaptive Pricing + Stripe Tax + shipping rates) covers this; confirm provider.
- Most merch belongs to the **Why Move My Cheese? Conference**: showcase **video + photos from the previous event** and **announce the upcoming one**. Media + dates pending.

**New: Inside the Pages with Dr. A** — "Every Book. Different Perspective." / "Where books become conversations." A travelling book-conversation series (armchairs, mustard backdrop, the bell, reading together, Open Floor for other authors, Resource Corner). Schedule: #1 Dec 12, 2026 at The Cannon; then every two months Jan 2027 → Nov 2028 (13 total, venues TBD). Data: `src/data/events.ts`. Belongs under Books & Events; CTA is joining the Accexx Circle.

---

## 13. Client updates log

Every later item from Dr. A is logged in **`CLIENT_UPDATES.md`** (numbered, with its impact on the build). Read it before building any step. Where it conflicts with the sections above, `CLIENT_UPDATES.md` wins: for example, Project Unify and consulting now have full content (item #6).
