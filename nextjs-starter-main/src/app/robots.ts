import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mepathan.com/sitemap.xml",
    host: "https://mepathan.com",
  };
}
