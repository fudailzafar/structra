import { useState } from "react";
import { ButtonLink } from "../components/ButtonLink";
import { Container } from "../components/Container";

const NAV_LINKS = [
  { label: "Process", href: "#process" },
  { label: "Transformation", href: "#transformation" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--fw-border)] bg-[var(--fw-bg)]">
      <Container className="flex items-center justify-between py-4">
        {/* Left — Logo */}
        <a
          href="/"
          aria-label="Structra home"
          className="font-[var(--font-mono)] text-sm tracking-[0.22em] text-[var(--fw-text)]"
        >
          STRUCTRA
        </a>

        {/* Center — Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-x-7 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 hover:text-[var(--fw-text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right — CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ButtonLink href="#pricing" ariaLabel="Start your free trial">
              Start Free Trial
            </ButtonLink>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center border border-[var(--fw-border)] text-[var(--fw-text)] md:hidden"
          >
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              aria-hidden="true"
              className="text-current"
            >
              {menuOpen ? (
                <>
                  <line x1="2" y1="2" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="12" x2="16" y2="2" stroke="currentColor" strokeWidth="1.5" />
                </>
              ) : (
                <>
                  <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="0" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="0" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile navigation"
          className="border-t border-[var(--fw-border)] bg-[var(--fw-bg)] md:hidden"
        >
          <Container className="py-4">
            <ul className="space-y-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 transition-colors duration-200 hover:text-[var(--fw-text)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-[var(--fw-border)] pt-4">
              <ButtonLink href="#pricing" ariaLabel="Start your free trial" className="w-full">
                Start Free Trial
              </ButtonLink>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
