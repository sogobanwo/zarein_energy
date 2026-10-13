import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Zarein Energy — From Wellhead to Grid";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#071626",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(10, 42, 74, 0.4) 0%, rgba(7, 22, 38, 0.8) 100%)",
          }}
        />

        {/* Flame icon positioned top-right with lower opacity */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "500px",
            height: "720px",
            opacity: 0.08,
            display: "flex",
          }}
        >
          <svg width="250" height="359" viewBox="0 0 250 359" fill="white">
            <path d="M125 0C125 0 75 89.75 75 179.5C75 269.25 100 359 125 359C150 359 175 269.25 175 179.5C175 89.75 125 0 125 0Z" />
            <path d="M125 100C125 100 95 155 95 210C95 265 105 300 125 300C145 300 155 265 155 210C155 155 125 100 125 100Z" />
          </svg>
        </div>

        {/* Logo and company name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            zIndex: 10,
          }}
        >
          {/* Flame logo */}
          <div style={{ display: "flex" }}>
            <svg width="50" height="72" viewBox="0 0 250 359" fill="white">
              <path d="M125 0C125 0 75 89.75 75 179.5C75 269.25 100 359 125 359C150 359 175 269.25 175 179.5C175 89.75 125 0 125 0Z" />
              <path d="M125 100C125 100 95 155 95 210C95 265 105 300 125 300C145 300 155 265 155 210C155 155 125 100 125 100Z" />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              ZAREIN ENERGY
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "rgba(255, 255, 255, 0.6)",
                textTransform: "uppercase",
              }}
            >
              Powering Industrial Growth
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            zIndex: 10,
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: "80px",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "white",
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>From wellhead</span>
            <span>to grid.</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: "700px",
            }}
          >
            An independent Nigerian energy company turning gas into dependable power for industry, estates and distribution networks.
          </div>
        </div>

        {/* Bottom stripe decoration */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            display: "flex",
            zIndex: 10,
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#F97316" }} />
          <div style={{ flex: 1, backgroundColor: "#F59E0B" }} />
          <div style={{ flex: 1, backgroundColor: "#EAB308" }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
