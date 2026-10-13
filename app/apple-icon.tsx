import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a2a4a",
        }}
      >
        <svg width="100" height="144" viewBox="0 0 250 359" fill="white">
          <path d="M125 0C125 0 75 89.75 75 179.5C75 269.25 100 359 125 359C150 359 175 269.25 175 179.5C175 89.75 125 0 125 0Z" />
          <path d="M125 100C125 100 95 155 95 210C95 265 105 300 125 300C145 300 155 265 155 210C155 155 125 100 125 100Z" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
