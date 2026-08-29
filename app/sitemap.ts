import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kalifashabazz.com";
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((study) => ({
      url: `${baseUrl}/work/${study.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
