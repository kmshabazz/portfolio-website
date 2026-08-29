import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const title = "Kalifa Shabazz | Analytics, Measurement, Growth & AI";
const description = "Kalifa Shabazz is an analytics and measurement professional specializing in analytics platforms, measurement strategy, attribution, growth analytics, data quality, and AI-enabled analytics operations.";
const siteUrl = "https://kalifashabazz.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Kalifa Shabazz" },
  description,
  applicationName: "Kalifa Shabazz",
  authors: [{ name: "Kalifa Shabazz", url: siteUrl }],
  creator: "Kalifa Shabazz",
  publisher: "Kalifa Shabazz",
  alternates: { canonical: "/" },
  keywords: [
    "Kalifa Shabazz",
    "analytics platform",
    "measurement strategy",
    "marketing analytics",
    "growth analytics",
    "attribution",
    "analytics governance",
    "analytics QA",
    "AI-enabled analytics",
    "MCP analytics workflows",
    "GA4",
    "Google Tag Manager",
    "BigQuery",
    "Databricks"
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Kalifa Shabazz",
    locale: "en_US"
  },
  twitter: { card: "summary", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kalifa Shabazz",
  url: siteUrl,
  jobTitle: "Analytics Platform, Measurement & Growth Professional",
  knowsAbout: [
    "Analytics Platforms",
    "Measurement Strategy",
    "Marketing Analytics",
    "Growth Analytics",
    "Attribution",
    "Analytics Governance",
    "Analytics Quality Assurance",
    "AI-Enabled Analytics Operations",
    "GA4",
    "Google Tag Manager",
    "BigQuery",
    "Databricks"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
