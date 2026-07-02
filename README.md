# Mohs Mobile Pros — Website

This repository contains a production-ready scaffold for the Mohs Mobile Pros public website using Next.js (app router), TypeScript, and Tailwind CSS.

Features
- Next.js App Router structure
- TypeScript support
- Tailwind CSS configured
- Responsive, accessible components
- SEO metadata, robots.txt, sitemap.xml
- Public assets (logo + hero SVG)

Quick start

1. Install dependencies

   npm install

2. Run the dev server

   npm run dev

3. Build for production

   npm run build && npm run start

Accessibility & SEO notes
- Colors and contrast chosen for strong accessibility; test with axe/ Lighthouse for WCAG AA.
- Metadata in app/layout.tsx provides basic SEO and OpenGraph information.

Customize
- Update site metadata in src/app/layout.tsx
- Add real images to /public and reference them from components

Deployment
- Deploy to Vercel for best compatibility with Next.js.

