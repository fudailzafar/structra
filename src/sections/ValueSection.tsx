import { Container } from "../components/Container";

const FEATURES = [
  {
    id: "capture",
    title: "Capture in the Field",
    description: "Record photos, notes, and voice inputs instantly without interrupting your workflow.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <rect x="2" y="6" width="20" height="14" />
        <path d="M8 6V4h8v2" />
        <circle cx="12" cy="14" r="3" />
      </svg>
    ),
  },
  {
    id: "structure",
    title: "Auto-Structure Data",
    description: "Organize entries by project, phase, and date automatically with zero manual sorting.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: "reports",
    title: "Generate Reports",
    description: "Turn raw field inputs into clean, client-ready progress reports in minutes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <rect x="4" y="2" width="16" height="20" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="16" y2="11" />
        <line x1="8" y1="15" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    id: "consistency",
    title: "Consistent Documentation",
    description: "Standardize reporting across teams and projects with zero manual effort.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M9 11l3 3 5-5" />
        <rect x="3" y="3" width="18" height="18" />
      </svg>
    ),
  },
];

export function ValueSection() {
  return (
    <section aria-labelledby="value-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container>
        {/* Top statement */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-pretty text-2xl leading-[1.6] tracking-[-0.02em] text-[var(--fw-muted)] md:text-[1.75rem] md:leading-[1.6]">
            Built for teams that need clarity in the field — capture, structure, and deliver documentation without friction.
          </p>
        </div>

        {/* Section heading */}
        <div className="mx-auto mt-20 max-w-xl text-center md:mt-24">
          <h2 id="value-heading" className="text-3xl leading-tight tracking-[-0.03em] text-[var(--fw-text)] md:text-4xl">
            Why Structra?
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--fw-muted)] md:text-lg md:leading-8">
            Designed for teams that need fast, structured, and reliable site documentation.
          </p>
        </div>

        {/* 4-column feature grid */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-[var(--fw-border)] bg-[var(--fw-border)] sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <article
              key={feature.id}
              className="flex flex-col bg-[var(--fw-bg)] p-6 transition-colors duration-150 ease-out hover:bg-[var(--fw-concrete)] md:p-8"
            >
              {/* Icon */}
              <div className="mb-6 flex h-10 w-10 items-center justify-center border border-[var(--fw-border-strong)] text-[var(--fw-text)]">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-[15px] font-medium tracking-[-0.01em] text-[var(--fw-text)]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--fw-muted)]">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
