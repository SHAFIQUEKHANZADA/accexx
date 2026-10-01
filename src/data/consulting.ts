/**
 * Consulting engagements: 24 in 3 groups (HR-01…06, CS-01…05, EDU-01…13).
 *
 * Generated from reference/text/Accexx_Consulting_LMS_Entries - web.txt (wording copied exactly)
 * with fees from reference/text/UPDATED Curriculum_Library_Pricing_Master_CFO_Copy (2).txt.
 * Consulting is a client engagement, not a course: no modules, contact hours or CEUs.
 */

export type ConsultingPhase = { phase: string; timing: string; whatHappens: string };

export type ConsultingEngagement = {
  code: string;
  slug: string;
  name: string;
  description: string;
  whoFor: string;
  duration: string;
  objectives: string[];
  process: ConsultingPhase[];
  tools: string[];
  deliverables: string[];
  qualifications: string[];
  successMeasures: string[];
  /** From the Pricing Master ("CFO Copy"). Only rendered when `showConsultingFees` is true. */
  pricing: { typicalDuration: string; estimatedDays: string; fee: string };
};

export type ConsultingGroup = {
  id: "hr" | "culture" | "education";
  title: string;
  intro: string;
  engagements: ConsultingEngagement[];
};

/**
 * The price sheet is labelled "CFO Copy" and Dr. A has not confirmed which prices are public
 * (TODO_CLIENT.md). While false, pages show duration + "Request a proposal" instead of fees.
 */
export const showConsultingFees = false;

/** Standard day rate from the Pricing Master. */
export const consultingDayRate = "$2,800/day";

export const consultingFraming =
  "Consulting is a client engagement, not a course — there are no fixed modules, contact hours, or CEUs. Every engagement is scoped to your organization.";

export const notGradedNote =
  "This engagement is not graded — success is defined by client adoption of the findings, not an external standard.";

export const notGradedIntro =
  "None of these engagements are graded. Progress is reviewed against client-defined outcomes — validated findings, adopted roadmaps, implemented changes — never an external pass/fail standard.";

export const consultingGroups: ConsultingGroup[] = [
  {
    "id": "hr",
    "title": "HR & People Systems",
    "intro": "Engagements that redesign the people-facing systems — hiring, onboarding, performance, recognition — that shape everyday culture.",
    "engagements": [
      {
        "code": "HR-01",
        "slug": "hr-01-hr-systems-audit-redesign",
        "name": "HR Systems Audit & Redesign",
        "description": "Audits key people processes (hiring, onboarding, performance, recognition) for alignment with desired culture. Delivers a prioritized redesign roadmap.",
        "whoFor": "HR leaders, People & Culture teams, organizations in growth or transformation.",
        "duration": "Project-based, scoped to organization size — typically 6–10 weeks for a mid-sized organization.",
        "objectives": [
          "Audit key people processes for cultural alignment",
          "Prioritize which processes need redesign first",
          "Deliver a phased redesign roadmap"
        ],
        "process": [
          {
            "phase": "Discovery & Diagnosis",
            "timing": "Weeks 1–3",
            "whatHappens": "Stakeholder interviews, process mapping, and review of existing hiring, onboarding, performance, and recognition systems against the organization's stated culture."
          },
          {
            "phase": "Design",
            "timing": "Weeks 4–6",
            "whatHappens": "Co-design of redesigned process elements with the client's HR team, prioritized by impact and feasibility."
          },
          {
            "phase": "Delivery & Handoff",
            "timing": "Weeks 7–8+",
            "whatHappens": "Presentation of the prioritized redesign roadmap, brief training for the HR team on implementation, and a scheduled 60-day follow-up review."
          }
        ],
        "tools": [
          "Process-touchpoint mapping template",
          "Cultural-alignment audit checklist (adapted from HCHR-D)",
          "Impact/feasibility prioritization matrix"
        ],
        "deliverables": [
          "Current-state audit report",
          "Prioritized redesign roadmap",
          "Implementation toolkit for top-priority processes"
        ],
        "qualifications": [
          "Holds Accexx Insight's HCHR-D certification, or equivalent HR systems design experience (5+ years)",
          "Experience conducting organizational audits"
        ],
        "successMeasures": [
          "Client validates the audit findings as accurate",
          "Redesign roadmap adopted into HR's actual work plan",
          "A 60-day check-in confirms real implementation progress"
        ],
        "pricing": {
          "typicalDuration": "6–10 weeks",
          "estimatedDays": "10–15 days",
          "fee": "$28,000 – $42,000"
        }
      },
      {
        "code": "HR-02",
        "slug": "hr-02-performance-management-transformation",
        "name": "Performance Management Transformation",
        "description": "Shifts performance management from fear-based appraisal to growth-centered conversations. Redesigns the system and trains managers to use it.",
        "whoFor": "Organizations seeking to overhaul performance culture.",
        "duration": "Project-based, typically 8–16 weeks.",
        "objectives": [
          "Diagnose the current performance-management approach for its fear/growth balance",
          "Redesign the system toward growth-centered conversations",
          "Train managers to use the redesigned system"
        ],
        "process": [
          {
            "phase": "Discovery & Diagnosis",
            "timing": "Weeks 1–3",
            "whatHappens": "Interviews or surveys on the current appraisal experience, and review of the existing system's structure and documentation."
          },
          {
            "phase": "Design & Pilot",
            "timing": "Weeks 4–8",
            "whatHappens": "Co-design of the redesigned performance-conversation structure and documentation, piloted with a small group of managers."
          },
          {
            "phase": "Manager Training & Rollout",
            "timing": "Weeks 9–14",
            "whatHappens": "Training managers on the redesigned approach (drawing on the HOC-LP performance & feedback module), with support through the first full cycle."
          },
          {
            "phase": "Handoff & Review",
            "timing": "Weeks 15–16",
            "whatHappens": "Review of pilot-cycle results, final adjustments, and handoff to HR for ongoing ownership."
          }
        ],
        "tools": [
          "Growth-centered performance system rubric (adapted from HCHR-D)",
          "Manager training materials (adapted from the HOC-LP performance & feedback module)"
        ],
        "deliverables": [
          "Redesigned performance system documentation",
          "Manager training materials",
          "Pilot-cycle review report"
        ],
        "qualifications": [
          "Holds HCHR-D certification or equivalent, plus experience training managers in performance conversations",
          "Ideally co-delivered with a HOC-LP certified facilitator for the training component"
        ],
        "successMeasures": [
          "Manager confidence self-assessment before and after training",
          "Qualitative feedback from the pilot cycle",
          "Client's decision to continue the redesigned system after the pilot"
        ],
        "pricing": {
          "typicalDuration": "8–16 weeks",
          "estimatedDays": "15–24 days",
          "fee": "$42,000 – $67,200"
        }
      },
      {
        "code": "HR-03",
        "slug": "hr-03-from-hr-administrator-to-people-culture-leader",
        "name": "From HR Administrator to People & Culture Leader",
        "description": "Equips HR teams to distinguish between traditional HR and strategic People & Culture roles — mapping how policies and practices affect beliefs, emotions, and behavior.",
        "whoFor": "HR officers, HR generalists, HR managers, People & Culture teams.",
        "duration": "1 day (6 hours).",
        "objectives": [
          "Distinguish traditional HR administration from strategic People & Culture work",
          "Map how policies and practices affect beliefs, emotions, and behavior",
          "Identify one concrete area to shift toward strategic partnership"
        ],
        "process": [
          {
            "phase": "Pre-Engagement Prep",
            "timing": "Before session",
            "whatHappens": "A brief client survey on current perceptions of the HR role, used to tailor the session's examples."
          },
          {
            "phase": "Session Day",
            "timing": "6 hours",
            "whatHappens": "Framing (Administrator vs. Strategic Partner) → Mapping Policy Impact on Beliefs & Behavior → Small-Group Case Work on Real Policies → Personal Shift Planning."
          },
          {
            "phase": "Follow-Up Support",
            "timing": "2–4 weeks after",
            "whatHappens": "An optional 30-minute check-in call to discuss progress on each participant's committed shift."
          }
        ],
        "tools": [
          "Administrator-vs-strategic-partner framework",
          "Policy-impact mapping template"
        ],
        "deliverables": [
          "Session workbook",
          "A personal shift plan per participant",
          "A summary-themes report for HR leadership"
        ],
        "qualifications": [
          "Holds Accexx Insight's HOC Facilitator Certification or equivalent HR/OD consulting experience (3+ years)"
        ],
        "successMeasures": [
          "Participant self-assessed shift in role perception",
          "One committed action per participant, tracked at the follow-up call"
        ],
        "pricing": {
          "typicalDuration": "1 day",
          "estimatedDays": "1 day",
          "fee": "$2,800"
        }
      },
      {
        "code": "HR-04",
        "slug": "hr-04-onboarding-as-operating-system-installation",
        "name": "Onboarding as Operating System Installation",
        "description": "Designs onboarding experiences that clearly communicate \"how we think and behave here\" — building a 30–60–90 day journey that supports mindset and habit formation.",
        "whoFor": "HR/People & Culture teams, talent managers, line managers.",
        "duration": "1 day (6 hours) + design support.",
        "objectives": [
          "Reframe onboarding as culture installation, not just paperwork",
          "Design a 30–60–90 day onboarding journey",
          "Identify specific culture-teaching moments to embed"
        ],
        "process": [
          {
            "phase": "Session Day",
            "timing": "6 hours",
            "whatHappens": "Why Onboarding Is Culture Installation → Auditing Current Onboarding → Designing the 30–60–90 Journey → Finalizing & Assigning Owners."
          },
          {
            "phase": "Design Support",
            "timing": "2–4 weeks after",
            "whatHappens": "The consultant reviews draft onboarding materials and provides written feedback before rollout."
          }
        ],
        "tools": [
          "Onboarding journey-mapping template (adapted from HCHR-D)",
          "30-60-90 day journey template"
        ],
        "deliverables": [
          "Redesigned onboarding journey document",
          "Culture-teaching-moment checklist",
          "Written feedback on the first draft of onboarding materials"
        ],
        "qualifications": [
          "Holds HCHR-D certification or equivalent"
        ],
        "successMeasures": [
          "Client implements the redesigned journey with the next new-hire cohort",
          "Informal new-hire feedback gathered post-implementation"
        ],
        "pricing": {
          "typicalDuration": "1 day + design support",
          "estimatedDays": "1.5 days",
          "fee": "$4,200"
        }
      },
      {
        "code": "HR-05",
        "slug": "hr-05-recruitment-selection-for-culture-fit",
        "name": "Recruitment & Selection for Culture Fit",
        "description": "Defines behavioral and cultural \"must-haves\" for key roles. Designs interview questions that surface beliefs, narratives, and default behaviors — reducing costly mis-hires.",
        "whoFor": "HR recruiters, HR generalists, hiring managers, People & Culture teams.",
        "duration": "1 day (6 hours).",
        "objectives": [
          "Define behavioral and cultural must-haves for key roles",
          "Design interview questions that surface beliefs, narratives, and default behaviors",
          "Reduce the risk of costly mis-hires"
        ],
        "process": [
          {
            "phase": "Session Day",
            "timing": "6 hours",
            "whatHappens": "Defining Culture Must-Haves for Key Roles → Designing Belief-Surfacing Interview Questions → Practice Interviewing with New Questions → Finalizing Interview Guides."
          }
        ],
        "tools": [
          "Culture must-haves definition template",
          "Belief-surfacing interview question bank"
        ],
        "deliverables": [
          "Role-specific interview guides",
          "A culture must-haves reference document"
        ],
        "qualifications": [
          "Holds Accexx Insight's HOC Facilitator Certification or equivalent HR consulting experience"
        ],
        "successMeasures": [
          "Hiring managers report increased confidence using the new questions",
          "Client-tracked mis-hire rate reviewed at a 6-month follow-up"
        ],
        "pricing": {
          "typicalDuration": "1 day",
          "estimatedDays": "1 day",
          "fee": "$2,800"
        }
      },
      {
        "code": "HR-06",
        "slug": "hr-06-employee-relations-with-emotional-intelligence",
        "name": "Employee Relations with Emotional Intelligence",
        "description": "Equips HRBPs and managers to use EQ skills in employee relations — listening, empathy, reframing — handling difficult conversations with professionalism and humanity.",
        "whoFor": "HR business partners, employee relations specialists, HR managers, line managers.",
        "duration": "1 day (6 hours).",
        "objectives": [
          "Apply EQ skills to employee relations conversations",
          "Handle difficult conversations professionally and humanely",
          "Build a personal toolkit for common employee relations scenarios"
        ],
        "process": [
          {
            "phase": "Session Day",
            "timing": "6 hours",
            "whatHappens": "EQ Foundations for Employee Relations → Listening & Empathy Practice → Reframing in Difficult ER Conversations → Case Practice on Real (Anonymized) Scenarios."
          }
        ],
        "tools": [
          "EQ tools reference card (adapted from the HOC Short Courses)",
          "Employee relations case-scenario bank"
        ],
        "deliverables": [
          "A personal employee relations conversation toolkit",
          "Case-practice debrief notes"
        ],
        "qualifications": [
          "Holds Accexx Insight's HOC Facilitator Certification or equivalent HR/employee relations experience"
        ],
        "successMeasures": [
          "Participant confidence self-assessment before and after the session",
          "An optional 60-day follow-up on applying the toolkit to a real case"
        ],
        "pricing": {
          "typicalDuration": "1 day",
          "estimatedDays": "1 day",
          "fee": "$2,800"
        }
      }
    ]
  },
  {
    "id": "culture",
    "title": "Organizational Culture & Strategy",
    "intro": "Engagements that work at the executive and organizational level — diagnosing culture, aligning leadership, and leading change.",
    "engagements": [
      {
        "code": "CS-01",
        "slug": "cs-01-culture-diagnostic-blueprint",
        "name": "Culture Diagnostic & Blueprint",
        "description": "A structured process to surface \"how things really work around here,\" define the culture you need, and build a practical implementation roadmap.",
        "whoFor": "CEOs, founders, executive teams, boards.",
        "duration": "1–2 days (6–12 hours): diagnostic plus blueprint design.",
        "objectives": [
          "Surface how things really work — the organization's lived culture",
          "Define the target culture as a concrete Culture Blueprint",
          "Build a practical implementation roadmap"
        ],
        "process": [
          {
            "phase": "Diagnostic",
            "timing": "Day 1 (6 hours)",
            "whatHappens": "Stakeholder interviews, artifact review, and a facilitated culture-mapping workshop with the executive team."
          },
          {
            "phase": "Blueprint Design",
            "timing": "Day 2 (6 hours)",
            "whatHappens": "Values-to-behaviors translation, a systems-alignment check, and drafting of the Implementation Roadmap."
          }
        ],
        "tools": [
          "Rewarded/tolerated/punished framework (adapted from CCAL)",
          "Culture Blueprint template"
        ],
        "deliverables": [
          "A culture diagnostic report",
          "A completed Culture Blueprint document",
          "An Implementation Roadmap with named owners"
        ],
        "qualifications": [
          "Holds CCAL certification or equivalent senior culture-consulting experience (5+ years)"
        ],
        "successMeasures": [
          "The executive team validates the diagnostic findings as accurate",
          "The roadmap is adopted with named owners assigned",
          "A 90-day review is scheduled to check progress"
        ],
        "pricing": {
          "typicalDuration": "1–2 days",
          "estimatedDays": "2 days",
          "fee": "$5,600"
        }
      },
      {
        "code": "CS-02",
        "slug": "cs-02-leadership-alignment-strategy-retreats",
        "name": "Leadership Alignment & Strategy Retreats",
        "description": "Facilitated working sessions for executive teams to align on vision, priorities, and the leadership behaviors that will make or break execution.",
        "whoFor": "Executive teams, senior leadership, boards.",
        "duration": "1–2 days (retreat style).",
        "objectives": [
          "Align the executive team on vision and priorities",
          "Identify the leadership behaviors that will make or break execution",
          "Leave the retreat with a shared, owned action plan"
        ],
        "process": [
          {
            "phase": "Pre-Retreat Prep",
            "timing": "1–2 weeks before",
            "whatHappens": "Stakeholder interviews and pre-read materials sent to participants ahead of the retreat."
          },
          {
            "phase": "Retreat Day(s)",
            "timing": "1–2 days",
            "whatHappens": "Facilitated vision and priority-alignment sessions, followed by a leadership behavior-commitment workshop."
          },
          {
            "phase": "Post-Retreat Follow-Up",
            "timing": "2–4 weeks after",
            "whatHappens": "A written retreat summary is circulated, followed by a 30-day check-in on action-plan progress."
          }
        ],
        "tools": [
          "Strategic alignment facilitation guide",
          "Leadership behavior commitment template"
        ],
        "deliverables": [
          "A retreat summary document",
          "A shared action plan with named owners",
          "Documented leadership behavior commitments"
        ],
        "qualifications": [
          "Holds CCAL or Leadership Development Facilitator Certification, plus experience facilitating executive retreats"
        ],
        "successMeasures": [
          "Executive team consensus on priorities, checked informally at the retreat's close",
          "A 30-day follow-up on action-plan progress"
        ],
        "pricing": {
          "typicalDuration": "1–2 days + prep",
          "estimatedDays": "3 days",
          "fee": "$8,400"
        }
      },
      {
        "code": "CS-03",
        "slug": "cs-03-designing-and-shifting-organizational-culture",
        "name": "Designing and Shifting Organizational Culture",
        "description": "Diagnoses current culture using behavior and \"unspoken rules.\" Defines target culture in specific behaviors. Identifies HR levers (recruitment, onboarding, performance, rewards) to shift culture.",
        "whoFor": "HR and People & Culture leaders, OD professionals, culture leads, senior leadership teams.",
        "duration": "1–2 days (6–12 hours).",
        "objectives": [
          "Diagnose current culture through behavior and unspoken rules",
          "Define the target culture in specific, observable behaviors",
          "Identify HR levers to actually shift culture"
        ],
        "process": [
          {
            "phase": "Diagnosis",
            "timing": "Day 1",
            "whatHappens": "A behavior-based culture audit and mapping of the organization's unspoken rules."
          },
          {
            "phase": "Design",
            "timing": "Day 2",
            "whatHappens": "Definition of target behaviors and identification of HR levers — recruitment, onboarding, performance, rewards — to shift culture toward them."
          }
        ],
        "tools": [
          "Unspoken-rules mapping template",
          "HR-lever identification checklist"
        ],
        "deliverables": [
          "A current-culture diagnostic summary",
          "A target-behavior definition document",
          "An HR-lever action list"
        ],
        "qualifications": [
          "Holds CCAL or HCHR-D certification, or equivalent"
        ],
        "successMeasures": [
          "Client validates the target behaviors as genuinely aspirational yet achievable",
          "HR-lever actions are assigned to specific owners"
        ],
        "pricing": {
          "typicalDuration": "1–2 days",
          "estimatedDays": "2 days",
          "fee": "$5,600"
        }
      },
      {
        "code": "CS-04",
        "slug": "cs-04-hr-as-stewards-of-values-and-everyday-behavior",
        "name": "HR as Stewards of Values and Everyday Behavior",
        "description": "Translates abstract values into observable behaviors. Audits HR processes for values alignment. Creates routines (stories, recognition, rituals) that reinforce values daily.",
        "whoFor": "HR/People & Culture teams, values and culture committees, senior HR managers.",
        "duration": "1 day (6 hours).",
        "objectives": [
          "Translate abstract organizational values into observable behaviors",
          "Audit HR processes for values alignment",
          "Design routines that reinforce values daily"
        ],
        "process": [
          {
            "phase": "Session Day",
            "timing": "6 hours",
            "whatHappens": "Values-to-Behaviors Translation Workshop → HR Process Values-Alignment Audit → Designing Daily Reinforcement Routines."
          }
        ],
        "tools": [
          "Values-to-behaviors translation worksheet (adapted from CCAL)",
          "Values-alignment audit checklist"
        ],
        "deliverables": [
          "A values-to-behaviors reference document",
          "Values-alignment audit findings",
          "A daily reinforcement routine plan"
        ],
        "qualifications": [
          "Holds CCAL certification or equivalent"
        ],
        "successMeasures": [
          "The HR team implements at least one reinforcement routine within 30 days"
        ],
        "pricing": {
          "typicalDuration": "1 day",
          "estimatedDays": "1 day",
          "fee": "$2,800"
        }
      },
      {
        "code": "CS-05",
        "slug": "cs-05-change-leadership-support",
        "name": "Change Leadership Support",
        "description": "Partners with leaders navigating restructuring, growth, or crisis — managing the human side of change: resistance, communication, and adoption.",
        "whoFor": "Organizations in transition.",
        "duration": "Project-based, scoped to the change initiative.",
        "objectives": [
          "Navigate the human side of a real organizational change",
          "Manage resistance, communication, and adoption throughout",
          "Sustain the change after launch"
        ],
        "process": [
          {
            "phase": "Discovery",
            "timing": "Weeks 1–2",
            "whatHappens": "Stakeholder mapping and an assessment of likely resistance patterns for the specific change."
          },
          {
            "phase": "Design",
            "timing": "Weeks 3–4",
            "whatHappens": "Change journey design and a communication plan tailored to the affected groups."
          },
          {
            "phase": "Support Through Launch",
            "timing": "Weeks 5–X (scoped to the initiative)",
            "whatHappens": "Coaching leaders through the launch and troubleshooting resistance as it arises in real time."
          },
          {
            "phase": "Sustainability Handoff",
            "timing": "Final 2 weeks",
            "whatHappens": "Design of reinforcement routines and handoff of ongoing ownership to the client's internal team."
          }
        ],
        "tools": [
          "Change Impact Map (adapted from CHOC-F)",
          "Resistance-pattern case bank",
          "Change journey design canvas"
        ],
        "deliverables": [
          "A completed Change Impact Map",
          "A communication plan",
          "A sustainability handoff plan"
        ],
        "qualifications": [
          "Holds CHOC-F certification or equivalent change-management consulting experience"
        ],
        "successMeasures": [
          "Client-defined adoption metrics (e.g., usage rates, survey sentiment), reviewed at a post-launch checkpoint"
        ],
        "pricing": {
          "typicalDuration": "Project-based",
          "estimatedDays": "12–18 days",
          "fee": "$33,600 – $50,400"
        }
      }
    ]
  },
  {
    "id": "education",
    "title": "Education Institutions",
    "intro": "Engagements built specifically for K-12 and other education institutions — school brand, teaching quality, operations, and student experience.",
    "engagements": [
      {
        "code": "EDU-01",
        "slug": "edu-01-school-brand-reality-audit",
        "name": "School Brand & Reality Audit",
        "description": "A 360° diagnostic of how leadership, teaching, systems, and parent relationships shape the school's market position. Delivers an honest assessment and 3–5 priority actions.",
        "whoFor": "Private and public K-12 schools.",
        "duration": "3–4 hours (half-day) to multi-day, depending on scope.",
        "objectives": [
          "Assess how leadership, teaching quality, operations, and parent relationships actually shape the school's reputation",
          "Identify the gap between the school's stated brand and families' lived experience",
          "Deliver 3–5 honest, prioritized actions the school can realistically act on"
        ],
        "process": [
          {
            "phase": "Discovery",
            "timing": "Pre-engagement",
            "whatHappens": "Review of enrollment data, family feedback (surveys, complaints, exit interviews if available), and current marketing materials."
          },
          {
            "phase": "On-Site Diagnostic",
            "timing": "Half-day to 2 days",
            "whatHappens": "Stakeholder interviews (leadership, staff, and where possible, parents), classroom and front-office observation, and a facilitated leadership debrief."
          },
          {
            "phase": "Findings & Priorities",
            "timing": "Within 1–2 weeks",
            "whatHappens": "Delivery of the honest assessment and 3–5 prioritized actions, presented to school leadership."
          }
        ],
        "tools": [
          "Brand-reality gap interview guide",
          "Stakeholder observation checklist",
          "Priority-action scoring matrix"
        ],
        "deliverables": [
          "Brand & reality audit report",
          "3–5 prioritized action recommendations",
          "Leadership debrief session"
        ],
        "qualifications": [
          "Holds EL-HOS certification or equivalent school leadership consulting experience (5+ years)",
          "Experience conducting stakeholder interviews in a school setting"
        ],
        "successMeasures": [
          "School leadership validates the audit findings as accurate, including uncomfortable ones",
          "At least one priority action is adopted into the school's improvement plan",
          "A 90-day check-in confirms real movement on the top priority"
        ],
        "pricing": {
          "typicalDuration": "Half-day to multi-day, depending on scope",
          "estimatedDays": "0.5–2 days",
          "fee": "$1,400 – $5,600"
        }
      },
      {
        "code": "EDU-02",
        "slug": "edu-02-90-day-school-improvement-action-lab",
        "name": "90-Day School Improvement Action Lab",
        "description": "A structured facilitation process where the school team converts diagnostic insights into a focused, owned, measurable 90-day improvement plan — not a report that sits on a shelf.",
        "whoFor": "Private and public K-12 schools, vocational institutes, colleges/universities.",
        "duration": "1 day (6 hours) per lab.",
        "objectives": [
          "Convert existing diagnostic findings (from an audit or internal data) into a focused improvement plan",
          "Build genuine team ownership of the plan, not a leadership-imposed mandate",
          "Define measurable 90-day milestones with named owners"
        ],
        "process": [
          {
            "phase": "Pre-Work",
            "timing": "1 week before",
            "whatHappens": "Review of existing diagnostic findings or data the school brings into the lab."
          },
          {
            "phase": "The Lab",
            "timing": "1 day (6 hours)",
            "whatHappens": "Facilitated session where the school team prioritizes findings, assigns ownership, and builds the 90-day plan together."
          },
          {
            "phase": "Follow-Up Check-In",
            "timing": "Day 45",
            "whatHappens": "A single structured check-in call to review progress against milestones."
          }
        ],
        "tools": [
          "Findings-to-priorities prioritization matrix",
          "90-day milestone planning template",
          "Ownership and accountability grid"
        ],
        "deliverables": [
          "Completed 90-day improvement plan with named owners and milestones",
          "Facilitated lab session",
          "One 45-day follow-up check-in"
        ],
        "qualifications": [
          "Experience facilitating cross-functional planning sessions in a school context",
          "Comfortable managing group prioritization under time pressure"
        ],
        "successMeasures": [
          "The plan is genuinely co-owned by the team, not authored by one leader alone",
          "Each milestone has a named, accountable owner",
          "The 45-day check-in shows real, verifiable progress on at least half the milestones"
        ],
        "pricing": {
          "typicalDuration": "1 day (6 hours) per lab",
          "estimatedDays": "1 day",
          "fee": "$2,800 per lab"
        }
      },
      {
        "code": "EDU-03",
        "slug": "edu-03-non-negotiable-standards-for-teaching-discipline",
        "name": "Non-Negotiable Standards for Teaching & Discipline",
        "description": "Defines clear, realistic non-negotiables for lesson preparation, punctuality, homework, classroom behavior, and parent communication — with simple checklists for monitoring.",
        "whoFor": "Private and public secondary schools.",
        "duration": "3–4 hours (half-day).",
        "objectives": [
          "Define a short, realistic list of non-negotiable standards across teaching and discipline",
          "Build simple checklists leadership can actually use to monitor adherence",
          "Secure staff buy-in on the standards before rollout"
        ],
        "process": [
          {
            "phase": "Pre-Work",
            "timing": "1 week before",
            "whatHappens": "Review of current (if any) standards documents and a short leadership survey on where inconsistency is most costly."
          },
          {
            "phase": "Working Session",
            "timing": "Half-day",
            "whatHappens": "Facilitated session with school leadership to define the non-negotiables and draft the monitoring checklists."
          },
          {
            "phase": "Staff Rollout Support",
            "timing": "Within 2 weeks",
            "whatHappens": "A short staff-facing rollout document and guidance on introducing the standards without them feeling punitive."
          }
        ],
        "tools": [
          "Non-negotiables definition framework",
          "Monitoring checklist template"
        ],
        "deliverables": [
          "Finalized non-negotiable standards document",
          "Monitoring checklists for leadership use",
          "Staff rollout guidance"
        ],
        "qualifications": [
          "Experience in school administration or academic leadership",
          "Familiarity with realistic classroom and discipline constraints"
        ],
        "successMeasures": [
          "Standards are specific and few enough that leadership can realistically monitor them",
          "Staff rollout does not generate significant pushback framed as unfairness",
          "Leadership reports using the monitoring checklist within 30 days"
        ],
        "pricing": {
          "typicalDuration": "3–4 hours (half-day)",
          "estimatedDays": "0.5 day",
          "fee": "$1,400"
        }
      },
      {
        "code": "EDU-04",
        "slug": "edu-04-practical-classroom-management",
        "name": "Practical Classroom Management",
        "description": "Equips teachers with 4–6 concrete strategies for managing real classrooms — diverse backgrounds, device distractions, and fee-paying parent expectations.",
        "whoFor": "Private and public secondary schools.",
        "duration": "1 day (6 hours).",
        "objectives": [
          "Equip teachers with 4–6 concrete, immediately usable classroom management strategies",
          "Address device distraction and diverse-classroom management specifically",
          "Practice strategies against realistic classroom scenarios"
        ],
        "process": [
          {
            "phase": "Pre-Work",
            "timing": "Optional, 1 week before",
            "whatHappens": "Short teacher survey on their most common classroom management challenges."
          },
          {
            "phase": "Workshop Day",
            "timing": "1 day (6 hours)",
            "whatHappens": "Facilitated workshop introducing and practicing the strategies against realistic scenarios drawn from the pre-work survey."
          },
          {
            "phase": "Follow-Up Resource",
            "timing": "Within 1 week",
            "whatHappens": "A quick-reference strategy card distributed to all participating teachers."
          }
        ],
        "tools": [
          "Classroom management strategy set",
          "Realistic scenario bank",
          "Quick-reference strategy card"
        ],
        "deliverables": [
          "Full-day workshop",
          "Quick-reference strategy card for every teacher",
          "Summary report to school leadership"
        ],
        "qualifications": [
          "Classroom teaching experience or teacher-training delivery experience",
          "Comfortable facilitating practice-based, scenario-driven workshops"
        ],
        "successMeasures": [
          "Teachers can name at least 2 strategies they intend to use in the next week",
          "Post-workshop feedback shows the strategies felt realistic, not theoretical",
          "School leadership reports informal signs of improved classroom management within a month"
        ],
        "pricing": {
          "typicalDuration": "1 day (6 hours)",
          "estimatedDays": "1 day",
          "fee": "$2,800"
        }
      },
      {
        "code": "EDU-05",
        "slug": "edu-05-teaching-for-understanding-not-just-coverage",
        "name": "Teaching for Understanding, Not Just Coverage",
        "description": "Teachers learn a simple lesson structure that keeps students engaged and focused on learning outcomes — plus leaders learn how to review lesson plans and give constructive feedback.",
        "whoFor": "Private and public secondary schools.",
        "duration": "1 day (6 hours).",
        "objectives": [
          "Teach a simple, usable lesson structure focused on genuine understanding over content coverage",
          "Give academic leaders a practical method for reviewing lesson plans and giving useful feedback",
          "Build a shared vocabulary between teachers and leaders for discussing lesson quality"
        ],
        "process": [
          {
            "phase": "Teacher Track",
            "timing": "Half-day",
            "whatHappens": "Teachers learn and practice the simple lesson-structure framework with their own real content."
          },
          {
            "phase": "Leader Track",
            "timing": "Half-day",
            "whatHappens": "Academic leaders learn the lesson-plan review method and practice giving constructive feedback on real (anonymized) lesson plans."
          },
          {
            "phase": "Joint Debrief",
            "timing": "Final 30 minutes",
            "whatHappens": "Teachers and leaders come together to align on the shared vocabulary and expectations going forward."
          }
        ],
        "tools": [
          "Understanding-focused lesson structure template",
          "Lesson-plan review and feedback guide"
        ],
        "deliverables": [
          "Full-day joint workshop",
          "Lesson structure template for teacher use",
          "Lesson-plan review guide for leadership use"
        ],
        "qualifications": [
          "Instructional coaching or curriculum development experience",
          "Experience training both teachers and academic leaders in the same engagement"
        ],
        "successMeasures": [
          "Teachers can articulate the difference between coverage and understanding in their own words",
          "Leaders use the review guide on at least one real lesson plan within 30 days",
          "A shared vocabulary is visibly used in post-engagement lesson-plan conversations"
        ],
        "pricing": {
          "typicalDuration": "1 day (6 hours)",
          "estimatedDays": "1 day",
          "fee": "$2,800"
        }
      },
      {
        "code": "EDU-06",
        "slug": "edu-06-assessment-feedback-protecting-academic-reputation",
        "name": "Assessment, Feedback & Protecting Academic Reputation",
        "description": "Improves the quality of tests and exams, builds fast feedback practices for busy classrooms, and develops a simple system for tracking results and identifying struggling students early.",
        "whoFor": "Private and public secondary schools.",
        "duration": "3–4 hours (half-day) or 1 day (6 hours).",
        "objectives": [
          "Improve the quality and fairness of tests and exams",
          "Build fast, realistic feedback practices that work in busy classrooms",
          "Develop a simple system for tracking results and flagging struggling students early"
        ],
        "process": [
          {
            "phase": "Diagnostic Review",
            "timing": "Pre-engagement",
            "whatHappens": "Review of sample assessments and current tracking practices (or absence of them)."
          },
          {
            "phase": "Working Session",
            "timing": "Half-day to 1 day",
            "whatHappens": "Facilitated session covering assessment quality, fast feedback practices, and building the tracking system."
          },
          {
            "phase": "System Handoff",
            "timing": "Within 1 week",
            "whatHappens": "Delivery of the finalized tracking template and guidance on maintaining it."
          }
        ],
        "tools": [
          "Assessment quality checklist",
          "Fast-feedback practice guide",
          "Early-warning tracking template"
        ],
        "deliverables": [
          "Assessment quality review",
          "Fast-feedback practice guide for teachers",
          "Early-warning student tracking template"
        ],
        "qualifications": [
          "Experience in academic assessment design or instructional leadership",
          "Familiarity with realistic teacher workload constraints"
        ],
        "successMeasures": [
          "Sample assessments show measurable quality improvement against the checklist",
          "The tracking system is actually adopted and used, not abandoned after the session",
          "At least one struggling student is identified and supported earlier than the prior system would have caught"
        ],
        "pricing": {
          "typicalDuration": "Half-day to 1 day",
          "estimatedDays": "0.5–1 day",
          "fee": "$1,400 – $2,800"
        }
      },
      {
        "code": "EDU-07",
        "slug": "edu-07-parent-communication-expectation-management",
        "name": "Parent Communication & Expectation Management",
        "description": "Clarifies what parents should and should not expect. Designs simple, professional communication routines that build trust instead of conflict.",
        "whoFor": "Private and public secondary schools.",
        "duration": "3–4 hours (half-day).",
        "objectives": [
          "Clarify realistic parent expectations for communication, involvement, and responsiveness",
          "Design simple, professional communication routines for staff to follow consistently",
          "Reduce recurring sources of parent-school conflict"
        ],
        "process": [
          {
            "phase": "Diagnostic",
            "timing": "Pre-engagement",
            "whatHappens": "Short review of recent parent complaints or friction points to ground the session in real patterns."
          },
          {
            "phase": "Working Session",
            "timing": "Half-day",
            "whatHappens": "Facilitated session with leadership and key staff to define expectations and design communication routines."
          },
          {
            "phase": "Parent-Facing Rollout",
            "timing": "Within 2 weeks",
            "whatHappens": "A short, clear communication expectations document the school can share with families."
          }
        ],
        "tools": [
          "Parent expectations framework",
          "Communication routine templates"
        ],
        "deliverables": [
          "Communication expectations document (staff-facing)",
          "Parent-facing expectations summary",
          "Communication routine templates"
        ],
        "qualifications": [
          "Experience in school administration, admissions, or parent relations",
          "Comfortable working through real, sometimes sensitive complaint patterns"
        ],
        "successMeasures": [
          "Staff report the new routines are realistic to maintain",
          "The parent-facing document is actually distributed to families",
          "A 90-day review shows a reduction in the specific friction points identified at the start"
        ],
        "pricing": {
          "typicalDuration": "3–4 hours (half-day)",
          "estimatedDays": "0.5 day",
          "fee": "$1,400"
        }
      },
      {
        "code": "EDU-08",
        "slug": "edu-08-student-support-retention",
        "name": "Student Support & Retention",
        "description": "Maps the reasons students disengage or transfer. Builds a basic student support flow — noticing, referring, supporting, and following up at-risk students.",
        "whoFor": "Private and public secondary schools, vocational institutes, colleges.",
        "duration": "3–4 hours (half-day).",
        "objectives": [
          "Map the real, specific reasons students disengage or leave in this institution",
          "Build a basic, workable flow for noticing, referring, supporting, and following up with at-risk students",
          "Clarify who owns each step of the flow"
        ],
        "process": [
          {
            "phase": "Data & Pattern Review",
            "timing": "Pre-engagement",
            "whatHappens": "Review of available attrition/transfer data and informal staff knowledge of common disengagement patterns."
          },
          {
            "phase": "Working Session",
            "timing": "Half-day",
            "whatHappens": "Facilitated session to map real disengagement patterns and design the notice-refer-support-follow-up flow."
          },
          {
            "phase": "Flow Handoff",
            "timing": "Within 1 week",
            "whatHappens": "Delivery of the finalized flow document with owners assigned to each step."
          }
        ],
        "tools": [
          "Disengagement pattern mapping template",
          "Student support flow template"
        ],
        "deliverables": [
          "Disengagement pattern analysis",
          "Student support flow document with assigned owners",
          "Facilitated working session"
        ],
        "qualifications": [
          "Experience in student services, counseling, or retention-focused academic leadership",
          "Comfortable working with sensitive attrition data"
        ],
        "successMeasures": [
          "The flow has a named, accountable owner for every step",
          "Staff report the flow is realistic to actually follow, not aspirational",
          "A semester review shows the flow was used for at least a meaningful number of real at-risk cases"
        ],
        "pricing": {
          "typicalDuration": "3–4 hours (half-day)",
          "estimatedDays": "0.5 day",
          "fee": "$1,400"
        }
      },
      {
        "code": "EDU-09",
        "slug": "edu-09-operations-that-support-learning",
        "name": "Operations That Support Learning",
        "description": "Maps key operational processes (timetables, homework, records, communication) that affect teaching and learning. Identifies 3–5 friction points and agrees improvements with clear owners.",
        "whoFor": "Private and public secondary schools.",
        "duration": "1 day (6 hours).",
        "objectives": [
          "Map key operational processes that directly affect teaching and learning",
          "Identify 3–5 specific friction points causing the most disruption",
          "Agree on improvements with clear, accountable owners"
        ],
        "process": [
          {
            "phase": "Process Mapping",
            "timing": "Half-day",
            "whatHappens": "Facilitated mapping session with operations and academic staff to surface where processes actually break down."
          },
          {
            "phase": "Friction Prioritization",
            "timing": "Half-day",
            "whatHappens": "Prioritization of the mapped friction points and design of specific improvements with owners."
          },
          {
            "phase": "Improvement Handoff",
            "timing": "Within 1 week",
            "whatHappens": "Delivery of the finalized improvement plan."
          }
        ],
        "tools": [
          "Operations-to-learning process map template",
          "Friction-point prioritization matrix"
        ],
        "deliverables": [
          "Operational process map",
          "3–5 prioritized friction-point improvements with owners",
          "Facilitated full-day session"
        ],
        "qualifications": [
          "Experience in school operations, administration, or institutional effectiveness",
          "Comfortable facilitating cross-functional (academic + operations) sessions"
        ],
        "successMeasures": [
          "Staff across both academic and operations sides validate the mapped friction points as real",
          "Each improvement has a named, accountable owner",
          "A 90-day check-in shows movement on at least the top-priority friction point"
        ],
        "pricing": {
          "typicalDuration": "1 day (6 hours)",
          "estimatedDays": "1 day",
          "fee": "$2,800"
        }
      },
      {
        "code": "EDU-10",
        "slug": "edu-10-curriculum-to-market-alignment-review",
        "name": "Curriculum-to-Market Alignment Review",
        "description": "Maps what you teach against what employers actually need. Identifies gaps between training content and workplace requirements. Builds a revision roadmap.",
        "whoFor": "Vocational/technical schools, colleges, and universities.",
        "duration": "1–2 days (6–12 hours).",
        "objectives": [
          "Map current curriculum content against actual, current employer requirements",
          "Identify specific, prioritized gaps between training content and workplace needs",
          "Build a realistic curriculum revision roadmap"
        ],
        "process": [
          {
            "phase": "Employer Input Gathering",
            "timing": "Pre-engagement",
            "whatHappens": "Collection of employer requirements via existing data, interviews, or a short survey, where the client has access to employer contacts."
          },
          {
            "phase": "Curriculum Mapping",
            "timing": "1 day",
            "whatHappens": "Facilitated mapping of current curriculum content against the gathered employer requirements."
          },
          {
            "phase": "Roadmap Design",
            "timing": "Within 1–2 weeks",
            "whatHappens": "Delivery of a prioritized, realistic curriculum revision roadmap."
          }
        ],
        "tools": [
          "Curriculum-to-employer-requirements mapping template",
          "Gap prioritization matrix"
        ],
        "deliverables": [
          "Curriculum-to-market gap analysis",
          "Prioritized curriculum revision roadmap",
          "Facilitated mapping session(s)"
        ],
        "qualifications": [
          "Experience in curriculum design or workforce-alignment consulting",
          "Ability to translate employer language into curriculum-relevant terms"
        ],
        "successMeasures": [
          "Academic staff validate the identified gaps as real and addressable",
          "At least one roadmap item is adopted into an actual curriculum revision cycle",
          "Employer stakeholders (where involved) confirm the revised direction addresses their stated needs"
        ],
        "pricing": {
          "typicalDuration": "1–2 days (6–12 hours)",
          "estimatedDays": "1–2 days",
          "fee": "$2,800 – $5,600"
        }
      },
      {
        "code": "EDU-11",
        "slug": "edu-11-accreditation-quality-assurance-readiness",
        "name": "Accreditation & Quality Assurance Readiness",
        "description": "Prepares leadership and faculty for accreditation reviews — aligning data, processes, quality assurance practices, and evidence collection.",
        "whoFor": "Colleges and universities.",
        "duration": "3–4 hours (half-day) to multi-day, depending on scope.",
        "objectives": [
          "Assess current readiness against the relevant accreditation standard's evidence requirements",
          "Align data collection, processes, and quality assurance practices to what reviewers will actually look for",
          "Build a realistic pre-review action plan with owners and deadlines"
        ],
        "process": [
          {
            "phase": "Readiness Diagnostic",
            "timing": "Pre-engagement to half-day",
            "whatHappens": "Review of existing evidence, data practices, and prior review findings (if any) against the accreditation standard's requirements."
          },
          {
            "phase": "Gap Closure Planning",
            "timing": "Half-day to 1 day",
            "whatHappens": "Facilitated session to prioritize gaps and assign ownership for evidence collection and process alignment."
          },
          {
            "phase": "Pre-Review Support",
            "timing": "Ongoing, scoped separately",
            "whatHappens": "Optional continued support as the institution works through its action plan ahead of the actual review."
          }
        ],
        "tools": [
          "Accreditation evidence-readiness checklist",
          "Gap-closure action plan template"
        ],
        "deliverables": [
          "Readiness diagnostic report",
          "Prioritized gap-closure action plan with owners and deadlines",
          "Facilitated planning session"
        ],
        "qualifications": [
          "Direct experience with accreditation review processes (as reviewer, preparer, or consultant)",
          "Familiarity with the specific accrediting body relevant to the client"
        ],
        "successMeasures": [
          "Leadership validates the diagnostic as an accurate picture of current readiness",
          "The action plan is adopted with real deadlines, not left as a reference document",
          "The institution reports measurable readiness improvement ahead of its actual review date"
        ],
        "pricing": {
          "typicalDuration": "Half-day to multi-day, plus ongoing monitoring",
          "estimatedDays": "0.5–2 days",
          "fee": "$1,400 – $5,600 (+ ongoing, scoped separately)"
        }
      },
      {
        "code": "EDU-12",
        "slug": "edu-12-institutional-vision-strategy-graduate-outcomes",
        "name": "Institutional Vision, Strategy & Graduate Outcomes",
        "description": "Facilitates senior leadership and faculty to clarify institutional identity, desired graduate profile, and strategic priorities for the next 12–24 months.",
        "whoFor": "Colleges and universities.",
        "duration": "3–4 hours (half-day) or 1 day (retreat style).",
        "objectives": [
          "Clarify a shared institutional identity and desired graduate profile",
          "Align senior leadership and faculty on strategic priorities for the next 12–24 months",
          "Translate the vision into a small number of concrete strategic priorities, not an unfocused wish list"
        ],
        "process": [
          {
            "phase": "Pre-Work",
            "timing": "1–2 weeks before",
            "whatHappens": "Short input-gathering from senior leadership and faculty representatives on current perceptions of identity and priorities."
          },
          {
            "phase": "Retreat Session",
            "timing": "Half-day to 1 day",
            "whatHappens": "Facilitated retreat-style session to align on institutional identity, graduate profile, and strategic priorities."
          },
          {
            "phase": "Strategy Summary",
            "timing": "Within 2 weeks",
            "whatHappens": "Delivery of a concise strategy summary document reflecting the session's outcomes."
          }
        ],
        "tools": [
          "Institutional identity and graduate-profile framework",
          "Strategic priority-setting matrix"
        ],
        "deliverables": [
          "Facilitated retreat session",
          "Institutional identity and graduate profile statement",
          "12–24 month strategic priorities summary"
        ],
        "qualifications": [
          "Experience facilitating senior academic leadership strategy sessions",
          "Comfortable managing competing priorities and viewpoints among faculty and administration"
        ],
        "successMeasures": [
          "Senior leadership and faculty representatives both affirm the resulting statement as genuinely shared, not imposed",
          "The strategic priorities are few enough (3–5) to be realistically pursued",
          "The priorities are visibly referenced in institutional planning within the following year"
        ],
        "pricing": {
          "typicalDuration": "Half-day or 1-day retreat",
          "estimatedDays": "0.5–1 day",
          "fee": "$1,400 – $2,800"
        }
      },
      {
        "code": "EDU-13",
        "slug": "edu-13-student-experience-support-systems-mapping",
        "name": "Student Experience & Support Systems Mapping",
        "description": "Maps the full student journey from admission to graduation, highlighting pain points. Clarifies roles across academic advising, student affairs, counselling, and faculty.",
        "whoFor": "Colleges and universities.",
        "duration": "1 day (6 hours).",
        "objectives": [
          "Map the full student journey from admission through graduation",
          "Identify the specific points where students experience the most friction or fall through the cracks",
          "Clarify roles and handoffs across advising, student affairs, counseling, and faculty"
        ],
        "process": [
          {
            "phase": "Journey Mapping",
            "timing": "Half-day",
            "whatHappens": "Facilitated mapping session with representatives from advising, student affairs, counseling, and faculty to build the full student journey map."
          },
          {
            "phase": "Pain Point & Role Clarification",
            "timing": "Half-day",
            "whatHappens": "Identification of the highest-impact pain points and clarification of roles and handoffs at each stage."
          },
          {
            "phase": "Map Handoff",
            "timing": "Within 1 week",
            "whatHappens": "Delivery of the finalized journey map and role-clarity document."
          }
        ],
        "tools": [
          "Student journey mapping template",
          "Cross-functional role and handoff matrix"
        ],
        "deliverables": [
          "Full student journey map",
          "Prioritized pain-point analysis",
          "Cross-functional role and handoff clarity document"
        ],
        "qualifications": [
          "Experience in student affairs, academic advising, or institutional effectiveness",
          "Comfortable facilitating cross-departmental mapping sessions with competing perspectives"
        ],
        "successMeasures": [
          "Representatives from all involved departments validate the map as accurate",
          "At least one identified pain point is assigned an owner and an improvement plan",
          "Role clarity at key handoff points is confirmed by both sides of the handoff (e.g., advising and student affairs)"
        ],
        "pricing": {
          "typicalDuration": "1 day (6 hours)",
          "estimatedDays": "1 day",
          "fee": "$2,800"
        }
      }
    ]
  }
];

export const consultingEngagements: ConsultingEngagement[] = consultingGroups.flatMap((g) => g.engagements);

export function getEngagement(slug: string) {
  return consultingEngagements.find((e) => e.slug === slug);
}

export function getEngagementGroup(slug: string) {
  return consultingGroups.find((g) => g.engagements.some((e) => e.slug === slug));
}
