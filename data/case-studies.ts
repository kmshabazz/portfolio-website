export type CaseStudy = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  impact: string;
  businessImpact: string;
  stack: string[];
  challenge: string[];
  approach: string[];
  outcome: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "conversion-tracking-repair",
    number: "01",
    eyebrow: "Measurement Architecture",
    title: "Restore trust in your data.",
    shortTitle: "Conversion Tracking Repair",
    summary: "Rebuilt a fragmented conversion measurement system so analytics, CRM, and paid media platforms could be used for confident optimization.",
    impact: "20 to 50% improvement in reported conversion accuracy",
    businessImpact: "Restored leadership confidence and enabled paid media optimization using cleaner conversion signals.",
    stack: ["GA4", "GTM", "Meta Pixel", "CAPI", "CRM", "Attribution"],
    challenge: [
      "Conversion counts differed across analytics, CRM, and ad platforms.",
      "Duplicate events were corrupting paid media optimization signals.",
      "Funnel data was inconsistent, leaving no reliable view of lead or purchase volume.",
      "Leadership had lost confidence in reporting across tools."
    ],
    approach: [
      "Audited GA4, GTM, CRM, and Meta Pixel implementations end to end.",
      "Identified trigger and parameter inconsistencies causing double counting.",
      "Re-architected lead conversion and funnel events with consistent logic.",
      "Implemented deduplication across browser and server-side signals."
    ],
    outcome: [
      "Corrected duplicated and inconsistent lead and purchase events across platforms.",
      "Improved reported conversion accuracy by approximately 20 to 50% depending on funnel stage.",
      "Restored confidence in campaign and funnel reporting.",
      "Enabled paid media optimization using cleaner, reliable conversion signals."
    ]
  },
  {
    slug: "liquidpower-measurement-system",
    number: "02",
    eyebrow: "Analytics Platform & Reporting",
    title: "Build a self-service measurement system.",
    shortTitle: "LiquidPower Measurement System",
    summary: "Built reusable analytics reporting and measurement documentation across two web properties for a Berkshire Hathaway subsidiary.",
    impact: "Reusable reporting and QA across 2 web properties",
    businessImpact: "Created a consistent operating system for quarterly reporting, validation, anomaly investigation, and future measurement planning.",
    stack: ["GA4", "Looker Studio", "Search Console", "Measurement Governance", "Analytics QA"],
    challenge: [
      "Two active GA4 properties had no centralized reporting system or formal measurement documentation.",
      "Quarterly reporting required stakeholders to interpret GA4 and Search Console data across separate sources.",
      "Teams needed clearer visibility into acquisition, content engagement, geography, devices, recruiting journeys, and referral traffic.",
      "No standardized process existed for dashboard validation, anomaly investigation, or documenting GA4 configuration decisions."
    ],
    approach: [
      "Audited GA4 across both properties and documented configuration gaps, settings, and tracking recommendations.",
      "Built dedicated Looker Studio reporting for both sites covering KPIs, acquisition, content, and recruiting behavior.",
      "Created a measurement documentation system with a metric dictionary, GA4 settings log, dashboard documentation, and user guide.",
      "Designed recurring QA and investigation workflows to reconcile dashboards against GA4 and investigate unusual traffic patterns."
    ],
    outcome: [
      "Established reusable analytics dashboards for two web properties.",
      "Standardized reporting across executive KPIs, acquisition, geography, devices, content engagement, events, and user journeys.",
      "Delivered an internal measurement operating system spanning documentation, metric definitions, user instructions, configuration guidance, and QA.",
      "Created a repeatable quarterly validation framework and a stronger foundation for future website optimization."
    ]
  },
  {
    slug: "yippee-tv-full-funnel",
    number: "03",
    eyebrow: "Attribution & Funnel Analytics",
    title: "See the full subscription funnel.",
    shortTitle: "Yippee TV Full-Funnel Analytics",
    summary: "Unified traffic, trial starts, subscriptions, revenue, and attribution into one reporting system for a subscription streaming platform.",
    impact: "Full funnel revenue visibility across the subscription lifecycle",
    businessImpact: "Improved channel evaluation by aligning conversion and revenue data across analytics, advertising, and reporting.",
    stack: ["GA4", "GTM", "Google Ads", "Looker Studio", "Attribution", "Revenue Tracking"],
    challenge: [
      "Customer journey visibility was incomplete across blog, free trial, and paid subscription stages.",
      "Revenue attribution was inconsistent across GA4, GTM, and Google Ads.",
      "Conversion definitions conflicted across platforms.",
      "Blog and subscription data were siloed with no unified reporting."
    ],
    approach: [
      "Designed Looker Studio reporting covering traffic, trial starts, purchases, revenue, and the blog-to-subscription journey.",
      "Standardized conversion definitions for trial starts and paid purchases.",
      "Validated revenue events and aligned accurate data into Google Ads for ROAS reporting.",
      "Built first-touch and last-touch attribution reporting to evaluate channel performance."
    ],
    outcome: [
      "Created a reliable view across the full subscription funnel.",
      "Aligned revenue and conversion data across GA4, Google Ads, and Looker Studio.",
      "Enabled marketing channels to be evaluated on true performance impact.",
      "Built a scalable analytics foundation for ongoing testing and growth."
    ]
  },
  {
    slug: "orimi-growth-infrastructure",
    number: "04",
    eyebrow: "Ecommerce Data & Growth Infrastructure",
    title: "Build the infrastructure for luxury DTC growth.",
    shortTitle: "ORIMI Growth Infrastructure",
    summary: "Fixed Google Merchant Center product eligibility and connected analytics, ecommerce, paid media, and growth planning for a luxury fine jewelry brand.",
    impact: "171 of 171 product variants approved for Google Shopping",
    businessImpact: "Established the ecommerce and measurement infrastructure needed to support paid acquisition, reporting, creative testing, and first-sale planning.",
    stack: ["Google Merchant Center", "Shopify", "GA4", "Meta Ads", "Looker Studio", "SEO"],
    challenge: [
      "A new DTC store had no ad history, pixel benchmarks, or conversion history.",
      "All 171 Google Merchant Center product variants had errors or disapprovals.",
      "Shopify, Meta, GA4, and Merchant Center were live but operating in silos.",
      "The business needed strategic direction connecting ecommerce data, measurement, media, and growth planning."
    ],
    approach: [
      "Audited all 171 Merchant Center variants and diagnosed product-source, attribute, and title-sync issues.",
      "Removed the broken international product source and preserved Shopify as the primary product source.",
      "Applied search-optimized title overrides and updated required product attributes through Shopify.",
      "Built analytics and reporting infrastructure, a creative testing framework, and a structured first-sale growth roadmap."
    ],
    outcome: [
      "Achieved 171 of 171 product variants approved and eligible for Google Shopping.",
      "Connected the analytics stack across GA4, Merchant Center, Meta Pixel, and Looker Studio.",
      "Established a creative testing framework and first-sale roadmap for paid growth.",
      "Built reusable operating tools for brand intelligence, campaign planning, creative standards, and founder reporting."
    ]
  },
  {
    slug: "kali-luxe-dtc-growth",
    number: "05",
    eyebrow: "Performance Marketing & Growth Analytics",
    title: "Build a measurement-led DTC growth system.",
    shortTitle: "Kali Luxe",
    summary: "Built a full funnel DTC operating system spanning positioning, paid acquisition, creative testing, attribution, lifecycle, and conversion analysis.",
    impact: "2.18x first profitable ROAS",
    businessImpact: "Connected paid media, offer strategy, analytics, and lifecycle decisions into one measurable growth system.",
    stack: ["Shopify", "Meta Ads", "Google Ads", "GA4", "Email/SMS", "Attribution"],
    challenge: [
      "No defined brand intelligence, customer avatar, or differentiation mechanism.",
      "Meta and Google Ads needed to be built from scratch with no conversion history.",
      "Lifecycle marketing and attribution needed a consistent structure.",
      "Offer and funnel decisions needed to be tied back to measurable customer behavior."
    ],
    approach: [
      "Developed customer avatar, positioning, messaging, and offer frameworks.",
      "Built Meta paid acquisition strategy, campaign structure, and creative testing systems.",
      "Structured Google Ads, cross-channel attribution, and Shopify funnel analysis.",
      "Connected paid acquisition, lifecycle email and SMS, CRO, and retention into one operating system."
    ],
    outcome: [
      "Produced a first profitable Meta ad set at 2.18x ROAS.",
      "Identified a lowest-cost buyer segment at $19.54 per purchase.",
      "Restructured the offer from a flat bundle into a tiered value ladder.",
      "Built a repeatable measurement and growth foundation spanning acquisition through retention."
    ]
  },
  {
    slug: "shabazz-seafood-growth",
    number: "06",
    eyebrow: "Digital Growth Infrastructure",
    title: "Build digital growth infrastructure from zero.",
    shortTitle: "Shabazz Seafood",
    summary: "Built the website, analytics, paid media, content, and event growth foundation for a local food business.",
    impact: "From no digital footprint to national visibility",
    businessImpact: "Built measurable demand and repeatable growth systems that supported the brand's expansion into national media visibility.",
    stack: ["Website", "GA4", "Meta Ads", "Paid Social", "Content Strategy", "Growth Analytics"],
    challenge: [
      "No website, analytics, or conversion tracking.",
      "Growth depended on word of mouth and foot traffic.",
      "There was no visibility into how marketing influenced customer demand.",
      "No structured digital strategy existed to expand beyond the local community."
    ],
    approach: [
      "Built the website and digital marketing foundation from scratch.",
      "Established social channels and a consistent content strategy.",
      "Launched paid social to drive awareness and foot traffic.",
      "Implemented analytics and conversion tracking and built event-driven growth programs."
    ],
    outcome: [
      "Created a fully operational digital growth system from zero.",
      "Paid media and social drove measurable customer demand and in-store traffic.",
      "Event-based marketing created recurring revenue and community engagement.",
      "Sustained digital growth supported national visibility, including a feature on Netflix's Fresh, Fried & Crispy."
    ]
  }
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
