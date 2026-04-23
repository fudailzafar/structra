type SectionHeaderProps = {
  id: string;
  title: string;
  description?: string;
  kicker?: string;
  align?: "left" | "center";
};

export function SectionHeader({ id, title, description, kicker, align = "left" }: SectionHeaderProps) {
  const alignmentClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <header className={`max-w-3xl ${alignmentClass}`}>
      {kicker ? (
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fw-muted)]">{kicker}</p>
      ) : null}
      <h2 id={id} className="mt-4 text-balance text-3xl leading-tight tracking-[-0.03em] text-[var(--fw-text)] md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-[var(--fw-muted)] md:text-lg">{description}</p> : null}
    </header>
  );
}
