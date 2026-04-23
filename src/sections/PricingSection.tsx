import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../components/Container";
import { PricingTier } from "../components/PricingTier";
import { SectionHeader } from "../components/SectionHeader";
import { siteContent } from "../data/siteContent";
import { fadeUp, stagger, fadeOnly, viewport, ease } from "../lib/motion";

const { pricing } = siteContent;

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const prefersReduced = useReducedMotion();
  const item = prefersReduced ? fadeOnly : fadeUp;

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container>
        <motion.div variants={item} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionHeader
            id="pricing-heading"
            align="center"
            title={pricing.heading}
            description={pricing.subheading}
          />
        </motion.div>

        {/* Toggle */}
        <motion.div className="mt-10 flex items-center justify-center gap-4" variants={item} initial="hidden" whileInView="visible" viewport={viewport}>
          <span className={`font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] transition-colors duration-150 ${!isYearly ? "text-[var(--fw-text)]" : "text-[var(--fw-muted)]"}`}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
            onClick={() => setIsYearly((prev) => !prev)}
            className="relative h-[26px] w-[50px] border border-[var(--fw-border-strong)] bg-[var(--fw-concrete)]"
          >
            <motion.span
              aria-hidden="true"
              className="absolute left-[3px] top-[3px] h-[18px] w-[18px] bg-[var(--fw-text)]"
              animate={{ x: isYearly ? 24 : 0 }}
              transition={{ duration: 0.2, ease: ease.out }}
            />
          </button>
          <span className="flex items-center gap-2">
            <span className={`font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] transition-colors duration-150 ${isYearly ? "text-[var(--fw-text)]" : "text-[var(--fw-muted)]"}`}>
              Yearly
            </span>
            <span className="border border-[var(--fw-border)] px-2 py-0.5 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.12em] text-[var(--fw-muted)]">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-12 border border-[var(--fw-border)] bg-[var(--fw-bg)]"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {pricing.plans.map((tier, index) => {
              const price = tier.monthly === null ? "Custom" : `$${isYearly ? tier.yearly : tier.monthly}`;
              const billingLabel = tier.monthly === null ? "Annual contract" : isYearly ? "Per user / month · billed yearly" : "Per user / month";

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
                  className={`${index > 0 ? "border-t border-[var(--fw-border)] md:border-t-0" : ""} ${index < pricing.plans.length - 1 ? "md:border-r md:border-[var(--fw-border)]" : ""}`}
                />
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
