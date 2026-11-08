import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const title = "Kalifa Shabazz | Analytics, AI Enablement & Data Governance";
const description = "Kalifa Shabazz works in analytics, measurement, AI enablement and data governance, and builds growth systems for brands.";
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
    "enterprise analytics platforms",
    "global analytics operations",
    "AI agents",
    "AI enablement",
    "data governance",
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

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
