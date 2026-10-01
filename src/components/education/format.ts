import type { CohortPrices } from "@/data/types";

/** Whole-dollar USD, e.g. 18900 → "$18,900". Program prices are always whole dollars. */
export const usd = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);

/** "6 contact hours", "3.5 contact hours", "1 contact hour". */
export const hoursLabel = (hours: number, unit = "contact hour") => `${hours} ${unit}${hours === 1 ? "" : "s"}`;

/** Short hours label for module lists: "3 hrs", "1.5 hrs", "1 hr". */
export const hrs = (hours: number) => `${hours} ${hours === 1 ? "hr" : "hrs"}`;

/** Price rows for a program priced from the Pricing Master (hybrid is a formula, so it goes in the notes). */
export const cohortPriceRows = (c: Pick<CohortPrices, "inPerson" | "virtual" | "additionalParticipant">, cap = 15) => [
  { label: "In-Person", note: `per cohort, up to ${cap}`, value: usd(c.inPerson) },
  { label: "Virtual", note: `per cohort, up to ${cap}`, value: usd(c.virtual) },
  { label: "Each additional participant", value: usd(c.additionalParticipant) },
];

export const cohortPriceNotes = (cap = 15) => [
  "Hybrid delivery: 92.5% of the in-person price.",
  `Additional participants beyond ${cap}, up to a maximum cohort of 25.`,
  "Prices in USD.",
];
