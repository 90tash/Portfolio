"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BentoGrid() {
  return (
    <section id="bento" className="px-5 py-20 sm:px-10 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl">
        {/* Editorial Section Pre-Header */}
        <div className="mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-muted sm:pl-10">
            powered by
          </span>
          <h2
            className="my-3 font-display font-bold lowercase leading-[0.92] text-foreground sm:pl-10"
            style={{ fontSize: "clamp(2.2rem, 6.5vw, 4.8rem)" }}
          >
            <span className="block text-accent">relentless curiosity</span>
            <span className="block text-foreground">&amp; clean architecture.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="flex flex-wrap items-stretch gap-4 sm:gap-5">
          {/* Tile 1: Profile Photo Card with Floating Pill Badge */}
          <div className="relative min-h-[280px] sm:min-h-[340px] w-full sm:max-w-[320px] flex-[1_1_280px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-border bg-surface transition-all hover:border-accent/40">
            <Image
              src="/assets/git_profile.jpg"
              alt="Ashish Kumar Patra"
              fill
              className="object-cover object-center filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 320px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-surface/90 px-3.5 py-1.5 font-mono text-[0.68rem] text-muted backdrop-blur-md border border-border shadow-lg">
              (probably profiling an API)
            </span>
          </div>

          {/* Tile 2: Backend Systems (Primary Focus) */}
          <div className="group flex min-h-[280px] sm:min-h-[340px] w-full flex-[1_1_320px] flex-col justify-between rounded-[2rem] sm:rounded-[2.5rem] border border-border bg-surface p-6 sm:p-10 transition-all hover:border-accent/40">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted">Core Competency</span>
              <h3 className="mt-2 font-display text-2xl sm:text-4xl font-bold lowercase text-foreground">
                backend &amp;<br />systems
              </h3>
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted leading-relaxed">
              Java, Spring Boot, Spring Data JPA, and PostgreSQL architectures built for thread-safe concurrency, ACID reliability, and clean domain boundaries.
            </p>
            <a
              href="#contact"
              className="mt-6 -mb-1 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent transition-all duration-300 group-hover:gap-3"
            >
              <span>reach out</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Tile 3: Full-Stack & Intelligent APIs */}
          <div className="group flex min-h-[280px] sm:min-h-[340px] w-full flex-[1_1_320px] flex-col justify-between rounded-[2rem] sm:rounded-[2.5rem] border border-border bg-surface p-6 sm:p-10 transition-all hover:border-accent/40">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted">Full Stack &amp; AI</span>
              <h3 className="mt-2 font-display text-2xl sm:text-4xl font-bold lowercase text-foreground">
                fastapi &amp;<br />reactive web
              </h3>
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted leading-relaxed">
              High-throughput asynchronous APIs with Python &amp; FastAPI, coupled with React &amp; Next.js frontend interfaces, zustand stores, and LLM tool pipelines.
            </p>
            <a
              href="#contact"
              className="mt-6 -mb-1 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent transition-all duration-300 group-hover:gap-3"
            >
              <span>reach out</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Tile 4: Competitive Programming */}
          <div className="group flex min-h-[280px] sm:min-h-[340px] w-full flex-[1_1_320px] flex-col justify-between rounded-[2rem] sm:rounded-[2.5rem] border border-border bg-surface p-6 sm:p-10 transition-all hover:border-accent/40">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted">Problem Solving</span>
              <h3 className="mt-2 font-display text-2xl sm:text-4xl font-bold lowercase text-foreground">
                algorithms &amp;<br />contests
              </h3>
            </div>
            <div className="mt-4 sm:mt-6">
              <div className="mb-2 font-mono text-xs sm:text-sm text-muted">
                LeetCode Contest Rating (<span className="font-bold text-accent">1471</span>)
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Daily algorithmic problem solving in Dynamic Programming, Graphs, and Trees across LeetCode, Codeforces, and CodeChef.
              </p>
            </div>
            <a
              href="https://leetcode.com/90tash"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 -mb-1 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent transition-all duration-300 group-hover:gap-3"
            >
              <span>view leetcode</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Tile 5: Open Source & Community Leadership */}
          <div className="group flex min-h-[280px] sm:min-h-[340px] w-full flex-[1_1_320px] flex-col justify-between rounded-[2rem] sm:rounded-[2.5rem] border border-border bg-surface p-6 sm:p-10 transition-all hover:border-accent/40">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted">Impact</span>
              <h3 className="mt-2 font-display text-2xl sm:text-4xl font-bold lowercase text-foreground">
                open source &amp;<br />mentorship
              </h3>
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted leading-relaxed">
              Contributor to <b>GirlScript Summer of Code (GSSOC)</b>, university Coding Club lead participant, and active National Service Scheme (NSS) volunteer.
            </p>
            <a
              href="https://github.com/90tash"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 -mb-1 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent transition-all duration-300 group-hover:gap-3"
            >
              <span>view github</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}