import type { LeadershipProgram } from "./types";

/**
 * Leadership Development programs (LD-01 … LD-12).
 *
 * Leadership Development programs award a Certificate of Participation only (curriculum guide).
 * Self-paced prices not provided yet (TODO_CLIENT.md).
 *
 * Sources (reference/text/):
 *  - "Leadership_Development_Programs_Curriculum (2).txt": description, duration, format, target audience,
 *    learning outcomes, and module titles / objectives / durations (live programs).
 *    In-person / online delivery notes and materials checklists are intentionally omitted.
 *  - "LD01-LD12 + overview.txt": self-paced "Videos / Lessons" table only. Workbook activities,
 *    assignments, rubrics and video scripts are course material and stay in the course portal.
 *  - "Accexx_Insight_Training_Course_Glossary.txt": code and program name (all match the curriculum guide).
 *  - "UPDATED Curriculum_Library_Pricing_Master_CFO_Copy (2).txt": contact hours and per-cohort prices
 *    (`cohort`). Cohort cap 15; hybrid = 92.5% of in-person. TODO_CLIENT: confirm prices may be shown publicly.
 */
export const leadershipPrograms: LeadershipProgram[] = [
  {
    code: "LD-01",
    slug: "ld-01",
    name: "Leading Through Complexity & Uncertainty",
    description:
      "Helps leaders make sense of fast-changing, ambiguous situations and steady their teams when things feel unclear.",
    audience: "Senior leaders, project leaders, school owners, NGO directors.",
    live: {
      duration: "1–2 days workshop or 4–6 online sessions",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Make sense of fast-changing, ambiguous situations",
        "Use basic scenario thinking",
        "Make adaptive decisions under uncertainty",
        "Steady and focus teams when things feel unclear or unstable",
      ],
      modules: [
        {
          id: "M1",
          title: "Making Sense of Ambiguous, Fast-Changing Situations",
          objectives: [
            "Distinguish complicated problems from truly ambiguous ones",
            "Apply a simple sense-making framework to a live situation",
            "Recognize personal reactions to ambiguity",
          ],
          duration: "90 min",
        },
        {
          id: "M2",
          title: "Basic Scenario Thinking",
          objectives: [
            "Learn a simple scenario-planning tool",
            "Build 2–3 plausible scenarios for a real challenge",
            "Identify early-warning signals to watch for",
          ],
          duration: "90–120 min",
        },
        {
          id: "M3",
          title: "Making Adaptive Decisions Under Uncertainty",
          objectives: [
            "Learn principles for deciding with incomplete information",
            "Practice making a 'good enough for now' decision",
            "Build in checkpoints to revisit decisions",
          ],
          duration: "90 min",
        },
        {
          id: "M4",
          title: "Steadying & Focusing Your Team",
          objectives: [
            "Learn communication approaches that reduce team anxiety",
            "Practice giving a steadying message under uncertainty",
            "Plan how to keep a team focused on what's controllable",
          ],
          duration: "90 min",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Making Sense of Ambiguous, Fast-Changing Situations", format: "Video + Worksheet", time: "~7 min" },
        { title: "Basic Scenario Thinking", format: "Video + Worksheet", time: "~7 min" },
        { title: "Making Adaptive Decisions Under Uncertainty", format: "Video + Worksheet", time: "~7 min" },
        { title: "Steadying & Focusing Your Team", format: "Video + Worksheet", time: "~7 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 6, inPerson: 2100, virtual: 1785, additionalParticipant: 168 },
    credential: "Certificate of Participation",
  },
  {
    code: "LD-02",
    slug: "ld-02",
    name: "Strategic Thinking & Human-Centered Decision Making",
    description:
      "Connects big-picture strategy to day-to-day choices, assessing the human impact of decisions using both analytical tools and HOC insights.",
    audience: "Senior and middle managers, heads of department, school leadership teams.",
    live: {
      duration: "2 days or 5 shorter virtual sessions",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Connect big-picture strategy to day-to-day choices",
        "Assess the human impact of decisions",
        "Use both analytical tools and Human Operating Code insights (values, emotions, narratives) to make better, more sustainable decisions",
      ],
      modules: [
        {
          id: "M1",
          title: "Connecting Strategy to Day-to-Day Choices",
          objectives: [
            "Trace how daily decisions ladder up to strategic priorities",
            "Identify misalignments between strategy and everyday choices",
            "Practice reframing a routine decision strategically",
          ],
          duration: "90 min",
        },
        {
          id: "M2",
          title: "Assessing the Human Impact of Decisions",
          objectives: [
            "Learn a simple human-impact assessment tool",
            "Apply it to a real upcoming decision",
            "Identify who is affected and how",
          ],
          duration: "90 min",
        },
        {
          id: "M3",
          title: "Blending Analytical Tools with HOC Insight",
          objectives: [
            "Combine data-driven analysis with beliefs/emotions/narrative awareness",
            "Practice a blended decision-making exercise",
            "Recognize when each lens is most useful",
          ],
          duration: "120 min",
        },
        {
          id: "M4",
          title: "Making More Sustainable Decisions",
          objectives: [
            "Apply the full framework to a live strategic decision",
            "Plan how to communicate the decision to stakeholders",
            "Identify a review point to check outcomes",
          ],
          duration: "90–120 min",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Connecting Strategy to Day-to-Day Choices", format: "Video + Worksheet", time: "~7 min" },
        { title: "Assessing the Human Impact of Decisions", format: "Video + Worksheet", time: "~7 min" },
        { title: "Blending Analytical Tools with HOC Insight", format: "Video + Worksheet", time: "~7 min" },
        { title: "Making More Sustainable Decisions", format: "Video + Worksheet", time: "~7 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 12, inPerson: 4200, virtual: 3570, additionalParticipant: 336 },
    credential: "Certificate of Participation",
  },
  {
    code: "LD-03",
    slug: "ld-03",
    name: "Difficult Conversations & Courageous Dialogue",
    description:
      "Prepares leaders to conduct tough conversations about performance, behavior, ethics, conflict, and change with greater clarity, empathy, and courage.",
    audience: "All people managers, principals, HRBPs, team leaders.",
    live: {
      duration: "1–2 days or 3–4 virtual sessions with practice labs",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Prepare for and conduct tough conversations about performance, behavior, ethics, conflict, and change with greater clarity, empathy, and courage",
        "Set boundaries",
        "Create more psychological safety",
      ],
      modules: [
        {
          id: "M1",
          title: "Preparing for Tough Conversations",
          objectives: [
            "Learn a simple preparation framework",
            "Clarify the real issue and desired outcome before a conversation",
            "Anticipate likely reactions",
          ],
          duration: "90 min",
        },
        {
          id: "M2",
          title: "Conducting Conversations with Clarity, Empathy & Courage",
          objectives: [
            "Practice holding a hard conversation using the framework",
            "Balance directness with empathy",
            "Stay grounded when the conversation gets uncomfortable",
          ],
          duration: "120 min (practice lab)",
        },
        {
          id: "M3",
          title: "Setting Boundaries",
          objectives: [
            "Practice stating a boundary clearly and respectfully",
            "Handle pushback on a boundary",
            "Distinguish firm boundaries from rigidity",
          ],
          duration: "90 min",
        },
        {
          id: "M4",
          title: "Creating Psychological Safety",
          objectives: [
            "Understand what builds or erodes psychological safety",
            "Practice responses that keep dialogue open, even in disagreement",
            "Plan how to model safety as a leader",
          ],
          duration: "90 min",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Preparing for Tough Conversations", format: "Video + Worksheet", time: "~6 min" },
        { title: "Conducting Conversations with Clarity, Empathy & Courage", format: "Video + Worksheet", time: "~7 min" },
        { title: "Setting Boundaries", format: "Video + Worksheet", time: "~6 min" },
        { title: "Creating Psychological Safety", format: "Video + Worksheet", time: "~6 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 9, inPerson: 3150, virtual: 2678, additionalParticipant: 252 },
    credential: "Certificate of Participation",
  },
  {
    code: "LD-04",
    slug: "ld-04",
    name: "Leading Hybrid & Distributed Teams",
    description:
      "Designs communication rhythms, expectations, and ways of working that build trust, accountability, and engagement in hybrid/remote teams.",
    audience: "Managers of hybrid/remote teams, project leaders, HR, multi-campus school networks.",
    live: {
      duration: "1 day or 3 virtual sessions",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Design communication rhythms, expectations, and ways of working that build trust, accountability, and engagement in hybrid/remote teams",
        "Support wellbeing",
        "Maintain performance across locations",
      ],
      modules: [
        {
          id: "M1",
          title: "Designing Communication Rhythms for Hybrid Teams",
          objectives: [
            "Audit current communication rhythms for gaps",
            "Design a simple cadence of check-ins and updates",
            "Balance synchronous and asynchronous communication",
          ],
          duration: "90 min",
        },
        {
          id: "M2",
          title: "Building Trust, Accountability & Engagement Remotely",
          objectives: [
            "Identify what builds trust when people aren't co-located",
            "Design accountability practices that don't feel like surveillance",
            "Plan engagement practices for distributed team members",
          ],
          duration: "90–120 min",
        },
        {
          id: "M3",
          title: "Supporting Wellbeing & Performance Across Locations",
          objectives: [
            "Recognize wellbeing risks specific to hybrid/remote work",
            "Design practices that support wellbeing without adding burden",
            "Plan how to maintain fair performance standards across locations",
          ],
          duration: "90 min",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Designing Communication Rhythms for Hybrid Teams", format: "Video + Worksheet", time: "~7 min" },
        { title: "Building Trust, Accountability & Engagement Remotely", format: "Video + Worksheet", time: "~7 min" },
        { title: "Supporting Wellbeing & Performance Across Locations", format: "Video + Worksheet", time: "~7 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 6, inPerson: 2100, virtual: 1785, additionalParticipant: 168 },
    credential: "Certificate of Participation",
  },
  {
    code: "LD-05",
    slug: "ld-05",
    name: "Inclusive & Bias-Aware Leadership",
    description:
      "Equips leaders to recognize conscious and unconscious bias, practice inclusive behaviors, and identify small system changes that improve fairness, belonging, and voice.",
    audience: "Senior and middle leaders, HR/People teams, school leadership teams, boards.",
    live: {
      duration: "1–2 days or 4–5 virtual sessions",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Recognize conscious and unconscious bias in themselves and their systems",
        "Practice inclusive leadership behaviors",
        "Identify small system changes that improve fairness, belonging, and voice",
      ],
      modules: [
        {
          id: "M1",
          title: "Recognizing Conscious & Unconscious Bias",
          objectives: [
            "Understand how unconscious bias shapes everyday decisions",
            "Identify personal bias patterns through guided reflection",
            "Recognize bias in common workplace processes",
          ],
          duration: "90 min",
        },
        {
          id: "M2",
          title: "Practicing Inclusive Leadership Behaviors",
          objectives: [
            "Learn specific inclusive-leadership behaviors",
            "Practice inviting and valuing diverse voices in a meeting",
            "Recognize and interrupt exclusionary patterns",
          ],
          duration: "90–120 min",
        },
        {
          id: "M3",
          title: "Designing Small System Changes for Fairness & Belonging",
          objectives: [
            "Audit a real process (hiring, meetings, assignments) for bias risk",
            "Identify 2–3 small, practical changes",
            "Plan how to test and introduce a change",
          ],
          duration: "90 min",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Recognizing Conscious & Unconscious Bias", format: "Video + Worksheet", time: "~7 min" },
        { title: "Practicing Inclusive Leadership Behaviors", format: "Video + Worksheet", time: "~7 min" },
        { title: "Designing Small System Changes for Fairness & Belonging", format: "Video + Worksheet", time: "~7 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 9, inPerson: 3150, virtual: 2678, additionalParticipant: 252 },
    credential: "Certificate of Participation",
  },
  {
    code: "LD-06",
    slug: "ld-06",
    name: "Leading High-Trust, High-Accountability Teams",
    description:
      "Strengthens trust and accountability by clarifying agreements, roles, and expectations — resetting the team's operating system where needed.",
    audience: "Team leaders, heads of department, project leads, school management teams.",
    live: {
      duration: "2 days or 5 virtual sessions plus team assignments",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Strengthen trust and accountability in teams by clarifying agreements, roles, and expectations",
        "Use feedback and boundaries well",
        "Reset the team's \"operating system\" where needed",
      ],
      modules: [
        {
          id: "M1",
          title: "Clarifying Agreements, Roles & Expectations",
          objectives: [
            "Audit current team agreements for gaps or ambiguity",
            "Practice clarifying a role or expectation with the team",
            "Draft updated agreements for a real team",
          ],
          duration: "120 min",
        },
        {
          id: "M2",
          title: "Using Feedback & Boundaries Well",
          objectives: [
            "Practice giving accountability-focused feedback",
            "Set and hold boundaries within a team",
            "Balance support with high standards",
          ],
          duration: "90 min",
        },
        {
          id: "M3",
          title: "Resetting the Team's Operating System",
          objectives: [
            "Diagnose where trust or accountability has broken down",
            "Design a reset session for a real team",
            "Plan how to facilitate it",
          ],
          duration: "120 min",
        },
        {
          id: "M4",
          title: "Sustaining Trust & Accountability Over Time",
          objectives: [
            "Design a simple routine to sustain the reset",
            "Plan the team assignment to apply learning",
            "Set a review point to check progress",
          ],
          duration: "90 min",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Clarifying Agreements, Roles & Expectations", format: "Video + Worksheet", time: "~7 min" },
        { title: "Using Feedback & Boundaries Well", format: "Video + Worksheet", time: "~7 min" },
        { title: "Resetting the Team's Operating System", format: "Video + Worksheet", time: "~7 min" },
        { title: "Sustaining Trust & Accountability Over Time", format: "Video + Worksheet", time: "~7 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 12, inPerson: 4200, virtual: 3570, additionalParticipant: 336 },
    credential: "Certificate of Participation",
  },
  {
    code: "LD-07",
    slug: "ld-07",
    name: "Emotionally Intelligent Leadership in Practice",
    description:
      "Applies emotional intelligence skills to real leadership situations — conflict, change, feedback, crisis, motivation — building trust and performance.",
    audience: "Emerging and mid-level leaders, new principals, high-potential talent.",
    live: {
      duration: "2 days or 6 short virtual sessions",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Apply emotional intelligence skills to real leadership situations (conflict, change, feedback, crisis, motivation)",
        "Read emotional cues more accurately",
        "Respond in ways that build trust and performance",
      ],
      modules: [
        {
          id: "M1",
          title: "Applying EQ in Conflict & Change",
          objectives: [
            "Apply core EQ tools to a real conflict scenario",
            "Practice staying regulated during change-related tension",
            "Recognize personal patterns under pressure",
          ],
          duration: "90–120 min",
        },
        {
          id: "M2",
          title: "Applying EQ in Feedback & Crisis",
          objectives: [
            "Apply EQ to delivering feedback under pressure",
            "Practice leading with composure during a crisis moment",
            "Recognize the emotional needs of the team in a crisis",
          ],
          duration: "90–120 min",
        },
        {
          id: "M3",
          title: "Reading Emotional Cues Accurately",
          objectives: [
            "Practice noticing verbal and non-verbal emotional cues",
            "Avoid common misreadings of emotion",
            "Check assumptions before responding",
          ],
          duration: "90 min",
        },
        {
          id: "M4",
          title: "Responding to Build Trust & Performance",
          objectives: [
            "Practice responses that build trust in the moment",
            "Connect emotional intelligence to performance outcomes",
            "Plan how to apply EQ in one real upcoming situation",
          ],
          duration: "90 min",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Applying EQ in Conflict & Change", format: "Video + Worksheet", time: "~7 min" },
        { title: "Applying EQ in Feedback & Crisis", format: "Video + Worksheet", time: "~7 min" },
        { title: "Reading Emotional Cues Accurately", format: "Video + Worksheet", time: "~7 min" },
        { title: "Responding to Build Trust & Performance", format: "Video + Worksheet", time: "~7 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 12, inPerson: 4200, virtual: 3570, additionalParticipant: 336 },
    credential: "Certificate of Participation",
  },
  {
    code: "LD-08",
    slug: "ld-08",
    name: "Leading Change Without Formal Authority",
    description:
      "Teaches leaders to lead change sideways and upwards by mapping stakeholders, building coalitions, and using influence and storytelling.",
    audience: "Project leads, internal change agents, senior teachers, HRBPs, NGO coordinators.",
    live: {
      duration: "1–2 days or 4 virtual sessions",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Lead change sideways and upwards by mapping stakeholders, building coalitions, using influence and storytelling",
        "Apply Human Operating Code insights to understand resistance and motivate buy-in",
      ],
      modules: [
        {
          id: "M1",
          title: "Mapping Stakeholders",
          objectives: [
            "Learn a simple stakeholder-mapping tool",
            "Apply it to a real change initiative",
            "Identify key influencers and blockers",
          ],
          duration: "90 min",
        },
        {
          id: "M2",
          title: "Building Coalitions",
          objectives: [
            "Identify potential allies and early supporters",
            "Practice a coalition-building conversation",
            "Plan how to sequence outreach",
          ],
          duration: "90 min",
        },
        {
          id: "M3",
          title: "Using Influence & Storytelling",
          objectives: [
            "Learn simple influence principles for leading without authority",
            "Craft a short story that makes the case for change",
            "Practice delivering the story",
          ],
          duration: "90–120 min",
        },
        {
          id: "M4",
          title: "Understanding Resistance & Motivating Buy-In",
          objectives: [
            "Apply HOC insight to understand the beliefs behind resistance",
            "Practice responding to resistance without defensiveness",
            "Plan next steps to build buy-in for a real change",
          ],
          duration: "90 min",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Mapping Stakeholders", format: "Video + Worksheet", time: "~6 min" },
        { title: "Building Coalitions", format: "Video + Worksheet", time: "~6 min" },
        { title: "Using Influence & Storytelling", format: "Video + Worksheet", time: "~7 min" },
        { title: "Understanding Resistance & Motivating Buy-In", format: "Video + Worksheet", time: "~6 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 9, inPerson: 3150, virtual: 2678, additionalParticipant: 252 },
    credential: "Certificate of Participation",
  },
  {
    code: "LD-09",
    slug: "ld-09",
    name: "Purpose-Driven & Values-Anchored Leadership",
    description:
      "Helps leaders clarify personal and organizational purpose and values — and use them to guide decisions, priorities, and behavior under pressure.",
    audience: "Senior leaders, school owners, NGO and faith-based leaders, social impact founders.",
    live: {
      duration: "1.5–2 days or 4–5 virtual sessions",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Clarify personal and organizational purpose and values",
        "Use them to guide decisions, priorities, and behaviors",
        "Stay anchored under pressure and complexity",
      ],
      modules: [
        {
          id: "M1",
          title: "Clarifying Personal & Organizational Purpose & Values",
          objectives: [
            "Articulate personal purpose and core values",
            "Compare personal values against organizational values",
            "Identify areas of alignment and tension",
          ],
          duration: "90–120 min",
        },
        {
          id: "M2",
          title: "Using Values to Guide Decisions & Priorities",
          objectives: [
            "Apply a values-based lens to a real decision or priority",
            "Practice resolving a priority conflict using values",
            "Communicate a values-based rationale clearly",
          ],
          duration: "90 min",
        },
        {
          id: "M3",
          title: "Staying Anchored Under Pressure & Complexity",
          objectives: [
            "Recognize when pressure pulls leaders away from their values",
            "Practice a technique to re-anchor in the moment",
            "Build a personal plan to stay values-anchored",
          ],
          duration: "90 min",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Clarifying Personal & Organizational Purpose & Values", format: "Video + Worksheet", time: "~7 min" },
        { title: "Using Values to Guide Decisions & Priorities", format: "Video + Worksheet", time: "~7 min" },
        { title: "Staying Anchored Under Pressure & Complexity", format: "Video + Worksheet", time: "~7 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 9, inPerson: 3150, virtual: 2678, additionalParticipant: 252 },
    credential: "Certificate of Participation",
  },
  {
    code: "LD-10",
    slug: "ld-10",
    name: "Time, Energy & Focus Management for Leaders",
    description:
      "Designs more sustainable ways of working — managing energy, attention, and boundaries to reduce burnout risk while maintaining performance.",
    audience: "All leaders and managers, especially in high-demand roles.",
    live: {
      duration: "1 day or 3 virtual sessions",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Design more sustainable ways of working by managing energy, attention, and boundaries",
        "Prioritise high-impact work",
        "Reduce burnout risk while maintaining performance",
      ],
      modules: [
        {
          id: "M1",
          title: "Managing Energy, Attention & Boundaries",
          objectives: [
            "Distinguish time management from energy management",
            "Identify personal energy patterns across a typical day/week",
            "Set 1–2 boundaries to protect energy",
          ],
          duration: "90 min",
        },
        {
          id: "M2",
          title: "Prioritizing High-Impact Work",
          objectives: [
            "Apply a simple prioritization tool to a leader's workload",
            "Identify what to delegate, defer, or drop",
            "Protect time for genuinely high-impact work",
          ],
          duration: "90 min",
        },
        {
          id: "M3",
          title: "Reducing Burnout Risk While Maintaining Performance",
          objectives: [
            "Recognize personal and team burnout warning signs",
            "Identify sustainable practices that don't sacrifice performance",
            "Build a personal sustainability plan",
          ],
          duration: "90 min",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Managing Energy, Attention & Boundaries", format: "Video + Worksheet", time: "~6 min" },
        { title: "Prioritizing High-Impact Work", format: "Video + Worksheet", time: "~6 min" },
        { title: "Reducing Burnout Risk While Maintaining Performance", format: "Video + Worksheet", time: "~6 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 6, inPerson: 2100, virtual: 1785, additionalParticipant: 168 },
    credential: "Certificate of Participation",
  },
  {
    code: "LD-11",
    slug: "ld-11",
    name: "Cross-Cultural & Global Leadership",
    description:
      "Builds understanding of key cultural lenses and communication styles — anticipating friction and building trust across differences.",
    audience: "Leaders in regional/global roles, international school leaders, NGO/program leaders working across countries.",
    live: {
      duration: "2 days or 5–6 virtual sessions",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Understand key cultural lenses and communication styles",
        "Anticipate cross-cultural friction",
        "Build trust across differences",
        "Lead inclusive, globally aware teams and initiatives",
      ],
      modules: [
        {
          id: "M1",
          title: "Key Cultural Lenses & Communication Styles",
          objectives: [
            "Learn frameworks for understanding cultural difference",
            "Identify personal cultural lens and blind spots",
            "Recognize different communication style preferences",
          ],
          duration: "120 min",
        },
        {
          id: "M2",
          title: "Anticipating Cross-Cultural Friction",
          objectives: [
            "Identify common sources of cross-cultural misunderstanding",
            "Practice spotting friction points in a real scenario",
            "Plan how to address friction proactively",
          ],
          duration: "90 min",
        },
        {
          id: "M3",
          title: "Building Trust Across Differences",
          objectives: [
            "Practice trust-building behaviors across cultural difference",
            "Adapt communication style to different audiences",
            "Recognize and repair cross-cultural missteps",
          ],
          duration: "90–120 min",
        },
        {
          id: "M4",
          title: "Leading Inclusive, Globally Aware Teams",
          objectives: [
            "Design practices that include diverse cultural perspectives",
            "Plan for time zones, holidays, and communication norms across regions",
            "Draft one concrete change for a real global team",
          ],
          duration: "90 min",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Key Cultural Lenses & Communication Styles", format: "Video + Worksheet", time: "~7 min" },
        { title: "Anticipating Cross-Cultural Friction", format: "Video + Worksheet", time: "~7 min" },
        { title: "Building Trust Across Differences", format: "Video + Worksheet", time: "~7 min" },
        { title: "Leading Inclusive, Globally Aware Teams", format: "Video + Worksheet", time: "~7 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 12, inPerson: 4200, virtual: 3570, additionalParticipant: 336 },
    credential: "Certificate of Participation",
  },
  {
    code: "LD-12",
    slug: "ld-12",
    name: "Leadership Communication & Storytelling",
    description:
      "Teaches leaders to craft clear, compelling messages and narratives that align with the Human Operating Code — so people understand, care, and act.",
    audience: "All leaders who present, brief, or lead change; internal champions and spokespersons.",
    live: {
      duration: "1–2 days or 4 virtual sessions plus practice",
      format:
        "In-person workshop or virtual sessions (see duration options above); stand-alone or combinable with other programs in this series",
      outcomes: [
        "Craft clear, compelling messages and narratives",
        "Align communication with the Human Operating Code so people understand, care, and act",
        "Communicate more effectively in change and everyday leadership",
      ],
      modules: [
        {
          id: "M1",
          title: "Crafting Clear, Compelling Messages",
          objectives: [
            "Learn a simple structure for clear messaging",
            "Practice cutting a message down to its core point",
            "Avoid jargon and buried leads",
          ],
          duration: "90 min",
        },
        {
          id: "M2",
          title: "Aligning Communication with the Human Operating Code",
          objectives: [
            "Connect messages to underlying beliefs, values, and stories",
            "Practice framing a message to resonate emotionally, not just logically",
            "Test a message against the HOC framework",
          ],
          duration: "90–120 min",
        },
        {
          id: "M3",
          title: "Communicating Through Change",
          objectives: [
            "Practice delivering a change-related message",
            "Handle tough questions during a briefing",
            "Adapt tone for different audiences during change",
          ],
          duration: "90 min",
        },
        {
          id: "M4",
          title: "Practicing Everyday Leadership Communication",
          objectives: [
            "Apply storytelling techniques to a real upcoming communication",
            "Deliver a short story or message for peer feedback",
            "Build a personal communication practice plan",
          ],
          duration: "90–120 min (practice session)",
        },
      ],
    },
    selfPaced: {
      lessons: [
        { title: "Crafting Clear, Compelling Messages", format: "Video + Worksheet", time: "~6 min" },
        { title: "Aligning Communication with the Human Operating Code", format: "Video + Worksheet", time: "~7 min" },
        { title: "Communicating Through Change", format: "Video + Worksheet", time: "~6 min" },
        { title: "Practicing Everyday Leadership Communication", format: "Video + Worksheet", time: "~6 min" },
      ],
      price: null, // TODO_CLIENT: self-paced price not provided yet
    },
    cohort: { contactHours: 9, inPerson: 3150, virtual: 2678, additionalParticipant: 252 },
    credential: "Certificate of Participation",
  },
];

export const getLeadershipProgram = (slug: string) =>
  leadershipPrograms.find((p) => p.slug === slug);
