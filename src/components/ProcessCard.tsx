type ProcessCardProps = {
  step: string;
  title: string;
  description: string;
};

export function ProcessCard({ step, title, description }: ProcessCardProps) {
  return (
    <article className="bg-[var(--fw-bg)] p-8 md:p-10">
      <div className="mb-8 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center border border-[var(--fw-text)] font-[var(--font-mono)] text-[10px] tracking-[0.2em]">
          {step}
        </span>
        <span className="h-px flex-1 bg-[var(--fw-border)]" aria-hidden="true" />
      </div>

      <h3 className="text-xl tracking-[-0.02em] text-[var(--fw-text)]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[var(--fw-muted)]">{description}</p>
    </article>
  );
}
