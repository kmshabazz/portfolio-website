# Kalifa Shabazz — Portfolio Website

A recruiter- and client-facing portfolio for Kalifa Shabazz, focused on analytics platform operations, measurement, attribution, analytics engineering, and growth systems.

## Stack

- Next.js 16.3
- React
- Tailwind CSS v4 via PostCSS
- TypeScript
- Static export for simple deployment

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
```

The project is configured with `output: "export"`, so the static site is written to `out/`.

## Deploy to Vercel

1. Create a new GitHub repository named `portfolio-website`.
2. Push this project to the repository.
3. Import the repository into Vercel.
4. Add your custom domain (recommended: `kalifashabazz.com`).

## Portfolio content architecture

- Homepage with positioning and selected outcomes
- Four detailed case studies
- Capability areas organized by business problem
- Technical/GitHub work
- Experience summary
- Resume download
- Contact CTA

## Recommended next iterations

1. Add a sanitized `ga4-data-quality-validator` repo and feature it first in Technical Work.
2. Add a `ga4-bigquery-funnel-analysis` repo.
3. Add screenshots/diagrams to case studies where client confidentiality allows.
4. Add GA4 + GTM measurement to the portfolio itself and document the implementation as a technical case study.
5. Add a custom Open Graph image and favicon.

## Contact links

- LinkedIn: https://www.linkedin.com/in/kalifashabazz/
- GitHub: https://github.com/kmshabazz
- Email: info@kmandcompany.com
