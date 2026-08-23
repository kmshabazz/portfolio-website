import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";

const enterpriseExperience = [
  {
    company: "Live Nation Entertainment",
    title: "Analytics Platform, Measurement Governance & Data Quality",
    copy: "Enterprise-scale analytics platform work spanning event architecture, GA4 and GTM governance, BigQuery and Databricks validation, analytics QA, attribution troubleshooting, AI-enabled analytics workflows, governed MCP integrations, and cross-functional work across marketing, product, engineering, and data."
  },
  {
    company: "Honeywell",
    title: "Digital Analytics, Experimentation & Performance Measurement",
    copy: "Web analytics and implementation across Google Analytics and GTM, campaign measurement for SEO, social, and email, Tableau and Google Data Studio reporting, KPI development, A/B testing, and conversion optimization."
  },
  {
    company: "Strategic Education Inc.",
    title: "Marketing Analytics & Digital Performance",
    copy: "Marketing analytics across Adobe Analytics, Power BI, campaign performance, SEM, SEO, branded content, attribution, funnel analysis, executive reporting, and cross-functional digital performance work."
  }
];

const solveAreas = [
  {
    title: "Untrusted Data",
    copy: "When analytics, ad platforms, CRM systems, Shopify, and business reporting disagree, I trace the problem through the measurement architecture and restore reliable reporting."
  },
  {
    title: "Paid Media Without Full Funnel Visibility",
    copy: "When teams know what they spent but cannot clearly connect advertising to customer behavior, conversion, and revenue, I build the measurement and attribution layer needed to evaluate true performance."
  },
  {
    title: "Fragmented Growth Systems",
    copy: "I connect paid acquisition, analytics, funnel performance, lifecycle, and reporting so teams can see what is actually driving growth."
  },
  {
    title: "Manual Analytics Operations",
    copy: "I use automation and AI-assisted workflows to reduce repetitive reporting, QA, investigation, and documentation work."
  }
];

const expertise = [
  {
    title: "Measurement & Analytics",
    role: "Foundation",
    items: [
      "Measurement architecture",
      "Web analytics and marketing analytics",
      "Event taxonomy and GA4/GTM governance",
      "Attribution and funnel analysis",
      "Analytics QA and data quality",
      "Measurement standards and metric definitions",
      "Privacy-aligned analytics and cross-platform reconciliation"
    ]
  },
  {
    title: "Performance Marketing",
    role: "Acquisition",
    items: [
      "Meta Ads strategy and management",
      "Google Ads strategy and optimization",
      "Creative testing systems",
      "Campaign structure and audience strategy",
      "Paid acquisition and media optimization",
      "Measurement-led budget decisions",
      "Paid media measurement"
    ]
  },
  {
    title: "Growth Systems",
    role: "Full Funnel",
    items: [
      "Funnel strategy and CRO",
      "Offer architecture",
      "Shopify funnel analysis",
      "Lifecycle email and SMS",
      "Retention and experimentation",
      "Revenue visibility and analysis",
      "Growth decision-making"
    ]
  },
  {
    title: "AI, Data & Automation",
    role: "Technical Multiplier",
    items: [
      "Claude Enterprise and Claude Code",
      "MCP integrations and AI Skills",
      "Enterprise data querying and agentic workflows",
      "BigQuery, Databricks, and SQL",
      "Databricks Genie, Dataform, and GCP",
      "IAM, OAuth, and PAT-based access",
      "AI-assisted analytics, QA, and automation"
    ]
  }
];

const technologyStack = [
  ["Analytics Platforms", "GA4 · Adobe Analytics · GTM · Looker Studio"],
  ["Data & Engineering", "BigQuery · Databricks · SQL · Dataform"],
  ["Cloud & Governance", "GCP · IAM · OneTrust"],
  ["Performance Marketing & Ecommerce", "Meta Ads · Meta Pixel · CAPI · Google Ads · Shopify"],
  ["AI & Automation", "Claude Enterprise · Claude Code · MCP · AI Skills · Databricks Genie · ChatGPT · Copilot · agentic workflows"]
];

export default function Home() {
  return (
    <main>
      <section className="grid-lines border-b border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10 lg:py-36">
          <p className="kicker mb-7">Measurement · Analytics · Performance Marketing · Growth</p>
          <h1 className="text-balance max-w-6xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[6rem]">
            Analytics Platform · Measurement · Growth Systems
          </h1>
          <p className="mt-9 max-w-4xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">
            Building trusted measurement systems, reliable analytics infrastructure, and full funnel growth systems that connect paid acquisition to real business outcomes.
          </p>
          <p className="mt-6 max-w-5xl text-sm font-semibold leading-7 text-zinc-500 sm:text-base">
            Measurement Architecture · Marketing Analytics · Attribution · Performance Marketing · Growth Analytics · AI Automation
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-[#b8f36b] px-6 py-3 text-sm font-semibold text-[#0a0b0d] hover:brightness-110">View Selected Work</a>
            <a href="#expertise" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5">Explore Expertise</a>
            <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5">Contact Me</a>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/8 px-6 lg:grid-cols-4 lg:px-10">
          {[
            ["20 to 50%", "improvement in reported conversion accuracy"],
            ["171/171", "Google Merchant Center variants approved"],
            ["18+", "brands and organizations supported"],
            ["Enterprise to DTC", "measurement and growth experience"]
          ].map(([value, label]) => (
            <div key={value} className="min-h-40 px-5 py-8 first:pl-0 lg:min-h-48 lg:px-8 lg:py-10">
              <div className="text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{value}</div>
              <p className="mt-3 max-w-[16rem] text-sm leading-6 text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-b border-white/8 bg-white/[.015]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-28">
          <div>
            <p className="kicker mb-4">About</p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-.045em] sm:text-5xl">The full system between acquisition, analytics, conversion, and growth.</h2>
          </div>
          <div className="space-y-5">
            <p className="text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">I work at the intersection of measurement, analytics platforms, performance marketing, and growth. I design and govern the systems behind trustworthy digital analytics, then use those systems to understand acquisition, attribution, funnel performance, conversion, and revenue.</p>
            <p className="leading-8 text-zinc-400">My experience spans enterprise organizations, agencies, subscription businesses, ecommerce brands, and growth-stage companies. I work across marketing, product, engineering, and data teams to solve the problems that happen between ad spend, customer behavior, analytics platforms, and reliable business reporting.</p>
            <p className="leading-8 text-zinc-400">I do more than audit or report. I diagnose the problem, implement the solution, validate the data, build the reporting, and help teams use the results to make better marketing and growth decisions.</p>
            <p className="font-semibold leading-8 text-zinc-200">The goal is simple: build systems teams can trust and use those systems to grow more efficiently.</p>
          </div>
        </div>
      </section>

      <section id="enterprise" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="mb-12 max-w-3xl">
          <p className="kicker mb-4">Enterprise Analytics Experience</p>
          <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Enterprise scale before the case studies.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">Platform, governance, performance, and reporting experience across large organizations, presented at the level appropriate for public portfolio work.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {enterpriseExperience.map((item) => (
            <article key={item.company} className="panel rounded-3xl p-7 sm:p-8">
              <p className="text-sm font-semibold text-[#b8f36b]">{item.company}</p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-.03em]">{item.title}</h3>
              <p className="mt-5 leading-7 text-zinc-400">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="kicker mb-4">What I Solve</p>
            <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Problems that sit between spend and trustworthy growth.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {solveAreas.map((item, index) => (
              <article key={item.title} className="panel rounded-3xl p-7 sm:p-8">
                <span className="text-xs font-semibold text-zinc-600">0{index + 1}</span>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="mb-12 max-w-4xl">
          <p className="kicker mb-4">Selected Work</p>
          <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Measurement and active growth execution in the same portfolio.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">The work shows the progression from fixing the data, to connecting the funnel, understanding attribution, running paid acquisition, optimizing conversion, and growing the business.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study) => <CaseStudyCard key={study.slug} study={study} />)}
        </div>
      </section>

      <section id="expertise" className="border-y border-white/8 bg-white/[.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="mb-12 max-w-4xl">
            <p className="kicker mb-4">Expertise</p>
            <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Capabilities first. Tools second.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">Measurement and analytics form the foundation. Performance marketing drives acquisition. Growth systems connect the full funnel. AI, data, cloud, and automation multiply the operating leverage.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {expertise.map((group) => (
              <article key={group.title} className="panel rounded-3xl p-7 sm:p-8">
                <div className="flex items-center justify-between gap-5">
                  <h3 className="text-2xl font-semibold tracking-[-.03em]">{group.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-[.14em] text-[#b8f36b]">{group.role}</span>
                </div>
                <ul className="mt-6 grid gap-3 text-zinc-400 sm:grid-cols-2">
                  {group.items.map((item) => <li key={item} className="border-t border-white/8 pt-3 leading-6">{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-[#b8f36b]/20 bg-[#b8f36b]/[.06] p-7 sm:p-8">
            <p className="kicker mb-3">Data Quality & Governance</p>
            <p className="max-w-5xl text-lg leading-8 text-zinc-300">Measurement standards, analytics QA, event governance, metric definitions, access controls, privacy-aligned analytics, and cross-platform reconciliation are built into the way I operate.</p>
          </div>
          <div className="mt-5 rounded-3xl border border-white/10 bg-[#0c0e12] p-7 sm:p-8">
            <p className="kicker mb-3">AI & Analytics Automation</p>
            <p className="max-w-5xl text-lg leading-8 text-zinc-300">Building AI-enabled analytics workflows using Claude Enterprise, Claude Code, reusable AI Skills, and MCP integrations to query governed enterprise data, support QA and investigation, automate documentation and reporting, and connect AI assistants to analytics platforms securely. Experience includes OAuth and PAT-based access, Databricks Genie, Google Cloud, and agentic workflow design.</p>
          </div>
        </div>
      </section>

      <section id="technology" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="mb-12 max-w-3xl">
          <p className="kicker mb-4">Technology Stack</p>
          <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">The tools support the operating system.</h2>
        </div>
        <div className="grid gap-3">
          {technologyStack.map(([title, tools]) => (
            <div key={title} className="panel grid gap-3 rounded-2xl p-5 sm:grid-cols-[220px_1fr] sm:items-center sm:p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="leading-7 text-zinc-400">{tools}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#b8f36b]/25 bg-[#b8f36b] p-8 text-[#090b0d] sm:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[.16em]">Contact</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Measurement, performance marketing, and growth connected end to end.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#20251b]">For roles, consulting work, or conversations about building more trustworthy growth systems.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="mailto:kalifamshabazz@gmail.com" className="rounded-full bg-[#090b0d] px-6 py-3 text-sm font-semibold text-white">Email Me</a>
            <a href="https://www.linkedin.com/in/kalifashabazz/" target="_blank" rel="noreferrer" className="rounded-full border border-black/30 px-6 py-3 text-sm font-semibold text-[#090b0d]">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}
