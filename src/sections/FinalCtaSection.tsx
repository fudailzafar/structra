import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "../components/ButtonLink";
import { Container } from "../components/Container";
import { siteContent } from "../data/siteContent";
import { fadeUp, stagger, fadeOnly, viewport } from "../lib/motion";

const { finalCta } = siteContent;

export function FinalCtaSection() {
  const prefersReduced = useReducedMotion();
  const item = prefersReduced ? fadeOnly : fadeUp;

  return (
    <section aria-labelledby="final-cta-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-concrete)] py-24">
      <Container>
        <div className="border border-[var(--fw-border-strong)] bg-[var(--fw-bg)] px-6 py-12 md:px-14 md:py-16">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p variants={item} className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">{finalCta.kicker}</motion.p>

            <motion.h2
              variants={item}
              id="final-cta-heading"
              className="mt-6 text-balance text-4xl leading-[1.06] tracking-[-0.04em] text-[var(--fw-text)] md:text-6xl"
            >
              {finalCta.heading}
            </motion.h2>

            <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--fw-muted)] md:text-lg">
              {finalCta.description}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={finalCta.primaryCta.href} ariaLabel="Start your free trial">
                {finalCta.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={finalCta.secondaryCta.href} variant="ghost" ariaLabel="Learn about our process">
                {finalCta.secondaryCta.label}
              </ButtonLink>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
