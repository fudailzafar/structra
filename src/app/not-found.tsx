"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GridOverlay } from "@/components/ui/GridOverlay";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--fw-bg)] text-[var(--fw-text)]">
      <Navbar />

      <div className="relative flex flex-1 flex-col">
        <GridOverlay />
        
        <main className="relative z-10 flex flex-1 items-center justify-center py-20">
          <Container className="max-w-[640px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">
                  Error 404
                </span>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Page not found.
                </h1>
                <p className="mx-auto max-w-[480px] text-[var(--fw-muted)]">
                  The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink href="/" variant="primary">
                  Go back home
                </ButtonLink>
                <ButtonLink href="/#contact" variant="outline">
                  Contact support
                </ButtonLink>
              </div>
            </motion.div>
          </Container>
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
