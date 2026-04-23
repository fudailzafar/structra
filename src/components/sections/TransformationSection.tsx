"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/siteContent";
import { fadeUp, fadeOnly, viewport, ease, duration } from "@/lib/motion";

const { transformation } = siteContent;

/* ─── Step data ─── */

const STEPS = transformation.steps;

/* ─── Preview UIs ─── */

function CapturePreview() {
  return (
    <div className="space-y-4">
      {/* Photo entries */}
      {[
        { file: "IMG_2041.JPG", note: "North wall framing progress" },
        { file: "IMG_2042.JPG", note: "Pipe routing completed" },
      ].map((item) => (
        <div key={item.file} className="border border-[var(--fw-border)] bg-[var(--fw-bg)] p-4">
          <div className="mb-3 h-20 border border-[var(--fw-border)] bg-[var(--fw-surface)]" aria-hidden="true" />
          <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">{item.file}</p>
          <p className="mt-1.5 text-sm text-[var(--fw-text)]">{item.note}</p>
        </div>
      ))}

      {/* Voice note */}
      <div className="border border-[var(--fw-border)] bg-[var(--fw-concrete)] p-4">
        <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Voice Notes</p>
        <p className="mt-2 text-sm leading-7 text-[var(--fw-text)]">
          "Confirm north wall framing"<br />
          "Plumbing rough-in complete"<br />
          "HVAC delayed by 48 hours"
        </p>
      </div>
    </div>
  );
}

function ContextualizePreview() {
  const groups = [
    { label: "Structural", items: ["North wall framing complete", "East wing columns verified"] },
    { label: "MEP Systems", items: ["Plumbing rough-in complete", "HVAC install delayed 2d"] },
    { label: "Site General", items: ["Ceiling prep started", "Conduit routing approved"] },
  ];

  return (
    <div className="space-y-0">
      {/* Table header */}
      <div className="flex items-center justify-between border-b border-[var(--fw-border)] px-4 py-3 bg-[var(--fw-concrete)]">
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Category</span>
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Entries</span>
      </div>

      {groups.map((group) => (
        <div key={group.label} className="border-b border-[var(--fw-border)]">
          <div className="flex items-center gap-3 px-4 py-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center border border-[var(--fw-border-strong)] font-[var(--font-mono)] text-[8px] text-[var(--fw-muted)]">
              {String(groups.indexOf(group) + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-[var(--fw-text)]">{group.label}</span>
            <span className="ml-auto font-[var(--font-mono)] text-[10px] text-[var(--fw-muted)]">{group.items.length}</span>
          </div>
          <div className="space-y-0 pl-13">
            {group.items.map((item) => (
              <div key={item} className="flex items-center gap-2 border-t border-[var(--fw-border)]/50 px-4 py-2 pl-[52px]">
                <span className="h-1.5 w-1.5 border border-[var(--fw-border-strong)]" aria-hidden="true" />
                <span className="text-sm text-[var(--fw-muted)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CommunicatePreview() {
  return (
    <div>
      {/* Report header */}
      <div className="border-b border-[var(--fw-border)] bg-[var(--fw-concrete)] px-5 py-4">
        <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--fw-text)]">Progress Report — Week 16</p>
        <p className="mt-1 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.14em] text-[var(--fw-muted)]">Generated Apr 23, 2026</p>
      </div>

      <div className="space-y-6 p-5">
        {/* Section 1 */}
        <div>
          <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Structural Framing</p>
          <div className="mt-3 h-24 border border-[var(--fw-border)] bg-[var(--fw-surface)]" aria-hidden="true" />
          <p className="mt-3 text-sm leading-7 text-[var(--fw-text)]">
            North wall framing completed per plan. Verified against on-site measurements.
          </p>
        </div>

        <div className="h-px bg-[var(--fw-border)]" />

        {/* Section 2 */}
        <div>
          <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">MEP Systems</p>
          <ul className="mt-3 space-y-2.5">
            {[
              { text: "Plumbing rough-in complete", done: true },
              { text: "HVAC install delayed by 2 days", done: false },
              { text: "Electrical conduit approved", done: true },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-3 text-sm">
                <span
                  className={`h-3.5 w-3.5 border ${item.done ? "border-[var(--fw-text)] bg-[var(--fw-text)]" : "border-[var(--fw-border-strong)]"}`}
                  aria-hidden="true"
                />
                <span className={item.done ? "text-[var(--fw-text)]" : "text-[var(--fw-muted)]"}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const PREVIEWS = [CapturePreview, ContextualizePreview, CommunicatePreview];

/* ─── Section ─── */

export function TransformationSection() {
  const [activeStep, setActiveStep] = useState(0);
  const prefersReduced = useReducedMotion();
  const item = prefersReduced ? fadeOnly : fadeUp;

  const switchTo = (index: number) => {
    if (index === activeStep) return;
    setActiveStep(index);
  };

  const ActivePreview = PREVIEWS[activeStep];

  return (
    <section
      id="transformation"
      aria-labelledby="transformation-heading"
      className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24"
    >
      <Container>
        <motion.div
          className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16"
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Left — Heading + Step list */}
          <div>
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">{transformation.kicker}</p>
            <h2
              id="transformation-heading"
              className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-[var(--fw-text)] md:text-4xl"
            >
              {transformation.heading}
            </h2>
            <p className="mt-4 max-w-[320px] text-sm leading-7 text-[var(--fw-muted)]">
              {transformation.description}
            </p>

            {/* Step list */}
            <div className="mt-10 border-t border-[var(--fw-border)]">
              {STEPS.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => switchTo(step.id)}
                    className={`group flex w-full items-start gap-4 border-b border-[var(--fw-border)] px-4 py-5 text-left transition-colors duration-150 ease-out ${
                      isActive
                        ? "border-l-2 border-l-[var(--fw-text)] bg-[var(--fw-concrete)]"
                        : "border-l-2 border-l-transparent hover:bg-[var(--fw-concrete)]/50"
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center font-[var(--font-mono)] text-[9px] tracking-[0.2em] transition-colors duration-150 ${
                        isActive
                          ? "border border-[var(--fw-text)] text-[var(--fw-text)]"
                          : "border border-[var(--fw-border-strong)] text-[var(--fw-muted)]"
                      }`}
                    >
                      {step.step}
                    </span>
                    <div>
                      <p
                        className={`text-[15px] font-medium tracking-[-0.01em] transition-colors duration-150 ${
                          isActive ? "text-[var(--fw-text)]" : "text-[var(--fw-muted)] group-hover:text-[var(--fw-text)]"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[var(--fw-muted)]">{step.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right — Dynamic preview with AnimatePresence */}
          <div className="relative">
            <div className="border border-[var(--fw-border)] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: prefersReduced ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: prefersReduced ? 0 : -8 }}
                  transition={{ duration: duration.fast, ease: ease.out }}
                >
                  <ActivePreview />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Step label */}
            <p className="mt-4 text-right font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--fw-muted)]">
              Step {STEPS[activeStep].step} — {STEPS[activeStep].title}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
