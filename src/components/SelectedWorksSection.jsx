import React from 'react';

import { PROJECTS } from '../data/portfolioData';

const FILTER_OPTIONS = [
  { value: 'all', label: 'All Systems (06)' },
  { value: 'Event-Driven & Messaging', label: 'Event-Driven & Messaging (02)' },
  { value: 'Cloud & Performance', label: 'Cloud & Performance (01)' },
  { value: 'GenAI & Observability', label: 'GenAI & Observability (01)' },
  { value: 'Full-Stack Platforms', label: 'Full-Stack Platforms (02)' },
];

export default function SelectedWorksSection({
  activeFilter,
  onSelectFilter,
  searchQuery,
  onChangeSearch,
  viewMode,
  onChangeViewMode,
  onOpenProject,
  onResetFilters,
}) {
  const filtered = PROJECTS.filter((p) => {
    const matchesDomain = activeFilter === 'all' || p.domain === activeFilter;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return matchesDomain;
    const hay = `${p.title} ${p.domain} ${p.metric} ${p.summary} ${p.stack.join(' ')}`.toLowerCase();
    return matchesDomain && hay.includes(q);
  });

  const counterText = `SHOWING 0${filtered.length} OF 0${PROJECTS.length} ARCHITECTURAL SYSTEMS · ${
    activeFilter === 'all' ? 'ALL DOMAINS' : activeFilter.toUpperCase()
  }`;

  return (
    <section id="work" data-theme="light" className="bg-background text-foreground py-16 sm:py-24 border-b border-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Poster Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-border gap-6">
          <div>
            <p className="meta-label text-muted-foreground mb-2">
              (03 / PRODUCTION CASE STUDIES &amp; ARCHITECTURAL SYSTEMS)
            </p>
            <h2 className="poster-title trim-caps text-5xl sm:text-7xl lg:text-8xl">
              SELECTED WORKS
            </h2>
          </div>
          <div className="flex flex-col sm:items-end justify-end gap-2">
            <p className="meta-label text-foreground font-semibold" id="work-counter-label">
              {counterText}
            </p>
            <p className="text-sm text-muted-foreground max-w-md sm:text-right">
              Click any indexed engineering card or row to inspect the full system topology, architectural bottlenecks solved, and production metrics.
            </p>
          </div>
        </div>

        {/* Filter Bar: Category Pills + Keyword Search + View Mode Switcher */}
        <div className="py-6 border-b border-border flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects by domain">
            {FILTER_OPTIONS.map((opt) => {
              const isSelected = activeFilter === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  data-filter={opt.value}
                  onClick={function() { onSelectFilter(opt.value); }}
                  className={`filter-pill rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isSelected
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Right Search Input & View Switch */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                id="work-search-input"
                value={searchQuery}
                onChange={(e) => onChangeSearch(e.target.value)}
                placeholder="FILTER BY STACK (E.G. KAFKA, REDIS)..."
                aria-label="Filter projects by keyword"
                className="w-full bg-muted border border-border px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex border border-border">
              <button
                type="button"
                id="btn-view-grid"
                onClick={function() { onChangeViewMode('grid'); }}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider ${
                  viewMode === 'grid'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-foreground hover:bg-muted'
                }`}
              >
                Grid
              </button>
              <button
                type="button"
                id="btn-view-table"
                onClick={function() { onChangeViewMode('table'); }}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider ${
                  viewMode === 'table'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-foreground hover:bg-muted'
                }`}
              >
                Index
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Swiss Hairline Grid Container */}
        <div
          id="work-grid-container"
          className={`${
            viewMode === 'grid' ? 'grid' : 'hidden'
          } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-r border-border`}
        >
          {filtered.length === 0 ? (
            <div className="col-span-3 p-12 text-center border-b border-border">
              <p className="meta-label text-muted-foreground mb-2">ZERO MATCHING ARCHITECTURAL RECORDS</p>
              <p className="text-xl font-bold uppercase mb-4">No systems matched &quot;{searchQuery}&quot;</p>
              <button
                type="button"
                data-reset-work-filter
                onClick={onResetFilters}
                className="rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filtered.map((p) => (
              <article
                key={p.id}
                data-open-project={p.id}
                onClick={() => onOpenProject(p.id)}
                className="border-b border-r border-border p-6 sm:p-8 flex flex-col justify-between gap-8 hover:bg-muted transition-colors group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-border">
                    <span className="font-mono text-xs font-bold uppercase">({p.id})</span>
                    <span className="meta-label px-2.5 py-0.5 bg-secondary text-secondary-foreground">
                      {p.domain}
                    </span>
                  </div>
                  <p className="meta-label text-muted-foreground mb-1">
                    {p.org} · {p.period}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight leading-snug group-hover:underline">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{p.summary}</p>
                </div>

                <div>
                  <div className="p-3 bg-primary text-primary-foreground mb-4 flex items-center justify-between">
                    <span className="meta-label text-neutral-400">VERIFIED IMPACT</span>
                    <span className="font-mono text-xs font-bold uppercase text-white">{p.metric}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono uppercase px-2 py-0.5 border border-border bg-background"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-border flex items-center justify-between">
                    <span className="meta-label font-semibold">INSPECT ARCHITECTURE SPEC</span>
                    <span className="font-mono text-sm transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Hairline Prospectus Index Table View */}
        <div
          id="work-table-container"
          className={`${viewMode === 'table' ? 'block' : 'hidden'} border-l border-r border-border divide-y divide-border`}
        >
          {filtered.length === 0 ? (
            <div className="col-span-3 p-12 text-center border-b border-border">
              <p className="meta-label text-muted-foreground mb-2">ZERO MATCHING ARCHITECTURAL RECORDS</p>
              <p className="text-xl font-bold uppercase mb-4">No systems matched &quot;{searchQuery}&quot;</p>
              <button
                type="button"
                data-reset-work-filter
                onClick={onResetFilters}
                className="rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filtered.map((p) => (
              <div
                key={p.id}
                data-open-project={p.id}
                onClick={() => onOpenProject(p.id)}
                className="p-5 sm:px-8 hover:bg-muted transition-colors cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
              >
                <div className="lg:col-span-1 font-mono text-sm font-bold">({p.id})</div>
                <div className="lg:col-span-4">
                  <h3 className="text-lg font-extrabold uppercase tracking-tight">{p.title}</h3>
                  <p className="meta-label text-muted-foreground">
                    {p.org} · {p.period}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <span className="meta-label px-2.5 py-1 bg-secondary text-secondary-foreground inline-block">
                    {p.domain}
                  </span>
                </div>
                <div className="lg:col-span-3 font-mono text-xs font-bold uppercase">{p.metric}</div>
                <div className="lg:col-span-2 flex lg:justify-end">
                  <span className="rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground">
                    Inspect →
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
