"use client";

import { usePathname } from "next/navigation";
import { JoinBand } from "./JoinBand";

// While A2P 10DLC is under review (2026-10-10), the home page collects phone/SMS consent only
// through the GHL chat widget, so the Accexx Circle signup is hidden there. Other pages are unchanged.
export function JoinBandGate() {
  const pathname = usePathname();
  return <JoinBand showSignup={pathname !== "/"} />;
}
