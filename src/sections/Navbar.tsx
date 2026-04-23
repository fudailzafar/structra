import { ButtonLink } from "../components/ButtonLink";
import { Container } from "../components/Container";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
];

export function Navbar() {
  const normalizedPath =
    window.location.pathname !== "/" && window.location.pathname.endsWith("/")
      ? window.location.pathname.slice(0, -1)
      : window.location.pathname;

  return (
    <header className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)]">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6">
        <a href="/" aria-label="FieldWork home" className="font-[var(--font-mono)] text-sm tracking-[0.22em] text-[var(--fw-text)]">
          FIELDWORK
        </a>

        <nav
          aria-label="Primary navigation"
          className="order-3 w-full border-t border-[var(--fw-border)] pt-4 md:order-2 md:w-auto md:border-t-0 md:pt-0"
        >
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-[var(--fw-text)] ${
                    normalizedPath === link.href ? "text-[var(--fw-text)]" : ""
                  }`.trim()}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="order-2 md:order-3">
          <ButtonLink href="/#pricing" variant="outline" ariaLabel="Start your free trial">
            Start Trial
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
