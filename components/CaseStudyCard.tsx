import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.slug}`} className="group panel flex min-h-[360px] flex-col justify-between rounded-3xl p-7 transition hover:-translate-y-1 hover:border-[#b8f36b]/35 sm:p-9">
      <div>
        <div className="mb-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[.16em] text-zinc-500">
          <span>{study.number}</span>
          <span className="arrow text-[#b8f36b]">↗</span>
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[.15em] text-zinc-500">{study.eyebrow}</p>
        <h3 className="max-w-xl text-3xl font-semibold tracking-[-.035em] text-white sm:text-4xl">{study.title}</h3>
        <p className="mt-5 max-w-xl leading-7 text-zinc-400">{study.summary}</p>
      </div>
      <div className="mt-10 border-t border-white/10 pt-5">
        <p className="text-sm font-medium text-[#b8f36b]">{study.impact}</p>
      </div>
    </Link>
  );
}
