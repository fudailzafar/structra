import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";

const RAW_INPUTS = [
  {
    fileName: "IMG_2041.JPG",
    note: "North wall framing progress",
    rotateClass: "-rotate-1",
  },
  {
    fileName: "IMG_2042.JPG",
    note: "Pipe routing completed",
    rotateClass: "rotate-1",
  },
  {
    fileName: "IMG_2043.JPG",
    note: "Ceiling prep and conduit",
    rotateClass: "-rotate-2",
  },
  {
    fileName: "IMG_2044.JPG",
    note: "HVAC delay notification",
    rotateClass: "rotate-2",
  },
];

const REPORT_ITEMS = [
  "North wall framing complete",
  "Plumbing rough-in complete",
  "HVAC install delayed by 2 days",
];

export function TransformationSection() {
  return (
    <section
      id="transformation"
      aria-labelledby="transformation-heading"
      className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24"
    >
      <Container>
        <SectionHeader id="transformation-heading" align="center" title="From chaos to clarity." />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <article>
            <p className="mb-5 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Input: Raw Field Data</p>

            <div className="border border-[var(--fw-border)] bg-[var(--fw-concrete)] p-6 md:p-8">
              <div className="space-y-4">
                {RAW_INPUTS.map((item) => (
                  <div key={item.fileName} className={`border border-[var(--fw-border-strong)] bg-[var(--fw-bg)] p-4 ${item.rotateClass}`}>
                    <div className="mb-3 h-20 border border-[var(--fw-border)] bg-[var(--fw-surface)]" aria-hidden="true" />
                    <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">{item.fileName}</p>
                    <p className="mt-2 text-sm text-[var(--fw-text)]">{item.note}</p>
                  </div>
                ))}

                <div className="border border-[var(--fw-border-strong)] bg-[#fff5ef] p-4">
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Voice Notes</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--fw-text)]">
                    "Confirm north wall framing"<br />
                    "Plumbing rough-in complete"<br />
                    "HVAC delayed by 48 hours"
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article>
            <p className="mb-5 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Output: Structured Report</p>

            <div className="border border-[var(--fw-border-strong)] bg-[var(--fw-bg)]">
              <header className="border-b border-[var(--fw-border)] bg-[var(--fw-concrete)] px-6 py-4">
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-text)]">Progress Report - Week 16</p>
              </header>

              <div className="space-y-6 p-6 md:p-8">
                <div>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Structural Framing</p>
                  <div className="mt-3 h-28 border border-[var(--fw-border)] bg-[var(--fw-surface)]" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-7 text-[var(--fw-text)]">
                    North wall framing completed per plan and verified against on-site measurements.
                  </p>
                </div>

                <div>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">MEP Systems</p>
                  <ul className="mt-4 space-y-3">
                    {REPORT_ITEMS.map((item, index) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[var(--fw-text)]">
                        <span
                          className={`mt-1 block h-4 w-4 border ${
                            index < 2 ? "border-[var(--fw-border-strong)] bg-[var(--fw-text)]" : "border-[var(--fw-accent)]"
                          }`}
                          aria-hidden="true"
                        />
                        <span className={index === 2 ? "text-[var(--fw-muted)]" : ""}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
