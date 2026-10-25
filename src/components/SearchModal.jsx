import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';

const QUICK_QUERIES = [
  { term: 'Kafka', label: 'Apache Kafka' },
  { term: 'Phi-3', label: 'Phi-3 RAG LLM' },
  { term: 'Redis', label: 'Redis (-36% Cost)' },
  { term: 'Spring Boot', label: 'Java Spring Boot' },
  { term: '.NET', label: 'C# .NET 8/10' },
  { term: 'CodeVita', label: 'TCS CodeVita (AIR 361)' },
];

export default function SearchModal({ isOpen, onClose, onOpenProject }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const searchIndex = [
    ...PROJECTS.map((p) => ({
      type: 'CASE STUDY',
      title: p.title,
      meta: `${p.domain} · ${p.metric}`,
      action: () => {
        onClose();
        onOpenProject(p.id);
      },
    })),
    {
      type: 'EXPERIENCE',
      title: 'Software Engineer @ Anko GCC (Kmart Australia)',
      meta: 'Sep 2024 – Present · Kafka, .NET 10, Spring Boot, Redis (-36% API cost), Phi-3 RAG',
      action: () => {
        onClose();
        window.location.hash = '#experience';
      },
    },
    {
      type: 'EXPERIENCE',
      title: 'Software Engineer Intern @ Anko GCC (Kmart Australia)',
      meta: 'Feb 2024 – Aug 2024 · Kafka–RabbitMQ (+40% throughput), Docker, GitHub Actions (80% coverage), Azure AD SSO',
      action: () => {
        onClose();
        window.location.hash = '#experience';
      },
    },
    {
      type: 'ACHIEVEMENT',
      title: 'TCS CodeVita Season 11 — Ranked Top 1.5% Globally',
      meta: 'AIR 361 · Global Rank 2,063 out of 140,000+ developers',
      action: () => {
        onClose();
        window.location.hash = '#research';
      },
    },
    {
      type: 'CERTIFICATION',
      title: 'Microsoft Certification: Advanced .NET Development (2023)',
      meta: 'C#, ASP.NET Core, Entity Framework Core, Cloud Architecture',
      action: () => {
        onClose();
        window.location.hash = '#research';
      },
    },
    {
      type: 'EDUCATION',
      title: 'Institute of Engineering and Technology, DAVV Indore',
      meta: 'B.E. in Information Technology (Nov 2020 – Jun 2024) · CGPA: 8.02 / 10',
      action: () => {
        onClose();
        window.location.hash = '#research';
      },
    },
  ];

  const q = query.trim().toLowerCase();
  const matches = searchIndex.filter((item) => {
    if (!q) return true;
    return `${item.title} ${item.meta} ${item.type}`.toLowerCase().includes(q);
  });

  return (
    <div
      id="search-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className={`fixed inset-0 z-50 ${
        isOpen ? 'flex' : 'hidden'
      } bg-background text-foreground flex-col justify-between p-6 sm:p-12 overflow-y-auto`}
    >
      <div className="max-w-[1600px] w-full mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-border">
          <span id="search-modal-title" className="meta-label">
            (SEARCH AASHUTOSH GOYAL PORTFOLIO — PROJECTS, SKILLS, METRICS)
          </span>
          <button
            type="button"
            id="btn-close-search"
            onClick={onClose}
            className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground hover:opacity-85"
          >
            Close [ESC]
          </button>
        </div>

        {/* Giant Swiss Input */}
        <div className="py-8 border-b border-border">
          <input
            ref={inputRef}
            type="text"
            id="global-search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="TYPE TO SEARCH (E.G. KAFKA, PHI-3, REDIS, 36%, CODEVITA)..."
            aria-label="Type to search portfolio"
            className="w-full bg-transparent text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter text-foreground placeholder:text-neutral-300 focus:outline-none"
          />
        </div>

        {/* Quick Category Tag Pills */}
        <div className="py-4 border-b border-border flex flex-wrap items-center gap-2">
          <span className="meta-label text-muted-foreground mr-2">QUICK QUERIES:</span>
          {QUICK_QUERIES.map((qq) => (
            <button
              key={qq.term}
              type="button"
              data-quick-search={qq.term}
              onClick={function() { setQuery(qq.term); }}
              className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
            >
              {qq.label}
            </button>
          ))}
        </div>

        {/* Search Results Container */}
        <div id="global-search-results" className="divide-y divide-border mt-4">
          {matches.length === 0 ? (
            <div className="py-12 text-center meta-label text-muted-foreground">
              NO PORTFOLIO RECORDS MATCH &quot;{query}&quot;
            </div>
          ) : (
            matches.map((item, idx) => (
              <button
                key={item.title}
                type="button"
                data-search-result={idx}
                onClick={item.action}
                className="w-full py-5 px-4 text-left hover:bg-muted transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <span className="meta-label text-muted-foreground block mb-1">
                    ({String(idx + 1).padStart(2, '0')} / {item.type})
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold uppercase tracking-tight block">
                    {item.title}
                  </span>
                </div>
                <span className="font-mono text-xs uppercase text-muted-foreground sm:text-right">
                  {item.meta} →
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
