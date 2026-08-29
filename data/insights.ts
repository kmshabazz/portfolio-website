export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "phd-track-to-analytics",
    title: "From the PhD Track to Analytics: Reinventing My Career",
    description: "How a failed PhD qualifying exam led me to rethink my skills, discover analytics, and build a career in technology.",
    category: "Career",
    date: "2026-02-01",
    body: [
      `I was a Bill Gates Millennium Scholar on the PhD track and still had to reinvent my career.`,
      `Full ride through undergrad. Master's funded. PhD funded. Zero debt. Every box checked.`,
      `Then I failed my PhD qualifying exam. Twice.`,
      `Suddenly, the clear path I had followed for years just ended. No Plan B. No backup career. Just a master's degree and the feeling that I had done everything “right” and still felt lost.`,
      `My mentor said something that broke through the panic: “Skills will take you farther than degrees.”`,
      `So I took an honest look at what I had been doing for years: research design, data analysis, translating complex findings into clear insights.`,
      `These were not just academic skills. They were valuable outside the university too. I just did not know there was a career built around them.`,
      `That is when I found data analytics. I joined a bootcamp and started applying what I was learning to a real restaurant business. Not hypothetical datasets, but real, messy problems.`,
      `Something shifted for me. I was not performing for a committee anymore. I was solving problems that actually mattered to someone's business.`,
      `In November 2020, I landed my first corporate role as a Web Analytics Analyst at Honeywell.`,
      `Today, I am still in tech, building, teaching, and learning what it means to grow outside the academic path I once thought I needed.`,
      `A nonlinear path is not evidence that you failed. It is evidence that your skills were ready for a different stage. Your academic training was not wasted. It just needed a new application.`
    ]
  },
  {
    slug: "job-didnt-exist-career-ai-analytics",
    title: "The Job I Do Today Didn't Exist When I Started My Career",
    description: "How analytics work has evolved from reporting into platforms, governance, automation, and AI-enabled workflows.",
    category: "AI & Analytics",
    date: "2026-07-25",
    body: [
      `The job I do today didn't exist when I started my career.`,
      `Analytics has expanded far beyond dashboards and reporting. The work increasingly sits across measurement architecture, data quality, governance, cloud data, automation, and AI-enabled workflows.`,
      `One example changed how I think about that evolution. A recurring validation process that once took about 60 minutes could be reduced to about 5 minutes by turning the repeated checks into a reusable workflow.`,
      `The value was not simply doing the same task faster. It was changing where human attention was needed.`,
      `Instead of spending most of the time on repetitive comparisons, more time could go toward investigation, judgment, and solving the problems the validation surfaced.`,
      `That is what interests me about AI in analytics. Not replacing the expertise underneath the work, but making that expertise more scalable.`,
      `Roles are changing quickly. Sometimes the clearest sign is realizing that work you once did manually can now become part of a system.`
    ]
  },
  {
    slug: "ai-analytics-qa-60-to-5-minutes",
    title: "How I Used AI to Reduce an Analytics QA Workflow From 60 Minutes to 5",
    description: "A practical example of using AI to automate repetitive analytics validation while keeping human expertise at the center.",
    category: "AI & Analytics",
    date: "2026-07-07",
    body: [
      `One of the most valuable AI projects I've worked on didn't involve building a new product. It involved improving an existing workflow.`,
      `A percentage of my work involves validating digital data objects against established tracking specifications to ensure implementations are correct.`,
      `The work is important. But it was also repetitive. The same checks. The same comparisons. The same manual validation.`,
      `Instead of asking, “How can I do this faster?” I started asking, “Why am I doing this manually at all?”`,
      `So I built an internal validation tool that reduced the process from about 60 minutes to 5 minutes.`,
      `That experience changed how I think about AI.`,
      `For me, AI isn't about replacing analysts or marketers. It's about eliminating repetitive work so we can spend more time solving problems, improving systems, and helping businesses make better decisions.`,
      `That's where I believe AI creates the most value. Not by replacing expertise. By enabling it.`
    ]
  },
  {
    slug: "analytics-becoming-engineering-driven",
    title: "Why Analytics Roles Are Becoming More Engineering-Driven",
    description: "Why modern analytics increasingly requires transformation workflows, data quality, governance, and scalable systems alongside reporting.",
    category: "Analytics Engineering",
    date: "2026-06-15",
    body: [
      `One thing I've been realizing recently: analytics roles are becoming much more engineering-driven.`,
      `A few years ago, being strong in dashboards, reporting, and stakeholder communication could take you very far.`,
      `Today, the expectations are shifting toward data quality, transformation workflows, and scalable analytics systems.`,
      `In recent years, my own work has evolved from traditional web analytics into GA4 governance, behavioral analytics, attribution systems, BigQuery, Databricks, Dataform, and analytics quality workflows tied to real business decisions. At a scale where that work has real stakes.`,
      `What's been interesting is realizing how much overlap already exists between modern analytics engineering and the work many data analysts are already doing every day.`,
      `Transformation logic. Trusted metrics. Behavioral modeling. Measurement governance. Experimentation systems.`,
      `The tools evolve. The expectations evolve. But the core goal stays the same: build data systems people can trust to make decisions.`
    ]
  },
  {
    slug: "ga4-meta-shopify-different-questions",
    title: "GA4, Meta and Shopify Answer Different Questions",
    description: "Why cross-platform discrepancies are often a matter of measurement perspective rather than one platform simply being wrong.",
    category: "Measurement",
    date: "2026-07-02",
    body: [
      `One lesson that's become clearer with every project I've worked on: different analytics platforms aren't competing with each other. They're answering different questions.`,
      `Shopify answers: “How much revenue did my store generate?”`,
      `Meta answers: “What business outcomes can be attributed to my ads?”`,
      `GA4 answers: “How did users behave across my digital experience?”`,
      `None of those answers are wrong. They're simply different perspectives on the same customer journey.`,
      `Once you understand that, the conversation changes.`,
      `Instead of asking, “Why don't these numbers match?” you start asking, “What is each platform helping me understand?”`,
      `That shift changes how you analyze performance, communicate insights, and make business decisions.`,
      `Understanding the measurement ecosystem is often more valuable than memorizing another analytics tool.`
    ]
  },
  {
    slug: "measurement-problem-not-marketing-problem",
    title: "When the Problem Isn't Marketing — It's Measurement",
    description: "Why trustworthy tracking and attribution should be investigated before changing campaigns, audiences, or budgets.",
    category: "Measurement",
    date: "2026-06-20",
    body: [
      `One of my favorite types of analytics projects is when the problem isn't actually the marketing. It's the measurement.`,
      `I was brought into a project where the business was struggling to understand performance across its marketing channels. Conversion numbers didn't match between platforms. Attribution was inconsistent. And nobody was fully confident in the reporting.`,
      `Naturally, the conversation started with questions about campaigns, audiences, and budget allocation.`,
      `But before making any recommendations, I started somewhere else: Can we trust the data?`,
      `After auditing the implementation, I uncovered several tracking and measurement issues that were impacting reporting accuracy and attribution.`,
      `The business wasn't suffering from a marketing problem. It was suffering from a measurement problem.`,
      `Once the tracking was corrected and the data became more reliable, the team was finally able to evaluate performance with confidence and make better optimization decisions.`,
      `Projects like this remind me that some of the most impactful work in analytics happens long before a dashboard is built.`,
      `Before asking, “What happened?” first ask, “Can I trust the signal?” Because every decision that follows depends on that answer.`
    ]
  },
  {
    slug: "enterprise-analytics-business-decisions",
    title: "What Enterprise Analytics Taught Me About Real Business Decisions",
    description: "Lessons from my first corporate analytics role about clarity, trust, speed, communication, and working with messy real-world data.",
    category: "Career",
    date: "2026-06-10",
    body: [
      `One thing I underestimated when transitioning into analytics was how different it feels when the data starts impacting real business decisions.`,
      `When I landed my first corporate analytics role at Honeywell in 2020, I had analytics experience coming in. But enterprise analytics was a different environment entirely.`,
      `There were dashboards tied to marketing performance. Executives relying on reporting. Cross-functional meetings full of acronyms I had never heard before. Systems connected across teams, platforms, and business units.`,
      `I remember feeling genuinely overwhelmed.`,
      `Up until that point, most of my experience with data came from academic research and scientific analysis. Controlled environments. Clear hypotheses. Known variables. Corporate analytics is none of that.`,
      `The technical side did not scare me. What challenged me was realizing that analytics in the real world is not just about being correct.`,
      `It is about clarity. Trust. Speed. Communication. And helping people make decisions with confidence even when the data is messy.`,
      `That role changed how I thought about analytics completely. Good analytics is not just reporting. It is understanding behavior, investigating inconsistencies, translating complexity, and building systems people can actually rely on.`,
      `Looking back, Honeywell became the foundation for everything that came after: measurement systems, behavioral analytics, data quality, attribution, analytics engineering, and eventually working across high-traffic digital ecosystems where the stakes are real.`,
      `I did not have all the answers when I started. I just stayed in the room long enough to grow into them.`
    ]
  },
  {
    slug: "communication-is-an-analytics-skill",
    title: "Why Communication Is an Analytics Skill",
    description: "Technical accuracy matters, but analytics only creates value when people understand the work well enough to act on it.",
    category: "Analytics Leadership",
    date: "2026-06-12",
    body: [
      `One of the most underrated skills in analytics has nothing to do with SQL, dashboards, or visualization tools. It is communication.`,
      `Early in my career, I thought strong analytics work would automatically speak for itself. If the analysis was correct, the logic was solid, and the numbers were accurate, I assumed the work would naturally drive decisions.`,
      `That is not how it works in most organizations.`,
      `Analytics only becomes valuable when people understand it well enough to act on it.`,
      `Over time I realized the strongest analysts are not just technically skilled. They know how to translate complexity, simplify ambiguity, frame insights around business impact, and communicate findings in ways that different teams can actually absorb.`,
      `Executives, marketers, product managers, engineers, and operators do not all think the same way. Good analytics often requires becoming bilingual: technical enough to understand the systems and clear enough to explain what actually matters.`,
      `Ironically, my science background helped me more with this than I expected. My scientific research experiences taught me how to present findings, defend conclusions, handle uncertainty, and explain difficult concepts to people outside my field. The tools changed. That skill stayed valuable.`,
      `Strong analytics is not just about finding insights. It is about making them understandable enough to create action.`
    ]
  }
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
