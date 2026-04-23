/**
 * Global architectural grid overlay.
 * Renders continuous vertical guide lines aligned with the Container.
 */
export function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-[1200px] px-6 md:px-8"
    >
      <div className="relative flex h-full justify-between">
        <div className="h-full w-px bg-[var(--fw-border)]/30" />
        <div className="hidden h-full w-px bg-[var(--fw-border)]/15 md:block" />
        <div className="hidden h-full w-px bg-[var(--fw-border)]/15 md:block" />
        <div className="h-full w-px bg-[var(--fw-border)]/30" />
      </div>
    </div>
  );
}
