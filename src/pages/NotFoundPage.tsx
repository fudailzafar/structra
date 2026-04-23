import { ButtonLink } from "../components/ButtonLink";
import { Container } from "../components/Container";

export function NotFoundPage() {
  return (
    <section aria-labelledby="not-found-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container className="max-w-[860px]">
        <div className="border border-[var(--fw-border-strong)] bg-[var(--fw-concrete)] p-8 md:p-12">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">Error 404</p>

          <h1 id="not-found-heading" className="mt-5 text-4xl leading-tight tracking-[-0.03em] text-[var(--fw-text)] md:text-6xl">
            Page not found
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--fw-muted)] md:text-lg">
            The requested page could not be resolved. Verify the URL or return to the main workspace.
          </p>

          <div className="mt-10">
            <ButtonLink href="/" ariaLabel="Go back to home page">
              Go Back Home
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
