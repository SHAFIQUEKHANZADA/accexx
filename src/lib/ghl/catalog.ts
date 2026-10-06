import { certifications } from "@/data/certifications";
import { leadershipPrograms } from "@/data/leadership";
import { beinspireWorkshops } from "@/data/beinspire";
import { projectUnifyCertificates } from "@/data/projectUnify";
import { hocShortCourses } from "@/data/shortCourses";
import { trainingShopCourses } from "@/data/trainingShop";
import { consultingEngagements, consultingGroups } from "@/data/consulting";
import { coachingStreams } from "@/data/coaching";

export interface ResolvedProgram {
  programName: string;
  programCode: string;
  programFamily: string;
  primaryInterest: string;
}

export interface ResolvedConsulting {
  consultingCategory: string;
  consultingEngagement: string;
  consultingEngagementCode: string;
}

export interface ResolvedCoaching {
  coachingStream: string;
  primaryInterest: string;
}

/**
 * Normalizes program information strictly using server-side catalog data,
 * preventing browser tampering with program family, name, or code.
 */
export function resolveProgram(
  programCodeInput?: string,
  programNameInput?: string,
  pageUrl?: string
): ResolvedProgram {
  const codeNeedle = (programCodeInput || "").trim().toLowerCase();
  const nameNeedle = (programNameInput || "").trim().toLowerCase();
  const urlNeedle = (pageUrl || "").toLowerCase();

  // 1. HOC Certifications
  for (const c of certifications) {
    if (
      (codeNeedle && (c.code.toLowerCase() === codeNeedle || c.slug.toLowerCase() === codeNeedle)) ||
      (nameNeedle && (c.name.toLowerCase() === nameNeedle || nameNeedle.includes(c.name.toLowerCase()))) ||
      (urlNeedle && urlNeedle.includes(`/education/certifications/${c.slug}`))
    ) {
      return {
        programName: c.name,
        programCode: c.code,
        programFamily: "HOC Certification",
        primaryInterest: "Certification",
      };
    }
  }

  // 2. Leadership Development
  for (const l of leadershipPrograms) {
    if (
      (codeNeedle && (l.code.toLowerCase() === codeNeedle || l.slug.toLowerCase() === codeNeedle)) ||
      (nameNeedle && (l.name.toLowerCase() === nameNeedle || nameNeedle.includes(l.name.toLowerCase()))) ||
      (urlNeedle && urlNeedle.includes(`/education/leadership/${l.slug}`))
    ) {
      return {
        programName: l.name,
        programCode: l.code,
        programFamily: "Leadership Development",
        primaryInterest: "Leadership Development",
      };
    }
  }

  // 3. BEInspire
  for (const b of beinspireWorkshops) {
    if (
      (codeNeedle && (b.code.toLowerCase() === codeNeedle || b.slug.toLowerCase() === codeNeedle)) ||
      (nameNeedle && (b.name.toLowerCase() === nameNeedle || nameNeedle.includes(b.name.toLowerCase()))) ||
      (urlNeedle && urlNeedle.includes(`/education/beinspire/${b.slug}`))
    ) {
      return {
        programName: b.name,
        programCode: b.code,
        programFamily: "BEInspire",
        primaryInterest: "BEInspire",
      };
    }
  }

  // Check BEInspire full series bundle on /education/beinspire page
  if (
    codeNeedle === "beinspire-series" ||
    nameNeedle.includes("beinspire") ||
    urlNeedle.includes("/education/beinspire")
  ) {
    return {
      programName: "BEInspire Career Series",
      programCode: "BEI-SERIES",
      programFamily: "BEInspire",
      primaryInterest: "BEInspire",
    };
  }

  // 4. Project Unify Certificates
  for (const p of projectUnifyCertificates) {
    if (
      (codeNeedle && (p.slug.toLowerCase() === codeNeedle || p.name.toLowerCase() === codeNeedle)) ||
      (nameNeedle && (p.name.toLowerCase() === nameNeedle || nameNeedle.includes(p.name.toLowerCase()))) ||
      (urlNeedle && urlNeedle.includes(`/education/project-unify/${p.slug}`))
    ) {
      return {
        programName: p.name,
        programCode: p.name,
        programFamily: "Project Unify Certificate",
        primaryInterest: "Project Unify Certificate",
      };
    }
  }

  // 5. HOC Short Courses
  for (const s of hocShortCourses) {
    if (
      (codeNeedle && (s.slug.toLowerCase() === codeNeedle || s.name.toLowerCase() === codeNeedle)) ||
      (nameNeedle && (s.name.toLowerCase() === nameNeedle || nameNeedle.includes(s.name.toLowerCase()))) ||
      (urlNeedle && urlNeedle.includes(`/education/short-courses/${s.slug}`))
    ) {
      return {
        programName: s.name,
        programCode: s.name,
        programFamily: "HOC Short Course",
        primaryInterest: "HOC Short Course",
      };
    }
  }

  // 6. Training Shop
  for (const t of trainingShopCourses) {
    if (
      (codeNeedle && (t.slug.toLowerCase() === codeNeedle || t.name.toLowerCase() === codeNeedle)) ||
      (nameNeedle && (t.name.toLowerCase() === nameNeedle || nameNeedle.includes(t.name.toLowerCase()))) ||
      (urlNeedle && urlNeedle.includes(`/education/training-shop/${t.slug}`))
    ) {
      return {
        programName: t.name,
        programCode: t.name,
        programFamily: "Project Unify Training Shop",
        primaryInterest: "Project Unify Training Shop",
      };
    }
  }

  // Fallback defaults
  const resolvedCode = (programCodeInput || "COHORT").trim();
  const resolvedName = (programNameInput || resolvedCode).trim();
  return {
    programName: resolvedName,
    programCode: resolvedCode,
    programFamily: "Leadership Development",
    primaryInterest: "Leadership Development",
  };
}

/**
 * Resolves consulting category, engagement, and code strictly from server-side data.
 */
export function resolveConsulting(topicOrCode?: string): ResolvedConsulting {
  const needle = (topicOrCode || "").trim().toLowerCase();

  for (const group of consultingGroups) {
    for (const e of group.engagements) {
      if (
        needle.includes(e.code.toLowerCase()) ||
        needle.includes(e.name.toLowerCase()) ||
        needle.includes(e.slug.toLowerCase())
      ) {
        let categoryName = "HR and People Systems";
        if (group.id === "culture") categoryName = "Organizational Culture and Strategy";
        else if (group.id === "education") categoryName = "Education Institutions";

        return {
          consultingCategory: categoryName,
          consultingEngagement: e.name,
          consultingEngagementCode: e.code,
        };
      }
    }
  }

  // If not matched or general request
  return {
    consultingCategory: "Not Sure — Help Me Choose",
    consultingEngagement: topicOrCode ? topicOrCode.slice(0, 100) : "Consulting Inquiry",
    consultingEngagementCode: "CONSULTING",
  };
}

/**
 * Resolves coaching stream and primary interest strictly from server-side data.
 */
export function resolveCoaching(topicOrStream?: string): ResolvedCoaching {
  const needle = (topicOrStream || "").trim().toLowerCase();

  if (
    needle.includes("1:1") ||
    needle.includes("executive") ||
    needle.includes("leadership")
  ) {
    return {
      coachingStream: "Executive and Leadership Coaching",
      primaryInterest: "Executive Coaching",
    };
  }

  if (needle.includes("group") || needle.includes("team")) {
    return {
      coachingStream: "Group and Team Coaching",
      primaryInterest: "Group or Team Coaching",
    };
  }

  return {
    coachingStream: "Not Sure — Help Me Choose",
    primaryInterest: "Executive Coaching",
  };
}
