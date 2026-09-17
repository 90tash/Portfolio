"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Terminal, FileText } from "lucide-react";

const letters = ["a", "s", "h", "i", "s", "h"];

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.5rem)] items-center px-5 py-8 sm:px-10 sm:py-0">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 sm:gap-12">
        {/* Left: Giant Wordmark + Bio */}
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-center gap-2 text-[0.7rem] sm:text-xs font-mono tracking-wider text-accent uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>backend &amp; distributed systems engineer</span>
          </div>

          {/* Giant Wordmark Clamp - Mobile optimized */}
          <h1
            aria-label="Ashish Patra, Backend & Software Systems Engineer"
            className="-mb-[0.12em] flex overflow-hidden pb-[0.14em] font-display font-bold lowercase leading-[0.88] tracking-tight text-foreground"
            style={{ fontSize: "clamp(3.5rem, 19vw, 16.5rem)" }}
          >
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block will-change-transform ${
                  index >= 3 ? "text-accent" : "text-foreground"
                }`}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle / Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-4 max-w-lg text-sm text-muted sm:text-base leading-relaxed"
          >
            <span className="block">
              aka <span className="text-foreground font-mono font-medium">90tash</span>
            </span>
            Building reliable distributed backends with Java Spring Boot, FastAPI, and reactive web platforms.
          </motion.p>

          {/* Quick Action Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3"
          >
            <a
              href="#projects"
              className="glass-accent flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-105"
            >
              <span>explore builds</span>
              <ArrowDown className="h-3.5 w-3.5" />
            </a>

            <a
              href="https://github.com/90tash"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium text-muted hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5 text-accent" />
              <span>github</span>
            </a>

            <a
              href="https://leetcode.com/90tash"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-mono text-muted hover:text-accent"
            >
              <Terminal className="h-3.5 w-3.5 text-accent" />
              <span>leetcode: 1471</span>
            </a>

            <a
              href="/api/resume"
              download="Ashish_Kumar_Patra_Resume.pdf"
              className="glass-pill flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-mono text-muted hover:text-accent"
            >
              <FileText className="h-3.5 w-3.5 text-accent" />
              <span>resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Vertical Editorial Tagline with Arrow (hidden on mobile) */}
        <div className="hidden sm:flex items-stretch self-stretch py-4">
          <div className="flex flex-col items-center">
            <p
              className="text-[0.68rem] tracking-[0.14em] text-muted uppercase font-mono"
              style={{ writingMode: "vertical-rl" }}
            >
              backend systems &amp; software development · odisha, india
            </p>
            <span className="mt-4 w-px flex-1 bg-border" aria-hidden="true" />
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="currentColor"
              className="-mt-px text-accent"
              aria-hidden="true"
            >
              <path d="M0 0h14L7 10 0 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}