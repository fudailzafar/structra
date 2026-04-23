# Structra — Landing Page Template

A minimal, production-ready landing page template built with Next.js 14, designed for SaaS products, developer tools, and professional services. Edit one file to make it yours.

---

## Features

- **Single-file content system** — all copy lives in `/data/siteContent.ts`. No digging through components.
- **Built with Next.js 14 App Router** — server components by default, client components only where needed.
- **Subtle, engineered animations** — Framer Motion with scroll-triggered reveals, staggered entrances, and interactive transitions.
- **Industrial design system** — grid-based layout, 1px borders, monospaced labels, and a typographic hierarchy that feels precise.
- **Fully responsive** — optimized for mobile, tablet, and desktop.
- **Vercel-ready** — static pre-rendering, optimized bundle, zero-config deployment.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org) | Framework (App Router) |
| [React 18](https://react.dev) | UI |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Framer Motion](https://motion.dev) | Animation |

## Getting Started

```bash
git clone https://github.com/fudailzafar/structra.git
cd structra
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Design tokens, base resets, Tailwind
│   ├── layout.tsx         # Root layout with metadata (Server Component)
│   └── page.tsx           # Home page composition (Server Component)
├── components/
│   ├── sections/          # Hero, Process, Pricing, FAQ, etc.
│   └── ui/                # Container, ButtonLink, SectionHeader, etc.
├── data/
│   └── siteContent.ts     # All site copy — edit this file
└── lib/
    └── motion.ts          # Shared animation presets
```

## Customization

All content is centralized in a single file:

```
src/data/siteContent.ts
```

This file contains every heading, paragraph, button label, pricing tier, FAQ item, and testimonial on the page. To rebrand the template:

1. Open `siteContent.ts`
2. Update the text values
3. Save — changes appear instantly in dev mode

No need to touch any component files. The components are purely presentational.

### Design Tokens

Colors, fonts, and spacing are defined as CSS custom properties in `globals.css`:

```css
:root {
  --fw-bg: #ffffff;
  --fw-text: #1f2123;
  --fw-muted: #5d6166;
  --fw-border: #d7dadf;
  --fw-accent: #ff5733;
  /* ... */
}
```

## Deployment

### Vercel (Recommended)

Push to GitHub and import the repository on [vercel.com](https://vercel.com). No configuration required.

### Manual Build

```bash
npm run build
npm start
```

## Sections

The template includes these sections out of the box:

- **Navbar** — sticky, with mobile hamburger menu
- **Hero** — headline, subtext, CTAs, mock UI window
- **Value** — centered statement + 4-column feature grid
- **Process** — 3-step operating model with mock UI blocks
- **Transformation** — interactive step switcher with preview panel
- **Testimonials** — carousel with arrow navigation
- **Pricing** — monthly/yearly toggle with animated price transitions
- **FAQ** — 2-column accordion with expand/collapse animations
- **Final CTA** — closing section with dual CTAs
- **Footer** — brand info, navigation, social links

## License

Licensed under the [MIT License](./LICENSE).