import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/content";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: { default: `${site.name} — From Wellhead to Grid`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: {
    title: `${site.name} — From Wellhead to Grid`,
    description: site.description,
    images: ["/images/hero-refinery-sunset.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2a4a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Archivo with the width axis, so headings can use the expanded cut */}
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&display=swap" rel="stylesheet" />
      </head>
      <body className="overflow-x-hidden">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
