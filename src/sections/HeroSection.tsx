import { ButtonLink } from "../components/ButtonLink";
import { Container } from "../components/Container";

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24 lg:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">Field Operations Platform</p>

            <h1
              id="hero-heading"
              className="mt-6 max-w-[620px] text-[clamp(2rem,6vw,3.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--fw-text)]"
            >
              Site documentation
              <br />
              that works
              <br />
              like you do.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--fw-muted)]">
              Transform field photos and voice notes into professional progress reports. No admin overhead, no lost context,
              and no extra workflow complexity.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="#pricing" ariaLabel="Start your free trial">
                Get Started
              </ButtonLink>
              <ButtonLink href="#process" variant="ghost" ariaLabel="Read the process section">
                See Process
              </ButtonLink>
            </div>

            <p className="mt-6 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">
              14-day free trial. No credit card required.
            </p>
          </div>

          <div className="relative lg:pl-6">
            <div className="border border-[var(--fw-border-strong)] bg-[var(--fw-bg)] shadow-[0_24px_54px_rgba(15,23,42,0.14)]">
              <div className="flex items-center gap-2 border-b border-[var(--fw-border)] bg-[var(--fw-concrete)] px-4 py-3">
                <span className="h-2.5 w-2.5 border border-[var(--fw-border-strong)]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 border border-[var(--fw-border-strong)]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 border border-[var(--fw-border-strong)]" aria-hidden="true" />
              </div>

              <div className="space-y-4 p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-[var(--fw-border)] pb-4">
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-text)]">Weekly Progress Report</p>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">Apr 23</p>
                </div>

                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={`hero-report-${index + 1}`} className="border border-[var(--fw-border)] p-4">
                    <div className="h-3 w-7/12 bg-[var(--fw-text)]" aria-hidden="true" />
                    <div className="mt-3 h-2.5 w-full bg-[var(--fw-border)]" aria-hidden="true" />
                    <div className="mt-2 h-2.5 w-10/12 bg-[var(--fw-border)]" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-6 -top-6 hidden border border-[var(--fw-border-strong)] bg-[var(--fw-bg)] p-4 lg:block">
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">Live Sync</p>
              <p className="mt-2 text-sm text-[var(--fw-text)]">Field notes auto-grouped by phase</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
