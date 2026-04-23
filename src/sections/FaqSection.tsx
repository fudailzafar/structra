import { useState } from "react";
import { Container } from "../components/Container";
import { siteContent } from "../data/siteContent";
import type { FaqItem as FaqItemType } from "../data/siteContent";

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
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-[var(--fw-muted)] transition-transform duration-150 ease-out"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1.5" />
            <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </h3>
      <div id={answerId} role="region" aria-labelledby={questionId} className="faq-answer" data-open={isOpen}>
        <div className="faq-answer-inner">
          <p className="px-4 pb-5 text-sm leading-relaxed text-[var(--fw-muted)]">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (itemId: string) => {
    setOpenItemId((current) => (current === itemId ? null : itemId));
  };

  const mid = Math.ceil(faq.items.length / 2);
  const leftColumn = faq.items.slice(0, mid);
  const rightColumn = faq.items.slice(mid);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container>
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">{faq.kicker}</p>
          <h2 id="faq-heading" className="mt-4 text-balance text-3xl font-normal leading-tight tracking-[-0.03em] text-[var(--fw-text)] md:text-5xl">
            {faq.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-base leading-7 text-[var(--fw-muted)] md:text-lg md:leading-8">
            {faq.subheading}
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-px border border-[var(--fw-border)] bg-[var(--fw-border)] md:grid-cols-2">
          <div className="bg-[var(--fw-bg)]">
            <div className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)]">
              {leftColumn.map((item) => (
                <FaqItem key={item.id} item={item} isOpen={openItemId === item.id} onToggle={() => handleToggle(item.id)} />
              ))}
            </div>
          </div>
          <div className="bg-[var(--fw-bg)]">
            <div className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)]">
              {rightColumn.map((item) => (
                <FaqItem key={item.id} item={item} isOpen={openItemId === item.id} onToggle={() => handleToggle(item.id)} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
