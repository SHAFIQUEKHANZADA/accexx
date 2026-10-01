import Image from "next/image";
import type { TeamMember } from "@/data/team";
import { LinkedIn } from "@/components/ui/icons";

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .filter((p) => /^[A-Za-z]/.test(p) && !/^[A-Z]\.$/.test(p))
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Team member card. Members without a headshot get an initials monogram, never a stock photo. */
export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
      <div className="relative aspect-[4/5] bg-cream">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div
            role="img"
            aria-label={`${member.name} (photo coming soon)`}
            className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_30%_20%,var(--color-gold-soft)_0%,var(--color-cream)_60%,var(--color-sand)_100%)]"
          >
            <span className="grid size-32 place-items-center rounded-full border border-gold/50 bg-white font-serif text-5xl font-semibold text-navy shadow-sm">
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="heading text-2xl sm:text-[1.7rem]">{member.name}</h3>
        <p className="eyebrow mt-2">{member.role}</p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-body">{member.bio}</p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep hover:text-navy"
          >
            <LinkedIn /> LinkedIn
          </a>
        )}
      </div>
    </article>
  );
}
