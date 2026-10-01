/**
 * HOC Short Courses & Workshops — 8 courses, 24 modules (3 each), in 4 tracks.
 *
 * Sources (reference/text/):
 *  - "Accexx_15 - ProjectUnify_8 - ShortCourses_10- LMS_Module_Detail (3).txt", section
 *    "HOC Short Courses & Workshops (8 Courses)": track, name, one-line description, contact hours,
 *    target audience, prerequisites, module titles and durations.
 *  - "UPDATED Curriculum_Library_Pricing_Master_CFO_Copy (2).txt", "HOC Short Courses & Workshops — Pricing":
 *    in-person and virtual cohort prices. The additional-participant fee is not listed per row; the source says it
 *    "follows the standard formula: 8% of the In-Person Price", which is what `additionalParticipant` holds.
 *
 * Names follow the module document. TODO_CLIENT: the pricing sheet calls the first course
 * "Upgrade Your Inner Operating Code" (module doc: "Upgrade Your Inner Operating System") and the fifth just
 * "High-Performance Habits"; confirm the final titles.
 * TODO_CLIENT: confirm prices may be shown publicly (source is labelled "CFO Copy").
 */
import type { CatalogCourse } from "./types";

/** Family intro, as written in the source. */
export const shortCoursesIntro =
  "Non-certificate programs. Completion is based on attendance and participation in all modules, plus a completed personal action plan — not a graded rubric. Participants receive a Certificate of Participation.";

const PARTICIPATION = "Certificate of Participation" as const;

export const hocShortCourses: CatalogCourse[] = [
  {
    slug: "upgrade-your-inner-operating-system",
    name: "Upgrade Your Inner Operating System",
    track: "Track 1: Personal Mastery & Self-Leadership",
    description:
      "Helps professionals identify the limiting beliefs and thinking patterns driving unhelpful behavior — and replace them with a clear personal operating code.",
    audience: "Mid-level and senior professionals, emerging leaders, high-potential staff.",
    prerequisites: "None.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Naming the Patterns That Drive Behavior", hours: 2 },
      { number: 2, title: "Mental Models to Slow Down Reactivity", hours: 2 },
      { number: 3, title: "Defining Your Operating Code and 90-Day Plan", hours: 2 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "self-leadership-for-emerging-leaders",
    name: "Self-Leadership for Emerging Leaders",
    track: "Track 1: Personal Mastery & Self-Leadership",
    description:
      "Supports supervisors, team leads, and young managers in shifting from individual contributor to leader mindset — with EQ tools and a practical 60–90 day plan.",
    audience: "Supervisors, team leads, heads of department, young managers, high-potential staff.",
    prerequisites: "None — most relevant for those newly or soon stepping into a leadership role.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Individual Contributor vs. Leader Mindset", hours: 2 },
      { number: 2, title: "Clarifying Responsibilities and Cutting Low-Value Work", hours: 2 },
      { number: 3, title: "EQ Tools and the 60–90 Day Plan", hours: 2 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "emotional-intelligence-for-leaders-teams",
    name: "Emotional Intelligence (EQ) for Leaders & Teams",
    track: "Track 2: Emotional Intelligence & Relationship Systems",
    description:
      "Builds practical EQ skills — recognizing triggers, pausing before reacting, listening to reduce defensiveness, and handling difficult conversations with confidence.",
    audience: "Leaders and teams across sectors, especially in high-pressure or people-intensive roles.",
    prerequisites: "None.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Recognizing Triggers and Default Reactions", hours: 2 },
      { number: 2, title: "Pausing, Reframing, and Responding Wisely", hours: 2 },
      { number: 3, title: "Listening and Difficult Conversations", hours: 2 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "conflict-feedback-difficult-conversations",
    name: "Conflict, Feedback & Difficult Conversations",
    track: "Track 2: Emotional Intelligence & Relationship Systems",
    description:
      "Gives people managers a simple framework to prepare for and hold difficult conversations — giving feedback that is clear, specific, and respectful while de-escalating tension.",
    audience: "All people managers, principals, HRBPs, team leaders, supervisors.",
    prerequisites: "Current people-management responsibility.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Healthy Tension vs. Destructive Conflict", hours: 1.5 },
      { number: 2, title: "A Framework for Difficult Conversations", hours: 2.5 },
      { number: 3, title: "De-Escalating Heated Situations", hours: 2 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "high-performance-habits",
    name: "High-Performance Habits: Working Smart in a Low-Predictability Environment",
    track: "Track 3: High-Performance Habits & Productivity",
    description:
      "Helps professionals separate vital priorities from noise, design daily routines that protect deep work, and sustain performance in chaotic environments.",
    audience: "Professionals and teams in high-demand, interruption-heavy environments across sectors.",
    prerequisites: "None.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Separating Vital Priorities From Noise", hours: 2 },
      { number: 2, title: "Daily and Weekly Planning Tools", hours: 2 },
      { number: 3, title: "Protecting Deep Work and Managing Energy", hours: 2 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "focus-attention-digital-discipline",
    name: "Focus, Attention & Digital Discipline",
    track: "Track 3: High-Performance Habits & Productivity",
    description:
      "Addresses distraction and digital overload — giving professionals 3–5 strategies to protect focus, set healthier device boundaries, and create a personal attention protocol.",
    audience: "All professionals and leaders struggling with distraction, digital overload, and multitasking.",
    prerequisites: "None.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "How Distraction Actually Affects Performance", hours: 1 },
      { number: 2, title: "Strategies to Protect Focus Time", hours: 1.5 },
      { number: 3, title: "Device Boundaries and the Attention Protocol", hours: 1 },
    ],
    cohort: { contactHours: 3.5, inPerson: 1050, virtual: 893, additionalParticipant: 84 },
  },
  {
    slug: "resilience-stress-management-for-professionals",
    name: "Resilience & Stress Management for Professionals",
    track: "Track 4: Change, Resilience & Adaptability",
    description:
      "Equips professionals to identify stress signals, use physical, mental, and relational tools to recover and reset, reframe setbacks constructively, and build a personal resilience plan.",
    audience:
      "Professionals in high-pressure roles, NGO and development workers, healthcare and education professionals, frontline staff.",
    prerequisites: "None.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Recognizing Stress Signals and Unhelpful Coping", hours: 2 },
      { number: 2, title: "Physical, Mental, and Relational Recovery Tools", hours: 2 },
      { number: 3, title: "Reframing Setbacks and Building the Resilience Plan", hours: 2 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "leading-and-living-through-change",
    name: "Leading and Living Through Change",
    track: "Track 4: Change, Resilience & Adaptability",
    description:
      "Helps leaders understand the emotional curve of change, anticipate resistance, communicate with empathy, and design support structures that make change stick.",
    audience:
      "Managers, senior leaders, project/change leads, HR and OD professionals, internal change champions.",
    prerequisites: "None.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "The Emotional Curve of Change", hours: 2 },
      { number: 2, title: "Anticipating and Responding to Resistance", hours: 2 },
      { number: 3, title: "Communicating Change and Designing Support Structures", hours: 2 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
];

export const getShortCourse = (slug: string) => hocShortCourses.find((c) => c.slug === slug);
