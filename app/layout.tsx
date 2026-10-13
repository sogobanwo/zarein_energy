import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: { default: `${site.name} — From Wellhead to Grid`, template: `%s — ${site.name}` },
  description: site.description,
  keywords: [
    "Zarein Energy",
    "Nigerian energy",
    "gas to power",
    "embedded power",
    "IPP Nigeria",
    "industrial power",
    "gas processing",
    "power generation",
    "Lagos power",
    "Ikeja Electric",
    "MWM generators",
    "gas infrastructure",
    "estate power",
    "energy infrastructure",
    "Nigerian IPP",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.legalName,
  metadataBase: new URL("https://zareinenergy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — From Wellhead to Grid`,
    description: site.description,
    url: "https://zareinenergy.com",
    siteName: site.name,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — From Wellhead to Grid`,
    description: site.description,
    creator: "@zareinenergy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2a4a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
