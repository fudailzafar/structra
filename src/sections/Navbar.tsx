import { useState, useEffect, useCallback } from "react";
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

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close on ESC key
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--fw-border)] bg-[var(--fw-bg)]">
      <Container className="flex items-center justify-between py-4">
        {/* Left — Logo */}
        <a
          href="/"
          aria-label="Structra home"
          className="font-black text-sm tracking-[0.01em] text-[var(--fw-text)] [font-weight:900]"
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
                  className="transition-colors duration-150 ease-out hover:text-[var(--fw-text)]"
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

          {/* Mobile hamburger — animated 3-line → X */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 items-center justify-center border border-[var(--fw-border)] text-[var(--fw-text)] md:hidden"
          >
            {/* Top line */}
            <span
              aria-hidden="true"
              className="absolute h-[1.5px] w-[18px] bg-current transition-all duration-150 ease-out"
              style={{
                transform: menuOpen
                  ? "translateY(0) rotate(45deg)"
                  : "translateY(-5px) rotate(0deg)",
              }}
            />
            {/* Middle line */}
            <span
              aria-hidden="true"
              className="absolute h-[1.5px] w-[18px] bg-current transition-opacity duration-150 ease-out"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            {/* Bottom line */}
            <span
              aria-hidden="true"
              className="absolute h-[1.5px] w-[18px] bg-current transition-all duration-150 ease-out"
              style={{
                transform: menuOpen
                  ? "translateY(0) rotate(-45deg)"
                  : "translateY(5px) rotate(0deg)",
              }}
            />
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay + Panel */}
      <div
        className={`fixed inset-0 top-[57px] z-40 md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 transition-opacity duration-150 ease-out"
          style={{ opacity: menuOpen ? 1 : 0 }}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Panel */}
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile navigation"
          className="relative border-b border-[var(--fw-border)] bg-[var(--fw-bg)] transition-all duration-150 ease-out"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
          }}
        >
          <Container className="py-6">
            <ul className="space-y-5 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-1 transition-colors duration-150 ease-out hover:text-[var(--fw-text)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-[var(--fw-border)] pt-6">
              <ButtonLink href="#pricing" ariaLabel="Start your free trial" className="w-full">
                Start Free Trial
              </ButtonLink>
            </div>
          </Container>
        </nav>
      </div>
    </header>
  );
}
