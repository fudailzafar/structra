import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";

const FEATURES = [
  "Unlimited projects",
  "Unlimited reports",
  "Photo and voice capture",
  "PDF export",
  "Team collaboration",
  "Cloud storage",
  "Priority support",
];

export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container>
        <SectionHeader
          id="pricing-heading"
          align="center"
          title="Simple, transparent pricing."
          description="One plan. Full reporting workflow. No hidden tiers."
        />

        <div className="mx-auto mt-14 max-w-xl border border-[var(--fw-border-strong)] bg-[var(--fw-bg)] p-8 md:p-10">
          <div className="text-center">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">Professional</p>
            <p className="mt-3 text-6xl leading-none tracking-[-0.04em] text-[var(--fw-text)] md:text-7xl">$49</p>
            <p className="mt-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Per user / month</p>
          </div>

          <ul className="mt-10 space-y-4">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-base text-[var(--fw-text)]">
                <span className="mt-1 grid h-5 w-5 place-items-center border border-[var(--fw-border-strong)] text-[11px]" aria-hidden="true">
                  +
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#top"
            aria-label="Start your free trial"
            className="mt-10 inline-flex w-full items-center justify-center border border-[var(--fw-accent)] bg-[var(--fw-accent)] px-6 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:border-[#e24b2a] hover:bg-[#e24b2a]"
          >
            Start 14-Day Free Trial
          </a>

          <p className="mt-4 text-center font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">
            No contract. Cancel anytime.
          </p>
        </div>
      </Container>
    </section>
  );
}
