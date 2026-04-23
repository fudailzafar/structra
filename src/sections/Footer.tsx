import { Container } from "../components/Container";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterLinkGroupProps = {
  title: string;
  links: FooterLink[];
  ariaLabel: string;
};

const NAV_COLUMN: FooterLink[] = [
  { label: "Process", href: "#process" },
  { label: "Transformation", href: "#transformation" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const SOCIALS_COLUMN: FooterLink[] = [
  { label: "Instagram", href: "https://instagram.com", external: true },
  { label: "Facebook", href: "https://facebook.com", external: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Twitter", href: "https://x.com", external: true },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

function FooterLinkGroup({ title, links, ariaLabel }: FooterLinkGroupProps) {
  return (
    <nav aria-label={ariaLabel}>
      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/65">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-sm leading-6 text-white/72 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--fw-border-strong)] bg-[#16181a] text-white">
      <Container className="py-12 md:py-14">
        {/* Main: Left block + Right block */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Left — Brand + Newsletter */}
          <section className="max-w-[300px] shrink-0">
            <a href="/" aria-label="Structra home" className="font-[var(--font-mono)] text-sm tracking-[0.24em] text-white">
              STRUCTRA
            </a>

            <p className="mt-3 text-sm leading-6 text-white/75">
              Documentation, structured.
            </p>

            <form
              className="mt-5"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/65">Join our newsletter</p>
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="mt-2.5 flex gap-2">
                <input
                  id="footer-newsletter-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="h-10 w-full border border-white/25 bg-[#111315] px-3.5 text-sm text-white placeholder:text-white/45 focus:border-white/45 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-10 shrink-0 border border-[var(--fw-accent)] bg-[var(--fw-accent)] px-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:border-[#e24b2a] hover:bg-[#e24b2a]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </section>

          {/* Right — Navigation + Socials grouped */}
          <div className="flex gap-x-12">
            <FooterLinkGroup title="Navigation" links={NAV_COLUMN} ariaLabel="Footer navigation" />
            <FooterLinkGroup title="Socials" links={SOCIALS_COLUMN} ariaLabel="Footer socials" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-white/60">© 2026 Structra</p>

          <nav aria-label="Footer legal links">
            <ul className="flex items-center gap-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-white/55">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors duration-200 hover:text-white/85">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
