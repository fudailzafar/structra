import { FinalCtaSection } from "../sections/FinalCtaSection";
import { FaqSection } from "../sections/FaqSection";
import { HeroSection } from "../sections/HeroSection";
import { PricingSection } from "../sections/PricingSection";
import { ProcessSection } from "../sections/ProcessSection";
import { SocialProofSection } from "../sections/SocialProofSection";
import { TransformationSection } from "../sections/TransformationSection";
import { ValueSection } from "../sections/ValueSection";

export function HeroSlot() {
  return <HeroSection />;
}

export function HomeContent() {
  return (
    <>
      <ValueSection />
      <ProcessSection />
      <TransformationSection />
      <SocialProofSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
