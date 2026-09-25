import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const title = "Kalifa Shabazz | Measurement Architecture, Data Instrumentation, Growth & AI";
const description = "Kalifa Shabazz is a measurement architecture and growth analytics professional specializing in data instrumentation, event governance, attribution, data quality and observability, analytics platforms, and AI-enabled analytics operations.";
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
    "measurement architecture",
    "data instrumentation",
    "event governance",
    "growth measurement",
    "measurement strategy",
    "marketing analytics",
    "growth analytics",
    "attribution",
    "measurement governance",
    "data observability",
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
  jobTitle: "Measurement Architecture, Data Instrumentation & Growth Professional",
  knowsAbout: [
    "Measurement Architecture",
    "Data Instrumentation",
    "Event Governance",
    "Growth Measurement",
    "Measurement Strategy",
    "Marketing Analytics",
    "Growth Analytics",
    "Attribution",
    "Measurement Governance",
    "Data Observability",
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
