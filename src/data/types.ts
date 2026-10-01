/**
 * Program data types. All content is copied from reference/text/* — never invented.
 * Course material (worksheets, assignments, rubrics, video scripts) stays in the
 * course portal and is deliberately NOT modelled here.
 */

export type CertificationModule = {
  number: number;
  title: string;
  /** Contact hours for this module. */
  hours: number;
  /** One-line summary, as written in the source overview. */
  summary: string;
};

export type Certification = {
  /** Program code as written in the glossary, e.g. "HOC-LP", "HCHR-D", "G-HOC Coach". */
  code: string;
  /** URL slug, lower-case, e.g. "hoc-lp". */
  slug: string;
  /** Full credential name, e.g. "Certified Human Operating Code™ Leadership Practitioner". */
  name: string;
  /** One-line description under the title in the source. */
  tagline: string;
  /** e.g. "Live Virtual or In-Person" */
  format: string;
  contactHours: number;
  /** Recommended CEUs (calculated 1 CEU : 10 contact hours). Shown only when `showCeus` is true. */
  ceus: number;
  facilitator: string;
  outcome: string;
  modules: CertificationModule[];
  /** USD per cohort. */
  prices: {
    /** Per cohort, up to 15 participants */
    inPerson: number;
    /** Per cohort, up to 15 participants */
    virtual: number;
    /** Per cohort (source defines it as a % of the in-person price) */
    hybrid: number;
    /** Each additional participant beyond 15 (up to 25 max) */
    additionalParticipant: number;
  };
  /** True for the advanced, selective-entry certification (G-HOC Coach). */
  selectiveEntry?: boolean;
};

export type LiveModule = {
  /** e.g. "M1" */
  id: string;
  title: string;
  objectives: string[];
  /** Duration as written, e.g. "2-3 hrs" (omit if not stated). */
  duration?: string;
};

export type SelfPacedLesson = {
  title: string;
  /** e.g. "Video + Worksheet" */
  format: string;
  /** e.g. "~7 min" */
  time: string;
};

export type LeadershipProgram = {
  /** "LD-01" … "LD-12" */
  code: string;
  slug: string;
  name: string;
  description: string;
  audience: string;
  live: {
    duration: string;
    format: string;
    outcomes: string[];
    modules: LiveModule[];
  };
  selfPaced: {
    lessons: SelfPacedLesson[];
    /** Price not provided yet by the client. */
    price: null;
  };
  /** Live cohort pricing (Curriculum Library Pricing Master). */
  cohort: CohortPrices;
  /** Leadership Development programs award a Certificate of Participation only. */
  credential: "Certificate of Participation";
};

export type BeinspireSegment = {
  number: number;
  title: string;
  /** Self-paced lesson format, e.g. "Video + Worksheet" */
  format: string;
  /** e.g. "~7 min" */
  time: string;
};

export type BeinspireWorkshop = {
  /** "BEI-01" … "BEI-10" */
  code: string;
  slug: string;
  name: string;
  description: string;
  audience: string;
  /** Live workshop details: "3 contact hours, in-person or live-virtual" (all 10, per the Pricing Master). */
  live: {
    contactHours: number;
    delivery: string;
  };
  /** Always exactly 4 segments. */
  segments: BeinspireSegment[];
  selfPaced: {
    /** Price not provided yet by the client. */
    price: null;
  };
};

/**
 * Per-cohort live pricing in USD, from "UPDATED Curriculum_Library_Pricing_Master_CFO_Copy (2).txt".
 * Hybrid is not listed per row; the source defines it as 92.5% of the in-person price.
 */
export type CohortPrices = {
  contactHours: number;
  /** Per cohort, up to the standard cap (15; 20 for BEInspire). */
  inPerson: number;
  /** Per cohort (85% of in-person). */
  virtual: number;
  /** Each participant beyond the cap, up to 25 (8% of in-person). */
  additionalParticipant: number;
};

export type CatalogModule = {
  number: number;
  title: string;
  /** Contact hours for this module. */
  hours: number;
};

/**
 * A course in the Project Unify© Certificates, HOC Short Courses & Workshops or
 * Project Unify© Training Shop catalogs. Only overview-level fields are modelled:
 * objectives, activities, capstones and materials stay in the course portal.
 */
export type CatalogCourse = {
  slug: string;
  name: string;
  /** One-line description as written in the source. */
  description: string;
  /** Track / stream heading in the source, when there is one. */
  track?: string;
  audience: string;
  /** Omitted when the source does not state prerequisites. */
  prerequisites?: string;
  /** Recommended CEUs (Project Unify certificates only). */
  recommendedCeus?: number;
  credential: "Certificate" | "Certificate of Participation";
  modules: CatalogModule[];
  cohort: CohortPrices;
};
