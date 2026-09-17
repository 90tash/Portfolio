"use client";

import { motion } from "framer-motion";

export function KineticBreak() {
  return (
    <section className="px-5 py-20 sm:px-10 sm:py-36 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <p className="max-w-[32ch] font-mono text-xs sm:text-sm uppercase tracking-wider text-muted sm:pl-10 leading-relaxed">
          i obsess over making architectures feel completely
        </p>

        {/* Staggered 3-Column Breakout */}
        <h2
          className="flex w-full flex-row justify-between font-display font-extrabold lowercase leading-[0.88] text-accent tracking-tighter"
          style={{ fontSize: "clamp(3.2rem, 13vw, 11rem)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pb-3 will-change-transform"
          >
            ro
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 sm:mt-24 pb-3 will-change-transform text-foreground"
          >
            bu
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 sm:mt-48 pb-3 will-change-transform text-accent"
          >
            st
          </motion.div>
        </h2>

        {/* Outro subtext */}
        <p className="w-full max-w-none self-end pr-2 pt-3 text-right sm:pr-10">
          <span className="inline-block max-w-[42ch] font-mono text-xs sm:text-sm text-muted uppercase tracking-wider leading-relaxed">
            — because the work behind the scenes is what makes software dependable.
          </span>
        </p>
      </div>
    </section>
  );
}