import { Container } from "../components/Container";
import { PricingTier } from "../components/PricingTier";
import { SectionHeader } from "../components/SectionHeader";

const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$19",
    billingLabel: "Per user / month",
    features: [
      "Up to 3 active projects",
      "Basic reporting",
      "Photo capture",
      "PDF export",
      "No team collaboration",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/#top",
  },
  {
    name: "Professional",
    price: "$49",
    billingLabel: "Per user / month",
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
    ctaHref: "/#top",
    isPrimary: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    billingLabel: "Annual contract",
    features: [
      "Everything in Professional",
      "Advanced analytics",
      "Dedicated support",
      "Custom integrations",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "/about",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container>
        <SectionHeader
          id="pricing-heading"
          align="center"
          title="Simple, transparent pricing."
          description="Three plans built on the same reporting architecture."
        />

        <div className="mt-14 border border-[var(--fw-border)] bg-[var(--fw-bg)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {PRICING_TIERS.map((tier, index) => (
              <PricingTier
                key={tier.name}
                name={tier.name}
                price={tier.price}
                billingLabel={tier.billingLabel}
                features={tier.features}
                ctaLabel={tier.ctaLabel}
                ctaHref={tier.ctaHref}
                isPrimary={tier.isPrimary}
                className={`
                  ${index > 0 ? "border-t border-[var(--fw-border)] md:border-t-0" : ""}
                  ${index < PRICING_TIERS.length - 1 ? "md:border-r md:border-[var(--fw-border)]" : ""}
                `}
              />
            ))}
          </div>
        </div>

        <p className="mt-6 text-center font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">
          Annual billing available on all plans.
        </p>
      </Container>
    </section>
  );
}
