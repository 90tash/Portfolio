"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Play, CheckCircle2, Film, Sparkles, Flame } from "lucide-react";

export function ProductHero() {
  return (
    <div id="projects">
      {/* ---------------- PROJECT 1: EPICSTREAM ---------------- */}
      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-10 sm:py-32 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            the thing i actually shipped
          </span>
          <h2
            className="font-display font-bold lowercase leading-[0.92] text-foreground"
            style={{ fontSize: "clamp(2.5rem, 9vw, 6.5rem)" }}
          >
            EpicStream
          </h2>
          <p className="mt-3 max-w-[54ch] text-sm text-muted leading-relaxed sm:text-base">
            A visual-first movie streaming &amp; cinematic discovery platform built with React, TMDB API, and Zustand. Real-time movie filtering, responsive video playback, instant search, and zero-flicker state persistence.
          </p>
        </div>

        {/* Visual Mockup Stage with Ambient Glow */}
        <div className="shot-glow mx-auto mt-12 sm:mt-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-xl shadow-black/5 dark:shadow-2xl dark:shadow-black/80 p-5 sm:p-8 transition-colors"
          >
            {/* Mockup Browser Header */}
            <div className="flex items-center justify-between border-b border-border pb-3.5 mb-5 sm:pb-4 sm:mb-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 sm:ml-3 font-mono text-[0.7rem] sm:text-xs text-muted truncate max-w-[160px] sm:max-w-none">
                  epicstreams.vercel.app
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-accent">
                <Film className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">React + Zustand</span>
              </div>
            </div>

            {/* Inner Mockup UI Cards */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-4">
              <div className="group rounded-2xl border border-border bg-surface-card p-4 transition-all hover:border-accent/40">
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-orange-500/15 via-orange-950/20 to-surface-card flex items-center justify-center text-accent">
                  <Play className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h4 className="font-display font-semibold text-sm lowercase text-foreground">Cinematic Discovery</h4>
                  <span className="rounded bg-accent/15 px-2 py-0.5 text-[0.65rem] font-mono text-accent">TMDB Live</span>
                </div>
                <p className="mt-1 text-xs text-muted">High-res artwork with real-time backdrop refraction and instant trailer playback.</p>
              </div>

              <div className="group rounded-2xl border border-border bg-surface-card p-4 transition-all hover:border-accent/40">
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-orange-500/15 via-orange-950/20 to-surface-card flex items-center justify-center text-accent">
                  <Sparkles className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h4 className="font-display font-semibold text-sm lowercase text-foreground">Zustand State</h4>
                  <span className="rounded bg-accent/15 px-2 py-0.5 text-[0.65rem] font-mono text-accent">Reactive</span>
                </div>
                <p className="mt-1 text-xs text-muted">Lightweight state store for watchlists, filters, bookmarks, and playback history.</p>
              </div>

              <div className="group rounded-2xl border border-border bg-surface-card p-4 transition-all hover:border-accent/40">
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-orange-500/15 via-orange-950/20 to-surface-card flex items-center justify-center text-accent">
                  <Film className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h4 className="font-display font-semibold text-sm lowercase text-foreground">Instant Search</h4>
                  <span className="rounded bg-accent/15 px-2 py-0.5 text-[0.65rem] font-mono text-accent">Debounced</span>
                </div>
                <p className="mt-1 text-xs text-muted">Debounced API queries with optimistic UI caching and smooth micro-interactions.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Metric Ribbon (<dl>) */}
        <dl className="mx-auto mt-10 sm:mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:gap-6 border-y border-border py-6 sm:py-7 sm:grid-cols-4">
          <div className="text-center">
            <dt className="text-[0.7rem] sm:text-xs font-mono lowercase tracking-wide text-muted">deployment</dt>
            <dd className="mt-1 font-display text-xl sm:text-2xl font-bold lowercase text-accent">live</dd>
          </div>
          <div className="text-center">
            <dt className="text-[0.7rem] sm:text-xs font-mono lowercase tracking-wide text-muted">architecture</dt>
            <dd className="mt-1 font-display text-xl sm:text-2xl font-bold lowercase text-foreground">react</dd>
          </div>
          <div className="text-center">
            <dt className="text-[0.7rem] sm:text-xs font-mono lowercase tracking-wide text-muted">latest build</dt>
            <dd className="mt-1 font-display text-xl sm:text-2xl font-bold lowercase text-foreground">v2.1</dd>
          </div>
          <div className="text-center">
            <dt className="text-[0.7rem] sm:text-xs font-mono lowercase tracking-wide text-muted">access</dt>
            <dd className="mt-1 font-display text-xl sm:text-2xl font-bold lowercase text-accent">free</dd>
          </div>
        </dl>

        {/* Action Pills */}
        <div className="mx-auto mt-8 sm:mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-3">
          <a
            href="https://epicstreams.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-accent group flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 ease-out hover:scale-105 active:scale-[0.98] transform-gpu will-change-transform"
          >
            <ExternalLink className="h-4 w-4 shrink-0" />
            <span>explore epicstream</span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </a>
          <a
            href="https://github.com/90tash"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill flex items-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-medium text-muted hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            <span>view source</span>
          </a>
        </div>
      </section>

      {/* ---------------- PROJECT 2: HABITRA ---------------- */}
      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-10 sm:py-32 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            master your daily momentum
          </span>
          <h2
            className="font-display font-bold lowercase leading-[0.92] text-foreground"
            style={{ fontSize: "clamp(2.5rem, 9vw, 6.5rem)" }}
          >
            Habitra
          </h2>
          <p className="mt-3 max-w-[54ch] text-sm text-muted leading-relaxed sm:text-base">
            A high-craft habit tracking and focus suite built with React, Vite, and TypeScript. Streak heatmaps, customizable Pomodoro focus sessions, daily checklist graphs, and zero-telemetry local-first persistence.
          </p>
        </div>

        {/* Visual Mockup Stage */}
        <div className="shot-glow mx-auto mt-12 sm:mt-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-xl shadow-black/5 dark:shadow-2xl dark:shadow-black/80 p-5 sm:p-8 transition-colors"
          >
            <div className="flex items-center justify-between border-b border-border pb-3.5 mb-5 sm:pb-4 sm:mb-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 sm:ml-3 font-mono text-[0.7rem] sm:text-xs text-muted truncate max-w-[160px] sm:max-w-none">
                  github.com/90tash/Habitra
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-accent">
                <Flame className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Local-First TS</span>
              </div>
            </div>

            {/* Streak & Focus Preview Cards */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-2xl border border-border bg-surface-card p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">Streak Heatmap</span>
                  <Flame className="h-4 w-4 text-accent" />
                </div>
                <div className="mt-3 grid grid-cols-7 gap-1">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 w-3 rounded-sm ${
                        i % 3 === 0
                          ? "bg-accent"
                          : i % 2 === 0
                          ? "bg-accent/40"
                          : "bg-surface-hover"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted">Continuous GitHub-style streak logging without remote server lag.</p>
              </div>

              <div className="rounded-2xl border border-border bg-surface-card p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">Focus Engine</span>
                  <span className="font-mono text-xs text-accent">25:00</span>
                </div>
                <div className="mt-3 flex items-center justify-center py-2">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-dashed border-accent/60 flex items-center justify-center font-display font-bold text-xs sm:text-sm text-foreground">
                    deep
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted">Integrated Pomodoro timer with distraction-free chimes.</p>
              </div>

              <div className="rounded-2xl border border-border bg-surface-card p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">Daily Routines</span>
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </div>
                <div className="mt-3 space-y-1.5 font-mono text-xs text-muted">
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span>DSA LeetCode daily</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span>Spring Boot JPA build</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />
                    <span>Open-source PR review</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Metric Ribbon */}
        <dl className="mx-auto mt-10 sm:mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:gap-6 border-y border-border py-6 sm:py-7 sm:grid-cols-4">
          <div className="text-center">
            <dt className="text-[0.7rem] sm:text-xs font-mono lowercase tracking-wide text-muted">architecture</dt>
            <dd className="mt-1 font-display text-xl sm:text-2xl font-bold lowercase text-accent">local-first</dd>
          </div>
          <div className="text-center">
            <dt className="text-[0.7rem] sm:text-xs font-mono lowercase tracking-wide text-muted">bundler</dt>
            <dd className="mt-1 font-display text-xl sm:text-2xl font-bold lowercase text-foreground">vite</dd>
          </div>
          <div className="text-center">
            <dt className="text-[0.7rem] sm:text-xs font-mono lowercase tracking-wide text-muted">license</dt>
            <dd className="mt-1 font-display text-xl sm:text-2xl font-bold lowercase text-foreground">mit</dd>
          </div>
          <div className="text-center">
            <dt className="text-[0.7rem] sm:text-xs font-mono lowercase tracking-wide text-muted">latest build</dt>
            <dd className="mt-1 font-display text-xl sm:text-2xl font-bold lowercase text-accent">v1.2</dd>
          </div>
        </dl>

        {/* Action Pills */}
        <div className="mx-auto mt-8 sm:mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/90tash/Habitra"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-accent group flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 ease-out hover:scale-105 active:scale-[0.98] transform-gpu will-change-transform"
          >
            <Github className="h-4 w-4 shrink-0" />
            <span>explore habitra</span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </a>
          <a
            href="https://github.com/90tash/Habitra"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill flex items-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-medium text-muted hover:text-foreground"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span>star on github</span>
          </a>
        </div>
      </section>
    </div>
  );
}