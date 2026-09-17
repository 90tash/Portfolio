"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EditorialIntro } from "@/components/EditorialIntro";
import { ProductHero } from "@/components/ProductHero";
import { KineticBreak } from "@/components/KineticBreak";
import { BentoGrid } from "@/components/BentoGrid";
import { SecondaryProjects } from "@/components/SecondaryProjects";
import { TechStackScroll } from "@/components/TechStackScroll";
import { CredentialsSection } from "@/components/CredentialsSection";
import { GlyphDial } from "@/components/GlyphDial";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <EditorialIntro />
          <ProductHero />
          <KineticBreak />
          <BentoGrid />
          <SecondaryProjects />
          <TechStackScroll />
          <CredentialsSection />
          <GlyphDial />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}