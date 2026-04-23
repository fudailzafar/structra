import { useState } from "react";
import { Container } from "../components/Container";

const FAQ_ITEMS = [
  {
    id: "capture-flow",
    question: "How does FieldWork keep capture fast on active job sites?",
    answer:
      "Capture is designed around single-pass input. Teams can attach photos, short notes, and voice context immediately, then structure is applied automatically during report assembly.",
  },
  {
    id: "report-consistency",
    question: "Can report format stay consistent across different project types?",
    answer:
      "Yes. FieldWork enforces a stable reporting skeleton while allowing project-specific detail. This keeps weekly updates comparable for clients, PMs, and internal leadership.",
  },
  {
    id: "team-adoption",
    question: "How quickly can a field team adopt the workflow?",
    answer:
      "Most teams are operational within the first week because the system removes admin steps instead of adding them. The interface prioritizes familiar field actions over complex setup.",
  },
  {
    id: "audit-readiness",
    question: "Is documentation suitable for audit and claims review?",
    answer:
      "Captured events are timestamped and preserved with contextual metadata. This creates a clear project record that is suitable for internal audits, stakeholder reviews, and formal claim support.",
  },
];

function FaqIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[var(--fw-muted)]"
    >
      {isOpen ? (
        <>
          <line x1="3" y1="3" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" />
          <line x1="13" y1="3" x2="3" y2="13" stroke="currentColor" strokeWidth="1.5" />
        </>
      ) : (
        <>
          <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" />
          <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}

export function FaqSection() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (itemId: string) => {
    setOpenItemId((currentItem) => (currentItem === itemId ? null : itemId));
  };

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
            Technical answers for teams evaluating documentation workflows.
          </p>
        </header>

        {/* Full-width FAQ List */}
        <div className="mt-14 border-t border-[var(--fw-border)]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openItemId === item.id;
            const questionId = `faq-question-${item.id}`;
            const answerId = `faq-answer-${item.id}`;

            return (
              <div key={item.id} className="border-b border-[var(--fw-border)]">
                <h3 id={questionId}>
                  <button
                    type="button"
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-medium leading-7 tracking-[-0.01em] text-[var(--fw-text)]">
                      {item.question}
                    </span>
                    <FaqIcon isOpen={isOpen} />
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={isOpen ? "pb-6" : "hidden"}
                >
                  <p className="max-w-3xl text-base leading-relaxed text-[var(--fw-muted)]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
