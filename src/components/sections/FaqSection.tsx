"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/siteContent";
import { fadeUp, fadeOnly, viewport, ease, duration } from "@/lib/motion";
import type { FaqItem as FaqItemType } from "@/data/siteContent";

const { faq } = siteContent;

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItemType;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const questionId = `faq-q-${item.id}`;
  const answerId = `faq-a-${item.id}`;

  return (
    <div className="border-b border-[var(--fw-border)]">
      <h3 id={questionId}>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={answerId}
          className={`group flex w-full items-center justify-between gap-4 px-4 py-5 text-left transition-colors duration-150 ease-out hover:bg-[var(--fw-concrete)] ${isOpen ? "bg-[var(--fw-concrete)]" : ""}`}
        >
          <span className="text-[15px] font-medium leading-6 tracking-[-0.01em] text-[var(--fw-text)]">
            {item.question}
          </span>
          <motion.svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-[var(--fw-muted)]"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: duration.fast, ease: ease.out }}
          >
            <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1.5" />
            <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.5" />
          </motion.svg>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={questionId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: duration.fast, ease: ease.inOut }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-5 text-sm leading-relaxed text-[var(--fw-muted)]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();
  const item = prefersReduced ? fadeOnly : fadeUp;

  const handleToggle = (itemId: string) => {
    setOpenItemId((current) => (current === itemId ? null : itemId));
  };

  const mid = Math.ceil(faq.items.length / 2);
  const leftColumn = faq.items.slice(0, mid);
  const rightColumn = faq.items.slice(mid);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container>
        <motion.header className="mx-auto max-w-2xl text-center" variants={item} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">{faq.kicker}</p>
          <h2 id="faq-heading" className="mt-4 text-balance text-3xl font-normal leading-tight tracking-[-0.03em] text-[var(--fw-text)] md:text-5xl">
            {faq.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-base leading-7 text-[var(--fw-muted)] md:text-lg md:leading-8">
            {faq.subheading}
          </p>
        </motion.header>

        <motion.div className="mt-14 grid grid-cols-1 gap-px border border-[var(--fw-border)] bg-[var(--fw-border)] md:grid-cols-2" variants={item} initial="hidden" whileInView="visible" viewport={viewport}>
          <div className="bg-[var(--fw-bg)]">
            <div className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)]">
              {leftColumn.map((faqItem) => (
                <FaqItem key={faqItem.id} item={faqItem} isOpen={openItemId === faqItem.id} onToggle={() => handleToggle(faqItem.id)} />
              ))}
            </div>
          </div>
          <div className="bg-[var(--fw-bg)]">
            <div className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)]">
              {rightColumn.map((faqItem) => (
                <FaqItem key={faqItem.id} item={faqItem} isOpen={openItemId === faqItem.id} onToggle={() => handleToggle(faqItem.id)} />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
