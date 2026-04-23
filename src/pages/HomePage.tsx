import { FinalCtaSection } from "../sections/FinalCtaSection";
import { FaqSection } from "../sections/FaqSection";
import { HeroSection } from "../sections/HeroSection";
import { PricingSection } from "../sections/PricingSection";
import { ProcessSection } from "../sections/ProcessSection";
import { SocialProofSection } from "../sections/SocialProofSection";
import { TransformationSection } from "../sections/TransformationSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <TransformationSection />
      <SocialProofSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
