"use client";

import { motion } from "framer-motion";

export function EditorialIntro() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <span className="max-w-[34ch] font-mono text-xs uppercase tracking-widest text-muted sm:pl-10">
            I am an engineer designing
          </span>

          <h2
            className="my-4 block font-display lowercase leading-[0.92] text-accent sm:pl-10 text-clamp-xxl"
            style={{ fontSize: "clamp(2.6rem, 8vw, 6.2rem)" }}
          >
            <span className="block text-foreground">resilient backends &amp;</span>
            <span className="block text-accent">reactive web tools</span>
          </h2>

          <div className="font-mono uppercase tracking-widest sm:pl-10">
            <span className="block text-xs text-muted">
              from bhubaneswar, india ·
            </span>
            <div className="mt-3.5 flex flex-wrap items-center gap-2.5 text-sm font-medium text-accent">
              <span>Build</span>
              <span aria-hidden="true">•</span>
              <span>Run</span>
              <span aria-hidden="true">•</span>
              <span>Everywhere</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
