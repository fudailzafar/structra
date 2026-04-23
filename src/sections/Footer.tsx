import { Container } from "../components/Container";
import { siteContent } from "../data/siteContent";
import type { FooterLink } from "../data/siteContent";

const { brand, footer } = siteContent;

type FooterLinkGroupProps = {
  title: string;
  links: FooterLink[];
  ariaLabel: string;
};

function FooterLinkGroup({ title, links, ariaLabel }: FooterLinkGroupProps) {
  return (
    <nav aria-label={ariaLabel}>
      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-sm leading-6 text-[var(--fw-muted)] transition-colors duration-200 hover:text-[var(--fw-text)]"
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
    <footer className="border-t border-[var(--fw-border)] bg-[var(--fw-bg)]">
      <Container className="py-12 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <section className="max-w-[300px] shrink-0">
            <a href="/" aria-label="Structra home" className="font-black text-sm tracking-[0.01em] text-[var(--fw-text)] [font-weight:900]">
              {brand.name}
            </a>
            <p className="mt-3 text-sm leading-6 text-[var(--fw-muted)]">{brand.tagline}</p>

            <form className="mt-5" onSubmit={(event) => { event.preventDefault(); }}>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">{footer.newsletterLabel}</p>
              <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
              <div className="mt-2.5 flex gap-2">
                <input id="footer-newsletter-email" name="email" type="email" required placeholder="Email address" className="h-10 w-full border border-[var(--fw-border)] bg-[var(--fw-bg)] px-3.5 text-sm text-[var(--fw-text)] placeholder:text-[var(--fw-muted)]/50 focus:border-[var(--fw-border-strong)] focus:outline-none" />
                <button type="submit" className="h-10 shrink-0 border border-[var(--fw-accent)] bg-[var(--fw-accent)] px-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:border-[#e24b2a] hover:bg-[#e24b2a]">
                  Subscribe
                </button>
              </div>
            </form>
          </section>

          <div className="flex gap-x-12">
            <FooterLinkGroup title="Navigation" links={footer.navigation} ariaLabel="Footer navigation" />
            <FooterLinkGroup title="Socials" links={footer.socials} ariaLabel="Footer socials" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--fw-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--fw-muted)]">{brand.copyright}</p>
          <nav aria-label="Footer legal links">
            <ul className="flex items-center gap-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--fw-muted)]">
              {footer.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors duration-200 hover:text-[var(--fw-text)]">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
