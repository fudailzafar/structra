"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/siteContent";
import { fadeUp, stagger, fadeOnly, viewport } from "@/lib/motion";

const { process } = siteContent;

/* ─── Mock UI blocks ─── */

function CaptureUI() {
  return (
    <div className="border border-[var(--fw-border)]">
      <div className="flex items-center justify-between border-b border-[var(--fw-border)] px-4 py-2.5">
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">New Entry</span>
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Field</span>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex h-16 items-center justify-center border border-dashed border-[var(--fw-border-strong)] bg-[var(--fw-concrete)]">
          <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.14em] text-[var(--fw-muted)]">+ Photo</span>
        </div>
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
        <div>
          <div className="h-2.5 w-7/12 bg-[var(--fw-text)]" />
          <div className="mt-2 h-1.5 w-full bg-[var(--fw-border)]" />
          <div className="mt-1 h-1.5 w-10/12 bg-[var(--fw-border)]" />
        </div>
        <div className="h-px w-full bg-[var(--fw-border)]" />
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

const UI_MAP = [CaptureUI, ContextualizeUI, CommunicateUI];

const STEPS = process.steps.map((step, i) => ({ ...step, UI: UI_MAP[i] }));

/* ─── Section ─── */

export function ProcessSection() {
  const prefersReduced = useReducedMotion();
  const item = prefersReduced ? fadeOnly : fadeUp;

  return (
    <section id="process" aria-labelledby="process-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container>
        {/* Split header */}
        <motion.div
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div>
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">{process.kicker}</p>
            <h2
              id="process-heading"
              className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-[var(--fw-text)] md:text-4xl"
            >
              {process.heading}
            </h2>
          </div>
          <p className="max-w-[340px] text-sm leading-7 text-[var(--fw-muted)] md:text-right">
            {process.description}
          </p>
        </motion.div>

        {/* 3-column grid with 1px dividers */}
        <motion.div
          className="mt-14 grid grid-cols-1 gap-px border border-[var(--fw-border)] bg-[var(--fw-border)] md:grid-cols-3"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {STEPS.map((step) => (
            <motion.article key={step.step} variants={item} className="flex h-full flex-col bg-[var(--fw-bg)] p-6 md:p-8">
              {/* Top — Step indicator */}
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center border border-[var(--fw-text)] font-[var(--font-mono)] text-[9px] tracking-[0.2em] text-[var(--fw-text)]">
                  {step.step}
                </span>
                <span className="h-px flex-1 bg-[var(--fw-border)]" aria-hidden="true" />
              </div>

              {/* Middle — Mock UI (fixed height for alignment) */}
              <div className="h-[200px]" aria-hidden="true">
                <step.UI />
              </div>

              {/* Bottom — Text block (mt-auto anchors to bottom) */}
              <div className="mt-auto pt-6">
                <h3 className="text-lg font-medium tracking-[-0.02em] text-[var(--fw-text)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--fw-muted)]">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
