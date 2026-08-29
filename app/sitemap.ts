import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kalifashabazz.com";
  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1
    }
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [...pages, ...caseStudyPages];
}
