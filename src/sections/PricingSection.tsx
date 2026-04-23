import { useState } from "react";
import { Container } from "../components/Container";
import { PricingTier } from "../components/PricingTier";
import { SectionHeader } from "../components/SectionHeader";

const PRICING_TIERS = [
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
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container>
        <SectionHeader
          id="pricing-heading"
          align="center"
          title="Simple, transparent pricing."
          description="Three plans built on the same reporting architecture."
        />

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className={`font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] transition-colors duration-150 ${
              !isYearly ? "text-[var(--fw-text)]" : "text-[var(--fw-muted)]"
            }`}
          >
            Monthly
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
            onClick={() => setIsYearly((prev) => !prev)}
            className="relative h-[26px] w-[50px] border border-[var(--fw-border-strong)] bg-[var(--fw-concrete)] transition-colors duration-150"
          >
            <span
              aria-hidden="true"
              className="absolute left-[3px] top-[3px] h-[18px] w-[18px] bg-[var(--fw-text)] transition-transform duration-200 ease-out"
              style={{ transform: isYearly ? "translateX(24px)" : "translateX(0)" }}
            />
          </button>

          <span className="flex items-center gap-2">
            <span
              className={`font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] transition-colors duration-150 ${
                isYearly ? "text-[var(--fw-text)]" : "text-[var(--fw-muted)]"
              }`}
            >
              Yearly
            </span>
            <span className="border border-[var(--fw-border)] px-2 py-0.5 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.12em] text-[var(--fw-muted)]">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 border border-[var(--fw-border)] bg-[var(--fw-bg)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {PRICING_TIERS.map((tier, index) => {
              const price = tier.monthly === null
                ? "Custom"
                : `$${isYearly ? tier.yearly : tier.monthly}`;

              const billingLabel = tier.monthly === null
                ? "Annual contract"
                : isYearly
                  ? "Per user / month · billed yearly"
                  : "Per user / month";

              return (
                <PricingTier
                  key={tier.name}
                  name={tier.name}
                  price={price}
                  billingLabel={billingLabel}
                  features={tier.features}
                  ctaLabel={tier.ctaLabel}
                  ctaHref={tier.ctaHref}
                  isPrimary={tier.isPrimary}
                  className={`
                    ${index > 0 ? "border-t border-[var(--fw-border)] md:border-t-0" : ""}
                    ${index < PRICING_TIERS.length - 1 ? "md:border-r md:border-[var(--fw-border)]" : ""}
                  `}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
