import type { Project } from '../types';

export const projects: Project[] = [
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
    repoUrl: 'https://github.com/kassidybarram/kb-personal-website',
    highlights: [
      'Hybrid routing with scroll-linked sections and project detail pages',
      'Typed content layer for profile, experience, and projects',
      'Warm-professional design system with MUI theming',
    ],
    featured: true,
  },
  {
    slug: 'task-management-api',
    title: 'Task Management API',
    summary:
      'A RESTful API for team task management with role-based access control, real-time updates, and comprehensive test coverage.',
    problem:
      'Small teams needed a lightweight alternative to heavyweight project management tools, with an API that could power multiple client applications.',
    approach:
      'Designed a modular Node.js backend with JWT authentication, PostgreSQL for relational data, and WebSocket support for live task updates. Wrote integration tests for all critical paths.',
    outcome:
      'API handles 500+ concurrent connections with 99.9% uptime in staging. Open-sourced with documentation that enabled two external contributors.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'WebSockets', 'Jest'],
    repoUrl: 'https://github.com/kassidybarram/task-api',
    highlights: [
      'Role-based access control with JWT authentication',
      'Real-time task updates via WebSockets',
      '90%+ test coverage on critical business logic',
    ],
    featured: true,
  },
  {
    slug: 'data-dashboard',
    title: 'Analytics Dashboard',
    summary:
      'An interactive dashboard for visualizing business metrics with filtering, export, and responsive chart components.',
    problem:
      'Stakeholders relied on static spreadsheet reports that were outdated by the time they were shared, making data-driven decisions slow.',
    approach:
      'Built a React frontend with reusable chart components connected to a cached API layer. Implemented client-side filtering and CSV export for ad-hoc analysis.',
    outcome:
      'Reduced time-to-insight from days to minutes. Dashboard adopted by 3 departments within the first month of launch.',
    tech: ['React', 'TypeScript', 'D3.js', 'Python', 'Redis'],
    liveUrl: 'https://example.com/dashboard',
    highlights: [
      'Reusable chart component library',
      'Client-side filtering with sub-second response',
      'CSV export for stakeholder reporting',
    ],
    featured: true,
  },
  {
    slug: 'cli-dev-tool',
    title: 'Developer CLI Tool',
    summary:
      'A command-line tool that automates common development workflows: scaffolding, linting, and deployment checks.',
    problem:
      'Team onboarding involved manually running 5+ setup scripts with inconsistent results across developer machines.',
    approach:
      'Created a Node.js CLI with interactive prompts, config file support, and plugin architecture. Packaged as an npm module with cross-platform compatibility.',
    outcome:
      'Cut new developer setup time from 2 hours to 15 minutes. Tool adopted as the team standard and integrated into CI pipelines.',
    tech: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer', 'npm'],
    repoUrl: 'https://github.com/kassidybarram/dev-cli',
    highlights: [
      'Interactive CLI with plugin architecture',
      'Cross-platform support (macOS, Linux, Windows)',
      'Integrated into team CI/CD workflows',
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
