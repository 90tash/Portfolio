"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function GlyphDial() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-5 py-16 sm:px-10 sm:py-24 border-t border-border">
      {/* Rotating 360-Degree Geometric SVG Orbit */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-muted/30"
        style={{ width: "min(80vw, 760px)", height: "min(80vw, 760px)" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
          className="relative h-full w-full"
        >
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = i * 18;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(min(-40vw, -380px)) rotate(-${angle}deg)`,
                }}
              >
                {i % 4 === 0 ? (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5 sm:h-6 sm:w-6">
                    <circle cx="20" cy="20" r="13" />
                  </svg>
                ) : i % 4 === 1 ? (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5 sm:h-6 sm:w-6">
                    <rect x="10" y="10" width="20" height="20" transform="rotate(45 20 20)" />
                  </svg>
                ) : i % 4 === 2 ? (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5 sm:h-6 sm:w-6">
                    <circle cx="20" cy="20" r="6" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5 sm:h-6 sm:w-6">
                    <line x1="12" y1="12" x2="28" y2="28" />
                  </svg>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Center Punchline */}
      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          enough about me, let&apos;s talk about your
        </p>
        <h2
          className="font-display font-bold lowercase leading-[0.92] text-accent"
          style={{ fontSize: "clamp(2.6rem, 9vw, 7rem)" }}
        >
          next architecture
        </h2>
        <a
          href="#contact"
          className="glass-pill mt-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full text-foreground transition-all hover:scale-110 hover:border-accent hover:text-accent shadow-sm"
        >
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      </div>
    </section>
  );
}