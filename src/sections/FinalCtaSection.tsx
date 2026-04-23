import { ButtonLink } from "../components/ButtonLink";
import { Container } from "../components/Container";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-concrete)] py-24">
      <Container>
        <div className="border border-[var(--fw-border-strong)] bg-[var(--fw-bg)] px-6 py-12 md:px-14 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">Deployment Ready</p>

            <h2
              id="final-cta-heading"
              className="mt-6 text-balance text-4xl leading-[1.06] tracking-[-0.04em] text-[var(--fw-text)] md:text-6xl"
            >
              Ship field reporting with engineering-grade precision.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--fw-muted)] md:text-lg">
              Move from fragmented notes to client-ready documentation with one consistent operating model.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="#pricing" ariaLabel="Start your free trial">
                Start Free Trial
              </ButtonLink>
              <ButtonLink href="#process" variant="ghost" ariaLabel="Learn about our process">
                Read Our Approach
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
