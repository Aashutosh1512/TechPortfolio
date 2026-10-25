import React from 'react';
import ShaderCanvas from './ShaderCanvas';

export default function Header({
  headerTheme,
  megaMenuOpen,
  onToggleMegaMenu,
  onCloseMegaMenu,
  onOpenSearch,
  onOpenProject,
  onOpenResume,
}) {
  const isDark = headerTheme === 'dark';

  return (
    <header
      id="main-header"
      data-navigation
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        isDark
          ? 'bg-primary text-primary-foreground border-border-dark'
          : 'bg-background text-foreground border-border'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Brand Wordmark */}
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-sm sm:text-base font-extrabold tracking-tighter uppercase flex items-center gap-2"
          >
            <span>AASHUTOSH GOYAL</span>
            <span className="hidden sm:inline-block font-mono text-[10px] font-normal tracking-widest opacity-60">
              (SE / ANKO GCC)
            </span>
          </a>
        </div>

        {/* Center / Right Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
          <a href="#experience" className="meta-label hover:opacity-60 transition-opacity">
            Experience
          </a>
          <a href="#capabilities" className="meta-label hover:opacity-60 transition-opacity">
            Capabilities
          </a>
          <a href="#research" className="meta-label hover:opacity-60 transition-opacity">
            Credentials &amp; Logs
          </a>
          <button
            type="button"
            id="btn-open-search"
            onClick={onOpenSearch}
            className="meta-label hover:opacity-60 transition-opacity flex items-center gap-1.5"
          >
            <span>Search</span>
            <span className="font-mono text-[10px] opacity-60">[⌘K]</span>
          </button>
          <button
            type="button"
            id="btn-toggle-mega"
            aria-expanded={megaMenuOpen}
            onClick={onToggleMegaMenu}
            className="meta-label hover:opacity-60 transition-opacity flex items-center gap-1"
          >
            <span>Overview</span>
            <span id="mega-indicator" className="font-mono text-[10px] transition-transform duration-200">
              {megaMenuOpen ? '−' : '+'}
            </span>
          </button>
        </nav>

        {/* Far Right Controls: Motion Toggle + Pill CTA + Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">

          <button
            type="button"
            id="btn-mobile-search"
            onClick={onOpenSearch}
            className="lg:hidden rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-widest bg-secondary text-secondary-foreground"
          >
            Search
          </button>
          <button
            type="button"
            id="btn-mobile-menu"
            onClick={onToggleMegaMenu}
            className="lg:hidden rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-widest bg-secondary text-secondary-foreground"
          >
            Menu
          </button>
          <a
            href="#contact"
            id="header-cta-pill"
            className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider hover:opacity-85 transition-opacity ${
              isDark ? 'bg-white text-black' : 'bg-primary text-primary-foreground'
            }`}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* GERSTNER FULL-WIDTH 3-COLUMN DARK MEGA MENU */}
      <div
        id="mega-menu"
        className={`${megaMenuOpen ? 'block' : 'hidden'} bg-primary text-primary-foreground border-b border-border-dark`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:divide-x lg:divide-border-dark">
            {/* Column 1: Primary Index Navigation */}
            <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-8">
              <div>
                <p className="meta-label text-neutral-400 mb-4">DIRECTORY</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#hero"
                      data-mega-link
                      onClick={onCloseMegaMenu}
                      className="block text-2xl sm:text-3xl font-bold uppercase tracking-tighter hover:translate-x-2 transition-transform"
                    >
                      01 / Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#manifesto"
                      data-mega-link
                      onClick={onCloseMegaMenu}
                      className="block text-2xl sm:text-3xl font-bold uppercase tracking-tighter hover:translate-x-2 transition-transform"
                    >
                      02 / About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      data-mega-link
                      onClick={onCloseMegaMenu}
                      className="block text-2xl sm:text-3xl font-bold uppercase tracking-tighter hover:translate-x-2 transition-transform"
                    >
                      03 / Work Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#capabilities"
                      data-mega-link
                      onClick={onCloseMegaMenu}
                      className="block text-2xl sm:text-3xl font-bold uppercase tracking-tighter hover:translate-x-2 transition-transform"
                    >
                      04 / Capabilities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#research"
                      data-mega-link
                      onClick={onCloseMegaMenu}
                      className="block text-2xl sm:text-3xl font-bold uppercase tracking-tighter hover:translate-x-2 transition-transform"
                    >
                      06 / Credentials &amp; Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      data-mega-link
                      onClick={onCloseMegaMenu}
                      className="block text-2xl sm:text-3xl font-bold uppercase tracking-tighter hover:translate-x-2 transition-transform"
                    >
                      07 / Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pt-8 mt-8 border-t border-border-dark flex items-center justify-between">
                <span className="meta-label text-neutral-400">IET DAVV INDORE — B.E. IT (8.02 CGPA)</span>
                <button
                  type="button"
                  id="btn-close-mega"
                  onClick={onCloseMegaMenu}
                  className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest bg-white text-black hover:opacity-80"
                >
                  Close [ESC]
                </button>
              </div>
            </div>

            {/* Column 2: Works Grouped by Architecture Domain */}
            <div className="lg:col-span-5 lg:pl-8 pr-0 lg:pr-8 flex flex-col justify-between">
              <div>
                <p className="meta-label text-neutral-400 mb-4">(02) SYSTEMS BY ARCHITECTURE DOMAIN</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="meta-label text-white mb-2 pb-1 border-b border-border-dark">
                      EVENT-DRIVEN &amp; CLOUD
                    </p>
                    <ul className="space-y-1.5 text-sm text-neutral-300">
                      <li>
                        <button
                          type="button"
                          data-open-project="01"
                          onClick={function() { onOpenProject('01'); }}
                          className="hover:text-white text-left"
                        >
                          01. AWS SNS–SQS to Kafka Migration
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          data-open-project="04"
                          onClick={function() { onOpenProject('04'); }}
                          className="hover:text-white text-left"
                        >
                          04. Kafka–RabbitMQ Hybrid (+40%)
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          data-open-project="03"
                          onClick={function() { onOpenProject('03'); }}
                          className="hover:text-white text-left"
                        >
                          03. Redis &amp; EF Core Cost Engine (-36%)
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="meta-label text-white mb-2 pb-1 border-b border-border-dark">
                      GEN-AI &amp; ENTERPRISE APPS
                    </p>
                    <ul className="space-y-1.5 text-sm text-neutral-300">
                      <li>
                        <button
                          type="button"
                          data-open-project="02"
                          onClick={function() { onOpenProject('02'); }}
                          className="hover:text-white text-left"
                        >
                          02. Phi-3 RAG Incident Root-Cause Engine
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          data-open-project="05"
                          onClick={function() { onOpenProject('05'); }}
                          className="hover:text-white text-left"
                        >
                          05. Distributed Assessment System (500+)
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          data-open-project="06"
                          onClick={function() { onOpenProject('06'); }}
                          className="hover:text-white text-left"
                        >
                          06. Enterprise Link Tracking API
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border-dark grid grid-cols-3 gap-4">
                <div>
                  <p className="meta-label text-neutral-400">GLOBAL RANK</p>
                  <p className="text-lg font-bold uppercase">TOP 1.5% (AIR 361)</p>
                </div>
                <div>
                  <p className="meta-label text-neutral-400">API COST REDUCTION</p>
                  <p className="text-lg font-bold uppercase">-36% EXECUTION</p>
                </div>
                <div>
                  <p className="meta-label text-neutral-400">DSA SOLVED</p>
                  <p className="text-lg font-bold uppercase">800+ PROBLEMS</p>
                </div>
              </div>
            </div>

            {/* Column 3: Live WebGL Shader Callout Poster */}
            <div className="lg:col-span-3 lg:pl-8">
              <div className="relative h-full min-h-[240px] border border-border-dark p-6 flex flex-col justify-between overflow-hidden">
                <ShaderCanvas
                  palette="01"
                  phaseOffset={0}
                  motionEnabled={true}
                  className="pointer-events-none absolute inset-0 w-full h-full opacity-85"
                />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="meta-label bg-black/80 text-white px-2.5 py-1">STATUS / 2026</span>
                  <span className="meta-label bg-black/80 text-white px-2.5 py-1">BENGALURU, IN</span>
                </div>
                <div className="relative z-10 bg-black/85 p-4 backdrop-blur-xs">
                  <p className="meta-label text-neutral-300 mb-1">CURRENT MANDATE</p>
                  <p className="text-xl font-extrabold uppercase tracking-tight text-white leading-tight mb-3">
                    SOFTWARE ENGINEER AT ANKO GCC (KMART AUSTRALIA)
                  </p>
                  <button
                    type="button"
                    id="btn-mega-resume"
                    onClick={onOpenResume}
                    className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white text-black hover:opacity-90 transition-opacity w-full"
                  >
                    Inspect Full Resume Spec
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
