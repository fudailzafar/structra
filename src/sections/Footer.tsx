import { Container } from "../components/Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--fw-border-strong)] bg-[var(--fw-text)] py-10 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="font-[var(--font-mono)] text-sm tracking-[0.22em]">FIELDWORK</p>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/70">
            <li>
              <a href="#process" className="transition-colors duration-200 hover:text-white">
                Process
              </a>
            </li>
            <li>
              <a href="#transformation" className="transition-colors duration-200 hover:text-white">
                Transformation
              </a>
            </li>
            <li>
              <a href="#pricing" className="transition-colors duration-200 hover:text-white">
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-white/60">© 2026 FieldWork</p>
      </Container>
    </footer>
  );
}
