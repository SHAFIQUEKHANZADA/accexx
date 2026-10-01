# Client updates log — what Dr. A has sent, and what it means for the site

One place for everything. Each item: what arrived → what it changes → status.
Open questions for Dr. A live in `TODO_CLIENT.md`.

Status key: ✅ built · 🟡 noted, build in its step · ❓ needs her answer

---

## #1 — WhatsApp, 2026-09-29: first brief
- Build one new site combining **upload.x01works.com.ng** (the look) + **accexxinsight.com** (the content), "fresh yet relevant".
- Shop: mimic shop.accexxinsight.com and make it better. Taglines **"Every Page. A New Possibility."** + **"Read. Imagine. Become. #R.I.B"**.
- **No iStratify / MAISON / Scrumban anywhere.**
- Status: ✅ home page built; shop 🟡 (step 6). Brand grep clean.

## #2 — Bio images (`reference/bio-images/`)
- Headshot, stage photo (+ HD version), speaking photo, casual B&W portrait, Forbes "Editor's Choice" graphic, logo preview.
- Status: ✅ used on home. Logo needs a transparent version ❓.

## #3 — Email 2026-09-30: "Accexx shop and Inside the Pages With Dr. A"
- Book covers; formats + prices (Hardcover / Paperback / Kindle $9.99 / Audio Oct 2026). Don't push buyers to Amazon.
- Shop needs: reviews, tax + shipping at checkout, merch (T-shirts, caps, cups, pens), multiple currencies, conference photos/video + next-event announcement.
- The *Unfinished Leader* circle is **intentionally almost closed**; use it as the brand motif.
- Tagline in email: "Every **New** Page. A New Possibility." ❓ (vs "Every Page.")
- Status: ✅ covers, formats, Inside the Pages on home; shop items 🟡 (step 6). Details: `PROJECT_BRIEF.md` §12.

## #4 — "Inside The Pages With Dr. A - web.docx"
- New event series: "Every Book. Different Perspective." #1 **Dec 12, 2026 at The Cannon**, then every 2 months to Nov 2028.
- Status: ✅ home section + `src/data/events.ts`. Full page on /books 🟡 (step 5).

## #5 — Social links (added to the footer by Shafique)
- LinkedIn `linkedin.com/in/laidealexander` · Instagram `@iamdrlaidea` · YouTube `@Dr.LaideAlexander` · TikTok `@drlaidealexander` · Facebook · website.
- Status: ✅ in footer. Contact email + phone still ❓.

## #6 — `reference/Final Courses/` (4 documents) — 2026-10-01
Text copies in `reference/text/`.

**a) UPDATED Curriculum_Library_Pricing_Master_CFO_Copy (2)** — the full price list for **all 89 programs**:
- Courses priced **per cohort** (up to 15 people; 20 for BEInspire). Virtual = 85%, Hybrid = 92.5%, extra person = 8% (max 25).
- **Certifications:** same prices we already have ✅.
- **Leadership LD-01…12:** now have contact hours (6–12 h) and cohort prices ($2,100–$4,200 in-person).
- **BEInspire:** all 10 are **3 contact hours** (answers our open question); $540 in-person / $459 virtual each; full-series bundle **$4,500** (vs $5,400).
- **Project Unify** 15 certificates ($1,800–$4,800), **HOC Short Courses** 8 ($1,050–$1,800), **Project Unify Training Shop** 10 new courses ($1,050–$1,800).
- **Consulting:** $2,800/day; every engagement has a fee or fee range.
- **Coaching:** 1:1 $650/session (6 for $3,600 · 12 for $6,800); Group $2,200/session (8-session cohort $16,800).
- ❓ It is labelled **"CFO Copy"** — confirm which prices may be **shown publicly** (see TODO_CLIENT.md).

**b) Accexx_Consulting_LMS_Entries — web** — **24 consulting engagements** with full content (who it's for, duration, objectives, phased process, tools, deliverables, consultant qualifications, success measures):
- HR & People Systems **HR-01…06**, Culture & Strategy **CS-01…05**, **new: Education Institutions EDU-01…13**.
- Replaces the brief's "names only" rule: the consulting pages can now be full.

**c) Accexx_Coaching_LMS_Entries — web** — **2 coaching streams** in full: Executive & Leadership (1:1) and Group & Team. Who it's for, focus areas, session structure, tools, deliverables. Framed as engagements, not courses (no modules/CEUs).

**d) Accexx_15 - ProjectUnify_8 - ShortCourses_10 - LMS_Module_Detail (3)** — full module detail for:
- **15 Project Unify© Certificates** (description, hours, recommended CEUs, audience, prerequisites, capstone, modules with outcomes).
- **8 HOC Short Courses & Workshops.**
- **Project Unify© Training Shop — New Courses** (heading says **9**, pricing sheet lists **10**, e.g. "AI Basics for the Everyday Employee") ❓.
- Replaces the brief's "Project Unify = placeholder only" rule: these become real catalog pages.
- Web pages will show overview-level info only (description, audience, hours, modules + outcomes); in-class activities, materials and capstone rubrics stay in the course portal.

Status: 🟡 noted. Changes steps 3–5 (see "Impact on the build" below).

---

## Impact on the build (updated after #6)
- **Education** grows from 3 program families to 6: Certifications (10), Leadership (12), BEInspire (10), Project Unify Certificates (15), HOC Short Courses (8), Project Unify Training Shop (9–10). About 64 course pages, all generated from data files.
- **Services › Consulting** becomes a catalog of 24 engagements in 3 groups, each with its own page.
- **Services › Coaching** gets the 2 streams in full, with packages.
- **Prices** come from one source (`src/data/pricing.ts`), not hand-typed per page, once she confirms what is public.

---

## #7 — WhatsApp images (forwarded) — 2026-10-01
- **Consulting image:** a meeting photo (woman presenting at a table). "Use this for consulting — I will put it in the Google Docs and title AXI Consult." → hero/banner for **Services › Consulting**.
- **Education image:** a lecture-room photo (presenter at a screen, seated audience). → hero/banner for **Education**.
- **Inside the Pages set photo:** mustard "Inside The Pages with Dr. A" backdrop, armchairs, rope stanchions, event banner. She suggests **a landing page for Inside the Pages, maybe inside the shop**, using this set. → dedicated `/inside-the-pages` page (linked from the shop and Books & Events).
- ❓ Need the **original image files** (we only have WhatsApp screenshots). The consulting and education photos look like stock images: fine as generic banners (not presented as Dr. A), but confirm they're licensed.
- Forwarded with the x01works link: "this was the original site before the tech guys 'augmented'… create a **superior yet simple enough site to maneuver**. For this original site, the only problem was the LMS: **the course info was too out there and can be taken by anyone**."
  - → **Don't publish full course content.** Public course pages show a teaser only: title, one-line description, who it's for, hours, format, price, and module *titles*. Objectives, lesson detail, capstones and materials stay behind the LMS (GHL course portal).
- Images received 2026-10-01 (`reference/whatsapp-images/`, 46 files, 38 unique). Web copies in `public/images/` and `public/images/events/`.
- Status: ✅ conference + book-launch galleries (home "In the room", /books); ✅ `/inside-the-pages` landing page with the set photo; 🟡 consulting + education banners go on those pages (step 5 / step 4).

## #8 — Chat with Dr. A, 2026-10-01 (after reviewing accexx-xi.vercel.app) — **DESIGN DIRECTION CHANGE**
- "**The one you sent is too dark.**" "I do like something like this better **without AI. Something brighter.**"
- Her three reference links all resolve to her current live site: **accexxinsight.com** (home, twice) and **accexxinsight.com/shop**. "This is what I am trying to rebuild or better."
- → **Switch the whole site from dark (black + gold) to bright**, modelled on accexxinsight.com:
  - white / warm-cream backgrounds; **navy** headings (her LMS navy `#1F3864`); **gold** accents and buttons (`#B08D57`–`#C9974B`); the book-cover teal as a secondary accent
  - clean, simple, easy to navigate ("simple enough to maneuver"), and less "AI-looking": fewer glows, gradients and animated effects; real photos, clear sections
  - keep the content and structure we built (hero, Access → Accexx, path picker, HOC method, Meet Dr. A, stats, books, Inside the Pages, voices, Circle signup), restyled bright
  - dark sections only sparingly for contrast, if at all
- Shafique told her: "We'll move away from the darker look and redesign it with a brighter, cleaner feel, using the site you shared as the reference and aiming to improve on it."
- Also from Shafique's update to her: **30 courses are already added to GoHighLevel** (BEInspire, Leadership Development, HOC certifications); some lessons still need video files/scripts.
- Status: ✅ **bright redesign done (2026-10-01)**: new tokens in `globals.css`, white header, navy footer, home rebuilt with real photos; `/books` and `/inside-the-pages` built bright. Overrides `PROJECT_BRIEF.md` §3.

## #9 — WhatsApp (forwarded), 2026-10-01: two more rules
- "**Lastly every page must have Contact Us and Join the Accexx Circle** — these are people that follow us, that receive our newsletter and other info first. **There will be a membership number assigned to them.**"
  - ✅ `JoinBand` in the root layout, above the footer, on **every** page: Accexx Circle signup (`formType: "accexx-circle"`) + Contact Us / Book a Discovery Call. Every "Join the Accexx Circle" button now jumps to `#accexx-circle` on the current page.
  - 🟡 Membership number: assign it in **GoHighLevel** when the `accexx-circle` submission arrives (workflow → custom field "Circle member #", emailed to the member). The site's success message says the number is sent by email.
- "For the consultant… you will see the CEO and his bio, then you will see a consultant Jerry Driskill, please let's make sure **we can add up 7 more to make 8 consultants**."
  - ✅ About › Team now has **Leadership** (Dr. A, Babajide) + **Executive Consultants** (Jerry; room for 8, `maxConsultants`). Adding one = photo + entry in `src/data/team.ts` (`group: "consultant"`). A "More consultants joining the collective" card shows until there are 8.
  - ❓ Names, roles, bios and photos for the other 7 consultants.

## #10 — Chat with Dr. A, 2026-10-01 07:36
- "**Overall, I want something fresh and relevant.**" Same as her very first brief; it's the yardstick for the whole site.
  - Fresh = modern, light, clean, not dated and not "AI template"; relevant = clearly hers (real photos, books, events, HOC, real audiences).
  - Done: bright redesign, real photos, AI-looking sections rebuilt (HOC method, Who We Serve). 🟡 Remaining clean-up: decorative half-circles (keep only by the books), static client-name row, fewer italic-gold heading words.
- Earlier in the same chat: "the videos and pictures are in the WhatsApp chat." ✅ Pictures received (item #7). ❓ **No videos received yet**: ask for the conference/event videos (for /books#conference).

## #11 — Chat with Dr. A (via Hilal), 2026-10-01 11:53–12:21 — home page back toward the dark x01works look
- "I really need the home page to be **catchy**, it does not have to have my picture." / "yes I am the founder but **the organization needs to be bigger than me**, especially in general places."
- "I prefer the first home page to this second one… **go back to the dark one for home page and mix it with some lighter color like beige, white**, like you have it now." "I love the **blue and gold**." Final: "I like it. **Mimic this** [upload.x01works.com.ng], and add the other ones like the shop, the event, inside the pages."
- Photo removals: no photos in the Breakthrough part; under it keep only pictures 1 and 2, very large with the text below, remove 3 and 4; no photo in The Human Operating Code; no photo in Services. "I like Conversations that move people" (keep).
- "Can we put **Education under Services**, so the header is neater and not crowded."
- Decisions (Shafique, 2026-10-01): dark parts in **deep navy + gold** (not black); **home page only**; the other pages stay bright.
- Status ✅ (2026-10-01):
  - Hero: deep navy (`--color-night`) with the x01works gold light-waves (`GoldWaves`), no photo, headline + values + CTAs.
  - Who We Serve ("Find your breakthrough"): photos only on cards 1 and 2 (Organizations, Leaders), large, text below; cards 3 and 4 text only.
  - What we offer: Speaking is a plain card (photo removed); 2 × 2 grid.
  - The Human Operating Code: photo removed. Services page hero: photo removed.
  - Stats strip turned dark navy; light (white/beige) sections in between; shop, conference ("Conversations that move people") and Inside the Pages stay on the home page.
  - Header: Education is now an item in the Services dropdown (Services stays highlighted on /education pages).
- ❓ "I prefer we use **full pages**": meaning unclear (full-width sections vs separate full pages instead of one long home page). Ask.
- 🟡 Meet Dr. A on the home page still has her headshot (it is the section about her); confirm she wants to keep it.
