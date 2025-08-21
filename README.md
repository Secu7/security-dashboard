# Security Dashboard

**Live Demo:** https://security-dashboard-beta.vercel.app/

A clean, recruiter-friendly security analytics dashboard prototype. It highlights key SOC metrics (incidents, detection rate, and MTTR), time-series trends, and severity filtering in a responsive layout.

## Features
- KPI cards: Incidents, Detection Rate, Mean Time to Respond (MTTR)
- Time-series charts for events/logs with quick time ranges
- Severity filters and a simple faceted search
- Responsive, accessible UI (desktop → mobile)
- Modular components (cards, charts, filters) for easy extension

## Tech Stack
- UI: v0.app generated layout/components (customized)
- Hosting: Vercel (preview & production)
- Tooling: Git + GitHub (CI-ready)

> Note: This repository focuses on the **UI/UX**. A backend API can be attached later (alerts, detections, triage, analyst notes).

## Getting Started (Local)
```bash
# 1) Install dependencies
pnpm i   # or: npm i

# 2) Run dev server
pnpm dev # or: npm run dev

# 3) Build (if applicable)
pnpm build
