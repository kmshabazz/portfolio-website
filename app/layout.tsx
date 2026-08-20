import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const title = "Kalifa Shabazz | Analytics Platform, Measurement & Growth Systems";
const description = "Kalifa Shabazz works across measurement, marketing analytics, performance marketing, attribution, and full-funnel growth systems across enterprise and ecommerce environments.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://kalifashabazz.com"),
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://kalifashabazz.com",
    siteName: "Kalifa Shabazz"
  },
  twitter: {
    card: "summary",
    title,
    description
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
