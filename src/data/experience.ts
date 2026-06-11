import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-qbittensor',
    company: 'qBitTensor Labs',
    title: 'Software Engineer',
    location: 'Boulder, CO',
    startDate: 'Dec 2025',
    endDate: 'Present',
    bullets: [
      'Architected a fault-tolerant, distributed validation and scoring system in Python across 17 independent validators and 250+ miners, enforcing incentive mechanisms across a $500K prize pool in a permissionless, trust-less compute economy.',
      'Developed and maintained public and private miner codebases, providing the foundational framework for participants to submit quantum-inspired solutions to NP-hard optimization problems.',
      'Engineered a Docker-based sandboxed execution environment for untrusted third-party code, protecting host infrastructure from malicious actors.',
      'Built and managed data pipelines and persistence layers using MySQL, SQLite, and SQLAlchemy to support solution tracking, scoring, and network state management.',
    ],
    tech: ['Python', 'Docker', 'MySQL', 'SQLite', 'SQLAlchemy'],
  },
  {
    id: 'exp-sustain',
    company: 'Project Sustain',
    title: 'Software Engineer',
    location: 'Remote',
    startDate: 'Oct 2021',
    endDate: 'Mar 2025',
    bullets: [
      'Designed and built 4 spatio-temporal data visualization web applications in React and deck.gl backed by PostGIS and MongoDB, facilitating high-throughput, low-latency geospatial data rendering across distributed environments.',
      'Built system-wide architecture to continuously deploy, scale, and schedule 24+ distributed services via Kubernetes, eliminating service downtime.',
      'Single-handedly managed a private cloud totaling 200 machines.',
      'Developed 2 distributed machine learning model validation services supporting linear regression and classification, executing across 75 machines.',
    ],
    tech: ['React', 'deck.gl', 'PostGIS', 'MongoDB', 'Kubernetes', 'Python'],
  },
  {
    id: 'exp-cpp',
    company: 'CPP Wind Engineering Consultants',
    title: 'Assistant Systems Engineer',
    location: 'Remote',
    startDate: 'May 2019',
    endDate: 'Aug 2019',
    bullets: [
      'Gathered quantitative data examining the accuracy of multiple data collection methodologies by conducting speaker tests on various pitot-static tubes to quantify frequency response.',
      'Designed a control station that mixed and regulated the output of tracer gas used in wind tunnel testing of air quality from various building exhausts.',
      'Built and assembled city-scape proximity models for data collection in wind tunnels.',
    ],
    tech: ['Data Collection', 'Systems Engineering', 'Wind Tunnel Testing'],
  },
];
