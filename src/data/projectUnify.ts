/**
 * Project Unify© Certificate Programs — 15 certificates, 45 modules (3 each).
 *
 * Sources (reference/text/):
 *  - "Accexx_15 - ProjectUnify_8 - ShortCourses_10- LMS_Module_Detail (3).txt", section
 *    "Project Unify© Certificate Programs (15 Certificates)": name, one-line description, contact hours,
 *    recommended CEUs, target audience, prerequisites, module titles and durations.
 *  - "UPDATED Curriculum_Library_Pricing_Master_CFO_Copy (2).txt", "Project Unify Certificate Programs — Pricing":
 *    per-cohort prices (cohort cap 15; hybrid = 92.5% of in-person).
 *
 * Overview-level only: learning objectives, activities, assessments, capstones and materials are
 * course material and stay in the course portal.
 * TODO_CLIENT: confirm prices may be shown publicly (source is labelled "CFO Copy").
 */
import type { CatalogCourse } from "./types";

/** Family intro, as written in the source (assessment detail "(Pass / Unsatisfactory / Fail) assessed by the facilitator" left to the portal). */
export const projectUnifyIntro =
  "Credentialed certificate programs, built to the HOC Flagship graded standard: measurable objectives, formal contact hours, and a graded capstone.";

export const projectUnifyCertificates: CatalogCourse[] = [
  {
    slug: "school-to-work-readiness",
    name: "Certificate in School to Work Readiness",
    description:
      "Prepares final-year students and new graduates for the transition from school to the workplace, covering expectations, professional conduct, and practical job-search skills.",
    audience: "Final-year students, interns, NYSC members, new graduates.",
    prerequisites: "None. Open to any final-year student, intern, or recent graduate preparing to enter the workforce.",
    recommendedCeus: 1,
    credential: "Certificate",
    modules: [
      { number: 1, title: "What the Workplace Actually Expects", hours: 3 },
      { number: 2, title: "Professional Conduct, Communication, and Etiquette", hours: 4 },
      { number: 3, title: "Interview Readiness and the CV/Application Toolkit", hours: 3 },
    ],
    cohort: { contactHours: 10, inPerson: 3000, virtual: 2550, additionalParticipant: 240 },
  },
  {
    slug: "early-career-professionalism",
    name: "Certificate in Early Career Professionalism",
    description:
      "Equips new hires and early-career professionals with the professionalism, communication, and self-management skills to succeed from Day 1.",
    audience: "Interns, NYSC members, graduate trainees, staff in their first 3 years of work.",
    prerequisites: "None. Designed for anyone in their first three years of employment.",
    recommendedCeus: 1,
    credential: "Certificate",
    modules: [
      { number: 1, title: "Professionalism From Day 1", hours: 3 },
      { number: 2, title: "Managing Expectations, Communication, and Feedback", hours: 4 },
      { number: 3, title: "Building the Day 1-90 Plan", hours: 3 },
    ],
    cohort: { contactHours: 10, inPerson: 3000, virtual: 2550, additionalParticipant: 240 },
  },
  {
    slug: "career-navigation-mobility",
    name: "Certificate in Career Navigation & Mobility",
    description:
      "Helps working professionals map their current skills, interests, and career options, then build a realistic career strategy and development plan.",
    audience: "Staff at all levels considering next steps; talent and pipeline groups.",
    prerequisites:
      "None. Open to any employee considering their next career step, whether advancement, lateral move, or change of field.",
    recommendedCeus: 1,
    credential: "Certificate",
    modules: [
      { number: 1, title: "Mapping Skills, Interests, and Possible Paths", hours: 3 },
      { number: 2, title: "Identifying Skills Gaps and Development Opportunities", hours: 3 },
      { number: 3, title: "Building the Career Strategy & Development Plan", hours: 4 },
    ],
    cohort: { contactHours: 10, inPerson: 3000, virtual: 2550, additionalParticipant: 240 },
  },
  {
    slug: "career-supportive-management",
    name: "Certificate in Career Supportive Management",
    description:
      "Equips managers to support their team members' career growth through structured career conversations and development-focused feedback.",
    audience: "Supervisors, team leaders, line managers, HR business partners.",
    prerequisites: "Current or upcoming supervisory responsibility for at least one direct report.",
    recommendedCeus: 1,
    credential: "Certificate",
    modules: [
      { number: 1, title: "The Manager's Role in Career Growth", hours: 3 },
      { number: 2, title: "Structuring the Career Conversation", hours: 4 },
      { number: 3, title: "Holding a Real Conversation and Following Through", hours: 3 },
    ],
    cohort: { contactHours: 10, inPerson: 3000, virtual: 2550, additionalParticipant: 240 },
  },
  {
    slug: "core-workforce-skills",
    name: "Certificate in Core Workforce Skills",
    description:
      "Builds the essential skills every modern workplace demands: communication, teamwork, problem-solving, adaptability, and basic leadership.",
    audience: "General staff, support staff, junior to mid-level employees.",
    prerequisites: "None.",
    recommendedCeus: 1,
    credential: "Certificate",
    modules: [
      { number: 1, title: "Communication and Teamwork Fundamentals", hours: 4 },
      { number: 2, title: "Problem-Solving and Adaptability", hours: 3 },
      { number: 3, title: "Basic Leadership and the Team Task", hours: 3 },
    ],
    cohort: { contactHours: 10, inPerson: 3000, virtual: 2550, additionalParticipant: 240 },
  },
  {
    slug: "frontline-supervision-team-leadership",
    name: "Certificate in Frontline Supervision & Team Leadership",
    description:
      "Supports new and emerging supervisors in making the critical shift from individual contributor to confident team leader.",
    audience: "New supervisors, heads of unit, senior teachers, team leads.",
    prerequisites: "Current or imminent supervisory responsibility for at least one team member.",
    recommendedCeus: 1.2,
    credential: "Certificate",
    modules: [
      { number: 1, title: "The Shift From Contributor to Leader", hours: 3 },
      { number: 2, title: "Delegation, Feedback, and Follow-Up", hours: 4 },
      { number: 3, title: "Team Routines and Designing the Improvement Project", hours: 5 },
    ],
    cohort: { contactHours: 12, inPerson: 3600, virtual: 3060, additionalParticipant: 288 },
  },
  {
    slug: "accountability-culture",
    name: "Certificate in Accountability Culture",
    description:
      "Helps teams move from blame to ownership, clarifying expectations, building follow-through, and creating a culture where people learn from mistakes without fear.",
    audience: "Managers, supervisors, whole teams working on culture.",
    prerequisites: "None. Most effective when delivered to an intact team together.",
    recommendedCeus: 0.8,
    credential: "Certificate",
    modules: [
      { number: 1, title: "What Accountability Actually Means", hours: 2 },
      { number: 2, title: "Setting Expectations and Following Through", hours: 3 },
      { number: 3, title: "Learning From Mistakes and Drafting the Charter", hours: 3 },
    ],
    cohort: { contactHours: 8, inPerson: 2400, virtual: 2040, additionalParticipant: 192 },
  },
  {
    slug: "workplace-ethics-integrity",
    name: "Certificate in Workplace Ethics & Integrity",
    description:
      "Equips staff to navigate common ethical dilemmas (gifts, shortcuts, conflicts of interest, speaking up) with clarity and organizational values as their guide.",
    audience: "All staff; especially finance, procurement, frontline, and leadership.",
    prerequisites: "None.",
    recommendedCeus: 0.6,
    credential: "Certificate",
    modules: [
      { number: 1, title: "Common Ethical Dilemmas at Work", hours: 2 },
      { number: 2, title: "Practicing Values-Aligned Decisions Under Pressure", hours: 2 },
      { number: 3, title: "Speaking Up and Building the Integrity Plan", hours: 2 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "practical-problem-solving-continuous-improvement",
    name: "Certificate in Practical Problem-Solving & Continuous Improvement",
    description:
      "Gives teams simple, practical tools to identify root causes, generate solutions, test small changes, and build a habit of continuous improvement.",
    audience: "Operations, service teams, admin, any team with recurring issues.",
    prerequisites: "A real, recurring process or service issue the participant can use as their improvement project.",
    recommendedCeus: 0.8,
    credential: "Certificate",
    modules: [
      { number: 1, title: "Finding the Real Root Cause", hours: 3 },
      { number: 2, title: "Generating and Testing Small Changes", hours: 3 },
      { number: 3, title: "Planning the Project and Reporting Back", hours: 2 },
    ],
    cohort: { contactHours: 8, inPerson: 2400, virtual: 2040, additionalParticipant: 192 },
  },
  {
    slug: "high-level-customer-service-excellence",
    name: "Certificate in High-Level Customer Service Excellence",
    description:
      "Designs and delivers memorable service experiences by building skills in listening, empathy, problem-resolution, complaint handling, and service recovery.",
    audience:
      "Frontline staff, reception, call centers, school front-office, sales and service teams, supervisors.",
    prerequisites: "None.",
    recommendedCeus: 1.6,
    credential: "Certificate",
    modules: [
      { number: 1, title: "What High-Level Service Actually Looks Like", hours: 3 },
      { number: 2, title: "Listening, Empathy, and Problem-Resolution", hours: 5 },
      { number: 3, title: "Complaint Handling, Service Recovery, and the Project", hours: 8 },
    ],
    cohort: { contactHours: 16, inPerson: 4800, virtual: 4080, additionalParticipant: 384 },
  },
  {
    slug: "business-etiquette-professional-presence",
    name: "Certificate in Business Etiquette & Professional Presence",
    description:
      "Builds practical business etiquette skills (appearance, communication, meetings, email, business dining, cross-cultural courtesy) that strengthen credibility and respect.",
    audience: "Emerging leaders, client-facing staff, executives, entrepreneurs.",
    prerequisites: "None.",
    recommendedCeus: 0.8,
    credential: "Certificate",
    modules: [
      { number: 1, title: "Etiquette Fundamentals: Meetings, Email, and Communication", hours: 3 },
      { number: 2, title: "Presence, Appearance, and Cross-Cultural Courtesy", hours: 3 },
      { number: 3, title: "Building the Professional-Presence Plan", hours: 2 },
    ],
    cohort: { contactHours: 8, inPerson: 2400, virtual: 2040, additionalParticipant: 192 },
  },
  {
    slug: "digital-customer-service",
    name: "Certificate in Digital Customer Service",
    description:
      "Equips staff with the standards and skills to serve customers professionally across email, chat, WhatsApp, and social media.",
    audience: "Contact centers, social media teams, any online service staff.",
    prerequisites: "None.",
    recommendedCeus: 0.6,
    credential: "Certificate",
    modules: [
      { number: 1, title: "Channel Expectations and Tone", hours: 2 },
      { number: 2, title: "Speed, Privacy, and Handling Online Complaints", hours: 2 },
      { number: 3, title: "Practicing Channel Responses and Agreeing Team Standards", hours: 2 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
  {
    slug: "service-excellence-for-schools",
    name: "Certificate in Service Excellence for Schools",
    description:
      "Helps school staff see parent and student experience as part of the school's brand, and gives them practical tools for communication, complaints, and professional conduct.",
    audience: "School front-desk, admissions, administrators, senior teachers, leadership.",
    prerequisites: "None.",
    recommendedCeus: 0.9,
    credential: "Certificate",
    modules: [
      { number: 1, title: "Parent and Student Experience as Brand", hours: 3 },
      { number: 2, title: "Communication and Complaints Handling", hours: 3 },
      { number: 3, title: "Designing the School-Based Service Initiative", hours: 3 },
    ],
    cohort: { contactHours: 9, inPerson: 2700, virtual: 2295, additionalParticipant: 216 },
  },
  {
    slug: "service-recovery-difficult-customers",
    name: "Certificate in Service Recovery & Difficult Customers",
    description:
      "Teaches staff how to de-escalate difficult interactions, use structured service-recovery steps, and protect both themselves and the brand under pressure.",
    audience: "All customer-facing staff; high-volume or high-risk service environments.",
    prerequisites: "None.",
    recommendedCeus: 0.8,
    credential: "Certificate",
    modules: [
      { number: 1, title: "De-Escalation and Emotional Regulation", hours: 3 },
      { number: 2, title: "Structured Service Recovery", hours: 3 },
      { number: 3, title: "Designing High-Risk Situation Protocols", hours: 2 },
    ],
    cohort: { contactHours: 8, inPerson: 2400, virtual: 2040, additionalParticipant: 192 },
  },
  {
    slug: "executive-presence-business-etiquette",
    name: "Certificate in Executive Presence & Business Etiquette",
    description:
      "Develops leaders' presence, communication, and protocol awareness for high-level internal and external settings.",
    audience: "Senior leaders, high-potential talent, external-facing roles, board-facing executives.",
    prerequisites:
      "Current or anticipated responsibility for high-level internal or external representation (board meetings, executive negotiations, senior client relationships).",
    recommendedCeus: 0.6,
    credential: "Certificate",
    modules: [
      { number: 1, title: "How Presence Shapes Organizational Image", hours: 2 },
      { number: 2, title: "Communication, Body Language, and Protocol", hours: 2 },
      { number: 3, title: "Building the Adjustment Plan", hours: 2 },
    ],
    cohort: { contactHours: 6, inPerson: 1800, virtual: 1530, additionalParticipant: 144 },
  },
];

export const getProjectUnifyCertificate = (slug: string) => projectUnifyCertificates.find((c) => c.slug === slug);
