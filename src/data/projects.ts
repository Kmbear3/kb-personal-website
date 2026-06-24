import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'bittensor-subnet',
    title: 'Bittensor Subnet Architecture',
    summary:
      'A fault-tolerant distributed validation and scoring platform supporting 250+ miners and a $500K prize pool in a permissionless compute economy.',
    problem:
      'A decentralized compute network needed a trust-less validation system that could score submissions from hundreds of independent miners, enforce incentive mechanisms, and safely execute untrusted third-party code.',
    approach:
      'Architected a distributed validation platform in Python across 17 independent validators. Led development of modular public and private miner codebases for quantum-inspired optimization solutions, and engineered a security-in-depth Docker sandbox to isolate untrusted code from host infrastructure.',
    outcome:
      'Launched a live Bittensor subnet with 250+ active miners and a $500K prize pool. Data pipelines using MySQL, SQLite, and SQLAlchemy track solutions, scores, and network state reliably at scale.',
    tech: ['Python', 'Docker', 'MySQL', 'SQLite', 'SQLAlchemy', 'gRPC'],
    highlights: [
      '17 independent validators coordinating across a permissionless network',
      'Modular miner codebases with security-in-depth Docker sandboxing',
      'Full data pipeline for solution tracking and incentive enforcement',
    ],
    featured: true,
  },
  {
    slug: 'geospatial-visualization',
    title: 'Geospatial Data Visualization Platform',
    summary:
      'Four spatio-temporal data visualization web applications built with React and deck.gl, backed by PostGIS and MongoDB for high-throughput geospatial rendering.',
    problem:
      'Researchers and stakeholders needed to explore large geospatial datasets interactively, with low-latency rendering across distributed environments.',
    approach:
      'Designed and built 4 web applications using React and deck.gl for GPU-accelerated geospatial visualization. Backed rendering pipelines with PostGIS for spatial queries and MongoDB for flexible document storage.',
    outcome:
      'Delivered high-throughput, low-latency geospatial data rendering that enabled real-time exploration of spatio-temporal datasets across distributed environments.',
    tech: ['React', 'deck.gl', 'PostGIS', 'MongoDB', 'JavaScript'],
    highlights: [
      '4 production web applications for spatio-temporal data exploration',
      'GPU-accelerated rendering via deck.gl',
      'PostGIS + MongoDB hybrid data architecture',
    ],
    featured: true,
  },
  {
    slug: 'private-cloud-kubernetes',
    title: 'Private Cloud & Kubernetes Infrastructure',
    summary:
      'Resilient Kubernetes infrastructure to deploy, scale, and schedule 24+ distributed services across a 200-node private cloud at 99.9% uptime.',
    problem:
      'Brittle, failure-prone infrastructure needed a resilient replacement that could support continuous deployment, auto-scaling, and scheduling across a large private cloud without service interruptions.',
    approach:
      'Architected and administered a Kubernetes-based orchestration layer to manage 24+ containerized services across 200 nodes. Implemented CI/CD pipelines for continuous deployment and used Prometheus and Grafana for observability.',
    outcome:
      'Achieved 99.9% uptime across the platform. Administered the 200-node private cloud supporting all production workloads.',
    tech: ['Kubernetes', 'Docker', 'CI/CD', 'Prometheus', 'Grafana'],
    highlights: [
      '200-node private cloud administered end-to-end',
      '24+ containerized services at 99.9% uptime',
      'Full observability stack with Prometheus and Grafana',
    ],
    featured: true,
  },
  {
    slug: 'distributed-ml-validation',
    title: 'Distributed ML Model Validation',
    summary:
      'Two distributed ML model validation systems for linear regression and classification across a 75-machine compute network.',
    problem:
      'Machine learning models needed rigorous distributed validation at scale, running regression and classification tests across a large compute cluster.',
    approach:
      'Built 2 distributed validation systems that distribute model evaluation workloads across a 75-machine compute network. Built fault-tolerant job scheduling and result aggregation to handle partial failures gracefully.',
    outcome:
      'Enabled reliable, scalable validation of ML models across the private cloud, supporting both linear regression and classification use cases.',
    tech: ['Python', 'Machine Learning', 'Distributed Systems', 'Kubernetes'],
    highlights: [
      'Distributed execution across 75 machines',
      'Supports linear regression and classification validation',
      'Fault-tolerant job scheduling and result aggregation',
    ],
    featured: false,
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio',
    summary:
      'A responsive portfolio website built with React and MUI, featuring project case studies and a content-driven architecture.',
    problem:
      'Needed a professional online presence that showcases technical skills and project work without relying on a CMS or heavy framework.',
    approach:
      'Built a hybrid SPA with a single-page home and dedicated project detail routes. Used a typed content layer for easy updates and MUI theming for a cohesive warm-professional design.',
    outcome:
      'Delivered a fast, accessible portfolio with SEO metadata, lazy-loaded routes, and a maintainable data structure that makes adding new projects straightforward.',
    tech: ['React', 'TypeScript', 'MUI', 'Vite', 'React Router'],
    repoUrl: 'https://github.com/Kmbear3/kb-personal-website',
    highlights: [
      'Hybrid routing with scroll-linked sections and project detail pages',
      'Typed content layer for profile, experience, and projects',
      'Warm-professional design system with MUI theming',
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
