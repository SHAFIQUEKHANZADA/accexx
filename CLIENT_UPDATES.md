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

## #12 — Email from Dr. A to Hilal, 2026-10-01 23:52 ("Feedback on the Website")
"First let me start by saying, I love the website."
- **About:** lead with Accexx Insight as an organization (what we do, who we are, our core values), not with Dr. A. ✅ `/about` now opens with "About Accexx Insight"; sections: who we are, what we do, **core values**, who we serve, core promise, Meet Dr. A teaser, partners, team.
  - ❓ **Core values:** she is sending them. Interim: the 8 values from her draft site (`coreValues` in `src/data/about.ts`).
- **Meet Dr. A, The Visionary Behind Accexx Insight:** its own landing page with the full story. ✅ `/about/dr-a` (hero, present roles, full story, Person Behind the Title, Forbes, career history). In the About menu.
  - ❓ She texted Hilal a layout for it (2026-10-01 ~1:32pm her time). Not received by us yet.
- **Remove Galen College of Nursing from the present.** ✅ Present roles: Founder & CEO, Accexx Insight; Founder & Chairperson, The Transformation Platform (Thetplat); Member, Forbes Coaches Council. Galen is listed under career history only (`/about/dr-a`). Home "Meet Dr. A" updated.
  - Note: Thetplat is where events will eventually go, with its own website (TEDx-style) to be worked on next.
- **Services:** full pictures. ✅ Consulting, Speaking and Education headers are now full-width photos (`PageHero full`). Speaking uses the original black-and-white photo of her from behind facing the audience (`speaking-stage-audience-bw.jpg`, from `reference/bio-images/IMG_20211001_193720_841.jpg`, not AI-enhanced).
  - ❓ "Mimic the page I sent via text" (consulting + education): not received by us yet.
  - ❓ More photos for "In the room" and the conference showing people, not just her: pending.
- **Books & Events:**
  - ✅ Book covers larger (native 1000 × 1500 files, no upscaling).
  - ✅ Large video frames for the conference and the book launch (`VideoFeature`; "video coming soon" until the files arrive; set `video` in `src/data/events.ts`).
  - ✅ Inside the Pages photo larger on /books and /inside-the-pages (full container width, native resolution).
  - ❓ Videos (conference, book launch), more book/conference/launch photos, merchandise for the shop: pending.

## #13 — WhatsApp from Dr. A, 2026-10-01 23:42 → 2026-10-02 01:06
- **x01works pages to mimic** (About, Consulting, Education on mobile): full-photo headers with title, one line and the gold tagline. ✅ Consulting, Speaking, Education already match (#12).
- **About Us: "remove the picture… slightly mimic home page, but no conference picture."** ✅ `/about` header is now the home-style dark navy + gold light-waves, no photo (`PageHero waves`).
- **Merchandise** (lineup image, `reference/shop-images/merch-lineup-2026-10-02.png`): ✅ added to the shop as NEW, "Price coming soon", not addable to the bag:
  - Caps (one size, 3 each): Logo Cap (tan), Move Mindset Cap (black), Adapt. Lead. Transform. Cap (grey), Move Different. Cap (olive)
  - T-shirts (3 each: 1 M, 1 L, 1 XL): Move Different. Lead Better. (white), Adapt. Lead. Transform. (black), Icon Tee (dark grey), Mindset. Strategy. Impact. (forest green)
  - Photos are cut from her lineup image (low resolution). ❓ Original files + **prices**.
- **Cups:** no picture. **"Use AI to make some merchandise with #R.I.B, Read, Imagine, Become"**: ✅ concept mug (white + navy) in the shop, marked "Concept design. Final product photos coming soon." ❓ Her approval + price.
- **SMS:** she wants it; sorting out numbers first. Asked what A2P 10DLC is (answered: US carrier registration for business texting; brand + campaign in GHL).
- **Attendees:** hundreds of webinar + conference attendees to import into GHL, and they need **certificates of attendance**. ❓ Lists (CSV) + certificate wording/design. (GHL work, Hilal.)
- Bank micro-deposit verification: payment admin, not the website.

## #14 — WhatsApp from Dr. A, 2026-10-02 01:21 → 01:58
- "**I love the About.**" "I see the changes, but just a few left."
- **Meet Dr. A** must be its own page along the x01works About path (full photo header, name, roles, tagline), "and make it even better". "Use the picture there with the dark dress, just make it bigger, like background and big like the other pages, the rest can stay as is." ✅ `/about/dr-a` header is now the dark-dress headshot as a full background (`PageHero full`), name, present roles, tagline, buttons; rest unchanged.
- **Conference video + photos** (WhatsApp 01:25 / 01:47). ✅ `/books`: conference recap video (3:49) plays in the large frame; the highlights grid now shows attendees (12 new people photos + the panel). ✅ Book launch video (3:23) is the main item of the Book Launch section. Files: `public/videos/` (remuxed for streaming, not re-encoded); original photos in `reference/whatsapp-images/2026-10-02/`. Home "In the room" unchanged (Shafique asked to keep it).
- "**Human Operation codes (plural)**". Hilal told her he'd change "Human Operation Code" to "Human Operation Codes". ❓ Not changed yet: the source docs and course names say "Human Operating Code™" (singular, "Operating"), used in certification titles and in GHL. Confirm the exact wording (Operating vs Operation, singular vs plural) before renaming site-wide.
- "**Can you put the same almost closed circle on the cup too?**" ❓ Regenerate both mugs with the brush-stroke teal/gold open circle from the caps and T-shirts (GPT).
- "**Then bold the logo**": ❓ unclear (the cup circle, or the site header logo). Ask.
- Bank micro-deposits and SMS: admin, not the website.

## #15 — WhatsApp from Dr. A, 2026-10-02 02:01 → 02:40
- "Love. Love Love the landing page for Dr. A." ✅
- **"Please change all Human Operating code to Human Operating Codes."** ✅ All 22 occurrences on the site, including the 4 certification names (Certified Human Operating Codes™ Leadership Practitioner, … Specialist, … Facilitator, … Coach). ❗ The GHL course titles need the same change (Hilal).
- **"Under education the coaches head needs to show."** ✅ Education header photo cropped from the top, so the presenter's head shows.
- **"For the speaking, please show the people as much as possible."** ✅ Speaking header shows more of the audience; "Recent stages" now uses crowd photos (conference attendees, attendee group, book launch audience).
- **"Crop off the videographer's info… Why Move My Cheese should be the end." "Same with the book signing."** ✅ Both videos trimmed before the videographer credit card (conference ends on the Why Move My Cheese? logo, 3:46; book launch 3:20). Re-encoded smaller (63 MB total, was 81 MB).
- "Ok, will share via Google docs": originals coming by Drive.
- New merch sheet ("These are items for the store": caps, tees, hoodies, bottles, totes, lanyards). ❓ Need the image file + prices.
- "Then bold the logo": ❓ still unclear (cup circle vs site logo).
