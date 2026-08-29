import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const url = `https://kalifashabazz.com/work/${study.slug}`;
  const title = `${study.shortTitle} Case Study`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: { title: `${title} | Kalifa Shabazz`, description: study.summary, url, type: "article", siteName: "Kalifa Shabazz" },
    twitter: { card: "summary", title: `${title} | Kalifa Shabazz`, description: study.summary }
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const sections = [
    ["The challenge", study.challenge],
    ["The approach", study.approach],
    ["The outcome", study.outcome]
  ] as const;

  return (
    <main>
      <section className="grid-lines border-b border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Link href="/#work" className="text-sm text-zinc-500 hover:text-white">Back to selected work</Link>
          <p className="kicker mb-6 mt-14">Case Study {study.number} · {study.eyebrow}</p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-.055em] sm:text-7xl lg:text-8xl">{study.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl">{study.summary}</p>
          <div className="mt-10 flex flex-wrap gap-2">
            {study.stack.map((item) => <span key={item} className="rounded-full border border-white/12 bg-white/[.03] px-3 py-1.5 text-xs text-zinc-300">{item}</span>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel rounded-3xl p-7 sm:p-9">
            <p className="kicker mb-5">Impact</p>
            <p className="text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{study.impact}</p>
          </div>
          <div className="panel rounded-3xl p-7 sm:p-9">
            <p className="kicker mb-5">Business impact</p>
            <p className="text-2xl font-semibold leading-tight tracking-[-.03em] text-zinc-200 sm:text-3xl">{study.businessImpact}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="space-y-16">
          {sections.map(([sectionTitle, items], sectionIndex) => (
            <div key={sectionTitle} className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[.55fr_1.45fr]">
              <div>
                <span className="text-xs font-semibold text-zinc-600">0{sectionIndex + 1}</span>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">{sectionTitle}</h2>
              </div>
              <div className="space-y-4">
                {items.map((item) => <div key={item} className="panel rounded-2xl p-5 leading-7 text-zinc-300 sm:p-6">{item}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/8 px-6 py-20 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="kicker mb-3">Next</p>
            <h2 className="text-3xl font-semibold tracking-[-.04em]">Explore more selected work.</h2>
          </div>
          <Link href="/#work" className="rounded-full bg-[#b8f36b] px-6 py-3 text-sm font-semibold text-[#090b0d]">View all case studies</Link>
        </div>
      </section>
    </main>
  );
}
