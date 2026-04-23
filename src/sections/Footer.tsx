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
            <p className="mt-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--fw-muted)]">{brand.copyright}</p>
          </section>

          <div className="flex gap-x-12">
            <FooterLinkGroup title="Navigation" links={footer.navigation} ariaLabel="Footer navigation" />
            <FooterLinkGroup title="Socials" links={footer.socials} ariaLabel="Footer socials" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
