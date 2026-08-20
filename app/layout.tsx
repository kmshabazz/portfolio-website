import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kalifa Shabazz | Analytics Platform, Measurement & Growth Systems",
  description: "Senior analytics platform and measurement operator building reliable measurement, attribution, analytics engineering, and growth systems.",
  metadataBase: new URL("https://kalifashabazz.com"),
  openGraph: {
    title: "Kalifa Shabazz | Analytics Platform, Measurement & Growth Systems",
    description: "Building measurement systems teams can trust, and growth systems they can scale.",
    type: "website"
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
