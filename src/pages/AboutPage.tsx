import { Container } from "../components/Container";
import { ProcessCard } from "../components/ProcessCard";
import { SectionHeader } from "../components/SectionHeader";

const PHILOSOPHY_PILLARS = [
  {
    title: "Capture At Source",
    description: "Information should be recorded where decisions are made, not reconstructed days later.",
  },
  {
    title: "Structure By Default",
    description: "Reporting consistency should be system-driven so teams can focus on execution quality.",
  },
  {
    title: "Communicate With Evidence",
    description: "Updates should be traceable, timestamped, and clear enough for operational and client review.",
  },
];

const PROCESS_SUMMARY = [
  {
    step: "01",
    title: "Ingest",
    description: "Collect field observations through a single, low-friction capture flow.",
  },
  {
    step: "02",
    title: "Normalize",
    description: "Apply structural metadata so every entry is usable in downstream reporting.",
  },
  {
    step: "03",
    title: "Deliver",
    description: "Generate professional outputs that are readable, consistent, and audit-friendly.",
  },
];

const TEAM = [
  {
    name: "Lena Ortiz",
    role: "Product Engineering",
    description: "Owns system architecture and ensures every workflow decision scales across real project conditions.",
  },
  {
    name: "David Hsu",
    role: "Field Operations",
    description: "Translates site constraints into practical product behavior with minimal process overhead.",
  },
  {
    name: "Mina Patel",
    role: "Reporting Systems",
    description: "Leads report design and output integrity for stakeholder communication and project traceability.",
  },
];

export function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-intro-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
        <Container className="max-w-[980px]">
          <SectionHeader
            id="about-intro-heading"
            kicker="About FieldWork"
            title="Built for teams that execute in complex, changing environments."
            description="FieldWork exists to remove reporting friction without compromising documentation quality."
          />

          <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--fw-muted)] md:text-lg">
            We design tools for construction and field teams who need operational clarity at speed. Every product decision
            is evaluated against one metric: does it reduce overhead while preserving precise project memory?
          </p>
        </Container>
      </section>

      <section aria-labelledby="about-philosophy-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
        <Container>
          <SectionHeader id="about-philosophy-heading" title="Why FieldWork exists" description="A practical philosophy for technical documentation in the field." />

          <div className="mt-14 grid grid-cols-1 gap-px border border-[var(--fw-border)] bg-[var(--fw-border)] md:grid-cols-3">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <article key={pillar.title} className="bg-[var(--fw-bg)] p-8 md:p-10">
                <h3 className="text-xl tracking-[-0.02em] text-[var(--fw-text)]">{pillar.title}</h3>
                <p className="mt-4 text-base leading-8 text-[var(--fw-muted)]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-process-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
        <Container>
          <SectionHeader
            id="about-process-heading"
            align="center"
            kicker="Process Summary"
            title="A repeatable reporting pipeline."
            description="The same framework is applied across every project cycle."
          />

          <div className="mt-14 grid grid-cols-1 gap-px border border-[var(--fw-border)] bg-[var(--fw-border)] md:grid-cols-3">
            {PROCESS_SUMMARY.map((step) => (
              <ProcessCard key={step.step} step={step.step} title={step.title} description={step.description} />
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-team-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
        <Container className="max-w-[980px]">
          <SectionHeader
            id="about-team-heading"
            title="Team"
            description="Small, focused, and biased toward robust systems over decorative features."
          />

          <div className="mt-14 border-y border-[var(--fw-border)]">
            {TEAM.map((member) => (
              <article
                key={member.name}
                className="grid gap-4 border-b border-[var(--fw-border)] py-8 last:border-b-0 md:grid-cols-[220px_1fr] md:gap-8"
              >
                <h3 className="text-xl tracking-[-0.02em] text-[var(--fw-text)]">{member.name}</h3>
                <div>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">{member.role}</p>
                  <p className="mt-3 text-base leading-8 text-[var(--fw-muted)]">{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
