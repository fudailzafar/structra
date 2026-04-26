"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/siteContent";

const { brand, navbar } = siteContent;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

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
        {/* Left Section: Logo + Nav Links */}
        <div className="flex items-center gap-x-12">
          <a
            href="/"
            aria-label="Structra home"
            className="font-black text-sm tracking-[0.01em] text-[var(--fw-text)] transition-opacity hover:opacity-80"
          >
            {brand.name}
          </a>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-x-7 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">
              {navbar.links.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="transition-colors duration-150 ease-out hover:text-[var(--fw-text)]"
                    whileHover={{ opacity: 0.7 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Section: CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ButtonLink href="#pricing" ariaLabel="Start your free trial">
              {navbar.cta}
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 items-center justify-center border border-[var(--fw-border)] text-[var(--fw-text)] transition-colors hover:border-[var(--fw-border-strong)] md:hidden"
          >
            <motion.span
              aria-hidden="true"
              className="absolute h-[1.5px] w-[18px] bg-current"
              animate={menuOpen ? { translateY: 0, rotate: 45 } : { translateY: -5, rotate: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute h-[1.5px] w-[18px] bg-current"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute h-[1.5px] w-[18px] bg-current"
              animate={menuOpen ? { translateY: 0, rotate: -45 } : { translateY: 5, rotate: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 top-[57px] z-40 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/20"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-nav-menu"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative border-b border-[var(--fw-border)] bg-[var(--fw-bg)]"
            >
              <Container className="py-8">
                <ul className="space-y-6 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">
                  {navbar.links.map((link) => (
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
                <div className="mt-8 border-t border-[var(--fw-border)] pt-8">
                  <ButtonLink href="#pricing" ariaLabel="Start your free trial" className="w-full">
                    {navbar.cta}
                  </ButtonLink>
                </div>
              </Container>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
