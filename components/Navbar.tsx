"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-10">
        {/* Brand & Isometric Prism Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-display text-lg font-bold lowercase tracking-tight text-foreground transition-colors hover:text-accent"
        >
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M10 2L18 7.5L10 13L2 7.5L10 2Z" fill="#FF4D4D" />
            <path d="M2 7.5L10 13V19L2 13.5V7.5Z" fill="#D32F2F" />
            <path d="M10 13L18 7.5V13.5L10 19V13Z" fill="#9A0007" />
          </svg>
          <span>90tash</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm tracking-wide md:flex">
          <a
            href="#projects"
            className="text-muted transition-colors hover:text-foreground"
          >
            projects
          </a>
          <a
            href="#bento"
            className="text-muted transition-colors hover:text-foreground"
          >
            pillars
          </a>
          <a
            href="#stack"
            className="text-muted transition-colors hover:text-foreground"
          >
            stack
          </a>
          <a
            href="#credentials"
            className="text-muted transition-colors hover:text-foreground"
          >
            credentials
          </a>

          {/* Theme Toggle (Sun / Moon) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="glass-pill flex h-8 w-8 items-center justify-center rounded-full text-muted transition-all hover:border-accent hover:text-accent"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-4 w-4 text-accent transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="h-4 w-4 text-accent transition-transform rotate-0 hover:-rotate-12" />
              )
            ) : (
              <span className="inline-block h-4 w-4" />
            )}
          </button>

          {/* Frosted Glass Reach Out CTA */}
          <a
            href="#contact"
            className="glass-pill flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium text-foreground transition-all hover:border-accent/40 hover:text-accent"
          >
            <span>reach out</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
          </a>
        </nav>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="glass-pill flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-3.5 w-3.5 text-accent" />
              ) : (
                <Moon className="h-3.5 w-3.5 text-accent" />
              )
            ) : (
              <span className="inline-block h-3.5 w-3.5" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="glass-pill flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="border-b border-border bg-background/95 px-6 py-5 backdrop-blur-xl md:hidden transition-colors">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <a
              href="#projects"
              onClick={() => setMobileOpen(false)}
              className="py-1 text-muted hover:text-foreground"
            >
              projects
            </a>
            <a
              href="#bento"
              onClick={() => setMobileOpen(false)}
              className="py-1 text-muted hover:text-foreground"
            >
              pillars
            </a>
            <a
              href="#stack"
              onClick={() => setMobileOpen(false)}
              className="py-1 text-muted hover:text-foreground"
            >
              stack
            </a>
            <a
              href="#credentials"
              onClick={() => setMobileOpen(false)}
              className="py-1 text-muted hover:text-foreground"
            >
              credentials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="glass-pill mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-center text-xs font-semibold text-foreground"
            >
              <span>reach out</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}