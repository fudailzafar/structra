import { useState } from "react";
import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";

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

export function FaqSection() {
  const [openItemId, setOpenItemId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const handleToggle = (itemId: string) => {
    setOpenItemId((currentItem) => (currentItem === itemId ? null : itemId));
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container className="max-w-[980px]">
        <SectionHeader
          id="faq-heading"
          title="Frequently asked questions"
          description="Technical answers for teams evaluating documentation workflows."
        />

        <div className="mt-14 border-y border-[var(--fw-border)]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openItemId === item.id;
            const questionId = `faq-question-${item.id}`;
            const answerId = `faq-answer-${item.id}`;

            return (
              <section key={item.id} className="border-b border-[var(--fw-border)] last:border-b-0">
                <h3 id={questionId}>
                  <button
                    type="button"
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    aria-label={`Toggle answer: ${item.question}`}
                    className="flex w-full items-start justify-between gap-6 px-0 py-6 text-left md:py-7"
                  >
                    <span className="text-lg font-semibold leading-8 tracking-[-0.01em] text-[var(--fw-text)]">{item.question}</span>
                    <span className="mt-1 font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--fw-muted)]" aria-hidden="true">
                      {isOpen ? "Close" : "Open"}
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={isOpen ? "pb-7 pr-10" : "hidden"}
                >
                  <p className="max-w-3xl text-base leading-8 text-[var(--fw-muted)]">{item.answer}</p>
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
