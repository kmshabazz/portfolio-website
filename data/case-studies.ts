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
    eyebrow: "Analytics & Measurement · Ecommerce · Paid Media",
    title: "Restore trust in your data.",
    shortTitle: "Conversion Tracking Repair",
    summary: "Rebuilt a fragmented conversion measurement system so analytics, CRM, and paid media platforms could be used for confident optimization.",
    impact: "20 to 50% improvement in conversion tracking accuracy",
    businessImpact: "Restored leadership confidence and enabled more reliable paid media decisions.",
    stack: ["GA4", "GTM", "Meta Pixel", "CAPI", "GHL", "Attribution"],
    challenge: [
      "Conversion reporting differed between analytics and ad platforms.",
      "Funnel data was inconsistent across tools.",
      "Event duplication was corrupting optimization signals.",
      "Leadership had lost confidence in reporting."
    ],
    approach: [
      "Audited GA4, GTM, CRM, and Meta Pixel implementations end to end.",
      "Identified trigger and parameter inconsistencies.",
      "Re-architected lead conversion and funnel events.",
      "Implemented web and server-side deduplication logic."
    ],
    outcome: [
      "Improved conversion tracking accuracy by 20 to 50%.",
      "Re-established confidence in analytics and paid media reporting.",
      "Enabled more dependable optimization and spend decisions.",
      "Created a cleaner foundation for ongoing growth."
    ]
  },
  {
    slug: "yippee-tv-full-funnel",
    number: "02",
    eyebrow: "Yippee TV · Subscription · Streaming",
    title: "See your full funnel.",
    shortTitle: "Yippee TV Full-Funnel Measurement",
    summary: "Unified trial, paid subscription, blog, and advertising data into one measurement system with reliable revenue visibility.",
    impact: "Full-funnel revenue visibility across the subscription lifecycle",
    businessImpact: "Improved marketing decision-making and channel investment.",
    stack: ["GA4", "GTM", "Google Ads", "Looker Studio", "Attribution", "Revenue Tracking"],
    challenge: [
      "Incomplete visibility across blog, trial, and paid subscription stages.",
      "Revenue attribution was inconsistent across GA4, GTM, and Google Ads.",
      "Conversion definitions conflicted across platforms.",
      "Blog and subscription data lived in separate views."
    ],
    approach: [
      "Validated trial-start and paid-purchase events.",
      "Routed accurate revenue from GA4 into Google Ads for ROAS measurement.",
      "Unified blog and subscription behavior into one funnel view.",
      "Built first-touch and last-touch attribution reporting in Looker Studio."
    ],
    outcome: [
      "Created a reliable view of the full subscription funnel.",
      "Aligned revenue and conversion data across platforms.",
      "Allowed channels to be evaluated on their true performance impact.",
      "Built a scalable foundation for future testing and growth."
    ]
  },
  {
    slug: "shabazz-seafood-growth",
    number: "03",
    eyebrow: "Shabazz Seafood · Local to National",
    title: "Zero to Netflix.",
    shortTitle: "Shabazz Seafood Growth System",
    summary: "Built the digital marketing and measurement foundation for a local food business, turning offline demand into a measurable growth engine.",
    impact: "From no digital footprint to national visibility",
    businessImpact: "Scaled brand visibility and demand, contributing to a feature on Netflix’s Fresh, Fried & Crispy.",
    stack: ["GA4", "Meta Ads", "Paid Social", "Content Strategy", "Website", "Growth Analytics"],
    challenge: [
      "No website, analytics, or conversion tracking.",
      "Growth depended on word of mouth and foot traffic.",
      "No visibility into how marketing influenced demand.",
      "No structured digital growth strategy."
    ],
    approach: [
      "Built the website and digital marketing foundation.",
      "Established social channels and content strategy.",
      "Launched paid social to drive awareness and foot traffic.",
      "Implemented GA4 and conversion tracking end to end."
    ],
    outcome: [
      "Created a fully operational digital growth system from zero.",
      "Used paid social to drive measurable customer demand.",
      "Built repeatable event-driven revenue opportunities.",
      "Sustained brand momentum that contributed to national streaming visibility."
    ]
  },
  {
    slug: "kali-luxe-dtc-growth",
    number: "04",
    eyebrow: "Kali Luxe · DTC · Body Care",
    title: "Build a DTC growth system.",
    shortTitle: "Kali Luxe DTC Growth Engine",
    summary: "Built a full-funnel DTC operating system spanning positioning, paid acquisition, attribution, lifecycle, and measurement.",
    impact: "A complete DTC growth engine from positioning to retention",
    businessImpact: "Built a system designed for scalable revenue growth.",
    stack: ["Shopify", "Meta Ads", "Google Ads", "GA4", "Omnisend", "Attribution"],
    challenge: [
      "No defined brand intelligence, mechanism, or customer avatar.",
      "Paid media needed to be built from scratch.",
      "Attribution and lifecycle measurement needed a consistent structure."
    ],
    approach: [
      "Developed customer avatar, positioning, and messaging frameworks.",
      "Built Meta paid social strategy and creative direction.",
      "Structured Google Ads, cross-channel attribution, and lifecycle measurement.",
      "Connected acquisition, retention, tracking audits, and conversion alignment into one operating system."
    ],
    outcome: [
      "Established cross-channel attribution and conversion alignment.",
      "Connected acquisition and retention into one lifecycle system.",
      "Built a full-funnel analytics and growth foundation.",
      "Created a repeatable operating model designed for scale."
    ]
  }
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
