import React from 'react';
import ShaderCanvas from './ShaderCanvas';
import WipeHeadline from './WipeHeadline';

export default function CapabilitiesSection({ motionEnabled }) {
  return (
    <section id="capabilities" data-theme="light" className="bg-background text-foreground py-16 sm:py-24 border-b border-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-border gap-6">
          <div>
            <p className="meta-label text-muted-foreground mb-2">
              TECHNICAL CAPABILITIES
            </p>
            <WipeHeadline as="h2" className="poster-title trim-caps text-5xl sm:text-7xl lg:text-8xl">
              CAPABILITIES
            </WipeHeadline>
          </div>
        </div>

        {/* 4 Live WebGL Shader Panels (Gerstner Faculties Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-r border-b border-border divide-y md:divide-y-0 md:divide-x divide-border">
          {/* Capability 01 */}
          <div className="flex flex-col justify-between group">
            <div className="relative h-56 overflow-hidden border-b border-border">
              <ShaderCanvas
                palette="01"
                phaseOffset={4}
                motionEnabled={motionEnabled}
                className="pointer-events-none absolute inset-0 w-full h-full"
              />
              <div className="relative z-10 p-4 flex items-center justify-between">

              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/90 text-white p-3">
                <p className="text-lg font-extrabold uppercase tracking-tight leading-none">
                  ENTERPRISE BACKEND &amp; RUNTIMES
                </p>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between gap-6 bg-background group-hover:bg-muted transition-colors">
              <div>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  Modernizing legacy .NET Framework monoliths to high-performance{' '}
                  <strong>.NET Core / .NET 8 / .NET 10</strong> and migrating critical retail domains to{' '}
                  <strong>Java Spring Boot</strong>.
                </p>
                <ul className="space-y-1.5 text-xs font-mono uppercase border-t border-border pt-4">
                  <li className="flex justify-between">
                    <span>LANGUAGES:</span> <strong>C#, JAVA, C++, SQL, JS</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>.NET STACK:</span> <strong>ASP.NET CORE, EF CORE, LINQ</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>JAVA STACK:</span> <strong>SPRING BOOT, DATA JPA, SECURITY</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>RUNTIME:</span> <strong>NODE.JS, REST APIS, OOP</strong>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Capability 02 */}
          <div className="flex flex-col justify-between group">
            <div className="relative h-56 overflow-hidden border-b border-border">
              <ShaderCanvas
                palette="02"
                phaseOffset={5}
                motionEnabled={motionEnabled}
                className="pointer-events-none absolute inset-0 w-full h-full"
              />
              <div className="relative z-10 p-4 flex items-center justify-between">

              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/90 text-white p-3">
                <p className="text-lg font-extrabold uppercase tracking-tight leading-none">
                  EVENT-DRIVEN MESSAGING &amp; TELEMETRY
                </p>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between gap-6 bg-background group-hover:bg-muted transition-colors">
              <div>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  Designing high-throughput asynchronous pipelines across <strong>Apache Kafka</strong> and{' '}
                  <strong>RabbitMQ</strong> with automated retry, dead-letter queues (DLQ), and real-time SignalR streaming.
                </p>
                <ul className="space-y-1.5 text-xs font-mono uppercase border-t border-border pt-4">
                  <li className="flex justify-between">
                    <span>BROKERS:</span> <strong>APACHE KAFKA, RABBITMQ</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>PATTERNS:</span> <strong>FAN-OUT, DLQ, FAULT RECOVERY</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>REAL-TIME:</span> <strong>SIGNALR, WEBSOCKETS, PLM SYNC</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>BENCHMARK:</span> <strong>+40% ASYNC THROUGHPUT</strong>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Capability 03 */}
          <div className="flex flex-col justify-between group">
            <div className="relative h-56 overflow-hidden border-b border-border">
              <ShaderCanvas
                palette="03"
                phaseOffset={6}
                motionEnabled={motionEnabled}
                className="pointer-events-none absolute inset-0 w-full h-full"
              />
              <div className="relative z-10 p-4 flex items-center justify-between">

              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/90 text-white p-3">
                <p className="text-lg font-extrabold uppercase tracking-tight leading-none">
                  CLOUD INFRASTRUCTURE, CACHING &amp; DEVOPS
                </p>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between gap-6 bg-background group-hover:bg-muted transition-colors">
              <div>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  Managing multi-environment <strong>AWS infrastructure</strong>, distributed <strong>Redis</strong>{' '}
                  caching layers, Docker containerization, and automated GitHub Actions quality gates.
                </p>
                <ul className="space-y-1.5 text-xs font-mono uppercase border-t border-border pt-4">
                  <li className="flex justify-between">
                    <span>AWS CLOUD:</span> <strong>ECS, LAMBDA, SNS/SQS, DYNAMODB</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>DATABASES:</span> <strong>POSTGRESQL, SQL SERVER, MYSQL</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>CACHE &amp; NOSQL:</span> <strong>REDIS, MONGODB</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>CI/CD &amp; AUTH:</span> <strong>DOCKER, GITHUB ACTIONS, AZURE AD</strong>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Capability 04 */}
          <div className="flex flex-col justify-between group">
            <div className="relative h-56 overflow-hidden border-b border-border">
              <ShaderCanvas
                palette="04"
                phaseOffset={7}
                motionEnabled={motionEnabled}
                className="pointer-events-none absolute inset-0 w-full h-full"
              />
              <div className="relative z-10 p-4 flex items-center justify-between">

              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/90 text-white p-3">
                <p className="text-lg font-extrabold uppercase tracking-tight leading-none">
                  GEN-AI RAG WORKFLOWS &amp; FRONTEND TELEMETRY
                </p>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between gap-6 bg-background group-hover:bg-muted transition-colors">
              <div>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  Automating incident log correlation and root-cause analysis with{' '}
                  <strong>Phi-3 open-source LLMs</strong> and building reactive telemetry dashboards in{' '}
                  <strong>React</strong> and <strong>Angular</strong>.
                </p>
                <ul className="space-y-1.5 text-xs font-mono uppercase border-t border-border pt-4">
                  <li className="flex justify-between">
                    <span>AI ENGINE:</span> <strong>PHI-3 LLM, RAG CORRELATION</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>OBSERVABILITY:</span> <strong>CLOUDWATCH, SUMO LOGIC</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>FRONTEND UI:</span> <strong>REACT, ANGULAR, SIGNALR</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>API SPECS:</span> <strong>SWAGGER / OPENAPI, POSTMAN</strong>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Complete Technical Specification Matrix */}
        <div className="mt-12 border border-border">
          <div className="bg-muted px-6 py-3 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="meta-label font-semibold">
              COMPLETE TECHNICAL SPECIFICATION INDEX
            </span>
          </div>
          <div className="divide-y divide-border">
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:px-6 items-baseline gap-2">
              <span className="md:col-span-3 meta-label text-muted-foreground">(01) LANGUAGES &amp; CORE</span>
              <span className="md:col-span-9 text-sm font-semibold uppercase tracking-tight">
                C# · Java · .NET Core · .NET 8/10 · SQL · C++ · JavaScript
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:px-6 items-baseline gap-2">
              <span className="md:col-span-3 meta-label text-muted-foreground">(02) BACKEND FRAMEWORKS</span>
              <span className="md:col-span-9 text-sm font-semibold uppercase tracking-tight">
                ASP.NET Core · Java Spring Boot · Entity Framework (EF) Core · Spring Data JPA · Spring Security · Node.js
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:px-6 items-baseline gap-2">
              <span className="md:col-span-3 meta-label text-muted-foreground">(03) ARCHITECTURE &amp; MESSAGING</span>
              <span className="md:col-span-9 text-sm font-semibold uppercase tracking-tight">
                Microservices · Event-Driven Architecture (EDA) · Apache Kafka · RabbitMQ · REST APIs · SignalR
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:px-6 items-baseline gap-2">
              <span className="md:col-span-3 meta-label text-muted-foreground">(04) CLOUD &amp; DEVOPS</span>
              <span className="md:col-span-9 text-sm font-semibold uppercase tracking-tight">
                AWS (ECS, Lambda, SNS/SQS, DynamoDB, CloudWatch) · Azure AD SSO · Docker · GitHub Actions · CI/CD
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:px-6 items-baseline gap-2">
              <span className="md:col-span-3 meta-label text-muted-foreground">(05) DATABASES &amp; CACHING</span>
              <span className="md:col-span-9 text-sm font-semibold uppercase tracking-tight">
                PostgreSQL · MySQL · Microsoft SQL Server · Redis (Distributed Cache) · MongoDB
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:px-6 items-baseline gap-2">
              <span className="md:col-span-3 meta-label text-muted-foreground">(06) FRONTEND, AI &amp; OBSERVABILITY</span>
              <span className="md:col-span-9 text-sm font-semibold uppercase tracking-tight">
                React · Angular · Phi-3 Open-Source LLM (RAG) · Git · Postman · Swagger / OpenAPI · Sumo Logic
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
