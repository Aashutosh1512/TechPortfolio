import React from 'react';
import ShaderCanvas from './ShaderCanvas';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectModal({
  isOpen,
  projectId,
  motionEnabled,
  onClose,
  onPrevProject,
  onNextProject,
}) {
  const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];

  return (
    <div
      id="project-modal"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-labelledby="modal-project-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xs transition-[opacity,backdrop-filter] duration-300 ease-out ${
        isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div
        className={`bg-background text-foreground border border-border max-w-4xl w-full overflow-hidden my-auto shadow-2xl transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.97]'
        }`}
      >
        {/* Top Shader Banner */}
        <div className="relative h-36 border-b border-border overflow-hidden flex flex-col justify-between p-6">
          <ShaderCanvas
            id="modal-shader-canvas"
            palette={project.palette}
            phaseOffset={11}
            motionEnabled={motionEnabled}
            className="pointer-events-none absolute inset-0 w-full h-full"
          />
          <div className="relative z-10 flex items-center justify-between">
            <span id="modal-project-index" className="meta-label bg-black text-white px-3 py-1">
              ({project.id} / PROJECT DETAILS)
            </span>
            <button
              type="button"
              id="btn-close-project-modal"
              onClick={onClose}
              className="rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider bg-white text-black border border-black hover:bg-black hover:text-white transition-colors"
            >
              Close [ESC]
            </button>
          </div>
          <div className="relative z-10 flex items-center justify-between">
            <span id="modal-project-domain" className="meta-label bg-white/95 text-black px-2.5 py-0.5 font-semibold">
              {project.domain.toUpperCase()}
            </span>
            <span id="modal-project-period" className="meta-label bg-black/90 text-white px-2.5 py-0.5 font-mono">
              {project.org.toUpperCase()} · {project.period}
            </span>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 id="modal-project-title" className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none">
              {project.title}
            </h3>
            <p id="modal-project-impact" className="text-sm font-mono uppercase text-muted-foreground mt-2">
              VERIFIED METRIC: {project.metric}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 border border-border divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="md:col-span-7 p-5">
              <p className="meta-label text-muted-foreground mb-2">ARCHITECTURAL OVERVIEW &amp; EXECUTION</p>
              <p id="modal-project-summary" className="text-sm leading-relaxed text-foreground">
                {project.summary}
              </p>
              <ul
                id="modal-project-bullets"
                className="mt-4 space-y-2 text-xs leading-relaxed text-foreground list-disc pl-4"
              >
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5 p-5 bg-muted flex flex-col justify-between gap-4">
              <div>
                <p className="meta-label text-muted-foreground mb-2">TECHNOLOGY SPECIFICATION</p>
                <div id="modal-project-stack" className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono uppercase px-2.5 py-1 border border-border bg-background font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <p className="meta-label text-muted-foreground mb-1">VERIFIED OUTCOME</p>
                <p id="modal-project-outcome" className="text-base font-extrabold uppercase tracking-tight">
                  {project.metric}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              id="btn-prev-project"
              onClick={onPrevProject}
              className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ← Previous System
            </button>
            <button
              type="button"
              id="btn-next-project"
              onClick={onNextProject}
              className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Next System →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
