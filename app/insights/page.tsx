import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Writing from Kalifa Shabazz on analytics, measurement, AI-enabled operations, analytics engineering, growth systems, and career development.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | Kalifa Shabazz",
    description: "Writing on analytics, measurement, AI-enabled operations, analytics engineering, and growth systems.",
    url: "/insights",
    type: "website"
  }
};

export default function InsightsPage() {
  return (
    <main>
      <section className="grid-lines border-b border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10">
          <p className="kicker mb-5">Insights</p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-.05em] sm:text-7xl">Analytics, measurement, AI, and growth from the operator&apos;s seat.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">Notes from the work: building trusted measurement systems, improving analytics operations, connecting data to growth, and navigating an analytics career as the field evolves.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-2">
          {insights.map((insight) => (
            <Link key={insight.slug} href={`/insights/${insight.slug}`} className="panel group rounded-3xl p-7 transition hover:border-[#b8f36b]/30 sm:p-8">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[.12em]">
                <span className="text-[#b8f36b]">{insight.category}</span>
                <time className="text-zinc-600">{new Date(`${insight.date}T12:00:00`).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</time>
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-[-.035em] group-hover:text-[#b8f36b] sm:text-3xl">{insight.title}</h2>
              <p className="mt-4 leading-7 text-zinc-400">{insight.description}</p>
              <p className="mt-7 text-sm font-semibold text-zinc-200">Read insight →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
