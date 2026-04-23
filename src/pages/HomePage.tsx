import { useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import { FinalCtaSection } from "../sections/FinalCtaSection";
import { FaqSection } from "../sections/FaqSection";
import { HeroSection } from "../sections/HeroSection";
import { PricingSection } from "../sections/PricingSection";
import { ProcessSection } from "../sections/ProcessSection";
import { SocialProofSection } from "../sections/SocialProofSection";
import { TransformationSection } from "../sections/TransformationSection";

export function HeroSlot() {
  return <HeroSection />;
}

export function HomeContent() {
  const pageRef = useRef<HTMLDivElement>(null);
  useReveal(pageRef);

  return (
    <div ref={pageRef}>
      <div className="reveal"><ProcessSection /></div>
      <div className="reveal"><TransformationSection /></div>
      <div className="reveal"><SocialProofSection /></div>
      <div className="reveal"><PricingSection /></div>
      <div className="reveal"><FaqSection /></div>
      <div className="reveal"><FinalCtaSection /></div>
    </div>
  );
}
