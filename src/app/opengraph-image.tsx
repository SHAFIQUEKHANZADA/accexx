import { ImageResponse } from "next/og";

// Default share image for every route, with the Accexx Insight mark (2026-10-04).
export const alt = "Accexx Insight: From Access to Accexx. Unlock your breakthrough.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #fbf7f0 0%, #f3ecdf 100%)",
          color: "#1f3864",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 34 }}>
          <svg width="72" height="72" viewBox="0 0 200 200">
            <path d="M100 16 L173 184 L27 184 Z M86 184 L86 132 A14 14 0 0 1 114 132 L114 184 Z" fill="#1F3864" fillRule="evenodd" />
            <rect x="64" y="92" width="72" height="9" rx="2" fill="#B08D57" />
          </svg>
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{ fontWeight: 700, letterSpacing: 3 }}>ACCEXX</span>
            <span style={{ color: "#b08d57", fontStyle: "italic" }}>Insight</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05, color: "#1f3864" }}>
            From Access to&nbsp;<span style={{ color: "#c9974b", fontStyle: "italic" }}>Accexx</span>
          </div>
          <div style={{ fontSize: 30, color: "#9c7437", fontStyle: "italic" }}>
            We do more than find solutions. We enable transformation.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
