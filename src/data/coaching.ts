/**
 * Coaching streams: 2 (Executive & Leadership 1:1; Group & Team).
 *
 * Wording copied from reference/text/Accexx_Coaching_LMS_Entries (1) web.txt; prices from
 * reference/text/UPDATED Curriculum_Library_Pricing_Master_CFO_Copy (2).txt.
 * Coaching is a client engagement, not a course: no modules, contact hours or CEUs.
 */

export type SessionStep = { title: string; minutes: string; summary: string };

export type CoachingPackage = { label: string; price: string; note?: string };

export type CoachingStream = {
  slug: string;
  name: string;
  description: string;
  whoFor: string;
  focusAreas: string[];
  /** "Engagement Structure" line from the source (cadence + session length). */
  engagementStructure: string;
  sessionLength: string;
  sessionStructure: SessionStep[];
  tools: string[];
  delivered: string[];
  progressReview: string;
  pricing: { perSession: string; packages: CoachingPackage[]; note?: string };
};

export const coachingFraming =
  "Coaching is a client engagement, not a course. There are no fixed modules, contact hours, or CEUs. This listing helps you choose the right stream.";

export const coachingStreams: CoachingStream[] = [
  {
    slug: "executive-leadership",
    name: "Executive & Leadership Coaching (1:1)",
    description:
      "One-to-one coaching for senior leaders grounded in the Human Operating Codes framework. Goes beyond goal-setting to work with the beliefs, stories, and emotional patterns that drive or derail leadership.",
    whoFor: "CEOs, school owners, senior leaders, founders, high-potential leaders in transition.",
    focusAreas: [
      "Leading through transition or growth",
      "Emotional intelligence and self-regulation under pressure",
      "Decision-making clarity and values alignment",
      "Executive presence and communication",
      "Preventing burnout and building sustainable leadership rhythms",
    ],
    engagementStructure:
      "Shown for a 12-session engagement; a 6-session engagement compresses each phase proportionally.",
    sessionLength: "60-90 minutes",
    sessionStructure: [
      {
        title: "Opening Check-In",
        minutes: "5-10 min",
        summary:
          "A brief check on what's alive for the client right now, and a quick follow-up on commitments from the prior session.",
      },
      {
        title: "Exploration",
        minutes: "30-45 min",
        summary:
          "The core coaching conversation on the session's focus area, using powerful questioning and a BSEH-style diagnostic lens where relevant.",
      },
      {
        title: "Insight & Reframe",
        minutes: "10-15 min",
        summary: "Naming what's shifted in the client's thinking, and testing a new perspective against a real situation.",
      },
      {
        title: "Action & Commitment",
        minutes: "10-15 min",
        summary: "A concrete next step the client commits to, with an accountability marker for the next session.",
      },
    ],
    tools: [
      "BSEH diagnostic lens (adapted from HOC-LP)",
      "GROW-based session structure as a fallback for clients who benefit from more explicit structure",
      "Values-clarification exercise (adapted from EVLP)",
      "Optional 360-style stakeholder input, used only with explicit client consent",
    ],
    delivered: [
      "An initial coaching agreement covering goals, confidentiality terms, and session cadence",
      "An optional mid-engagement progress note for the sponsor, kept high-level to preserve coaching confidentiality",
      "A closing summary covering goals achieved, growth areas, and recommended next steps",
    ],
    progressReview:
      "Not graded. Progress is reviewed against the client's own stated goals, self-assessed at the engagement's midpoint and end, with an optional sponsor check-in on observable behavior change, only with client consent.",
    pricing: {
      perSession: "$650",
      packages: [
        { label: "Single session", price: "$650" },
        { label: "6-session engagement", price: "$3,600" },
        { label: "12-session engagement", price: "$6,800" },
      ],
    },
  },
  {
    slug: "group-team",
    name: "Group & Team Coaching",
    description:
      "Coaching cohorts for leadership teams, department heads, and emerging leader groups. Combines facilitated peer learning, coaching conversations, and accountability structures, with real workplace challenges as the curriculum.",
    whoFor: "Leadership teams, department heads, school management teams, cohorts of emerging leaders.",
    focusAreas: [
      "Building trust and psychological safety in teams",
      "Shifting from command-and-control to coaching-style leadership",
      "Navigating change together",
      "Peer accountability and collective growth",
    ],
    engagementStructure: "Shown for an 8-session cohort; scales down to 6 sessions or up to 12.",
    sessionLength: "90-120 minutes",
    sessionStructure: [
      {
        title: "Opening Check-In Round",
        minutes: "10-15 min",
        summary: "Each member briefly shares their current state and progress since the last session.",
      },
      {
        title: "Core Coaching Conversation",
        minutes: "45-60 min",
        summary:
          "A facilitated discussion or live coaching demonstration on the session's focus area, with structured peer input throughout.",
      },
      {
        title: "Peer Coaching Practice",
        minutes: "20-30 min",
        summary:
          "Members practice coaching each other on a real, current challenge, in pairs or small groups within the cohort.",
      },
      {
        title: "Closing Commitments Round",
        minutes: "10-15 min",
        summary: "Each member states one specific commitment to carry into the coming weeks.",
      },
    ],
    tools: [
      "Team-level BSEH-style diagnostic (adapted from TOS-F)",
      "Structured peer-coaching protocol (adapted from LCP)",
      "Psychological safety discussion guide (adapted from the Leadership Development set)",
    ],
    delivered: [
      "A group coaching agreement covering norms, confidentiality, and session cadence",
      "A session-by-session commitment tracker shared within the cohort",
      "A closing summary for the sponsoring organization, covering aggregate themes only, no individual disclosures without consent",
    ],
    progressReview:
      "Not graded. Success is measured by the cohort's own stated goals: self-assessed shift in trust and psychological safety, and individual commitment follow-through tracked informally within the cohort.",
    pricing: {
      perSession: "$2,200",
      packages: [
        { label: "Single session", price: "$2,200" },
        { label: "8-session cohort", price: "$16,800", note: "total" },
      ],
      note: "For groups of 4-8 people. Per-person cost depends on group size.",
    },
  },
];
