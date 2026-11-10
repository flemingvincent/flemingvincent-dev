import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://flemingvincent.dev", changeFrequency: "monthly", priority: 1 }];
}
