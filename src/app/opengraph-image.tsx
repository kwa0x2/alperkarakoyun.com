import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: 80,
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, color: "#34d399" }}>
          ~/ alper
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: "-0.03em" }}>{site.name}</div>
          <div style={{ fontSize: 44, color: "#34d399", marginTop: 8 }}>{site.role}</div>
          <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 24, maxWidth: 880 }}>
            Building full-stack products end to end with Go, Node.js and Next.js.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#71717a" }}>
          <span>alperkarakoyun.com</span>
          <span>github.com/kwa0x2</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
