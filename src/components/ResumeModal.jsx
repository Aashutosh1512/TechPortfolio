import React from 'react';

export default function ResumeModal({ isOpen, onClose, onCopyResumeText }) {
  return (
    <div
      id="resume-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className={`fixed inset-0 z-50 ${
        isOpen ? 'flex' : 'hidden'
      } bg-black/80 backdrop-blur-xs items-center justify-center p-4 sm:p-6 overflow-y-auto`}
    >
      <div className="bg-background text-foreground border border-border max-w-4xl w-full my-auto shadow-2xl">
        <div className="p-5 sm:px-8 border-b border-border flex flex-wrap items-center justify-between gap-3 bg-muted">
          <div>
            <span id="resume-modal-title" className="meta-label font-semibold">
              (OFFICIAL CURRICULUM VITAE — AASHUTOSH GOYAL)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="btn-copy-resume-text"
              onClick={onCopyResumeText}
              className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Copy Plain-Text CV
            </button>
            <button
              type="button"
              id="btn-close-resume-modal"
              onClick={onClose}
              className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground hover:opacity-85"
            >
              Close [ESC]
            </button>
          </div>
        </div>
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-xs sm:text-sm leading-relaxed">
          <div className="border-b border-border pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight">AASHUTOSH GOYAL</h3>
              <p className="font-mono text-xs text-muted-foreground">
                Software Engineer · C# / .NET Core &amp; Java / Spring Boot · Distributed Systems
              </p>
            </div>
            <div className="font-mono text-xs sm:text-right">
              <p>aashutosh89660@gmail.com | +91-8966098596</p>
              <p>linkedin.com/in/aashutosh | github.com/Aashutosh1512</p>
            </div>
          </div>

          <div>
            <p className="meta-label text-muted-foreground mb-1">PROFESSIONAL SUMMARY</p>
            <p>
              Software Engineer specializing in enterprise microservices, cloud-native infrastructure, and distributed event-driven architectures across C# / .NET Core and Java / Spring Boot. Proven track record in scaling high-throughput messaging pipelines (Apache Kafka, RabbitMQ, AWS), cutting API execution costs by 36%, and automating CI/CD and GenAI root-cause workflows. Ranked in the Top 1.5% globally in TCS CodeVita Season 11 out of 140,000+ developers.
            </p>
          </div>

          <div>
            <p className="meta-label text-muted-foreground mb-2">WORK EXPERIENCE — ANKO GCC (KMART AUSTRALIA)</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-bold uppercase">
                  <span>Software Engineer — Anko GCC (Kmart Australia)</span>
                  <span className="font-mono text-xs">Sep 2024 – Present</span>
                </div>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Migrated event-driven messaging from AWS SNS–SQS to Apache Kafka, optimizing event fan-out and parallel processing to reduce infrastructure costs and improve scalability.
                  </li>
                  <li>
                    Modernized legacy enterprise applications from .NET Framework to .NET Core/10 and migrated core backend services to Java Spring Boot, improving maintainability and runtime performance.
                  </li>
                  <li>
                    Optimized cross-service caching using Redis and tuned LINQ / EF Core database queries, cutting overall API execution costs by 36%.
                  </li>
                  <li>
                    Engineered resilient event-driven microservices using .NET Core, Spring Boot, and PostgreSQL with automated retry, dead-letter handling, and fault-recovery mechanisms.
                  </li>
                  <li>
                    Built a RAG-based incident management engine using the Phi-3 open-source LLM to automate log correlation and root-cause analysis workflows.
                  </li>
                  <li>
                    Integrated product lifecycle management (PLM) systems across retail platforms, ensuring real-time multi-service data consistency across distributed domains.
                  </li>
                  <li>
                    Managed AWS cloud infrastructure (ECS, Lambda, DynamoDB, CloudWatch) and automated multi-environment CI/CD deployment pipelines via GitHub Actions.
                  </li>
                  <li>
                    Developed interactive dashboard modules using Angular and SignalR for real-time client-server telemetry and data streaming.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between font-bold uppercase">
                  <span>Software Engineer Intern — Anko GCC (Kmart Australia)</span>
                  <span className="font-mono text-xs">Feb 2024 – Aug 2024</span>
                </div>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Designed and deployed a Kafka–RabbitMQ messaging hybrid across .NET Core and Java Spring Boot services, boosting asynchronous message throughput by 40%.
                  </li>
                  <li>
                    Migrated source code deployments from ZIP packages to Docker container images, standardizing runtime environments and enabling reproducible local testing across development and production.
                  </li>
                  <li>
                    Configured CI/CD pipelines in GitHub Actions, establishing quality gates that elevated unit test coverage to 80% and lowered failed merges by 25%.
                  </li>
                  <li>
                    Developed and maintained 3 high-performance microservices utilizing C# .NET, Spring Boot REST endpoints, Apache Kafka, and Redis distributed caching.
                  </li>
                  <li>
                    Migrated authentication infrastructure from legacy session handling to Azure AD Single Sign-On (SSO) to enforce enterprise security standards.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-border pt-4">
            <div>
              <p className="meta-label text-muted-foreground mb-1">EDUCATION</p>
              <p className="font-bold uppercase">Institute of Engineering and Technology, DAVV Indore</p>
              <p>B.E. in Information Technology (Nov 2020 – Jun 2024) · CGPA: 8.02 / 10</p>
            </div>
            <div>
              <p className="meta-label text-muted-foreground mb-1">ACHIEVEMENTS &amp; CERTIFICATIONS</p>
              <ul className="list-disc pl-4 space-y-0.5">
                <li>TCS CodeVita Season 11: Top 1.5% globally (AIR 361, Global Rank 2,063).</li>
                <li>Microsoft Certification: Advanced .NET Development (2023).</li>
                <li>Solved 800+ DSA problems on LeetCode &amp; Codeforces.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
