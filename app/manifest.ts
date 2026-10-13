import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zarein Energy — From Wellhead to Grid",
    short_name: "Zarein Energy",
    description: "An independent Nigerian energy company turning gas into dependable power for industry, estates and distribution networks.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a2a4a",
    theme_color: "#0a2a4a",
    icons: [
      {
        src: "/icon?<generated>",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon?<generated>",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
