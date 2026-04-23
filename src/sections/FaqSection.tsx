import { useState } from "react";
import { Container } from "../components/Container";

const FAQ_ITEMS = [
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
];

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number];
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
          {/* Plus → rotates 45° to become × */}
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

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className="faq-answer"
        data-open={isOpen}
      >
        <div className="faq-answer-inner">
          <p className="px-4 pb-5 text-sm leading-relaxed text-[var(--fw-muted)]">
            {item.answer}
          </p>
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

  // Split items into two columns
  const mid = Math.ceil(FAQ_ITEMS.length / 2);
  const leftColumn = FAQ_ITEMS.slice(0, mid);
  const rightColumn = FAQ_ITEMS.slice(mid);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container>
        {/* Centered Header */}
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">Support</p>
          <h2
            id="faq-heading"
            className="mt-4 text-balance text-3xl font-normal leading-tight tracking-[-0.03em] text-[var(--fw-text)] md:text-5xl"
          >
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-base leading-7 text-[var(--fw-muted)] md:text-lg md:leading-8">
            Technical answers for teams evaluating site documentation workflows.
          </p>
        </header>

        {/* 2-column FAQ grid */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-[var(--fw-border)] bg-[var(--fw-border)] md:grid-cols-2">
          {/* Left column */}
          <div className="bg-[var(--fw-bg)]">
            <div className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)]">
              {leftColumn.map((item, i) => (
                <div key={item.id} className={i === 0 ? "" : ""}>
                  <FaqItem item={item} isOpen={openItemId === item.id} onToggle={() => handleToggle(item.id)} />
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
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
