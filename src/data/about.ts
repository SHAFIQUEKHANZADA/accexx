// Source: reference/text/Accexx Insight - Who We Are.txt (copied verbatim).

// Updated wording: Dr. A's email, 2026-10-06.
export const whoWeAre = [
  "Accexx Insight is a strategy, leadership, and transformation partner helping individuals and organizations gain clarity, make informed decisions, and turn vision into meaningful progress.",
  "Accexx Insight brings insight, structure, and practical guidance to complex challenges. We take the time to understand what is really happening, identify what needs to change, and create a realistic path forward.",
  "We do not believe in one-size-fits-all solutions. We work alongside our clients to develop strategies that reflect their goals, people, culture, and circumstances, so change is not only well planned, but achievable and built to last.",
];

export const whatWeDo = {
  intro: "Accexx Insight helps clients clarify challenges, make informed decisions, and turn ideas into action.",
  lead: "Our work supports clients to:",
  items: [
    "Identify what is holding them back",
    "Clarify their goals, priorities, and direction",
    "Develop practical strategies and action plans",
    "Strengthen leadership and decision-making",
    "Improve communication, alignment, and accountability",
    "Navigate growth, transition, and organizational change",
    "Build stronger teams and more effective ways of working",
    "Track progress and turn intentions into measurable results",
  ],
  outro:
    "Whether the challenge involves leadership, business growth, team performance, career direction, or organizational transformation, we help clients determine what needs to happen next, and how to make it happen.",
};

export type AudienceGroup = { name: string; summary: string; lead: string; items: string[] };

export const whoWeServe: AudienceGroup[] = [
  {
    name: "Organizations",
    summary:
      "We serve organizations navigating growth, transition, change, performance challenges, or strategic uncertainty.",
    lead: "We help them achieve:",
    items: [
      "Clearer organizational priorities",
      "Better team alignment",
      "Stronger execution",
      "Improved processes and performance",
      "More effective change management",
      "Greater accountability and measurable progress",
    ],
  },
  {
    name: "Leaders and Executives",
    summary:
      "We work with leaders who want to make better decisions, lead through change, and improve the performance of their teams and organizations.",
    lead: "We help leaders develop:",
    items: [
      "Greater clarity and confidence",
      "More effective communication",
      "Stronger decision-making skills",
      "Increased accountability",
      "Better team engagement",
      "A practical approach to leading change",
    ],
  },
  {
    name: "Entrepreneurs and Founders",
    summary:
      "We support entrepreneurs and founders who have a vision but need greater clarity, structure, strategy, or momentum.",
    lead: "We help them:",
    items: [
      "Define a clear direction",
      "Set focused goals",
      "Turn ideas into actionable plans",
      "Strengthen their business positioning",
      "Use their time and resources more effectively",
      "Move from planning to implementation",
    ],
  },
  {
    name: "Professionals",
    summary: "We serve professionals seeking career clarity, leadership development, or a more intentional path forward.",
    lead: "We help them:",
    items: [
      "Clarify their career goals",
      "Strengthen their confidence and communication",
      "Identify their next opportunity",
      "Create a practical development plan",
      "Prepare for greater responsibility",
      "Take purposeful action toward their goals",
    ],
  },
];

export const corePromise =
  "Accexx Insight turns uncertainty into clarity, decisions into action, and action into measurable results.";

// Source: reference/text/site_current-live_accexxinsight.com.txt ("About Me").
export const bio = {
  roles: "Founder & CEO, Accexx Insight · Founder & Chairperson, The Transformation Platform (Thetplat) · Member, Forbes Coaches Council",
  educator:
    "Dr. Laide Alexander is a distinguished leadership and human behavior expert with a doctorate in Educational & Leadership Management, an MBA in Human Resources Management, and a degree in Business Management. She is currently completing a post-doctoral program in Applied Behavior Analysis (ABA). She is the author of The Unfinished Leader and Why Move My Cheese?",
  builder:
    "Dr. Laide Alexander is the Founder and Chair of The Transformation Platform, a community empowering leaders to drive personal and organizational transformation. She is also the creator and host of the annual Why Move My Cheese? Conference, bringing leaders across corporate, education, and nonprofit sectors together to navigate change and transformation.",
  coach:
    "Through Accexx Insight, Dr. Alexander has partnered with organizations including McDonald’s, PSCC, HCC, Serasana, the Alexander Group, AOPE, Primrose, Corinthian Colleges and more. She has designed and delivered over 72 workshops across 8 school types globally, both in person and virtually, developed 10 certificate programs rooted in her applied HOS approach, and coached executives and leadership teams across diverse industries.",
  person:
    "Beyond her professional achievements, Dr. Alexander is a wife and mother who understands the realities of leading in the boardroom, at home, and in the community often all in the same day. Based in Houston, Texas, she is deeply committed to empowering leaders worldwide, regularly delivering programs and mentoring emerging leaders globally, in person and virtually.",
  philosophy:
    "True power in leadership is not found in perfection, but in purpose, presence, and the courage to keep evolving.",
};


// Dr. A's email, 2026-10-06. TODO_CLIENT: add each value's definition (in her email; not received here).
export const coreValues = ["Empathy", "Integrity", "Clarity", "Empowerment", "Purposeful Action", "Accountability", "Resilience", "Connection"];

// Dr. A's email, 2026-10-01: these are her present roles. Galen College of Nursing is history, not present.
export const presentRoles = [
  { title: "Founder & CEO", org: "Accexx Insight" },
  { title: "Founder & Chairperson", org: "The Transformation Platform (Thetplat)" },
  { title: "Member", org: "Forbes Coaches Council" },
];

// Past roles. Sources: the draft site bio ("college president, professor, and business founder") + her email.
export const pastRoles = [
  "Regional Director of Enrollment for the State of Texas, Galen College of Nursing",
  "College president",
  "Professor",
  "Business founder",
];

// Source: reference/text/site_draft_upload.x01works.com.ng.txt ("Meet Dr. A").
export const shortBio =
  "Dr. Laide R. Alexander is a member of the Forbes Coaches Council, Founder & CEO of Accexx Insight LLC, and a distinguished leadership development practitioner. She has served as a college president, professor, and business founder.";

export const partners = [
  "McDonald’s",
  "PSCC",
  "HCC",
  "Serasana",
  "The Alexander Group",
  "AOPE",
  "Primrose",
  "Corinthian Colleges",
];
