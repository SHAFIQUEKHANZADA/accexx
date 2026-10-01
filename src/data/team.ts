import type { StaticImageData } from "next/image";
import drLaideHeadshot from "../../public/images/dr-laide-headshot.jpg";
import babajidePhoto from "../../public/images/team-babajide-kupoluyi.jpg";
import jerryPhoto from "../../public/images/team-jerry-driskill.jpg";

export type TeamMember = {
  /** "leadership" = Founder/CEO + COO; "consultant" = the Executive Consultants bench. */
  group: "leadership" | "consultant";
  name: string;
  role: string;
  bio: string;
  /** Headshots received 2026-10-01 (same photos as the live site). */
  photo: StaticImageData | null;
  /** Null until the client sends profile URLs (the live site shows LinkedIn + X icons without working links). */
  linkedin: string | null;
  x: string | null;
};

// Source: reference/text/site_current-live_accexxinsight.com.txt ("Meet the Accexx Insight team").
export const team: TeamMember[] = [
  {
    group: "leadership",
    name: "Dr. Laide Alexander",
    role: "Founder & CEO",
    bio: "As a member of the Forbes Coaches Council, she is recognized among a select group of the world's most respected leadership authorities with a focus on intersection of leadership, education, and human systems",
    photo: drLaideHeadshot,
    linkedin: null,
    x: null,
  },
  {
    group: "leadership",
    name: "Babajide O. Kupoluyi",
    role: "Chief Operating Officer",
    bio: "Babajide is a seasoned executive whose career spans continents, industries, and the full arc of enterprise from operational leadership to global market expansion.",
    photo: babajidePhoto,
    linkedin: null,
    x: null,
  },
  {
    group: "consultant",
    name: "Jerry Driskill",
    role: "Executive Consultant",
    bio: "Dynamic, results-driven leader with a passion for fostering team success and achieving organizational goals. Personable and assertive, he brings a servant leadership style.",
    photo: jerryPhoto,
    linkedin: null,
    x: null,
  },
];

/**
 * Dr. A (WhatsApp, 2026-10-01): "make sure we can add up 7 more to make 8 consultants."
 * To add a consultant: drop their headshot in public/images/team-<name>.jpg, import it above,
 * and add an entry with group: "consultant" (bio copied from what she sends; never invented).
 */
export const maxConsultants = 8;
export const leadership = team.filter((m) => m.group === "leadership");
export const consultants = team.filter((m) => m.group === "consultant");
