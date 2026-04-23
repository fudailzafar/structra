import { ButtonLink } from "./ButtonLink";

type PricingTierProps = {
  name: string;
  price: string;
  billingLabel: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  isPrimary?: boolean;
  className?: string;
};

export function PricingTier({
  name,
  price,
  billingLabel,
  features,
  ctaLabel,
  ctaHref,
  isPrimary = false,
  className = "",
}: PricingTierProps) {
  return (
    <article className={`flex h-full flex-col px-6 py-8 md:px-8 md:py-10 ${isPrimary ? "bg-[var(--fw-concrete)]" : "bg-[var(--fw-bg)]"} ${className}`.trim()}>
      <header>
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">{name}</p>
        <p className="mt-4 text-5xl leading-none tracking-[-0.04em] text-[var(--fw-text)] md:text-6xl">{price}</p>
        <p className="mt-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">{billingLabel}</p>
      </header>

      <ul className="mt-10 flex-1 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-base text-[var(--fw-text)]">
            <span className="mt-1 grid h-5 w-5 place-items-center border border-[var(--fw-border-strong)] text-[11px]" aria-hidden="true">
              +
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <ButtonLink
          href={ctaHref}
          variant={isPrimary ? "primary" : "outline"}
          className="w-full"
          ariaLabel={`${ctaLabel} - ${name}`}
        >
          {ctaLabel}
        </ButtonLink>
      </div>
    </article>
  );
}