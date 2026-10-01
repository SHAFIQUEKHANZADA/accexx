/**
 * Project Unify© Training Shop — New Courses — 10 courses, 20 modules (2 each), in 4 streams.
 *
 * Sources (reference/text/):
 *  - "Accexx_15 - ProjectUnify_8 - ShortCourses_10- LMS_Module_Detail (3).txt", section
 *    "Project Unify© Training Shop — New Courses (9 Courses)": stream, name, one-line description,
 *    contact hours, target audience, module titles and durations. "AI Basics for the Everyday Employee (PUTS-10)"
 *    appears only in the appended Part 4 participant workbook (description, "Who This Is For", program map hours).
 *  - "UPDATED Curriculum_Library_Pricing_Master_CFO_Copy (2).txt", "Project Unify© Training Shop — New Courses —
 *    Pricing": lists 10 courses with in-person and virtual cohort prices. The additional-participant fee is not
 *    listed per row; the source says it "follows the standard formula: 8% of the In-Person Price".
 *
 * TODO_CLIENT: the module document's heading says 9 courses but the pricing sheet lists 10 (the 10th is
 * "AI Basics for the Everyday Employee"). All 10 are included here; confirm the final count.
 * TODO_CLIENT: confirm prices may be shown publicly (source is labelled "CFO Copy").
 * The source states no prerequisites for this set, so none are shown.
 */
import type { CatalogCourse } from "./types";

/** Family intro, adapted only by dropping the internal cross-reference to the Master Index. */
export const trainingShopIntro =
  "Non-certificate programs, genuinely new and distinct from the 15 Project Unify Certificate Programs. Completion is based on attendance and participation in all modules, plus a completed personal action plan — not a graded rubric. Participants receive a Certificate of Participation.";

const PARTICIPATION = "Certificate of Participation" as const;

export const trainingShopCourses: CatalogCourse[] = [
  {
    slug: "learning-how-to-learn-for-life",
    name: "Learning How to Learn for Life",
    track: "Stream 1: Lifelong Learning Pathways",
    description:
      "Tools for planning, note-making, review, and reflection. Each person creates a personal learning plan.",
    audience: "Upper-secondary and tertiary students, young professionals, adult learners.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Planning and Note-Making That Actually Work", hours: 3 },
      { number: 2, title: "Review, Reflection, and Building the Plan", hours: 3 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "personal-effectiveness-self-leadership",
    name: "Personal Effectiveness & Self-Leadership",
    track: "Stream 1: Lifelong Learning Pathways",
    description:
      "Clarify goals, manage time, energy, focus, and boundaries, and identify habits to stop and routines to start.",
    audience: "Staff at all levels, students in transition, early-career professionals.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Clarifying Goals and Managing Time and Energy", hours: 3 },
      { number: 2, title: "Focus, Boundaries, and the Effectiveness Plan", hours: 3 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "adaptive-thinking-learning-agility-at-work",
    name: "Adaptive Thinking & Learning Agility at Work",
    track: "Stream 1: Lifelong Learning Pathways",
    description:
      "Learn quickly from experience using feedback and reflection. Design a plan to experiment with new behaviors on the job.",
    audience: "Emerging leaders, project teams, staff in fast-changing environments.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Learning Quickly From Real Experience", hours: 3 },
      { number: 2, title: "Using Feedback and Designing the Experiment", hours: 3 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "attention-management-in-a-distracted-workplace",
    name: "Attention Management in a Distracted Workplace",
    track: "Stream 1: Lifelong Learning Pathways",
    description:
      "Strategies for deep work, digital boundaries, and managing notifications. Leave with a personalized attention and focus plan.",
    audience: "Knowledge workers, managers, anyone facing overload and distraction.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "What Drives Workplace Distraction", hours: 1.5 },
      { number: 2, title: "Deep Work Strategies and the Focus Plan", hours: 2 },
    ],
    cohort: { contactHours: 3.5, inPerson: 1050, virtual: 893, additionalParticipant: 84 },
  },
  {
    slug: "resilience-mental-fitness-for-everyday-work",
    name: "Resilience & Mental Fitness for Everyday Work",
    track: "Stream 1: Lifelong Learning Pathways",
    description: "Recognize stress signals, use tools for micro-recovery, self-talk, boundaries, and peer support.",
    audience: "All staff, especially frontline and high-pressure roles.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Recognizing Stress Signals and Micro-Recovery", hours: 3 },
      { number: 2, title: "Self-Talk, Boundaries, and Peer Support", hours: 3 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "career-discovery-pathways-for-students",
    name: "Career Discovery & Pathways for Students",
    track: "Stream 2: Career Services & Development",
    description:
      "Gain awareness of interests, strengths, values. Explore school-to-tertiary and school-to-work options. Draft a career pathway plan.",
    audience: "Upper-secondary students, pre-tertiary cohorts, youth programs.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Interests, Strengths, and Values", hours: 2 },
      { number: 2, title: "Exploring Pathways and Drafting the Plan", hours: 4 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "student-employability-skills-lab",
    name: "Student Employability Skills Lab",
    track: "Stream 2: Career Services & Development",
    description: "Core employability skills: communication, teamwork, problem-solving, reliability, professional behavior.",
    audience: "Senior secondary and tertiary students, youth programs.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Communication and Teamwork in Practice", hours: 3 },
      { number: 2, title: "Problem-Solving, Reliability, and Professional Behavior", hours: 3 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "working-across-generations",
    name: "Working Across Generations",
    track: "Stream 3: Organization & Workforce Development",
    description:
      "Understand generational differences in expectations, communication, and motivation. Reduce friction.",
    audience: "Mixed-age teams, leadership groups, HR/People teams.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Understanding Real Generational Differences", hours: 3 },
      { number: 2, title: "Reducing Friction Through Communication", hours: 3 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "collaboration-cross-functional-teaming",
    name: "Collaboration & Cross-Functional Teaming",
    track: "Stream 3: Organization & Workforce Development",
    description:
      "Identify barriers across departments. Practice role clarity, communication, joint planning, and conflict management.",
    audience: "Project teams, cross-functional groups, middle management.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "Identifying Real Cross-Departmental Barriers", hours: 2 },
      { number: 2, title: "Role Clarity, Joint Planning, and Conflict Management", hours: 4 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    // TODO_CLIENT: 10th course: in the pricing sheet and the Part 4 workbook, but not counted in the module doc's "9 Courses" heading.
    slug: "ai-basics-for-the-everyday-employee",
    name: "AI Basics for the Everyday Employee",
    track: "Stream 4: Practical AI Literacy",
    description:
      "A plain-language, entry-level introduction to AI for employees with no technical background — what AI actually is, where it already shows up in everyday work tools, and how to use it responsibly and well.",
    audience:
      "Any employee, regardless of role or technical background, who uses or will soon use AI-powered tools at work.",
    credential: PARTICIPATION,
    modules: [
      { number: 1, title: "What AI Actually Is (No Jargon)", hours: 3 },
      { number: 2, title: "Using AI Responsibly at Work", hours: 3 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
];

export const getTrainingShopCourse = (slug: string) => trainingShopCourses.find((c) => c.slug === slug);
