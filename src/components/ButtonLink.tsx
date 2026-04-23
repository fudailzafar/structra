import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

const baseClasses =
  "inline-flex items-center justify-center border px-5 py-3 font-[var(--font-mono)] text-[11px] font-bold uppercase tracking-[0.03em] transition-all duration-150 ease-out";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[var(--fw-accent)] bg-[var(--fw-accent)] text-white hover:border-[#e24b2a] hover:bg-[#e24b2a] hover:-translate-y-px active:translate-y-0",
  outline: "border-[var(--fw-border-strong)] bg-transparent text-[var(--fw-text)] hover:border-[var(--fw-text)] hover:bg-[var(--fw-concrete)] active:bg-[var(--fw-border)]",
  ghost: "border-transparent bg-transparent text-[var(--fw-muted)] hover:border-[var(--fw-border)] hover:text-[var(--fw-text)] active:bg-[var(--fw-concrete)]",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  const resolvedAriaLabel = ariaLabel ?? (typeof children === "string" ? children : undefined);

  return (
    <a href={href} aria-label={resolvedAriaLabel} className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}>
      {children}
    </a>
  );
}