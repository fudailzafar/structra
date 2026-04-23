import type { ReactNode } from "react";
import { Footer } from "../sections/Footer";
import { Navbar } from "../sections/Navbar";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--fw-bg)] text-[var(--fw-text)]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
