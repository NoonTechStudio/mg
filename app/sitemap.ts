import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.meridiangrid.in";

  const routes = [
    "",
    "/contact",
    "/privacy",
    "/services/web-design",
    "/services/software-development",
    "/services/google-workspace",
    "/services/appsheet",
    "/services/cloud",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
