import type { ReactNode } from "react";
import { Footer } from "../sections/Footer";
import { Navbar } from "../sections/Navbar";
import { GridOverlay } from "./GridOverlay";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--fw-bg)] text-[var(--fw-text)]">
      <GridOverlay />
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
