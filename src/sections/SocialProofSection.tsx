import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";

const TESTIMONIALS = [
  {
    quote: "We cut reporting time from 4 hours to 15 minutes per week. The ROI was immediate.",
    name: "Sarah Chen",
    firm: "Chen Architecture",
  },
  {
    quote: "Finally, a system that fits how construction teams actually work. No fluff, just clarity.",
    name: "Mike Davison",
    firm: "Davison Construction Group",
  },
  {
    quote: "Our clients now get cleaner updates with less effort from the team on site.",
    name: "James Park",
    firm: "Park Development Co.",
  },
];

export function SocialProofSection() {
  return (
    <section id="testimonials" aria-labelledby="social-proof-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container className="max-w-[960px]">
        <SectionHeader id="social-proof-heading" title="Trusted by teams that build in the real world." />

        <div className="mt-14 space-y-16">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote key={testimonial.name} className="border-l-2 border-[var(--fw-text)] pl-8">
              <p className="text-pretty text-2xl leading-[1.5] tracking-[-0.02em] text-[var(--fw-text)]">"{testimonial.quote}"</p>
              <cite className="mt-6 block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)] not-italic">
                {testimonial.name}, {testimonial.firm}
              </cite>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
