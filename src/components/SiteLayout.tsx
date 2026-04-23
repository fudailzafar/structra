import type { ReactNode } from "react";
import { Footer } from "../sections/Footer";
import { Navbar } from "../sections/Navbar";
import { GridOverlay } from "./GridOverlay";

type SiteLayoutProps = {
  children: ReactNode;
  /** Content rendered before the grid-scoped area (e.g., Hero) */
  heroSlot?: ReactNode;
};

export function SiteLayout({ children, heroSlot }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--fw-bg)] text-[var(--fw-text)]">
      {/* Navbar — no grid lines */}
      <Navbar />

      {/* Hero — no grid lines */}
      {heroSlot}

      {/* Grid-scoped area: sections + footer */}
      <div className="relative flex flex-1 flex-col">
        <GridOverlay />
        <main className="relative z-10 flex-1">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
