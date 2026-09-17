"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Terminal, ArrowDown, ArrowDownRight, Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-10 sm:py-32 border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Get in touch your way */}
        <div>
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
            get in touch your way
            <ArrowDown className="h-3.5 w-3.5 text-accent" />
          </span>

          <div className="mt-8 flex flex-col gap-6 sm:gap-8">
            {/* Direct Info List */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:pashishkumar360@gmail.com"
                className="group flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-accent">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-mono text-[0.7rem] text-muted">Direct Email</span>
                  <span className="font-medium text-xs sm:text-sm">pashishkumar360@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-sm text-muted">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-accent">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-mono text-[0.7rem] text-muted">Location</span>
                  <span className="text-foreground text-xs sm:text-sm">Bhubaneswar, Odisha, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-accent">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-mono text-[0.7rem] text-muted">Phone</span>
                  <span className="text-foreground text-xs sm:text-sm">+91 9861329376</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-4 border-t border-border">
              <a
                href="https://github.com/90tash"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill flex items-center gap-2 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono text-muted hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5 text-accent" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/AshishKumarPatra"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill flex items-center gap-2 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono text-muted hover:text-foreground"
              >
                <Linkedin className="h-3.5 w-3.5 text-accent" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/90tash"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill flex items-center gap-2 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono text-muted hover:text-foreground"
              >
                <Terminal className="h-3.5 w-3.5 text-accent" />
                <span>LeetCode</span>
              </a>

              <a
                href="https://www.instagram.com/ashorwott/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill flex items-center gap-2 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono text-muted hover:text-foreground"
              >
                <Instagram className="h-3.5 w-3.5 text-accent" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Or my way (Minimalist Form) */}
        <div>
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
            <ArrowDownRight className="h-3.5 w-3.5 text-accent" />
            or my way
          </span>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-accent/40 bg-accent/10 p-6 sm:p-8 text-center">
              <CheckCircle2 className="mx-auto h-9 w-9 sm:h-10 sm:w-10 text-accent mb-3" />
              <h4 className="font-display text-lg sm:text-xl font-bold lowercase text-foreground">message transmitted</h4>
              <p className="mt-2 text-xs text-muted">
                Thanks for reaching out! I typically respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="glass-pill mt-6 rounded-full px-5 py-2 text-xs font-mono text-muted hover:text-foreground"
              >
                send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5 sm:gap-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                <input
                  required
                  placeholder="NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-border bg-transparent px-1 py-3 text-sm text-foreground outline-none transition-colors placeholder:font-mono placeholder:text-xs placeholder:text-muted/60 focus:border-accent"
                />
                <input
                  type="email"
                  required
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-border bg-transparent px-1 py-3 text-sm text-foreground outline-none transition-colors placeholder:font-mono placeholder:text-xs placeholder:text-muted/60 focus:border-accent"
                />
              </div>

              <textarea
                required
                rows={4}
                placeholder="MESSAGE"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="resize-none border-b border-border bg-transparent px-1 py-3 text-sm text-foreground outline-none transition-colors placeholder:font-mono placeholder:text-xs placeholder:text-muted/60 focus:border-accent"
              />

              <button
                type="submit"
                className="glass-accent mt-3 sm:mt-4 flex items-center justify-center gap-2 rounded-full px-8 py-3 text-xs font-mono uppercase tracking-wider font-semibold text-white transition-transform hover:scale-105 w-full sm:w-auto self-start"
              >
                <span>send message</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}