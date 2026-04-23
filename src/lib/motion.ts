/**
 * Structra — Shared motion configuration
 *
 * Central animation presets aligned with the industrial design system.
 * All animations use transform + opacity only (GPU-composited).
 */
import { type Variants } from "framer-motion";

// ─── Easing ───
export const ease = {
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

// ─── Durations ───
export const duration = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.4,
};

// ─── Standard fade-up reveal ───
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: ease.out },
  },
};

// ─── Stagger container ───
export const stagger = (staggerAmount = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerAmount,
    },
  },
});

// ─── Fade only (for reduced-motion) ───
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.normal },
  },
};

// ─── Scale in (hero mock window) ───
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.slow, ease: ease.out },
  },
};

// ─── Viewport settings ───
export const viewport = {
  once: true,
  margin: "-60px" as const,
};
