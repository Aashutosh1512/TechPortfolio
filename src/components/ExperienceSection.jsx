import React from 'react';
import ShaderCanvas from './ShaderCanvas';
import WipeHeadline from './WipeHeadline';

const CURRENT_MILESTONES = [
  { id: '07', code: '(01.1) EVENT PIPELINE MIGRATION', title: 'AWS SNS–SQS to Apache Kafka', text: 'Migrated event-driven messaging from AWS SNS–SQS to Apache Kafka, optimizing event fan-out and parallel processing to reduce infrastructure costs and improve scalability.' },
  { id: '08', code: '(01.2) RUNTIME MODERNIZATION', title: '.NET 10 & Java Spring Boot Migration', text: 'Modernized legacy enterprise applications from .NET Framework to .NET Core/10 and migrated core backend services to Java Spring Boot, improving maintainability and runtime performance.' },
  { id: '09', code: '(01.3) COST & QUERY OPTIMIZATION', title: '36% API Execution Cost Reduction', text: 'Optimized cross-service caching using Redis and tuned LINQ / EF Core database queries, cutting overall API execution costs by 36%.' },
  { id: '10', code: '(01.4) FAULT-TOLERANT MICROSERVICES', title: 'Automated Retry & Dead-Letter Handling', text: 'Engineered resilient event-driven microservices using .NET Core, Spring Boot, and PostgreSQL with automated retry, dead-letter handling, and fault-recovery mechanisms.' },
  { id: '11', code: '(01.5) GEN-AI ROOT-CAUSE WORKFLOWS', title: 'Phi-3 LLM RAG Incident Engine', text: 'Built a RAG-based incident management engine using the Phi-3 open-source LLM to automate log correlation and root-cause analysis workflows.' },
  { id: '12', code: '(01.6) DISTRIBUTED RETAIL DOMAINS', title: 'Enterprise PLM System Integration', text: 'Integrated product lifecycle management (PLM) systems across retail platforms, ensuring real-time multi-service data consistency across distributed domains.' },
  { id: '13', code: '(01.7) CLOUD & MULTI-ENV CI/CD', title: 'AWS ECS, Lambda, DynamoDB & GitHub Actions', text: 'Managed AWS cloud infrastructure (ECS, Lambda, DynamoDB, CloudWatch) and automated multi-environment CI/CD deployment pipelines via GitHub Actions.' },
  { id: '14', code: '(01.8) REAL-TIME STREAMING UI', title: 'Angular & SignalR Telemetry Modules', text: 'Developed interactive dashboard modules using Angular and SignalR for real-time client-server telemetry and data streaming.' },
];

const INTERN_MILESTONES = [
  { id: '15', code: '(02.1) HYBRID MESSAGING TOPOLOGY', title: '+40% Async Message Throughput', text: 'Designed and deployed a Kafka–RabbitMQ messaging hybrid across .NET Core and Java Spring Boot services, boosting asynchronous message throughput by 40%.' },
  { id: '16', code: '(02.2) CONTAINERIZATION STANDARD', title: 'ZIP Artifacts to Docker Images', text: 'Migrated source code deployments from ZIP packages to Docker container images, standardizing runtime environments and enabling reproducible local testing across development and production.' },
  { id: '17', code: '(02.3) CI/CD QUALITY GATES', title: '80% Unit Coverage & -25% Failed Merges', text: 'Configured CI/CD pipelines in GitHub Actions, establishing quality gates that elevated unit test coverage to 80% and lowered failed merges by 25%.' },
  { id: '18', code: '(02.4) CORE MICROSERVICES', title: '3 High-Performance Retail Services', text: 'Developed and maintained 3 high-performance microservices utilizing C# .NET, Spring Boot REST endpoints, Apache Kafka, and Redis distributed caching.' },
  { id: '19', code: '(02.5) ENTERPRISE IDENTITY & SECURITY', title: 'Legacy Session Auth to Azure AD Single Sign-On', text: 'Migrated authentication infrastructure from legacy session handling to Azure AD Single Sign-On (SSO) to enforce enterprise security standards across internal portals.' },
];

function MilestoneCard({ milestone, onOpenProject, span = false }) {
  const openMilestone = () => onOpenProject?.(milestone.id);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={openMilestone}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openMilestone();
        }
      }}
      className={`relative flex min-h-[220px] flex-col p-6 border-r border-b border-border-dark hover:bg-neutral-900/60 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset${span ? ' md:col-span-2' : ''}`}
    >
      <p className="meta-label text-neutral-400 mb-2">{milestone.code}</p>
      <h4 className="text-lg font-bold uppercase tracking-tight text-white mb-2">{milestone.title}</h4>
      <p className="text-sm text-neutral-300 leading-relaxed">{milestone.text}</p>
      <p className="absolute bottom-4 right-6 text-[9px] font-mono uppercase leading-none text-white/70">Click to Open →</p>
    </div>
  );
}

export default function ExperienceSection({ motionEnabled, onOpenProject }) {
  return (
    <section
      id="experience"
      data-theme="dark"
      className="bg-primary text-primary-foreground py-16 sm:py-24 border-b border-border-dark"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-border-dark gap-6">
          <div>
            <WipeHeadline as="h2" className="poster-title trim-caps text-5xl sm:text-7xl lg:text-8xl text-white">
              EXPERIENCE
            </WipeHeadline>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2">
            <span className="meta-label text-white bg-neutral-800 px-3 py-1 text-left lg:text-right">
              FEB 2024 – PRESENT · FULL-TIME &amp; INTERNSHIP PROGRESSION
            </span>
            <p className="meta-label text-neutral-400 text-left lg:text-right whitespace-nowrap">
              Anko GCC (Kmart Australia)
            </p>
          </div>
        </div>

        {/* Role 01: Software Engineer (Sep 2024 - Present) */}
        <div className="py-12 border-b border-border-dark">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 4 Cols: Role Metadata & Shader Badge */}
            <div className="lg:col-span-4 lg:sticky lg:top-20">
              <div className="border border-border-dark p-6 bg-neutral-950">
                <div className="flex items-center justify-between mb-3">
                  <span className="meta-label text-neutral-400">(01 / CURRENT ROLE)</span>
                  <span className="meta-label bg-white text-black px-2 py-0.5 font-semibold">
                    SEP 2024 – PRESENT
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                  SOFTWARE ENGINEER
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mt-1">
                  ANKO GCC (KMART AUSTRALIA)
                </p>
                <div className="h-16 relative overflow-hidden my-5 border border-border-dark">
                  <ShaderCanvas
                    palette="07"
                    phaseOffset={8}
                    motionEnabled={motionEnabled}
                    className="pointer-events-none absolute inset-0 w-full h-full"
                  />
                  <div className="relative z-10 h-full flex items-center justify-between px-3 bg-black/55">
                    <span className="meta-label text-white">8 KEY CONTRIBUTIONS</span>
                    <span className="font-mono text-xs text-white">-36% API COST</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {[
                    '.NET Core/10',
                    'Spring Boot',
                    'Apache Kafka',
                    'Redis',
                    'Phi-3 RAG',
                    'AWS ECS/Lambda',
                    'Angular + SignalR',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase px-2 py-0.5 border border-border-dark text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 8 Cols: 8 Indexed Engineering Milestones */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 border-t border-l border-border-dark">
              {CURRENT_MILESTONES.map((milestone) => (
                <MilestoneCard key={milestone.id} milestone={milestone} onOpenProject={onOpenProject} />
              ))}
            </div>
          </div>
        </div>

        {/* Role 02: Software Engineer Intern (Feb 2024 - Aug 2024) */}
        <div className="pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 4 Cols */}
            <div className="lg:col-span-4 lg:sticky lg:top-20">
              <div className="border border-border-dark p-6 bg-neutral-950">
                <div className="flex items-center justify-between mb-3">
                  <span className="meta-label text-neutral-400">(02 / INTERNSHIP)</span>
                  <span className="meta-label border border-border-dark text-neutral-300 px-2 py-0.5">
                    FEB 2024 – AUG 2024
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                  SOFTWARE ENGINEER INTERN
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mt-1">
                  ANKO GCC (KMART AUSTRALIA)
                </p>
                <div className="h-16 relative overflow-hidden my-5 border border-border-dark">
                  <ShaderCanvas
                    palette="08"
                    phaseOffset={9}
                    motionEnabled={motionEnabled}
                    className="pointer-events-none absolute inset-0 w-full h-full"
                  />
                  <div className="relative z-10 h-full flex items-center justify-between px-3 bg-black/55">
                    <span className="meta-label text-white">5 KEY CONTRIBUTIONS</span>
                    <span className="font-mono text-xs text-white">+40% THROUGHPUT</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Kafka–RabbitMQ', 'Docker', 'GitHub Actions', 'Azure AD SSO', 'Redis'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase px-2 py-0.5 border border-border-dark text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 8 Cols: 5 Indexed Milestones */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 border-t border-l border-border-dark">
              {INTERN_MILESTONES.map((milestone, index) => (
                <MilestoneCard
                  key={milestone.id}
                  milestone={milestone}
                  onOpenProject={onOpenProject}
                  span={index === INTERN_MILESTONES.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
