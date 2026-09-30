import { ImageResponse } from "next/og";

// Default share image for every route (placeholder branding until the logo arrives).
export const alt = "Accexx Insight — From Access to Accexx. Unlock your breakthrough.";
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
          background: "radial-gradient(ellipse at 80% 110%, #3a2a12 0%, #0b0b0c 60%)",
          color: "#ece7df",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 34 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              border: "2px solid rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontStyle: "italic",
            }}
          >
            A
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            Accexx <span style={{ color: "#c9974b", fontStyle: "italic" }}>Insight</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05, color: "#fff" }}>
            From Access to&nbsp;<span style={{ color: "#c9974b", fontStyle: "italic" }}>Accexx</span>
          </div>
          <div style={{ fontSize: 30, color: "#c9974b", fontStyle: "italic" }}>
            We more than find solutions. We ensure transformation.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
