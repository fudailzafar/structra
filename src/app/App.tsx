import { Footer } from "../sections/Footer";
import { HeroSection } from "../sections/HeroSection";
import { Navbar } from "../sections/Navbar";
import { PricingSection } from "../sections/PricingSection";
import { ProcessSection } from "../sections/ProcessSection";
import { SocialProofSection } from "../sections/SocialProofSection";
import { TransformationSection } from "../sections/TransformationSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--fw-bg)] text-[var(--fw-text)]">
      <Navbar />

      <main>
        <HeroSection />
        <ProcessSection />
        <TransformationSection />
        <SocialProofSection />
        <PricingSection />
      </main>

      <Footer />
    </div>
  );
}
