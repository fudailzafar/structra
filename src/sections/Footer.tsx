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

const LINKS_COLUMN: FooterLink[] = [
  { label: "Services", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "Case studies", href: "/blog" },
  { label: "Benefits", href: "/#pricing" },
  { label: "Pricing", href: "/#pricing" },
];

const PAGES_COLUMN: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "mailto:hello@fieldwork.com" },
  { label: "404", href: "/404" },
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
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-sm leading-7 text-white/72 transition-colors duration-200 hover:text-white"
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
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          <section>
            <a href="/" aria-label="FieldWork home" className="font-[var(--font-mono)] text-sm tracking-[0.24em] text-white">
              FIELDWORK
            </a>

            <p className="mt-5 max-w-[260px] text-sm leading-7 text-white/75">
              Site documentation, engineered for precision.
            </p>

            <form
              className="mt-8"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/65">Join our newsletter</p>
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <input
                  id="footer-newsletter-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="h-11 w-full border border-white/25 bg-[#111315] px-4 text-sm text-white placeholder:text-white/45 focus:border-white/45 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-11 border border-[var(--fw-accent)] bg-[var(--fw-accent)] px-5 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:border-[#e24b2a] hover:bg-[#e24b2a]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </section>

          <FooterLinkGroup title="Links" links={LINKS_COLUMN} ariaLabel="Footer links" />
          <FooterLinkGroup title="Pages" links={PAGES_COLUMN} ariaLabel="Footer pages" />
          <FooterLinkGroup title="Socials" links={SOCIALS_COLUMN} ariaLabel="Footer socials" />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-white/60">© 2026 FieldWork</p>

          <nav aria-label="Footer legal links">
            <ul className="flex items-center gap-5 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-white/55">
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
