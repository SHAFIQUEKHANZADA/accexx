import type { StaticImageData } from "next/image";
import drLaideHeadshot from "../../public/images/dr-laide-headshot.jpg";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Null until the client sends a headshot (TODO_CLIENT.md). */
  photo: StaticImageData | null;
  /** Null until the client sends profile URLs (the live site shows LinkedIn + X icons without working links). */
  linkedin: string | null;
  x: string | null;
};

// Source: reference/text/site_current-live_accexxinsight.com.txt ("Meet the Accexx Insight team").
export const team: TeamMember[] = [
  {
    name: "Dr. Laide Alexander",
    role: "Founder & CEO",
    bio: "As a member of the Forbes Coaches Council, she is recognized among a select group of the world's most respected leadership authorities with a focus on intersection of leadership, education, and human systems",
    photo: drLaideHeadshot,
    linkedin: null,
    x: null,
  },
  {
    name: "Babajide O. Kupoluyi",
    role: "Chief Operating Officer",
    bio: "Babajide is a seasoned executive whose career spans continents, industries, and the full arc of enterprise from operational leadership to global market expansion.",
    photo: null,
    linkedin: null,
    x: null,
  },
  {
    name: "Jerry Driskill",
    role: "Executive Consultant",
    bio: "Dynamic, results-driven leader with a passion for fostering team success and achieving organizational goals. Personable and assertive, he brings a servant leadership style.",
    photo: null,
    linkedin: null,
    x: null,
  },
];
