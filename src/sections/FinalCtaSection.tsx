import { ButtonLink } from "../components/ButtonLink";
import { Container } from "../components/Container";
import { siteContent } from "../data/siteContent";

const { finalCta } = siteContent;

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-concrete)] py-24">
      <Container>
        <div className="border border-[var(--fw-border-strong)] bg-[var(--fw-bg)] px-6 py-12 md:px-14 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">{finalCta.kicker}</p>

            <h2
              id="final-cta-heading"
              className="mt-6 text-balance text-4xl leading-[1.06] tracking-[-0.04em] text-[var(--fw-text)] md:text-6xl"
            >
              {finalCta.heading}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--fw-muted)] md:text-lg">
              {finalCta.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={finalCta.primaryCta.href} ariaLabel="Start your free trial">
                {finalCta.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={finalCta.secondaryCta.href} variant="ghost" ariaLabel="Learn about our process">
                {finalCta.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
