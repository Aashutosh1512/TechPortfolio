export const SHADER_PALETTES = {
  '01': { name: '01 SWISS COBALT', colors: ['#002FA7', '#1E50FF', '#7B9EFF', '#E8EEFF'] },
  '02': { name: '02 INTL ORANGE', colors: ['#C81D11', '#FF3B1D', '#FF8552', '#FFE8DC'] },
  '03': { name: '03 SIGNAL EMERALD', colors: ['#064E3B', '#059669', '#34D399', '#D1FAE5'] },
  '04': { name: '04 CADMIUM GOLD', colors: ['#78350F', '#D97706', '#FBBF24', '#FEF3C7'] },
  '05': { name: '05 ULTRAVIOLET', colors: ['#3B0764', '#7E22CE', '#C084FC', '#F3E8FF'] },
  '06': { name: '06 CRIMSON POSTER', colors: ['#7F1D1D', '#DC2626', '#F87171', '#FEE2E2'] },
  '07': { name: '07 CYAN PROCESS', colors: ['#0C4A6E', '#0284C7', '#38BDF8', '#E0F2FE'] },
  '08': { name: '08 ACID LIME', colors: ['#365314', '#65A30D', '#A3E635', '#ECFCCB'] },
};

export const PALETTE_KEYS = Object.keys(SHADER_PALETTES);

export const BAYER_4X4 = [
  [0 / 16, 8 / 16, 2 / 16, 10 / 16],
  [12 / 16, 4 / 16, 14 / 16, 6 / 16],
  [3 / 16, 11 / 16, 1 / 16, 9 / 16],
  [15 / 16, 7 / 16, 13 / 16, 5 / 16],
];

export const PROJECTS = [
  {
    id: '01',
    title: 'AWS SNS–SQS to Apache Kafka Event Migration & Resilient Microservices',
    domain: 'Event-Driven & Messaging',
    period: 'SEP 2024 – PRESENT',
    org: 'Anko GCC (Kmart Australia)',
    palette: '01',
    metric: 'HIGH-SCALE EVENT FAN-OUT & FAULT RECOVERY',
    summary:
      'Architected the migration of core retail event-driven messaging pipelines from AWS SNS–SQS to Apache Kafka across C# .NET Core/10 and Java Spring Boot services, optimizing event fan-out and parallel consumer processing.',
    bullets: [
      'Migrated high-volume event streams from AWS SNS–SQS to Apache Kafka partitions to reduce cloud messaging overhead and unlock horizontal consumer scalability.',
      'Engineered resilient event-driven microservices backed by PostgreSQL with automated exponential-backoff retry policies, dead-letter queue (DLQ) routing, and deterministic fault recovery.',
      'Integrated Product Lifecycle Management (PLM) event streams across distributed retail domains for real-time multi-service consistency.',
    ],
    stack: ['Apache Kafka', 'C# .NET 10', 'Java Spring Boot', 'PostgreSQL', 'AWS SNS/SQS', 'Microservices'],
  },
  {
    id: '02',
    title: 'Phi-3 Open-Source LLM RAG Incident & Root-Cause Engine',
    domain: 'GenAI & Observability',
    period: 'SEP 2024 – PRESENT',
    org: 'Anko GCC (Kmart Australia)',
    palette: '05',
    metric: 'AUTOMATED LOG CORRELATION & RCA',
    summary:
      'Built a Retrieval-Augmented Generation (RAG) incident management and diagnostics engine powered by the Phi-3 open-source LLM to automate multi-service log correlation and root-cause analysis workflows.',
    bullets: [
      'Ingested distributed telemetry and structured exception logs from AWS CloudWatch and Sumo Logic into a vector retrieval pipeline queried by Phi-3.',
      'Automated cross-service trace correlation to pinpoint upstream microservice failures and suggest remediation steps during production incidents.',
      'Paired backend diagnostics with real-time Angular and SignalR telemetry dashboard modules for live operational visibility.',
    ],
    stack: ['Phi-3 LLM', 'RAG Pipeline', 'AWS CloudWatch', 'Sumo Logic', 'Angular', 'SignalR', '.NET Core'],
  },
  {
    id: '03',
    title: 'Cross-Service Redis Caching & EF Core Query Optimization Engine',
    domain: 'Cloud & Performance',
    period: 'SEP 2024 – PRESENT',
    org: 'Anko GCC (Kmart Australia)',
    palette: '03',
    metric: '36% API EXECUTION COST REDUCTION',
    summary:
      'Redesigned distributed cross-service caching topologies in Redis and refactored high-frequency Entity Framework Core / LINQ database queries, cutting overall API execution costs by 36%.',
    bullets: [
      'Eliminated redundant cross-service database roundtrips by implementing a distributed Redis cache-aside and invalidation layer across .NET Core and Spring Boot APIs.',
      'Tuned complex LINQ and EF Core queries using compiled queries, projection optimization, and index-aligned SQL execution plans.',
      'Modernized legacy .NET Framework services to .NET Core/10 alongside containerized AWS ECS and Lambda deployments automated via GitHub Actions.',
    ],
    stack: ['Redis', 'EF Core', 'LINQ', 'C# .NET Core/10', 'AWS ECS & Lambda', 'PostgreSQL', 'GitHub Actions'],
  },
  {
    id: '04',
    title: 'Kafka–RabbitMQ Hybrid Messaging Bridge & CI/CD Quality Gate System',
    domain: 'Event-Driven & Messaging',
    period: 'FEB 2024 – AUG 2024',
    org: 'Anko GCC (Kmart Australia)',
    palette: '02',
    metric: '+40% ASYNC THROUGHPUT · 80% UNIT COVERAGE',
    summary:
      'Designed and deployed a hybrid Apache Kafka and RabbitMQ messaging architecture bridging .NET Core and Java Spring Boot microservices, boosting asynchronous message throughput by 40%.',
    bullets: [
      'Combined Kafka high-throughput log streaming with RabbitMQ fine-grained exchange routing across 3 core retail microservices.',
      'Migrated legacy ZIP artifact deployments to standardized Docker container images for reproducible local and production parity.',
      'Configured automated GitHub Actions CI/CD pipelines with strict quality gates that raised unit test coverage to 80% and cut failed merges by 25%, alongside Azure AD SSO migration.',
    ],
    stack: ['Apache Kafka', 'RabbitMQ', 'Docker', 'GitHub Actions', 'Azure AD SSO', 'Spring Boot', 'C# .NET'],
  },
  {
    id: '05',
    title: 'Distributed Online Assessment & Automated Evaluation Platform',
    domain: 'Full-Stack Platforms',
    period: 'DEC 2023',
    org: 'Academic & Independent Architecture',
    palette: '04',
    metric: '500+ CONCURRENT ACTIVE USERS',
    summary:
      'Engineered a high-concurrency distributed assessment and automated grading platform capable of serving 500+ simultaneous examinees with isolated scoring microservices in Java Spring Boot.',
    bullets: [
      'Built decoupled evaluation microservices in Java Spring Boot and MongoDB to score submissions asynchronously under peak exam concurrency.',
      'Secured all RESTful APIs using Spring Security, OAuth 2.0, and stateless JWT token authentication.',
      'Implemented asynchronous background notification pipelines and a responsive React assessment client.',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'OAuth 2.0 / JWT', 'React', 'MongoDB', 'REST APIs'],
  },
  {
    id: '06',
    title: 'Enterprise Link Tracking, Redirection & Analytics Web API',
    domain: 'Full-Stack Platforms',
    period: 'MAY 2024',
    org: 'Enterprise Architecture Project',
    palette: '07',
    metric: 'COMPILED LINQ LOW-LATENCY TELEMETRY',
    summary:
      'Architected a high-throughput enterprise URL management, redirection, and click-telemetry API using ASP.NET Core Web API, custom middleware, and compiled Entity Framework Core queries.',
    bullets: [
      'Engineered custom request-interception middleware and role-based authorization policies in ASP.NET Core Web API.',
      'Implemented the Repository Pattern with EF Core code-first migrations and compiled LINQ queries over Microsoft SQL Server for sub-millisecond link resolution.',
      'Delivered an interactive React analytics console visualizing click velocity, referrers, and geographic distribution.',
    ],
    stack: ['C#', 'ASP.NET Core', 'EF Core', 'Compiled LINQ', 'SQL Server', 'React', 'Custom Middleware'],
  },
  {
    id: '07', title: 'AWS SNS–SQS to Apache Kafka Event Migration', domain: 'Event-Driven & Messaging', period: 'SEP 2024 – PRESENT', org: 'Anko GCC (Kmart Australia)', palette: '01', metric: 'SCALABLE EVENT FAN-OUT',
    summary: 'Migrated high-volume retail event pipelines from AWS SNS–SQS to Apache Kafka for parallel processing and horizontal scalability.',
    bullets: ['Replaced cloud queue fan-out with partitioned Kafka event streams.', 'Optimized consumer parallelism across distributed retail services.', 'Reduced infrastructure messaging overhead and improved throughput.'],
    stack: ['Apache Kafka', 'AWS SNS/SQS', 'C# .NET 10', 'Java Spring Boot'],
  },
  {
    id: '08', title: '.NET 10 and Java Spring Boot Runtime Modernization', domain: 'Cloud & Performance', period: 'SEP 2024 – PRESENT', org: 'Anko GCC (Kmart Australia)', palette: '03', metric: 'MODERNIZED ENTERPRISE RUNTIMES',
    summary: 'Modernized legacy enterprise applications and core services across .NET Core/10 and Java Spring Boot.',
    bullets: ['Migrated legacy .NET Framework services to .NET Core and .NET 10.', 'Moved core backend services onto Java Spring Boot.', 'Improved maintainability, runtime performance, and deployment consistency.'],
    stack: ['C# .NET Core/10', 'Java Spring Boot', 'PostgreSQL'],
  },
  {
    id: '09', title: 'Redis and EF Core API Cost Optimization', domain: 'Cloud & Performance', period: 'SEP 2024 – PRESENT', org: 'Anko GCC (Kmart Australia)', palette: '04', metric: '36% API EXECUTION COST REDUCTION',
    summary: 'Reduced API execution costs through distributed caching and high-frequency database query optimization.',
    bullets: ['Added Redis cache-aside patterns across distributed services.', 'Tuned LINQ and EF Core queries for lower database round trips.', 'Reduced overall API execution costs by 36%.'],
    stack: ['Redis', 'EF Core', 'LINQ', 'PostgreSQL'],
  },
  {
    id: '10', title: 'Automated Retry and Dead-Letter Handling', domain: 'Event-Driven & Messaging', period: 'SEP 2024 – PRESENT', org: 'Anko GCC (Kmart Australia)', palette: '02', metric: 'FAULT-TOLERANT MICROSERVICES',
    summary: 'Built fault recovery into event-driven microservices with retry policies and dead-letter routing.',
    bullets: ['Implemented automated exponential-backoff retries.', 'Added deterministic dead-letter queue handling.', 'Improved service resilience across multi-service failures.'],
    stack: ['C# .NET Core', 'Java Spring Boot', 'PostgreSQL', 'Kafka'],
  },
  {
    id: '11', title: 'Phi-3 RAG Incident Root-Cause Engine', domain: 'GenAI & Observability', period: 'SEP 2024 – PRESENT', org: 'Anko GCC (Kmart Australia)', palette: '05', metric: 'AUTOMATED RCA WORKFLOW',
    summary: 'Created a Phi-3 RAG workflow for incident log correlation and root-cause analysis.',
    bullets: ['Connected distributed logs and telemetry to vector retrieval.', 'Automated cross-service trace correlation.', 'Generated remediation-oriented incident summaries.'],
    stack: ['Phi-3 LLM', 'RAG', 'CloudWatch', 'Sumo Logic'],
  },
  {
    id: '12', title: 'Enterprise PLM Distributed Integration', domain: 'Full-Stack Platforms', period: 'SEP 2024 – PRESENT', org: 'Anko GCC (Kmart Australia)', palette: '07', metric: 'REAL-TIME PLM CONSISTENCY',
    summary: 'Integrated Product Lifecycle Management systems across distributed retail domains.',
    bullets: ['Connected PLM workflows to distributed retail services.', 'Preserved real-time multi-service data consistency.', 'Reduced cross-domain integration failures.'],
    stack: ['Microservices', 'Kafka', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: '13', title: 'AWS Cloud Infrastructure and CI/CD Automation', domain: 'Cloud & Performance', period: 'SEP 2024 – PRESENT', org: 'Anko GCC (Kmart Australia)', palette: '06', metric: 'MULTI-ENVIRONMENT AUTOMATION',
    summary: 'Automated cloud deployment and infrastructure operations across AWS and GitHub Actions.',
    bullets: ['Managed ECS, Lambda, DynamoDB, and CloudWatch resources.', 'Automated multi-environment GitHub Actions pipelines.', 'Improved deployment repeatability and operational visibility.'],
    stack: ['AWS ECS', 'Lambda', 'DynamoDB', 'CloudWatch', 'GitHub Actions'],
  },
  {
    id: '14', title: 'Angular and SignalR Real-Time Telemetry', domain: 'Full-Stack Platforms', period: 'SEP 2024 – PRESENT', org: 'Anko GCC (Kmart Australia)', palette: '08', metric: 'REAL-TIME CLIENT TELEMETRY',
    summary: 'Built Angular dashboards with SignalR streaming for live client-server telemetry.',
    bullets: ['Delivered interactive real-time dashboard modules.', 'Streamed operational events from backend services.', 'Improved incident and system visibility.'],
    stack: ['Angular', 'SignalR', 'C# .NET Core'],
  },
  {
    id: '15', title: 'Kafka–RabbitMQ Hybrid Messaging Bridge', domain: 'Event-Driven & Messaging', period: 'FEB 2024 – AUG 2024', org: 'Anko GCC (Kmart Australia)', palette: '02', metric: '40% ASYNC THROUGHPUT INCREASE',
    summary: 'Designed a Kafka and RabbitMQ hybrid messaging architecture across .NET Core and Spring Boot services.',
    bullets: ['Combined Kafka event streaming with RabbitMQ routing.', 'Connected three core retail microservices.', 'Improved asynchronous throughput by 40%.'],
    stack: ['Apache Kafka', 'RabbitMQ', 'C# .NET', 'Spring Boot'],
  },
  {
    id: '16', title: 'Docker Containerization Standard', domain: 'Cloud & Performance', period: 'FEB 2024 – AUG 2024', org: 'Anko GCC (Kmart Australia)', palette: '03', metric: 'REPRODUCIBLE DEPLOYMENTS',
    summary: 'Migrated legacy ZIP artifact deployments to standardized Docker images.',
    bullets: ['Containerized application runtime environments.', 'Enabled reproducible local and production parity.', 'Standardized deployment packaging.'],
    stack: ['Docker', 'C# .NET', 'Spring Boot'],
  },
  {
    id: '17', title: 'GitHub Actions Quality Gates', domain: 'Cloud & Performance', period: 'FEB 2024 – AUG 2024', org: 'Anko GCC (Kmart Australia)', palette: '04', metric: '80% COVERAGE · -25% FAILED MERGES',
    summary: 'Established automated CI/CD quality gates and unit coverage requirements.',
    bullets: ['Configured GitHub Actions pipelines.', 'Raised unit test coverage to 80%.', 'Reduced failed merges by 25%.'],
    stack: ['GitHub Actions', 'Docker', 'Unit Testing'],
  },
  {
    id: '18', title: 'Three High-Performance Retail Microservices', domain: 'Event-Driven & Messaging', period: 'FEB 2024 – AUG 2024', org: 'Anko GCC (Kmart Australia)', palette: '01', metric: '3 PRODUCTION MICROSERVICES',
    summary: 'Developed and maintained three high-performance retail microservices.',
    bullets: ['Built C# .NET and Spring Boot endpoints.', 'Integrated Kafka event processing and Redis caching.', 'Improved service throughput and reliability.'],
    stack: ['C# .NET', 'Spring Boot', 'Kafka', 'Redis'],
  },
  {
    id: '19', title: 'Azure AD Single Sign-On Migration', domain: 'Full-Stack Platforms', period: 'FEB 2024 – AUG 2024', org: 'Anko GCC (Kmart Australia)', palette: '06', metric: 'ENTERPRISE SSO SECURITY',
    summary: 'Migrated legacy session authentication to Azure AD single sign-on.',
    bullets: ['Replaced legacy session handling with Azure AD SSO.', 'Standardized enterprise identity access.', 'Improved portal authentication security.'],
    stack: ['Azure AD', 'SSO', 'C# .NET', 'Spring Boot'],
  },
];

export const RESUME_SUMMARY_TEXT = `AASHUTOSH GOYAL — SOFTWARE ENGINEER
aashutosh89660@gmail.com | +91-8966098596 | linkedin.com/in/aashutosh | github.com/Aashutosh1512

Experience: Software Engineer @ Anko GCC (Kmart Australia) (Sep 2024 – Present) & Software Engineer Intern (Feb 2024 – Aug 2024).
Key Metrics: -36% API execution costs via Redis & EF Core; +40% async message throughput via Kafka–RabbitMQ hybrid; 80% unit test coverage; Top 1.5% globally in TCS CodeVita Season 11 (AIR 361).`;
