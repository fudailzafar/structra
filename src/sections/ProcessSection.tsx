import { Container } from "../components/Container";
import { ProcessCard } from "../components/ProcessCard";
import { SectionHeader } from "../components/SectionHeader";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Capture",
    description: "Take site photos and voice notes directly in the field without switching tools.",
  },
  {
    step: "02",
    title: "Contextualize",
    description: "Structra groups updates by date, location, and project stage automatically.",
  },
  {
    step: "03",
    title: "Communicate",
    description: "Generate clean, client-ready reports in minutes with consistent structure.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container>
        <SectionHeader
          id="process-heading"
          align="center"
          kicker="Operating Model"
          title="Three steps. Zero friction."
          description="CAPTURE -> CONTEXTUALIZE -> COMMUNICATE"
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-[var(--fw-border)] bg-[var(--fw-border)] md:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <ProcessCard key={step.step} step={step.step} title={step.title} description={step.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
