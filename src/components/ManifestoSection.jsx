import React from 'react';
import ShaderCanvas from './ShaderCanvas';
import SquareDissolveGrid from './SquareDissolveGrid';


export default function ManifestoSection({
  portraitImageSrc = `${import.meta.env.BASE_URL}assets/studio-telemetry.jpg`,
  motionEnabled,
}) {
  return (
    <section id="manifesto" data-theme="dark" className="bg-primary text-primary-foreground border-b border-border-dark">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 lg:min-h-svh">
        {/* Left 6 Columns: Grayscale Studio Portrait + Square Dissolve + WebGL Color Reveal */}
        <div
          className="lg:col-span-6 relative min-h-[420px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-border-dark overflow-hidden group"
          data-colour-reveal="6"
        >
          <img
            src={portraitImageSrc}
            alt="Minimalist dark engineering studio workspace with distributed node telemetry"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
          />
          <ShaderCanvas
            palette="05"
            phaseOffset={3}
            motionEnabled={motionEnabled}
            className="pointer-events-none absolute inset-0 w-full h-full opacity-35 group-hover:opacity-65 transition-opacity duration-500"
          />

          {/* Full-height portrait reveal rectangles */}
          <SquareDissolveGrid variant="portrait" motionEnabled={motionEnabled} />

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/90 border border-border-dark p-4 flex items-center justify-between">
            <div>
              <p className="meta-label text-neutral-400">CURRENT WORK — RETAIL PLM &amp; DISTRIBUTED SYSTEMS</p>
              <p className="text-sm font-bold uppercase tracking-tight text-white mt-0.5">
                ANKO GCC (KMART AUSTRALIA) — RETAIL &amp; PLM INFRASTRUCTURE
              </p>
            </div>

          </div>
        </div>

        {/* Right 6 Columns: Metrics Row, Manifesto Statement & Technical Synopsis */}
        <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 flex flex-col justify-between gap-12">
          {/* Top 4-Column Quantified Impact Strip */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="meta-label text-neutral-400">KEY IMPACT METRICS</span>
              <span className="meta-label text-neutral-400">KEY IMPACT METRICS</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-border-dark divide-y sm:divide-y-0 sm:divide-x divide-border-dark">
              <div className="p-4">
                <p className="meta-label text-neutral-400">API EXECUTION COST</p>
                <p className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-1">-36%</p>
                <p className="text-[11px] text-neutral-400 mt-1">Redis &amp; EF Core LINQ</p>
              </div>
              <div className="p-4">
                <p className="meta-label text-neutral-400">ASYNC THROUGHPUT</p>
                <p className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-1">+40%</p>
                <p className="text-[11px] text-neutral-400 mt-1">Kafka–RabbitMQ Hybrid</p>
              </div>
              <div className="p-4">
                <p className="meta-label text-neutral-400">UNIT TEST GATE</p>
                <p className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-1">80%</p>
                <p className="text-[11px] text-neutral-400 mt-1">-25% Failed Merges</p>
              </div>
              <div className="p-4">
                <p className="meta-label text-neutral-400">CODEVITA RANK</p>
                <p className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-1">TOP 1.5%</p>
                <p className="text-[11px] text-neutral-400 mt-1">AIR 361 / 140,000+</p>
              </div>
            </div>
          </div>

          {/* Center Giant Swiss Poster Manifesto Quote */}
          <div className="my-auto">
            <p className="meta-label text-neutral-400 mb-3">ENGINEERING APPROACH</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.02]">
              “WE BUILD RELIABLE, SCALABLE SYSTEMS USING RESILIENT MICROSERVICES, MONITORING, AND MODERN CLOUD TECHNOLOGIES.”
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed mt-6 max-w-xl">
              Specializing in enterprise microservices, cloud-native infrastructure, and distributed event-driven architectures across{' '}
              <strong className="text-white font-semibold">C# / .NET Core (.NET 8/10)</strong> and{' '}
              <strong className="text-white font-semibold">Java / Spring Boot</strong>. From migrating high-volume retail messaging from AWS SNS–SQS to Apache Kafka to building Phi-3 RAG incident correlation engines, every service is built for fault recovery, observability, and measurable cost efficiency.
            </p>
          </div>

          {/* Bottom Signature & Links */}
          <div className="pt-6 border-t border-border-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-white">
                AASHUTOSH GOYAL — SOFTWARE ENGINEER
              </p>
              <p className="meta-label text-neutral-400 mt-0.5">
                ANKO GCC (KMART AUSTRALIA) · SEP 2024 – PRESENT
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Aashutosh1512"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center justify-center rounded-full px-4 py-0 text-xs font-semibold uppercase tracking-wider leading-none bg-white text-black hover:opacity-85 transition-opacity"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/aashutosh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center justify-center rounded-full px-4 py-0 text-xs font-semibold uppercase tracking-wider leading-none border border-neutral-600 text-white hover:bg-white hover:text-black transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://leetcode.com/u/aashutosh1512/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center justify-center rounded-full px-4 py-0 text-xs font-semibold uppercase tracking-wider leading-none border border-neutral-600 text-white hover:bg-white hover:text-black transition-colors"
              >
                LeetCode ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
