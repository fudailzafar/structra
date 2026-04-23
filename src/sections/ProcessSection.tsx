import { Container } from "../components/Container";

/* ─── Mock UI blocks for each step ─── */

function CaptureUI() {
  return (
    <div className="border border-[var(--fw-border)]">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-[var(--fw-border)] px-4 py-2.5">
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">New Entry</span>
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Field</span>
      </div>
      <div className="space-y-3 p-4">
        {/* Photo placeholder */}
        <div className="flex h-16 items-center justify-center border border-dashed border-[var(--fw-border-strong)] bg-[var(--fw-concrete)]">
          <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.14em] text-[var(--fw-muted)]">+ Photo</span>
        </div>
        {/* Input lines */}
        <div className="h-8 border border-[var(--fw-border)] px-3 py-2">
          <div className="h-2 w-3/5 bg-[var(--fw-border)]" />
        </div>
        <div className="h-8 border border-[var(--fw-border)] px-3 py-2">
          <div className="h-2 w-2/5 bg-[var(--fw-border)]" />
        </div>
      </div>
    </div>
  );
}

function ContextualizeUI() {
  return (
    <div className="border border-[var(--fw-border)]">
      <div className="flex items-center justify-between border-b border-[var(--fw-border)] px-4 py-2.5">
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Grouped</span>
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Auto</span>
      </div>
      <div className="p-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`flex items-center gap-3 py-2.5 ${i < 3 ? "border-b border-[var(--fw-border)]" : ""}`}>
            <span className="grid h-6 w-6 shrink-0 place-items-center border border-[var(--fw-border-strong)] font-[var(--font-mono)] text-[8px] text-[var(--fw-muted)]">
              {String(i).padStart(2, "0")}
            </span>
            <div className="flex-1 space-y-1">
              <div className="h-2 w-4/5 bg-[var(--fw-text)]" />
              <div className="h-1.5 w-3/5 bg-[var(--fw-border)]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommunicateUI() {
  return (
    <div className="border border-[var(--fw-border)]">
      <div className="flex items-center justify-between border-b border-[var(--fw-border)] px-4 py-2.5">
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Report</span>
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Ready</span>
      </div>
      <div className="space-y-3 p-4">
        {/* Report header */}
        <div>
          <div className="h-2.5 w-7/12 bg-[var(--fw-text)]" />
          <div className="mt-2 h-1.5 w-full bg-[var(--fw-border)]" />
          <div className="mt-1 h-1.5 w-10/12 bg-[var(--fw-border)]" />
        </div>
        <div className="h-px w-full bg-[var(--fw-border)]" />
        {/* Report body */}
        <div>
          <div className="h-2.5 w-5/12 bg-[var(--fw-text)]" />
          <div className="mt-2 h-1.5 w-full bg-[var(--fw-border)]" />
          <div className="mt-1 h-1.5 w-8/12 bg-[var(--fw-border)]" />
        </div>
      </div>
    </div>
  );
}

/* ─── Step data ─── */

const STEPS = [
  {
    step: "01",
    title: "Capture",
    description: "Take site photos and voice notes directly in the field without switching tools.",
    UI: CaptureUI,
  },
  {
    step: "02",
    title: "Contextualize",
    description: "Structra groups updates by date, location, and project stage automatically.",
    UI: ContextualizeUI,
  },
  {
    step: "03",
    title: "Communicate",
    description: "Generate clean, client-ready reports in minutes with consistent structure.",
    UI: CommunicateUI,
  },
];

/* ─── Section ─── */

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container>
        {/* Split header: title left, description right */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">Operating Model</p>
            <h2
              id="process-heading"
              className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-[var(--fw-text)] md:text-4xl"
            >
              Three steps. Zero friction.
            </h2>
          </div>
          <p className="max-w-[340px] text-sm leading-7 text-[var(--fw-muted)] md:text-right">
            From field capture to client-ready documentation in one continuous workflow.
          </p>
        </div>

        {/* 3-column grid with 1px vertical dividers */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-[var(--fw-border)] bg-[var(--fw-border)] md:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.step} className="flex flex-col bg-[var(--fw-bg)] p-6 md:p-8">
              {/* Step indicator */}
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center border border-[var(--fw-text)] font-[var(--font-mono)] text-[9px] tracking-[0.2em] text-[var(--fw-text)]">
                  {step.step}
                </span>
                <span className="h-px flex-1 bg-[var(--fw-border)]" aria-hidden="true" />
              </div>

              {/* Mock UI */}
              <div className="mb-6" aria-hidden="true">
                <step.UI />
              </div>

              {/* Text */}
              <h3 className="text-lg font-medium tracking-[-0.02em] text-[var(--fw-text)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--fw-muted)]">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
