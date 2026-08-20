import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";

const capabilities = [
  ["Measurement Architecture", "GA4 & GTM implementation, event taxonomy, dataLayer design, migrations, QA, and governance."],
  ["Analytics Engineering", "BigQuery, Databricks, SQL, Dataform, pipeline validation, and analysis-ready measurement layers."],
  ["Marketing Measurement", "Meta Pixel + CAPI, Google Ads conversion alignment, attribution, signal quality, and media QA."],
  ["Growth Analytics", "Funnels, CRO, experimentation, paid acquisition measurement, lifecycle, and performance narratives."],
  ["Platform Operations", "Analytics QA, data quality, consent, access governance, JIRA workflows, and cross-functional enablement."],
  ["AI & Automation", "LLM-assisted analytics, reporting automation, QA accelerators, and AI-enabled operational workflows."]
];

const experience = [
  ["2023 to Present", "Live Nation Entertainment", "Senior Analytics Platform & Measurement Analyst", "Enterprise analytics platform operations across GA4/GTM, BigQuery, Databricks, attribution, experimentation, data quality, and governance."],
  ["2022", "Strategic Education, Inc.", "Senior Web Analytics Analyst", "Web analytics strategy across Adobe Analytics, Power BI, SEM, SEO, digital experience, and campaign measurement."],
  ["2020 to 2022", "Honeywell", "Senior Web Analytics Analyst", "Web analytics SME supporting tagging, experimentation, ecommerce measurement, and self-service reporting."],
  ["2015 to 2022", "KM & Company", "Founder & Analytics Consultant", "Full-stack digital analytics and growth measurement for ecommerce, paid media, and multi-platform revenue tracking."]
];

const repos = [
  ["GoogleTagManager", "Public tracking implementation work and GTM-focused technical examples.", "https://github.com/kmshabazz/GoogleTagManager"],
  ["Churn Prediction · Advanced ML", "Applied machine learning work from my AI/ML foundation.", "https://github.com/kmshabazz/Churn_Prediction_Advanced_Machine_Learning"],
  ["FoodHub · Python", "Python-based analytics project demonstrating structured exploratory analysis.", "https://github.com/kmshabazz/FoodHub_Python"]
];

export default function Home() {
  return (
    <main>
      <section className="grid-lines border-b border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
          <p className="kicker mb-7">Analytics Platform · Measurement · Growth Systems</p>
          <h1 className="text-balance max-w-6xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[6.4rem]">
            I build measurement systems teams can trust <span className="text-zinc-500">and growth systems they can scale.</span>
          </h1>
          <p className="mt-9 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Senior Analytics Platform & Measurement Analyst operating across GA4, GTM, BigQuery, Databricks, attribution, analytics QA, paid media measurement, and full-funnel growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-[#b8f36b] px-6 py-3 text-sm font-semibold text-[#0a0b0d] hover:brightness-110">View selected work</a>
            <a href="/kalifa-shabazz-resume.pdf" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5" target="_blank">Download resume ↗</a>
            <a href="https://github.com/kmshabazz" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5">GitHub ↗</a>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/8 px-6 lg:grid-cols-4 lg:px-10">
          {[
            ["20 to 50%", "improvement in conversion tracking accuracy"],
            ["18+", "brands across enterprise, agency, DTC & nonprofit"],
            ["20+", "successful GA4 migrations delivered"],
            ["Full-funnel", "measurement from signal to revenue"]
          ].map(([value, label]) => (
            <div key={value} className="min-h-40 px-5 py-8 first:pl-0 lg:min-h-48 lg:px-8 lg:py-10">
              <div className="text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{value}</div>
              <p className="mt-3 max-w-[15rem] text-sm leading-6 text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 max-w-3xl">
          <p className="kicker mb-4">Selected Work</p>
          <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Proof, not a tool list.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">The work is organized around business problems: broken tracking, missing funnel visibility, unclear attribution, and growth systems that need stronger measurement underneath them.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study) => <CaseStudyCard key={study.slug} study={study} />)}
        </div>
      </section>

      <section id="capabilities" className="border-y border-white/8 bg-white/[.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-12 max-w-3xl">
            <p className="kicker mb-4">Capabilities</p>
            <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Where analytics, engineering, and growth meet.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, copy], index) => (
              <div key={title} className="bg-[#0c0e12] p-7 sm:p-8">
                <span className="text-xs font-semibold text-zinc-600">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="kicker mb-4">Technical Work</p>
            <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">The code supports the operating story.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">My public GitHub is being refocused around analytics platform, measurement, QA, attribution, and analytics engineering work. Existing ML projects remain as technical foundation work.</p>
            <a href="https://github.com/kmshabazz" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#b8f36b]">View GitHub <span className="arrow">↗</span></a>
          </div>
          <div className="space-y-3">
            {repos.map(([name, desc, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" className="panel group flex items-center justify-between rounded-2xl p-5 hover:border-[#b8f36b]/30 sm:p-6">
                <div>
                  <h3 className="font-semibold">{name}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">{desc}</p>
                </div>
                <span className="arrow ml-6 text-[#b8f36b]">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/8 bg-white/[.015]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-32">
          <div>
            <p className="kicker mb-4">About</p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-.045em] sm:text-5xl">I work between business questions and trustworthy answers.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">My work sits at the intersection of marketing, product, analytics, and data engineering. I design and govern measurement ecosystems, resolve attribution and data-quality problems, build analysis layers, and turn those systems into decisions teams can actually use.</p>
            <p className="mt-6 leading-8 text-zinc-400">At Live Nation Entertainment, I support enterprise analytics initiatives across web and app experiences. Through consulting, I have also worked across ecommerce, subscription, lead generation, agency, and nonprofit environments where measurement accuracy directly affects revenue and growth.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 max-w-3xl">
          <p className="kicker mb-4">Experience</p>
          <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Enterprise scale. Operator depth.</h2>
        </div>
        <div className="border-t border-white/10">
          {experience.map(([date, company, role, copy]) => (
            <div key={company} className="grid gap-3 border-b border-white/10 py-7 md:grid-cols-[160px_1fr_1.4fr] md:gap-8">
              <p className="text-sm text-zinc-600">{date}</p>
              <div><h3 className="font-semibold">{company}</h3><p className="mt-1 text-sm text-zinc-500">{role}</p></div>
              <p className="leading-7 text-zinc-400">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#b8f36b]/25 bg-[#b8f36b] p-8 text-[#090b0d] sm:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[.16em]">Let’s build on trusted data.</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Need cleaner measurement, stronger attribution, or a growth system with reliable data underneath it?</h2>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="mailto:info@kmandcompany.com" className="rounded-full bg-[#090b0d] px-6 py-3 text-sm font-semibold text-white">Email me</a>
            <a href="https://www.linkedin.com/in/kalifashabazz/" target="_blank" rel="noreferrer" className="rounded-full border border-black/25 px-6 py-3 text-sm font-semibold">LinkedIn ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}
