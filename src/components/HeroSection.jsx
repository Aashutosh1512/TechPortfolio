import React from 'react';
import ShaderCanvas from './ShaderCanvas';
import SquareDissolveGrid from './SquareDissolveGrid';
import WipeHeadline from './WipeHeadline';
import { SHADER_PALETTES } from '../data/portfolioData';

export default function HeroSection({
  heroImageSrc = `${import.meta.env.BASE_URL}assets/hero-development.png`,
  heroPaletteKey,
  onCyclePalette,
  motionEnabled,
  onCopyEmail,
  onOpenResume,
}) {
  const paletteObj = SHADER_PALETTES[heroPaletteKey] || SHADER_PALETTES['02'];

  return (
    <section id="hero" data-theme="light" className="bg-background text-foreground border-b border-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between gap-10 pt-6 pb-12 md:gap-14 md:pb-16 lg:min-h-[calc(100svh-3.5rem)]">
        {/* Top Half: Square-Cut Grayscale Architectural Mosaic + Shader Accent Square */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border">
          {/* Left 9 Columns: Stepped Square-Cut Grayscale Architectural Photo */}
          <div className="lg:col-span-9 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[410px] overflow-hidden bg-muted">
            <img
              src={heroImageSrc}
              alt="Brutalist Swiss computing and distributed server infrastructure"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
            />
            <ShaderCanvas
              palette="01"
              phaseOffset={1}
              motionEnabled={motionEnabled}
              className="pointer-events-none absolute inset-0 w-full h-full opacity-0 hover:opacity-45 transition-opacity duration-500"
            />

            {/* Square-Cut Poster Mask & Staggered Dissolve Overlay */}
            <SquareDissolveGrid variant="hero" motionEnabled={motionEnabled} />

            {/* Floating Swiss Index Tag */}
            <div className="absolute top-3 left-3 z-10 bg-background/95 border border-border px-3 py-1.5">
              <p className="meta-label">(01 / PROFESSIONAL PROFILE) — DISTRIBUTED MICROSERVICES &amp; CLOUD ARCHITECTURE</p>
            </div>
          </div>

          {/* Right 3 Columns: Live WebGL Shader Spec Card */}
          <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-between relative overflow-hidden min-h-[240px]">
            <ShaderCanvas
              id="hero-shader-canvas"
              palette={heroPaletteKey}
              phaseOffset={2}
              motionEnabled={motionEnabled}
              className="pointer-events-none absolute inset-0 w-full h-full"
            />
            <div className="relative z-10 p-5 flex items-center justify-between bg-primary/85 text-primary-foreground border-b border-border-dark">
              <span className="meta-label">
                SHADER PALETTE / <span id="active-palette-label">{paletteObj.name}</span>
              </span>
              <button
                type="button"
                id="btn-cycle-palette"
                onClick={onCyclePalette}
                className="rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-white text-black hover:opacity-80 transition-opacity"
              >
                Cycle Palette ↻
              </button>
            </div>
            <div className="relative z-10 p-5 bg-primary/90 text-primary-foreground mt-auto border-t border-border-dark">
              <p className="meta-label text-neutral-400 mb-1">COMPETITIVE BENCHMARK</p>
              <p className="text-2xl font-extrabold uppercase tracking-tight leading-none mb-2">
                TOP 1.5% GLOBALLY
              </p>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Ranked AIR 361 (Global Rank 2,063) out of 140,000+ developers in TCS CodeVita Season 11, with 800+ DSA problems solved.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Bar: 6-Column Metadata Grid + Dual Action Pill Buttons */}
        <div className="border-t border-b border-border py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-y-5 gap-x-4 items-center">
            <div className="lg:col-span-3">
              <p className="meta-label text-muted-foreground">Role &amp; Org</p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-tight mt-0.5">
                Software Engineer @ Anko GCC
              </p>
            </div>

            <div className="lg:col-span-3 lg:border-l lg:border-border lg:pl-4">
              <p className="meta-label text-muted-foreground">Direct Email</p>
              <button
                type="button"
                id="btn-hero-copy-email"
                onClick={onCopyEmail}
                className="text-xs sm:text-sm font-bold uppercase tracking-tight mt-0.5 hover:underline text-left flex items-center gap-1"
                title="Click to copy email"
              >
                <span>aashutosh89660@gmail.com</span>
              </button>
            </div>
            <div className="lg:col-span-2 lg:border-l lg:border-border lg:pl-4">
              <p className="meta-label text-muted-foreground">Phone</p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-tight mt-0.5">+91-8966098596</p>
            </div>
            {/* Dual Pill Action Buttons */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-4 flex flex-wrap items-center lg:justify-end gap-2.5 lg:pr-28">
              <button
                type="button"
                id="btn-open-resume-modal"
                onClick={onOpenResume}
                className="rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Resume
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Anchor: Monumental Swiss Poster Headline */}
        <div className="pt-2">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-3">
            <p className="meta-label text-muted-foreground">
              ENTERPRISE MICROSERVICES, CLOUD-NATIVE INFRASTRUCTURE &amp; GEN-AI ROOT-CAUSE WORKFLOWS
            </p>
            <p className="meta-label text-foreground font-semibold">
              B.E. INFORMATION TECHNOLOGY (IET DAVV INDORE) — OPEN TO DISTRIBUTED SYSTEMS &amp; CLOUD ENGINEERING ROLES
            </p>
          </div>
          <WipeHeadline
            as="h1"
            className="poster-title trim-caps text-[3.3rem] sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8.5rem] tracking-tighter uppercase leading-none select-none"
          >
            AASHUTOSH GOYAL
          </WipeHeadline>
        </div>
      </div>
    </section>
  );
}
