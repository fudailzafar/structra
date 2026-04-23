import { useState, useCallback, useEffect } from "react";
import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";

const TESTIMONIALS = [
  {
    quote: "We cut reporting time from 4 hours to 15 minutes per week. The ROI was immediate.",
    name: "Sarah Chen",
    role: "Principal",
    firm: "Chen Architecture",
  },
  {
    quote: "Finally, a system that fits how construction teams actually work. No fluff, just clarity.",
    name: "Mike Davison",
    role: "Operations Director",
    firm: "Davison Construction Group",
  },
  {
    quote: "Our clients now get cleaner updates with less effort from the team on site.",
    name: "James Park",
    role: "Project Lead",
    firm: "Park Development Co.",
  },
];

export function SocialProofSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const total = TESTIMONIALS.length;

  const goTo = useCallback(
    (dir: "next" | "prev") => {
      if (isTransitioning) return;
      setDirection(dir);
      setIsTransitioning(true);

      // Let the exit animation play, then swap
      setTimeout(() => {
        setActiveIndex((current) =>
          dir === "next" ? (current + 1) % total : (current - 1 + total) % total,
        );
        setIsTransitioning(false);
      }, 160);
    },
    [isTransitioning, total],
  );

  // Keyboard arrow support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goTo("next");
      if (event.key === "ArrowLeft") goTo("prev");
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goTo]);

  const testimonial = TESTIMONIALS[activeIndex];

  // Transition styles
  const slideOffset = direction === "next" ? "10px" : "-10px";
  const contentStyle: React.CSSProperties = {
    opacity: isTransitioning ? 0 : 1,
    transform: isTransitioning ? `translateX(${slideOffset})` : "translateX(0)",
    transition: "opacity 160ms ease-out, transform 160ms ease-out",
  };

  return (
    <section id="testimonials" aria-labelledby="social-proof-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container className="max-w-[960px]">
        <SectionHeader id="social-proof-heading" title="Trusted by teams that build in the real world." />

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          {/* Left — Testimonial */}
          <div className="min-h-[180px]" aria-live="polite">
            <blockquote style={contentStyle} className="border-l-2 border-[var(--fw-text)] pl-8">
              <p className="text-pretty text-2xl leading-[1.5] tracking-[-0.02em] text-[var(--fw-text)]">
                "{testimonial.quote}"
              </p>
              <footer className="mt-6">
                <cite className="block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)] not-italic">
                  {testimonial.name}, {testimonial.role}
                </cite>
                <span className="mt-1 block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--fw-muted)]/60">
                  {testimonial.firm}
                </span>
              </footer>
            </blockquote>
          </div>

          {/* Right — Controls */}
          <div className="flex items-end md:flex-col md:items-end md:justify-between">
            {/* Index */}
            <p className="font-[var(--font-mono)] text-[11px] tracking-[0.14em] text-[var(--fw-muted)]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>

            {/* Arrows */}
            <nav aria-label="Testimonial navigation" className="ml-auto flex items-center gap-4 md:ml-0 md:mt-6">
              <button
                type="button"
                onClick={() => goTo("prev")}
                aria-label="Previous testimonial"
                className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--fw-muted)] transition-colors duration-150 ease-out hover:text-[var(--fw-text)]"
              >
                ← Prev
              </button>
              <span className="h-3 w-px bg-[var(--fw-border)]" aria-hidden="true" />
              <button
                type="button"
                onClick={() => goTo("next")}
                aria-label="Next testimonial"
                className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--fw-muted)] transition-colors duration-150 ease-out hover:text-[var(--fw-text)]"
              >
                Next →
              </button>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
}
