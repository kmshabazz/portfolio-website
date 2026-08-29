import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { insights } from "@/data/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kalifashabazz.com";
  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/insights`, changeFrequency: "weekly", priority: 0.9 }
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const insightPages: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: insight.date,
    changeFrequency: "monthly",
    priority: 0.75
  }));

  return [...pages, ...caseStudyPages, ...insightPages];
}
