"use client";

import { Github } from "lucide-react";

export function SecondaryProjects() {
  return (
    <section className="px-5 py-16 sm:px-10 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-muted sm:pl-10">
            more explorations
          </span>
          <h2
            className="my-2 font-display font-bold lowercase leading-[0.92] text-foreground sm:pl-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            intelligence &amp; tooling
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {/* WatchGPT */}
          <div className="group rounded-[2rem] border border-border bg-surface p-6 sm:p-10 transition-all hover:border-accent/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-mono text-accent">
                  Python · NLP · FastAPI
                </span>
                <span className="text-xs font-mono text-muted">Jan 2026</span>
              </div>
              <h3 className="font-display text-xl sm:text-3xl font-bold lowercase text-foreground">
                WatchGPT
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed">
                Fast, intelligent movie companion. Hybrid TF-IDF recommendation model paired with a sentiment-aware conversational chatbot interface for hyper-personalized film discovery.
              </p>
            </div>

            <div className="mt-6 pt-5 sm:mt-8 sm:pt-6 border-t border-border flex items-center justify-between">
              <span className="text-[0.7rem] sm:text-xs font-mono text-muted truncate max-w-[180px] sm:max-w-none">
                Cosine similarity &amp; sentiment
              </span>
              <a
                href="https://github.com/90tash/WatchGPT"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-mono text-foreground hover:text-accent"
              >
                <Github className="h-3.5 w-3.5 text-accent" />
                <span>source</span>
              </a>
            </div>
          </div>

          {/* FlashGen */}
          <div className="group rounded-[2rem] border border-border bg-surface p-6 sm:p-10 transition-all hover:border-accent/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-mono text-accent">
                  AI · React · LLM
                </span>
                <span className="text-xs font-mono text-muted">Aug 2025</span>
              </div>
              <h3 className="font-display text-xl sm:text-3xl font-bold lowercase text-foreground">
                FlashGen
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed">
                Automated study note distillation. Extracts core academic concepts from raw lecture notes and automatically synthesizes spaced-repetition question-and-answer flashcard decks.
              </p>
            </div>

            <div className="mt-6 pt-5 sm:mt-8 sm:pt-6 border-t border-border flex items-center justify-between">
              <span className="text-[0.7rem] sm:text-xs font-mono text-muted truncate max-w-[180px] sm:max-w-none">
                Automated deck extraction
              </span>
              <a
                href="https://github.com/90tash"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-mono text-foreground hover:text-accent"
              >
                <Github className="h-3.5 w-3.5 text-accent" />
                <span>source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}