import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/data/insights";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  const url = `/insights/${insight.slug}`;
  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: url },
    authors: [{ name: "Kalifa Shabazz", url: "https://kalifashabazz.com" }],
    openGraph: { title: insight.title, description: insight.description, url, type: "article", publishedTime: insight.date, authors: ["Kalifa Shabazz"] },
    twitter: { card: "summary", title: insight.title, description: insight.description }
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.description,
    datePublished: insight.date,
    author: { "@type": "Person", name: "Kalifa Shabazz", url: "https://kalifashabazz.com" },
    publisher: { "@type": "Person", name: "Kalifa Shabazz", url: "https://kalifashabazz.com" },
    mainEntityOfPage: `https://kalifashabazz.com/insights/${insight.slug}`
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article>
        <header className="grid-lines border-b border-white/8">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-10">
            <Link href="/insights" className="text-sm font-semibold text-zinc-500 hover:text-[#b8f36b]">← All Insights</Link>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[.12em]">
              <span className="text-[#b8f36b]">{insight.category}</span><span className="text-zinc-700">·</span>
              <time className="text-zinc-500">{new Date(`${insight.date}T12:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</time>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-[-.05em] sm:text-6xl">{insight.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">{insight.description}</p>
            <p className="mt-7 text-sm font-semibold text-zinc-300">By Kalifa Shabazz</p>
          </div>
        </header>
        <div className="mx-auto max-w-3xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="space-y-6 text-[1.05rem] leading-8 text-zinc-300">
            {insight.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-sm leading-7 text-zinc-500">Kalifa Shabazz writes about analytics platforms, measurement, growth systems, and AI-enabled analytics operations.</p>
            <div className="mt-5 flex flex-wrap gap-3"><Link href="/insights" className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold hover:bg-white/5">More Insights</Link><Link href="/#work" className="rounded-full bg-[#b8f36b] px-5 py-2.5 text-sm font-semibold text-[#090b0d]">View Case Studies</Link></div>
          </div>
        </div>
      </article>
    </main>
  );
}
