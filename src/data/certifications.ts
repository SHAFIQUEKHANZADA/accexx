/**
 * HOC™ Flagship Certification Suite — 10 certifications, 51 modules.
 *
 * Sources (reference/text/), overview + curriculum + price sections only:
 *   HOC-LP_Modules 1-6 + Cover.txt, CCAL -Modules 1-4 + cover  - overview.txt,
 *   LCP_Module1-5. AXI.txt, HCHRD_Module1-6 AXI.txt, ELHOC_Module1-7 + overview.txt
 *   (overview is pasted twice in the source; taken once), TOSF_Module1-4 + overview.txt,
 *   RLWS_Modules 1-4 + overview.txt, EVLP_Module1-4 + overview.txt,
 *   CHOCF_Module1-6 +Overview.txt, GHOCCoach_Module 1 - 5 + Overview.txt.
 * Codes, full names and order: Accexx_Insight_Training_Course_Glossary.txt
 * ("2. HOC Flagship Certification Suite").
 *
 * IACET wording is intentionally stripped: do not state that Accexx is IACET accredited.
 */
import type { Certification } from "./types";

export const showCeus = true; // Recommended CEUs are a calculated estimate, not issued credit (IACET status unconfirmed).

/** Facilitator text, identical in all 10 source overviews. */
const FACILITATOR =
  "Dr. Laide R. Alexander, Forbes Coaches Council member, creator of the Human Operating Code framework, and author of the Amazon best-seller The Unfinished Leader. Alternatively, a professional executive assigned by Accexx Insight who meets this certification's stated facilitator qualifications.";

const FORMAT = "Live Virtual or In-Person";

export const certifications: Certification[] = [
  {
    code: "HOC-LP",
    slug: "hoc-lp",
    name: "Certified Human Operating Code™ Leadership Practitioner",
    tagline:
      "Learn to diagnose and shift team behavior using the Human Operating Code framework, from everyday interventions to leading through conflict and change.",
    format: FORMAT,
    contactHours: 42,
    ceus: 4.2,
    facilitator: FACILITATOR,
    outcome:
      "Graduates can diagnose their own and their team's operating code, apply reframing and structured-conversation techniques to real performance and conflict situations, and execute a 90-day intervention plan for team culture.",
    modules: [
      {
        number: 1,
        title: "Introduction to the Human Operating Code",
        hours: 6,
        summary:
          "Learn the Beliefs-Stories-Emotions-Habits framework and use it to diagnose your own operating code.",
      },
      {
        number: 2,
        title: "Diagnosing the Team's Operating Code",
        hours: 6,
        summary:
          "Apply structured diagnostic methods to identify the root cause behind a real team issue.",
      },
      {
        number: 3,
        title: "Shifting Mindsets Through Structured Conversation",
        hours: 9,
        summary:
          "Practice reframing a limiting belief and planning a structured conversation for a real interaction.",
      },
      {
        number: 4,
        title: "HOC in Performance & Feedback",
        hours: 6,
        summary:
          "Apply BSEH diagnostics to prepare and deliver feedback that addresses the belief behind the behavior.",
      },
      {
        number: 5,
        title: "HOC in Conflict & Change",
        hours: 9,
        summary:
          "Use HOC-based de-escalation and reframing tools to work through a real conflict or resistance.",
      },
      {
        number: 6,
        title: "Designing Everyday Interventions",
        hours: 6,
        summary:
          "Design a repeatable culture intervention and a 90-day implementation plan, defended to peers.",
      },
    ],
    prices: { inPerson: 18900, virtual: 16065, hybrid: 17482, additionalParticipant: 1512 },
  },
  {
    code: "CCAL",
    slug: "ccal",
    name: "Certified Culture Architect Leader",
    tagline:
      "Diagnose what's really being rewarded in an organization's culture, and build and lead a deliberate culture blueprint.",
    format: FORMAT,
    contactHours: 24,
    ceus: 2.4,
    facilitator: FACILITATOR,
    outcome:
      "Graduates can build and lead a Culture Blueprint: mapping what's actually rewarded, redesigning misaligned systems, and running a real culture-change experiment.",
    modules: [
      {
        number: 1,
        title: "Diagnosing Culture: What's Really Rewarded",
        hours: 6,
        summary: "Map what's actually rewarded, tolerated, and punished in a real organization.",
      },
      {
        number: 2,
        title: "Building the Culture Blueprint",
        hours: 6,
        summary: "Construct a Culture Blueprint defining values, behaviors, stories, and symbols.",
      },
      {
        number: 3,
        title: "Aligning Systems with the Blueprint",
        hours: 6,
        summary:
          "Evaluate organizational systems for alignment with the Blueprint and prioritize what to fix first.",
      },
      {
        number: 4,
        title: "Leading Culture Change & Experiments",
        hours: 6,
        summary: "Design and lead a time-bound culture experiment testing one Blueprint element.",
      },
    ],
    prices: { inPerson: 10800, virtual: 9180, hybrid: 9990, additionalParticipant: 864 },
  },
  {
    code: "LCP",
    slug: "lcp",
    name: "Certified Leader-as-Coach Practitioner",
    tagline:
      "Build a coaching-style leadership practice: powerful questioning, and coaching through performance conversations, change, and resistance.",
    format: FORMAT,
    contactHours: 30,
    ceus: 3,
    facilitator: FACILITATOR,
    outcome:
      "Graduates can shift fluidly between coaching, directing, and supporting, applying real coaching skills to performance conversations and change situations, demonstrated in an observed coaching session.",
    modules: [
      {
        number: 1,
        title: "Foundations of Coaching-Style Leadership",
        hours: 6,
        summary:
          "Distinguish coaching from directing and mentoring, and apply a basic coaching structure.",
      },
      {
        number: 2,
        title: "Powerful Questioning & Listening",
        hours: 6,
        summary:
          "Practice listening at the level of content, emotion, and values, and constructing open questions live.",
      },
      {
        number: 3,
        title: "Coaching in Performance Conversations",
        hours: 6,
        summary:
          "Apply coaching skills to a real performance conversation, shifting from evaluator to coach-partner.",
      },
      {
        number: 4,
        title: "Coaching Through Change & Resistance",
        hours: 6,
        summary:
          "Help a team member process change by distinguishing resistance-as-signal from resistance-as-obstruction.",
      },
      {
        number: 5,
        title: "Knowing When to Coach, Direct, or Support",
        hours: 6,
        summary:
          "Apply a decision framework to choose the right stance, tested in a final observed coaching session.",
      },
    ],
    prices: { inPerson: 13500, virtual: 11475, hybrid: 12488, additionalParticipant: 1080 },
  },
  {
    code: "HCHR-D",
    slug: "hchr-d",
    name: "Certified Human-Centered HR & People Systems Designer",
    tagline:
      "Audit and redesign HR systems (performance, feedback, onboarding) around genuine human-centered design principles.",
    format: FORMAT,
    contactHours: 36,
    ceus: 3.6,
    facilitator: FACILITATOR,
    outcome:
      "Graduates can audit and redesign HR systems (performance, feedback, onboarding) using human-centered design principles, and pitch the redesign as a strategic recommendation to leadership.",
    modules: [
      {
        number: 1,
        title: "Auditing HR Systems for Cultural Alignment",
        hours: 6,
        summary:
          "Map current people-process touchpoints and audit them against the organization's stated culture.",
      },
      {
        number: 2,
        title: "Principles of Human-Centered System Design",
        hours: 6,
        summary: "Apply human-centered design principles to prototype a redesigned HR process.",
      },
      {
        number: 3,
        title: "Redesigning Performance Systems",
        hours: 6,
        summary:
          "Redesign a performance process to be growth-centered, balancing accountability with psychological safety.",
      },
      {
        number: 4,
        title: "Redesigning Feedback & Recognition Systems",
        hours: 6,
        summary: "Redesign feedback and recognition flows to reinforce the organization's real culture.",
      },
      {
        number: 5,
        title: "Redesigning Onboarding Systems",
        hours: 6,
        summary: 'Design onboarding as "operating code installation," with a full 30-60-90 day journey.',
      },
      {
        number: 6,
        title: "Becoming an Internal Consultant",
        hours: 6,
        summary:
          "Use data and feedback loops to refine a system, and pitch the redesign as a strategic recommendation.",
      },
    ],
    prices: { inPerson: 16200, virtual: 13770, hybrid: 14985, additionalParticipant: 1296 },
  },
  {
    code: "EL-HOC",
    slug: "el-hoc",
    name: "Certified Education Leadership & Human Operating Code™ Specialist",
    tagline:
      "Apply the Human Operating Code framework to school leadership: classroom climate, staff culture, discipline systems, and governance.",
    format: FORMAT,
    contactHours: 33,
    ceus: 3.3,
    facilitator: FACILITATOR,
    outcome:
      "Graduates can lead a full School Culture Project: diagnosing beliefs across teachers, students, and parents, redesigning discipline and staff-culture routines, and presenting evidence of real impact.",
    modules: [
      {
        number: 1,
        title: "Diagnosing Operating Codes in School Life",
        hours: 5,
        summary:
          "Learners map the beliefs and patterns of teachers, students, parents, and staff across a real school community, and use that diagnosis to select the focus for their eventual School Culture Project.",
      },
      {
        number: 2,
        title: "Shaping Classroom Climate",
        hours: 5,
        summary:
          "Learners identify classroom climate factors linked to teacher mindset, and practice coaching a teacher using HOC principles rather than simply directing changes to classroom practice.",
      },
      {
        number: 3,
        title: "Leading Staff Meetings & Staff Culture",
        hours: 5,
        summary:
          "Learners redesign a real staff meeting or staff ritual to build genuine ownership among teachers and staff, rather than mere compliance with attendance.",
      },
      {
        number: 4,
        title: "Discipline Systems Through an HOC Lens",
        hours: 4,
        summary:
          "Learners examine and redesign a real discipline routine to build genuine ownership of behavior in students, rather than simply enforcing compliance.",
      },
      {
        number: 5,
        title: "Parent Engagement & Communication",
        hours: 5,
        summary:
          "Learners design communication routines that build genuine trust with parents over time, and prepare specifically for a difficult parent conversation using the coaching skills built earlier in this certification and in the broader HOC library.",
      },
      {
        number: 6,
        title: "Aligning Governance & Policy with School Values",
        hours: 4,
        summary:
          "Learners audit real governance structures and school policies against the school's stated values, applying the same systems-alignment lens from CCAL specifically to education governance.",
      },
      {
        number: 7,
        title: "Leading the School Culture Project",
        hours: 5,
        summary:
          "The capstone module.",
      },
    ],
    prices: { inPerson: 14850, virtual: 12623, hybrid: 13736, additionalParticipant: 1188 },
  },
  {
    code: "TOS-F",
    slug: "tos-f",
    name: "Certified Team Operating Systems Facilitator",
    tagline:
      "Diagnose a team's operating system and facilitate the agreements, routines, and rituals that improve how it actually functions.",
    format: FORMAT,
    contactHours: 27,
    ceus: 2.7,
    facilitator: FACILITATOR,
    outcome:
      "Graduates can diagnose a team's operating system, facilitate an agreement-reset session, and track whether new routines actually took hold over time.",
    modules: [
      {
        number: 1,
        title: "Diagnosing a Team's Operating System",
        hours: 7,
        summary:
          "Learners apply structured diagnostics to identify the 2-3 highest-leverage issues affecting a real team. Not every possible problem, but the handful that matter most.",
      },
      {
        number: 2,
        title: "Facilitating Agreement-Resetting Sessions",
        hours: 7,
        summary:
          "Learners design and facilitate a session that resets a team's agreements and roles, including navigating real disagreement in the room, not avoiding it.",
      },
      {
        number: 3,
        title: "Introducing Routines & Rituals",
        hours: 7,
        summary:
          "Learners select and introduce a new team ritual, anticipating real adoption barriers rather than assuming a good idea will simply stick on its own.",
      },
      {
        number: 4,
        title: "Tracking & Reviewing Team OS Improvements",
        hours: 6,
        summary:
          "The capstone module.",
      },
    ],
    prices: { inPerson: 12150, virtual: 10328, hybrid: 11239, additionalParticipant: 972 },
  },
  {
    code: "RLWS",
    slug: "rlws",
    name: "Certified Resilient Leadership & Well-Being Strategist",
    tagline:
      "Understand the psychology of stress and burnout, and learn to design and model organizational resilience strategies.",
    format: FORMAT,
    contactHours: 27,
    ceus: 2.7,
    facilitator: FACILITATOR,
    outcome:
      "Graduates can diagnose organizational drivers of burnout, design both individual and system-level resilience interventions, and model healthy boundaries as a leader.",
    modules: [
      {
        number: 1,
        title: "The Psychology & Physiology of Stress and Resilience",
        hours: 7,
        summary:
          "Learners understand how stress affects thinking and behavior at a practical level, and learn to identify real, observable stress signals in themselves and their teams.",
      },
      {
        number: 2,
        title: "Diagnosing Organizational Drivers of Burnout",
        hours: 7,
        summary:
          "Learners use a structured diagnostic to assess three real organizational drivers of burnout (workload, control, and fairness) and identify the highest-risk areas on a real team.",
      },
      {
        number: 3,
        title: "Designing Resilience Strategies",
        hours: 7,
        summary:
          "Learners design both individual- and system-level resilience practices, targeting the highest-risk driver identified in Module 2, and balancing quick wins with real structural change.",
      },
      {
        number: 4,
        title: "Modeling & Embedding Healthier Norms",
        hours: 6,
        summary:
          "The capstone module.",
      },
    ],
    prices: { inPerson: 12150, virtual: 10328, hybrid: 11239, additionalParticipant: 972 },
  },
  {
    code: "EVLP",
    slug: "evlp",
    name: "Certified Ethical & Values-Based Leadership Practitioner",
    tagline:
      "Clarify non-negotiable values and build a values-based decision framework for leading with integrity under pressure.",
    format: FORMAT,
    contactHours: 21,
    ceus: 2.1,
    facilitator: FACILITATOR,
    outcome:
      "Graduates can apply a values-based decision framework under real pressure, recognize and guard against ethical drift, and lead a difficult integrity conversation without shame or blame.",
    modules: [
      {
        number: 1,
        title: "Clarifying Non-Negotiable Values",
        hours: 5,
        summary:
          "Learners articulate their real personal and organizational non-negotiables, learning to distinguish genuine values from mere preferences and rules.",
      },
      {
        number: 2,
        title: "The Values-Based Decision Framework",
        hours: 6,
        summary:
          "Learners apply a structured values-based decision framework under real pressure and time constraints, using the non-negotiables clarified in Module 1.",
      },
      {
        number: 3,
        title: "Recognizing Ethical Drift",
        hours: 5,
        summary:
          "Learners identify how small compromises accumulate into ethical drift over time, and build real personal safeguards against it, before it becomes a pattern too large to easily reverse.",
      },
      {
        number: 4,
        title: "Leading Conversations on Integrity & Accountability",
        hours: 5,
        summary:
          "The capstone module.",
      },
    ],
    prices: { inPerson: 9450, virtual: 8033, hybrid: 8741, additionalParticipant: 756 },
  },
  {
    code: "CHOC-F",
    slug: "choc-f",
    name: "Certified Change & Human Operating Code™ Facilitator",
    tagline:
      "Map the human impact of change, understand resistance, and facilitate change journeys that build real ownership and adoption.",
    format: FORMAT,
    contactHours: 33,
    ceus: 3.3,
    facilitator: FACILITATOR,
    outcome:
      "Graduates can map the full human impact of a real change initiative, design a change journey that accounts for belief-driven resistance, and brief senior stakeholders to build genuine ownership.",
    modules: [
      {
        number: 1,
        title: "Mapping the Human Impact of Change",
        hours: 6,
        summary:
          "Learners build a Change Impact Map identifying who is genuinely affected by a real change initiative, and how. This is the foundation for everything else in this certification.",
      },
      {
        number: 2,
        title: "Understanding Resistance Patterns",
        hours: 5,
        summary:
          "Learners recognize resistance as signal rather than obstruction, and plan responses that address real root causes, using the highest-disruption group identified in Module 1.",
      },
      {
        number: 3,
        title: "Designing Change Journeys with HOC",
        hours: 5,
        summary:
          "Learners design a full change journey that accounts for beliefs and emotions, not just tasks and timelines, building on the impact map and resistance analysis from Modules 1-2.",
      },
      {
        number: 4,
        title: "Facilitating Change Workshops & Dialogues",
        hours: 6,
        summary:
          "Learners practice facilitating emotionally charged change conversations and handling strong reactions, preparing to actually run a real change dialogue session.",
      },
      {
        number: 5,
        title: "Building Ownership & Adoption",
        hours: 5,
        summary:
          "Learners design mechanisms and identify champions that build genuine ownership of the change, rather than relying on a mandate to produce lasting adoption.",
      },
      {
        number: 6,
        title: "Partnering with Leadership on Change",
        hours: 6,
        summary:
          "The capstone module.",
      },
    ],
    prices: { inPerson: 14850, virtual: 12623, hybrid: 13736, additionalParticipant: 1188 },
  },
  {
    code: "G-HOC Coach",
    slug: "g-hoc-coach",
    name: "Certified Global Human Operating Code™ Coach",
    tagline:
      "The advanced, selective-entry certification, integrating HOC into 1:1 and team coaching practice across cultural and organizational contexts.",
    format: FORMAT,
    contactHours: 54,
    ceus: 5.4,
    facilitator: FACILITATOR,
    outcome:
      "Graduates can coach at an advanced level across 1:1, team, and cross-cultural contexts, design a multi-session coaching program for a real client, and complete supervised coaching sessions for certification.",
    modules: [
      {
        number: 1,
        title: "Advanced HOC Integration in 1:1 Coaching",
        hours: 12,
        summary:
          "Learners deepen their use of the HOC framework at an advanced level, working with complex, layered client narratives rather than the single, simple belief chains taught in HOC-LP.",
      },
      {
        number: 2,
        title: "Advanced HOC in Team Coaching",
        hours: 12,
        summary:
          "Learners apply the HOC framework to team-level coaching dynamics, facilitating multi-party conversations where several individual belief chains interact simultaneously in the room.",
      },
      {
        number: 3,
        title: "Cross-Cultural Narratives, Identity & Context",
        hours: 8,
        summary:
          "Learners adapt coaching across cultural contexts without imposing a single cultural lens on beliefs, stories, emotions, and habits that function differently across different cultural contexts.",
      },
      {
        number: 4,
        title: "Designing HOC-Based Coaching Programs",
        hours: 12,
        summary:
          "Learners design and propose a real, multi-session coaching program tailored to a real client's context, integrating the advanced skills from Modules 1-3 into a coherent program, not just a single session.",
      },
      {
        number: 5,
        title: "Supervision & Case Work Practicum",
        hours: 10,
        summary:
          "Learners prepare a real case study for group supervision, and understand what genuine supervised case work actually involves, ahead of completing the live practicum required for full certification.",
      },
    ],
    prices: { inPerson: 35100, virtual: 29835, hybrid: 32468, additionalParticipant: 2808 },
    selectiveEntry: true,
  },
];

export const getCertification = (slug: string) => certifications.find((c) => c.slug === slug);
