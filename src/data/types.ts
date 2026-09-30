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
  /** Duration as written, e.g. "2–3 hrs" (omit if not stated). */
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
  /** Live workshop details as written, e.g. "3 contact hours, in-person or live-virtual". */
  live: {
    /** null when the source does not state it (only BEI-01 does). */
    contactHours: number | null;
    /** null when the source does not state it (only BEI-01 does). */
    delivery: string | null;
  };
  /** Always exactly 4 segments. */
  segments: BeinspireSegment[];
  selfPaced: {
    /** Price not provided yet by the client. */
    price: null;
  };
};
