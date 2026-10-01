/**
 * BEInspire© Career Series — 10 career workshops (BEI-01 … BEI-10).
 *
 * Source: reference/text/BEI01- BEI10 + Overview.txt (section "1. Workshop Overview" of each
 * BEI-xx package); codes and names checked against
 * reference/text/Accexx_Insight_Training_Course_Glossary.txt.
 * Workbooks, activities, assignments, rubrics and video scripts are course material and are
 * deliberately not included.
 *
 * Live format: BEI-01's overview states "3 contact hours, in-person or live-virtual"; the Pricing Master
 * (reference/text/UPDATED Curriculum_Library_Pricing_Master_CFO_Copy (2).txt) confirms
 * "All 10 workshops run 3 contact hours", so all 10 use 3 / "in-person or live-virtual".
 *
 * Self-paced prices not provided yet (TODO_CLIENT.md).
 */
import type { BeinspireWorkshop } from "./types";

export const beinspireWorkshops: BeinspireWorkshop[] = [
  {
    code: "BEI-01",
    slug: "bei-01",
    name: "Being a 10",
    description: "Raise your standards and set clear, compelling goals for education, career, and life. Build a real 90-day action plan you'll actually use.",
    audience: "Senior secondary and tertiary students, recent graduates, and career men and women seeking growth or transition.",
    live: {
      contactHours: 3,
      delivery: "in-person or live-virtual",
    },
    segments: [
      { number: 1, title: "What Does 'Being a 10' Mean?", format: "Video", time: "~6 min" },
      { number: 2, title: "Raising Your Standards", format: "Video + Worksheet", time: "~7 min" },
      { number: 3, title: "Setting Compelling Goals", format: "Video + Worksheet", time: "~7 min" },
      { number: 4, title: "Your 90-Day Action Plan", format: "Video + Worksheet", time: "~6 min" },
    ],
    // TODO_CLIENT: self-paced price not provided yet.
    selfPaced: { price: null },
  },
  {
    code: "BEI-02",
    slug: "bei-02",
    name: "Believe in Yourself",
    description: "Build confidence, self-esteem, and courage. Challenge negative self-talk and practice assertive communication.",
    audience: "Senior secondary and tertiary students, recent graduates, and career men and women seeking growth or transition.",
    live: {
      contactHours: 3,
      delivery: "in-person or live-virtual",
    },
    segments: [
      { number: 1, title: "Confidence Check-In", format: "Video", time: "~5 min" },
      { number: 2, title: "Challenging Negative Self-Talk", format: "Video + Worksheet", time: "~7 min" },
      { number: 3, title: "Practicing Assertive Communication", format: "Video + Worksheet", time: "~7 min" },
      { number: 4, title: "Courage Commitment", format: "Video + Worksheet", time: "~5 min" },
    ],
    // TODO_CLIENT: self-paced price not provided yet.
    selfPaced: { price: null },
  },
  {
    code: "BEI-03",
    slug: "bei-03",
    name: "Who Am I?",
    description: "Identify your interests, values, strengths, and competencies. Link them to realistic career directions.",
    audience: "Senior secondary and tertiary students, recent graduates, and career men and women seeking growth or transition.",
    live: {
      contactHours: 3,
      delivery: "in-person or live-virtual",
    },
    segments: [
      { number: 1, title: "Why Self-Knowledge Matters", format: "Video", time: "~5 min" },
      { number: 2, title: "Interests, Values & Strengths Inventory", format: "Video + Worksheet", time: "~7 min" },
      { number: 3, title: "Linking to Career Directions", format: "Video + Worksheet", time: "~7 min" },
      { number: 4, title: "Your Self-Profile Summary", format: "Video + Worksheet", time: "~5 min" },
    ],
    // TODO_CLIENT: self-paced price not provided yet.
    selfPaced: { price: null },
  },
  {
    code: "BEI-04",
    slug: "bei-04",
    name: "The Right Choice",
    description: "Understand the link between current roles and dream jobs. Map possible pathways from \"now\" to \"next.\"",
    audience: "Senior secondary and tertiary students, recent graduates, and career men and women seeking growth or transition.",
    live: {
      contactHours: 3,
      delivery: "in-person or live-virtual",
    },
    segments: [
      { number: 1, title: "Where Are You Now?", format: "Video", time: "~5 min" },
      { number: 2, title: "Defining Your Dream Job", format: "Video + Worksheet", time: "~7 min" },
      { number: 3, title: "Mapping the Pathway", format: "Video + Worksheet", time: "~7 min" },
      { number: 4, title: "Your Next Step", format: "Video + Worksheet", time: "~5 min" },
    ],
    // TODO_CLIENT: self-paced price not provided yet.
    selfPaced: { price: null },
  },
  {
    code: "BEI-05",
    slug: "bei-05",
    name: "Beat the Odds",
    description: "Access the hidden job market through networking, volunteering, and alternative pathways beyond adverts.",
    audience: "Senior secondary and tertiary students, recent graduates, and career men and women seeking growth or transition.",
    live: {
      contactHours: 3,
      delivery: "in-person or live-virtual",
    },
    segments: [
      { number: 1, title: "The Hidden Job Market", format: "Video", time: "~5 min" },
      { number: 2, title: "Networking Skills & Practice", format: "Video + Worksheet", time: "~7 min" },
      { number: 3, title: "Volunteering & Alternative Pathways", format: "Video + Worksheet", time: "~7 min" },
      { number: 4, title: "Your Outreach Plan", format: "Video + Worksheet", time: "~6 min" },
    ],
    // TODO_CLIENT: self-paced price not provided yet.
    selfPaced: { price: null },
  },
  {
    code: "BEI-06",
    slug: "bei-06",
    name: "The Inside Track",
    description: "Think like employers and recruiters. Understand what they look for, how CVs are screened, and common red flags.",
    audience: "Senior secondary and tertiary students, recent graduates, and career men and women seeking growth or transition.",
    live: {
      contactHours: 3,
      delivery: "in-person or live-virtual",
    },
    segments: [
      { number: 1, title: "Inside the Recruiter's Mind", format: "Video", time: "~5 min" },
      { number: 2, title: "How CVs Are Screened", format: "Video + Worksheet", time: "~7 min" },
      { number: 3, title: "Common Red Flags & How to Avoid Them", format: "Video + Worksheet", time: "~7 min" },
      { number: 4, title: "Self-Check Against Recruiter Criteria", format: "Video + Worksheet", time: "~6 min" },
    ],
    // TODO_CLIENT: self-paced price not provided yet.
    selfPaced: { price: null },
  },
  {
    code: "BEI-07",
    slug: "bei-07",
    name: "Billboard 101",
    description: "Create stronger marketing tools: targeted CVs, personal summaries, and online profiles that capture attention.",
    audience: "Senior secondary and tertiary students, recent graduates, and career men and women seeking growth or transition.",
    live: {
      contactHours: 3,
      delivery: "in-person or live-virtual",
    },
    segments: [
      { number: 1, title: "You Are a Billboard", format: "Video", time: "~5 min" },
      { number: 2, title: "Building a Targeted CV", format: "Video + Worksheet", time: "~7 min" },
      { number: 3, title: "Personal Summary & Online Profile", format: "Video + Worksheet", time: "~7 min" },
      { number: 4, title: "Self-Review & Polish", format: "Video + Worksheet", time: "~5 min" },
    ],
    // TODO_CLIENT: self-paced price not provided yet.
    selfPaced: { price: null },
  },
  {
    code: "BEI-08",
    slug: "bei-08",
    name: "Shoot to Score",
    description: "Build effective interview strategies. Practice answering common and behavioral questions confidently.",
    audience: "Senior secondary and tertiary students, recent graduates, and career men and women seeking growth or transition.",
    live: {
      contactHours: 3,
      delivery: "in-person or live-virtual",
    },
    segments: [
      { number: 1, title: "Interview Mindset", format: "Video", time: "~5 min" },
      { number: 2, title: "Interview Strategy & Structure", format: "Video + Worksheet", time: "~7 min" },
      { number: 3, title: "Practicing Common & Behavioral Questions", format: "Video + Worksheet", time: "~7 min" },
      { number: 4, title: "Personal Interview Prep Plan", format: "Video + Worksheet", time: "~5 min" },
    ],
    // TODO_CLIENT: self-paced price not provided yet.
    selfPaced: { price: null },
  },
  {
    code: "BEI-09",
    slug: "bei-09",
    name: "Knock 'Em Dead",
    description: "Compete effectively against other candidates. Package achievements and manage first impressions.",
    audience: "Senior secondary and tertiary students, recent graduates, and career men and women seeking growth or transition.",
    live: {
      contactHours: 3,
      delivery: "in-person or live-virtual",
    },
    segments: [
      { number: 1, title: "What Makes Candidates Stand Out", format: "Video", time: "~5 min" },
      { number: 2, title: "Packaging Your Achievements", format: "Video + Worksheet", time: "~7 min" },
      { number: 3, title: "Managing First Impressions", format: "Video + Worksheet", time: "~7 min" },
      { number: 4, title: "Your Competitive Edge Statement", format: "Video + Worksheet", time: "~6 min" },
    ],
    // TODO_CLIENT: self-paced price not provided yet.
    selfPaced: { price: null },
  },
  {
    code: "BEI-10",
    slug: "bei-10",
    // Package file titles this "The Last Piece (Series Capstone)"; glossary name used.
    name: "The Last Piece",
    description: "Integrate the full job search process into a practical roadmap with weekly actions and accountability.",
    audience: "Senior secondary and tertiary students, recent graduates, and career men and women seeking growth or transition, completing the full BEInspire series.",
    live: {
      contactHours: 3,
      delivery: "in-person or live-virtual",
    },
    segments: [
      { number: 1, title: "Reviewing Your Journey", format: "Video", time: "~5 min" },
      { number: 2, title: "Building Your Job Search Roadmap", format: "Video + Worksheet", time: "~8 min" },
      { number: 3, title: "Weekly Actions & Accountability System", format: "Video + Worksheet", time: "~7 min" },
      { number: 4, title: "Commitment & Next Steps", format: "Video + Worksheet", time: "~5 min" },
    ],
    // TODO_CLIENT: self-paced price not provided yet.
    selfPaced: { price: null },
  },
];

/**
 * Per-cohort pricing, identical for all 10 workshops (Pricing Master, "BEInspire© Career Workshop Series — Pricing").
 * TODO_CLIENT: confirm prices may be shown publicly (source is labelled "CFO Copy").
 */
export const beinspirePricing = {
  contactHours: 3,
  inPerson: 540,
  virtual: 459,
  additionalParticipant: 43,
  /** Classroom-style format: cap of 20 participants (15 for other series). */
  cohortCap: 20,
  /** All 10 workshops booked together as a full career-readiness series. */
  bundle: { individualTotal: 5400, price: 4500 },
} as const;

export const getBeinspireWorkshop = (slug: string) => beinspireWorkshops.find((w) => w.slug === slug);
