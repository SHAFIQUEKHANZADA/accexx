import Image from "next/image";
import Link from "next/link";
import logoDark from "../../../public/images/accexx-insight-logo.png";
import logoLight from "../../../public/images/accexx-insight-logo-light.png";

/**
 * Dr. A's logo (gold circled "A" + "Accexx Insight"), cut out of her file
 * (reference/bio-images/wide preview 1.png) onto a transparent background:
 * navy wordmark for light backgrounds, white wordmark for the navy footer.
 */
export function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/" aria-label="Accexx Insight home" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src={tone === "dark" ? logoDark : logoLight}
        alt="Accexx Insight"
        preload={tone === "dark"}
        sizes="200px"
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
