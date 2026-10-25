import React from 'react';
import ShaderCanvas from './ShaderCanvas';
import WipeHeadline from './WipeHeadline';

export default function CredentialsSection({ motionEnabled }) {
  return (
    <section id="research" data-theme="light" className="bg-background text-foreground py-16 sm:py-24 border-b border-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-border gap-6">
          <div>
            <p className="meta-label text-muted-foreground mb-2">
              (06 / COMPETITIVE BENCHMARKS, CERTIFICATIONS &amp; ACADEMIC FOUNDATION)
            </p>
            <WipeHeadline as="h2" className="poster-title trim-caps text-5xl sm:text-7xl lg:text-8xl">
              CREDENTIALS
            </WipeHeadline>
          </div>
          <p className="text-sm text-muted-foreground max-w-md lg:text-right">
            Global algorithmic rankings, industry certifications, and academic qualification in Information Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 border-l border-r border-b border-border">
          {/* Left 5 Columns: Featured Competitive Programming Poster on Live WebGL Shader */}
          <div className="lg:col-span-5 relative min-h-[420px] p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border overflow-hidden">
            <ShaderCanvas
              palette="06"
              phaseOffset={10}
              motionEnabled={motionEnabled}
              className="pointer-events-none absolute inset-0 w-full h-full"
            />
            <div className="relative z-10 flex items-center justify-between">
              <span className="meta-label bg-black text-white px-3 py-1">TCS CODEVITA SEASON 11</span>
              <span className="meta-label bg-white text-black px-3 py-1 font-mono">140,000+ CONTESTANTS</span>
            </div>

            <div className="relative z-10 bg-black/90 text-white p-6 my-auto border border-border-dark">
              <p className="meta-label text-neutral-400 mb-2">GLOBAL ALGORITHMIC STANDING</p>
              <p className="poster-title text-4xl sm:text-5xl text-white mb-3">TOP 1.5% GLOBALLY</p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border-dark font-mono text-xs uppercase">
                <div>
                  <span className="text-neutral-400 block">ALL-INDIA RANK (AIR)</span>
                  <strong className="text-lg text-white">#361</strong>
                </div>
                <div>
                  <span className="text-neutral-400 block">GLOBAL RANK</span>
                  <strong className="text-lg text-white">#2,063</strong>
                </div>
              </div>
            </div>

            <div className="relative z-10 bg-white/95 text-black p-4 border border-border flex items-center justify-between">
              <span className="meta-label font-semibold">800+ DSA PROBLEMS SOLVED</span>
              <span className="font-mono text-xs uppercase">LEETCODE &amp; CODEFORCES</span>
            </div>
          </div>

          {/* Right 7 Columns: Structured Prospectus Rows for Achievements & Education */}
          <div className="lg:col-span-7 divide-y divide-border flex flex-col justify-between">
            {/* Item 01 */}
            <div className="p-6 sm:p-8 hover:bg-muted transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="meta-label text-muted-foreground">(01 / COMPETITIVE PROGRAMMING)</span>
                <span className="meta-label bg-secondary px-2.5 py-0.5 font-semibold">AIR 361 · GLOBAL 2,063</span>
              </div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-2">
                TCS CodeVita Season 11 — Top 1.5% Global Finalist
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ranked in the Top 1.5% globally (All-India Rank 361, Global Rank 2,063) out of 140,000+ participating developers worldwide in TCS CodeVita Season 11.
              </p>
            </div>

            {/* Item 02 */}
            <div className="p-6 sm:p-8 hover:bg-muted transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="meta-label text-muted-foreground">(02 / INDUSTRY CERTIFICATION)</span>
                <span className="meta-label bg-secondary px-2.5 py-0.5 font-semibold">ISSUED 2023</span>
              </div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-2">
                Microsoft Certification — Advanced .NET Development
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Completed Advanced .NET Development Certification (2023), covering enterprise C#, ASP.NET Core Web API architecture, Entity Framework Core optimization, and cloud deployment standards.
              </p>
            </div>

            {/* Item 03 */}
            <div className="p-6 sm:p-8 hover:bg-muted transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="meta-label text-muted-foreground">(03 / ALGORITHMIC PROBLEM SOLVING)</span>
                <span className="meta-label bg-secondary px-2.5 py-0.5 font-semibold">800+ SOLVED</span>
              </div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-2">
                800+ Data Structures &amp; Algorithms Problems
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Solved 800+ algorithmic and data structure problems across LeetCode and Codeforces with deep focus on graph theory, dynamic programming, concurrency, and low-latency data structures.
              </p>
            </div>

            {/* Item 04: Education */}
            <div className="p-6 sm:p-8 bg-muted/60">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="meta-label text-muted-foreground">(04 / UNIVERSITY EDUCATION)</span>
                <span className="meta-label bg-primary text-primary-foreground px-2.5 py-0.5 font-semibold">
                  NOV 2020 – JUN 2024
                </span>
              </div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-1">
                Institute of Engineering and Technology, DAVV Indore
              </h3>
              <p className="text-base font-bold uppercase tracking-tight text-foreground mb-2">
                Bachelor of Engineering (B.E.) in Information Technology — CGPA: 8.02 / 10
              </p>
              <p className="text-xs font-mono uppercase text-muted-foreground">
                CORE COURSEWORK: OPERATING SYSTEMS · DISTRIBUTED SYSTEMS · DBMS · COMPUTER NETWORKS · OBJECT-ORIENTED ENGINEERING
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
