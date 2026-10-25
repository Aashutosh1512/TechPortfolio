# Aashutosh Goyal — Gerstner Swiss Grid Portfolio (React + Vite + Tailwind CSS)

A 1:1 React + Vite + Tailwind CSS conversion of the **Aashutosh Goyal Distributed Systems & Cloud Architecture Portfolio**, designed in the **Lexington Themes Gerstner** Swiss poster aesthetic.

## Project Architecture & File Tree

```text
aashutosh-goyal-portfolio/
├── index.html                          # Root HTML with Switzer Fontshare stylesheet
├── package.json                        # React 18, Vite 6, Tailwind CSS 3 dependencies & scripts
├── postcss.config.js                   # PostCSS configuration for Tailwind & Autoprefixer
├── tailwind.config.js                  # Exact Gerstner color tokens & Switzer/Mono font families
├── vite.config.js                      # Vite development & production bundler config
├── public/
│   └── assets/
│       ├── hero-infrastructure.jpg     # Section 01 grayscale brutalist server infrastructure photo
│       └── studio-telemetry.jpg        # Section 02 grayscale engineering telemetry workspace photo
└── src/
    ├── main.jsx                        # React 18 root mount
    ├── index.css                       # Gerstner CSS variables, .poster-title, .meta-label, bar-wipe keyframes & dissolve rules
    ├── App.jsx                         # Root state controller, scroll-adaptive header observer & keyboard shortcuts (⌘K, ESC)
    ├── data/
    │   └── portfolioData.js            # 8 Swiss shader palettes, 4x4 Bayer dither matrix, 6 case studies & CV summary
    └── components/
        ├── ShaderCanvas.jsx            # Live 2D Canvas/WebGL 4x4 Bayer ordered-dither Swiss shader engine
        ├── SquareDissolveGrid.jsx      # 48-cell Hero & 36-cell Portrait square-by-square dissolve overlay with corner cutouts
        ├── WipeHeadline.jsx            # IntersectionObserver GSAP-style bar-wipe headline reveal wrapper
        ├── Header.jsx                  # Sticky adaptive light/dark header + 3-column dark Mega Menu
        ├── HeroSection.jsx             # Section 01: Full-viewport Swiss poster hero + live shader spec card
        ├── ManifestoSection.jsx        # Section 02: Dark split portrait, 4 impact metrics & architectural thesis
        ├── SelectedWorksSection.jsx    # Section 03: Filterable 3-column Swiss hairline grid & index table switcher
        ├── CapabilitiesSection.jsx     # Section 04: 4 live shader faculty pillars + 34-tech specification matrix
        ├── ExperienceSection.jsx       # Section 05: Dark tenure directory (13 indexed milestones at Anko GCC)
        ├── CredentialsSection.jsx      # Section 06: TCS CodeVita Top 1.5% (AIR 361) shader poster & education rows
        ├── ContactSection.jsx          # Section 07: Direct transmission composer, giant email CTA & live IST clock footer
        ├── SearchModal.jsx             # Full-screen [⌘K] search lightbox with quick queries & instant filtering
        ├── ProjectModal.jsx            # Case study architectural dossier modal with Prev/Next cycling
        ├── ResumeModal.jsx             # Official Curriculum Vitae modal with one-click plain-text copy
        └── ToastBanner.jsx             # Bottom-right clipboard & motion status notification banner
```

## Quick Start & Local Setup

1. **Extract the project archive** (or clone into a folder):
   ```bash
   unzip aashutosh_goyal_react_portfolio.zip
   cd aashutosh-goyal-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm run preview
   ```
