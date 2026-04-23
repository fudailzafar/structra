"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteContent } from "@/data/siteContent";
import { fadeUp, fadeOnly, viewport, ease, duration } from "@/lib/motion";

const { testimonials } = siteContent;

export function SocialProofSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const prefersReduced = useReducedMotion();

  const total = testimonials.items.length;

  const goTo = useCallback(
    (dir: "next" | "prev") => {
      setDirection(dir === "next" ? 1 : -1);
      setActiveIndex((current) => dir === "next" ? (current + 1) % total : (current - 1 + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goTo("next");
      if (event.key === "ArrowLeft") goTo("prev");
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goTo]);

  const testimonial = testimonials.items[activeIndex];
  const item = prefersReduced ? fadeOnly : fadeUp;
  const xOffset = prefersReduced ? 0 : 16;

  return (
    <section id="testimonials" aria-labelledby="social-proof-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container className="max-w-[960px]">
        <motion.div variants={item} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionHeader id="social-proof-heading" title={testimonials.heading} />
        </motion.div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div className="min-h-[180px]" aria-live="polite">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, x: direction * xOffset }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -xOffset }}
                transition={{ duration: duration.fast, ease: ease.out }}
                className="border-l-2 border-[var(--fw-text)] pl-8"
              >
                <p className="text-pretty text-2xl leading-[1.5] tracking-[-0.02em] text-[var(--fw-text)]">
                  "{testimonial.quote}"
                </p>
                <footer className="mt-6">
                  <cite className="block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)] not-italic">
                    {testimonial.name}, {testimonial.role}
                  </cite>
                  <span className="mt-1 block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--fw-muted)]/60">
                    {testimonial.firm}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="flex items-end md:flex-col md:items-end md:justify-between">
            <p className="font-[var(--font-mono)] text-[11px] tracking-[0.14em] text-[var(--fw-muted)]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <nav aria-label="Testimonial navigation" className="ml-auto flex items-center gap-4 md:ml-0 md:mt-6">
              <button type="button" onClick={() => goTo("prev")} aria-label="Previous testimonial" className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--fw-muted)] transition-colors duration-150 ease-out hover:text-[var(--fw-text)]">← Prev</button>
              <span className="h-3 w-px bg-[var(--fw-border)]" aria-hidden="true" />
              <button type="button" onClick={() => goTo("next")} aria-label="Next testimonial" className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--fw-muted)] transition-colors duration-150 ease-out hover:text-[var(--fw-text)]">Next →</button>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
}
