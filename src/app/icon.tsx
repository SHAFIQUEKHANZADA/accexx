import { ImageResponse } from "next/og";

// Placeholder monogram favicon until the client's logo arrives.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0c",
          borderRadius: 14,
          border: "3px solid #c9974b",
          color: "#c9974b",
          fontSize: 42,
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
        }}
      >
        A
      </div>
    ),
    size,
  );
}
