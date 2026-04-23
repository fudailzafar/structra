import { ButtonLink } from "../components/ButtonLink";
import { Container } from "../components/Container";

export function NotFoundPage() {
  return (
    <section aria-labelledby="not-found-heading" className="flex min-h-[70vh] items-center border-b border-[var(--fw-border)] bg-[var(--fw-bg)]">
      <Container className="py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">Error 404</p>

          <h1 id="not-found-heading" className="mt-6 text-4xl leading-tight tracking-[-0.03em] text-[var(--fw-text)] md:text-6xl">
            Page not found
          </h1>

          <p className="mt-6 text-base leading-8 text-[var(--fw-muted)] md:text-lg">
            The requested resource could not be located.
          </p>

          <div className="mt-10">
            <ButtonLink href="/" ariaLabel="Return to home page">
              Return to home
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
