"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-5 py-12 sm:px-10 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Brand Col */}
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl font-bold lowercase text-foreground transition-colors hover:text-accent"
            >
              90tash
            </Link>
            <div className="mt-3 font-mono text-xs text-muted leading-relaxed">
              <p className="text-foreground font-medium">Ashish Kumar Patra</p>
              <p>backend &amp; systems</p>
              <p>software development</p>
            </div>
          </div>

          {/* Site Navigation */}
          <nav className="flex flex-col gap-2.5 text-xs font-mono text-muted">
            <span className="text-foreground font-semibold">site</span>
            <a href="#projects" className="hover:text-accent transition-colors">
              epicstream
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              habitra
            </a>
            <a href="#bento" className="hover:text-accent transition-colors">
              pillars &amp; bio
            </a>
            <a href="#stack" className="hover:text-accent transition-colors">
              technologies
            </a>
            <a href="#credentials" className="hover:text-accent transition-colors">
              credentials
            </a>
          </nav>

          {/* Elsewhere */}
          <nav className="flex flex-col gap-2.5 text-xs font-mono text-muted">
            <span className="text-foreground font-semibold">elsewhere</span>
            <a
              href="https://github.com/90tash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/AshishKumarPatra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              linkedin
            </a>
            <a
              href="https://leetcode.com/90tash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              leetcode
            </a>
            <a
              href="https://www.instagram.com/ashorwott/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              instagram
            </a>
            <a
              href="/api/resume"
              download="Ashish_Kumar_Patra_Resume.pdf"
              className="hover:text-accent transition-colors"
            >
              resume (pdf)
            </a>
          </nav>

          {/* Academic / Location */}
          <div className="flex flex-col gap-2.5 text-xs font-mono text-muted">
            <span className="text-foreground font-semibold">origin</span>
            <span>Bhubaneswar, Odisha, India</span>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs font-mono text-muted sm:flex-row sm:items-center">
          <p>© Ashish Kumar Patra 2026</p>
          <p>
            crafted with <span className="text-accent">♥</span> by 90tash
          </p>
        </div>
      </div>
    </footer>
  );
}