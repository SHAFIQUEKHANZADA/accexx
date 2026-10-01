import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const YouTube = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="m10 9.5 4.5 2.5-4.5 2.5z" />
  </svg>
);

export const TikTok = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
    <path d="M14 3c.4 2.6 2 4.2 4.5 4.5" />
  </svg>
);

export const Facebook = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14.5 21v-7.5h2.5l.5-3h-3V8.8c0-.9.4-1.5 1.6-1.5H17.6V4.6a20 20 0 0 0-2.3-.1c-2.4 0-3.8 1.4-3.8 4v2h-2.5v3h2.5V21" />
  </svg>
);
