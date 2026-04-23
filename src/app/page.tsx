import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TransformationSection } from "@/components/sections/TransformationSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";
import { GridOverlay } from "@/components/ui/GridOverlay";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--fw-bg)] text-[var(--fw-text)]">
      {/* Navbar — no grid lines */}
      <Navbar />

      {/* Hero — no grid lines */}
      <HeroSection />

      {/* Grid-scoped area: sections + footer */}
      <div className="relative flex flex-1 flex-col">
        <GridOverlay />
        <main className="relative z-10 flex-1">
          <ValueSection />
          <ProcessSection />
          <TransformationSection />
          <SocialProofSection />
          <PricingSection />
          <FaqSection />
          <FinalCtaSection />
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
