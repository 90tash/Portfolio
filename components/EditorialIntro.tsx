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
            ashish patra is an engineer designing
          </span>

          <h2
            className="my-4 block font-display lowercase leading-[0.92] text-accent sm:pl-10 text-clamp-xxl"
            style={{ fontSize: "clamp(2.6rem, 8vw, 6.2rem)" }}
          >
            <span className="block text-foreground">resilient backends &amp;</span>
            <span className="block text-accent">reactive web tools</span>
          </h2>

          <span className="max-w-[36ch] font-mono text-xs uppercase tracking-widest text-muted sm:pl-10">
            from bhubaneswar, india · built for everywhere.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
