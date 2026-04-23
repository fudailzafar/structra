"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/siteContent";
import { ease, duration, scaleIn, stagger, fadeUp } from "@/lib/motion";

const { hero } = siteContent;

export function HeroSection() {
  const titleParts = hero.title.split("\n");
  const prefersReduced = useReducedMotion();

  const itemVariant = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: duration.normal } } }
    : fadeUp;

  const windowVariant = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: duration.slow } } }
    : scaleIn;

  return (
    <section id="top" aria-labelledby="hero-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24 lg:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="max-w-2xl"
            variants={stagger(0.12)}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariant} className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">{hero.kicker}</motion.p>

            <motion.h1
              id="hero-heading"
              variants={itemVariant}
              className="mt-6 max-w-[620px] text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--fw-text)]"
            >
              {titleParts.map((part, i) => (
                <span key={i}>
                  {part}
                  {i < titleParts.length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p variants={itemVariant} className="mt-8 max-w-xl text-lg font-normal leading-8 text-[var(--fw-muted)]">
              {hero.subtitle}
            </motion.p>

            <motion.div variants={itemVariant} className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href={hero.primaryCta.href} ariaLabel="Start your free trial">
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="ghost" ariaLabel="Read the process section">
                {hero.secondaryCta.label}
              </ButtonLink>
            </motion.div>

            <motion.p variants={itemVariant} className="mt-6 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">
              {hero.trialNote}
            </motion.p>
          </motion.div>

          <motion.div
            className="relative lg:pl-6"
            variants={windowVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: duration.slow, ease: ease.out }}
          >
            <div className="border border-[var(--fw-border-strong)] bg-[var(--fw-bg)] shadow-[0_24px_54px_rgba(15,23,42,0.14)]">
              <div className="flex items-center gap-2 border-b border-[var(--fw-border)] bg-[var(--fw-concrete)] px-4 py-3">
                <span className="h-2.5 w-2.5 border border-[var(--fw-border-strong)]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 border border-[var(--fw-border-strong)]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 border border-[var(--fw-border-strong)]" aria-hidden="true" />
              </div>

              <div className="space-y-4 p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-[var(--fw-border)] pb-4">
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-text)]">{hero.mockWindow.title}</p>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">{hero.mockWindow.date}</p>
                </div>

                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={`hero-report-${index + 1}`} className="border border-[var(--fw-border)] p-4">
                    <div className="h-3 w-7/12 bg-[var(--fw-text)]" aria-hidden="true" />
                    <div className="mt-3 h-2.5 w-full bg-[var(--fw-border)]" aria-hidden="true" />
                    <div className="mt-2 h-2.5 w-10/12 bg-[var(--fw-border)]" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-6 -top-6 hidden border border-[var(--fw-border-strong)] bg-[var(--fw-bg)] p-4 lg:block">
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">{hero.mockWindow.badge.label}</p>
              <p className="mt-2 text-sm text-[var(--fw-text)]">{hero.mockWindow.badge.description}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
