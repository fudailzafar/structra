/* ─────────────────────────────────────────────────────────
 * STRUCTRA — Centralized Site Content
 * ─────────────────────────────────────────────────────────
 * Single source of truth for all landing page copy.
 * Edit content here — components are purely presentational.
 * ───────────────────────────────────────────────────────── */

// ─── Shared types ───

export type NavLink = {
  label: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  firm: string;
};

export type PricingPlan = {
  name: string;
  monthly: number | null;
  yearly: number | null;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  isPrimary?: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ValueFeature = {
  id: string;
  title: string;
  description: string;
};

// ─── Site content ───

export const siteContent = {
  // ── Brand ──
  brand: {
    name: "STRUCTRA",
    tagline: "Transform field photos and notes into structured progress reports. No admin overhead. No lost context.",
    copyright: "© 2026 Structra",
  },

  // ── Navigation ──
  navbar: {
    links: [
      { label: "Process", href: "#process" },
      { label: "Transformation", href: "#transformation" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ] as NavLink[],
    cta: "Start Free Trial",
  },

  // ── Hero ──
  hero: {
    kicker: "Site Documentation Platform",
    title: "Site documentation\nthat works\nlike you do.",
    subtitle:
      "Transform field photos and notes into structured progress reports. No admin overhead. No lost context.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "See Process", href: "#process" },
    trialNote: "14-day free trial. No credit card required.",
    mockWindow: {
      title: "Weekly Progress Report",
      date: "Apr 23",
      badge: { label: "Live Sync", description: "Field notes auto-grouped by phase" },
    },
  },

  // ── Value / Benefits ──
  value: {
    statement:
      "Built for teams that need clarity in the field — capture, structure, and deliver documentation without friction.",
    heading: "Why Structra?",
    subheading:
      "Designed for teams that need fast, structured, and reliable site documentation.",
    features: [
      {
        id: "capture",
        title: "Capture in the Field",
        description:
          "Record photos, notes, and voice inputs instantly without interrupting your workflow.",
      },
      {
        id: "structure",
        title: "Auto-Structure Data",
        description:
          "Organize entries by project, phase, and date automatically with zero manual sorting.",
      },
      {
        id: "reports",
        title: "Generate Reports",
        description:
          "Turn raw field inputs into clean, client-ready progress reports in minutes.",
      },
      {
        id: "consistency",
        title: "Consistent Documentation",
        description:
          "Standardize reporting across teams and projects with zero manual effort.",
      },
    ] as ValueFeature[],
  },

  // ── Process ──
  process: {
    kicker: "Operating Model",
    heading: "Three steps. Zero friction.",
    description:
      "From field capture to client-ready documentation in one continuous workflow.",
    steps: [
      {
        step: "01",
        title: "Capture",
        description:
          "Take site photos and voice notes directly in the field without switching tools.",
      },
      {
        step: "02",
        title: "Contextualize",
        description:
          "Structra groups updates by date, location, and project stage automatically.",
      },
      {
        step: "03",
        title: "Communicate",
        description:
          "Generate clean, client-ready reports in minutes with consistent structure.",
      },
    ] as ProcessStep[],
  },

  // ── Transformation ──
  transformation: {
    kicker: "Transformation",
    heading: "From chaos to clarity.",
    description:
      "See how raw field data becomes structured, client-ready documentation.",
    steps: [
      {
        id: 0,
        step: "01",
        title: "Capture",
        description:
          "Take photos, notes, and voice memos directly on site. No context switching.",
      },
      {
        id: 1,
        step: "02",
        title: "Contextualize",
        description:
          "Entries are grouped by project, phase, date, and location automatically.",
      },
      {
        id: 2,
        step: "03",
        title: "Communicate",
        description:
          "Generate structured, client-ready progress reports in minutes.",
      },
    ],
  },

  // ── Testimonials ──
  testimonials: {
    heading: "Trusted by teams that build in the real world.",
    items: [
      {
        quote:
          "We cut reporting time from 4 hours to 15 minutes per week. The ROI was immediate.",
        name: "Sarah Chen",
        role: "Principal",
        firm: "Chen Architecture",
      },
      {
        quote:
          "Finally, a system that fits how construction teams actually work. No fluff, just clarity.",
        name: "Mike Davison",
        role: "Operations Director",
        firm: "Davison Construction Group",
      },
      {
        quote:
          "Our clients now get cleaner updates with less effort from the team on site.",
        name: "James Park",
        role: "Project Lead",
        firm: "Park Development Co.",
      },
    ] as Testimonial[],
  },

  // ── Pricing ──
  pricing: {
    heading: "Simple, transparent pricing.",
    subheading: "Three plans built on the same reporting architecture.",
    plans: [
      {
        name: "Starter",
        monthly: 19,
        yearly: 15,
        features: [
          "Up to 3 active projects",
          "Basic reporting",
          "Photo capture",
          "PDF export",
          "No team collaboration",
        ],
        ctaLabel: "Get Started",
        ctaHref: "#top",
      },
      {
        name: "Professional",
        monthly: 49,
        yearly: 39,
        features: [
          "Unlimited projects",
          "Unlimited reports",
          "Photo and voice capture",
          "PDF export",
          "Team collaboration",
          "Cloud storage",
          "Priority support",
        ],
        ctaLabel: "Start Free Trial",
        ctaHref: "#top",
        isPrimary: true,
      },
      {
        name: "Enterprise",
        monthly: null,
        yearly: null,
        features: [
          "Everything in Professional",
          "Advanced analytics",
          "Dedicated support",
          "Custom integrations",
        ],
        ctaLabel: "Contact Sales",
        ctaHref: "mailto:hello@structra.io",
      },
    ] as PricingPlan[],
  },

  // ── FAQ ──
  faq: {
    kicker: "Support",
    heading: "Frequently asked questions",
    subheading:
      "Technical answers for teams evaluating site documentation workflows.",
    items: [
      {
        id: "capture-flow",
        question: "How does Structra turn field photos into reports?",
        answer:
          "Teams capture photos and notes directly on site. Structra automatically groups entries by date, location, and project phase, then generates a formatted progress report ready for client review.",
      },
      {
        id: "report-consistency",
        question: "Can report format stay consistent across projects?",
        answer:
          "Yes. Structra enforces a stable reporting skeleton while allowing project-specific detail. Weekly site documentation stays comparable for clients, PMs, and leadership.",
      },
      {
        id: "team-adoption",
        question: "How quickly can a field team adopt the workflow?",
        answer:
          "Most teams are operational within the first week. The construction reporting workflow removes admin steps instead of adding them.",
      },
      {
        id: "audit-readiness",
        question: "Is documentation suitable for audit and claims?",
        answer:
          "Captured events are timestamped with contextual metadata, creating a verifiable project record suitable for audits, regulatory reviews, and formal claim support.",
      },
      {
        id: "offline-support",
        question: "Does Structra work offline on construction sites?",
        answer:
          "Capture works with intermittent connectivity and data syncs automatically when connection is restored. No field reporting data is lost.",
      },
      {
        id: "vs-pm-tools",
        question: "How is this different from project management tools?",
        answer:
          "PM tools manage tasks and timelines. Structra focuses on site documentation — converting raw field observations into structured, client-ready reports.",
      },
    ] as FaqItem[],
  },

  // ── Final CTA ──
  finalCta: {
    kicker: "Deployment Ready",
    heading: "Ship field reporting with engineering-grade precision.",
    description:
      "Move from fragmented notes to client-ready documentation with one consistent operating model.",
    primaryCta: { label: "Start Free Trial", href: "#pricing" },
    secondaryCta: { label: "Read Our Approach", href: "#process" },
  },

  // ── Footer ──
  footer: {
    navigation: [
      { label: "Process", href: "#process" },
      { label: "Transformation", href: "#transformation" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ] as FooterLink[],
    socials: [
      { label: "Instagram", href: "https://instagram.com", external: true },
      { label: "Facebook", href: "https://facebook.com", external: true },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
      { label: "Twitter", href: "https://x.com", external: true },
    ] as FooterLink[],
  },
};
