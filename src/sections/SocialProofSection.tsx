import { useState, useCallback, useEffect } from "react";
import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { siteContent } from "../data/siteContent";

const { testimonials } = siteContent;

export function SocialProofSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const total = testimonials.items.length;

  const goTo = useCallback(
    (dir: "next" | "prev") => {
      if (isTransitioning) return;
      setDirection(dir);
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((current) => dir === "next" ? (current + 1) % total : (current - 1 + total) % total);
        setIsTransitioning(false);
      }, 160);
    },
    [isTransitioning, total],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goTo("next");
      if (event.key === "ArrowLeft") goTo("prev");
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goTo]);

  const testimonial = testimonials.items[activeIndex];
  const slideOffset = direction === "next" ? "10px" : "-10px";
  const contentStyle: React.CSSProperties = {
    opacity: isTransitioning ? 0 : 1,
    transform: isTransitioning ? `translateX(${slideOffset})` : "translateX(0)",
    transition: "opacity 160ms ease-out, transform 160ms ease-out",
  };

  return (
    <section id="testimonials" aria-labelledby="social-proof-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container className="max-w-[960px]">
        <SectionHeader id="social-proof-heading" title={testimonials.heading} />

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_auto] md:gap-16">
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

          <div className="flex items-end md:flex-col md:items-end md:justify-between">
            <p className="font-[var(--font-mono)] text-[11px] tracking-[0.14em] text-[var(--fw-muted)]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <nav aria-label="Testimonial navigation" className="ml-auto flex items-center gap-4 md:ml-0 md:mt-6">
              <button type="button" onClick={() => goTo("prev")} aria-label="Previous testimonial" className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--fw-muted)] transition-colors duration-150 ease-out hover:text-[var(--fw-text)]">← Prev</button>
              <span className="h-3 w-px bg-[var(--fw-border)]" aria-hidden="true" />
              <button type="button" onClick={() => goTo("next")} aria-label="Next testimonial" className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--fw-muted)] transition-colors duration-150 ease-out hover:text-[var(--fw-text)]">Next →</button>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
}
