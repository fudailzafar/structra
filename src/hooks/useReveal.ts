import { useEffect, useRef } from "react";
import type { RefObject } from "react";

/**
 * Adds the "revealed" class to elements with class "reveal"
 * when they enter the viewport. Triggers once per element.
 */
export function useReveal(containerRef: RefObject<HTMLElement | null>) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      container.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    container.querySelectorAll(".reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [containerRef]);
}
