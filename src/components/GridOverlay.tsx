/**
 * Global architectural grid overlay.
 * Renders continuous vertical guide lines aligned with the Container.
 *
 * - position: absolute (stretches with parent height)
 * - pointer-events: none
 * - z-index: 0 (behind content)
 * - 4 lines on desktop, 2 on mobile
 */
export function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-[1200px] px-6 md:px-8"
    >
      <div className="relative flex h-full justify-between">
        {/* Left edge */}
        <div className="h-full w-px bg-[var(--fw-border)]/30" />

        {/* Inner left — desktop only */}
        <div className="hidden h-full w-px bg-[var(--fw-border)]/15 md:block" />

        {/* Inner right — desktop only */}
        <div className="hidden h-full w-px bg-[var(--fw-border)]/15 md:block" />

        {/* Right edge */}
        <div className="h-full w-px bg-[var(--fw-border)]/30" />
      </div>
    </div>
  );
}
