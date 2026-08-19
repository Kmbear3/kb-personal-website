import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-qbittensor',
    company: 'qBitTensor Labs',
    title: 'Software Engineer',
    location: 'Boulder, CO',
    startDate: 'Sep 2025',
    endDate: 'Present',
    bullets: [
      'Architected a fault-tolerant, distributed validation platform in Python across over 250 independent nodes.',
      'Led development of public and private miner codebases, providing the foundation for participants to submit quantum-inspired solutions to NP-hard optimization problems.',
      'Engineered a security-in-depth Docker-based sandboxed execution environment for untrusted third-party code.',
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
      'Architected a resilient replacement for brittle, failure-prone infrastructure as Kubernetes administrator, enabling continuous deployment, scaling, and scheduling of 24+ distributed services at 99.9% uptime.',
      'Administered 200 node private cloud.',
      'Built 2 distributed systems for ML model validation, supporting linear regression and classification across a 75-machine compute network.',
    ],
    tech: ['React', 'deck.gl', 'PostGIS', 'MongoDB', 'Kubernetes', 'Python'],
  },
  {
    id: 'exp-cpp',
    company: 'CPP Wind Engineering Consultants',
    title: 'Systems Engineer Intern',
    location: 'Remote',
    startDate: 'May 2019',
    endDate: 'Aug 2019',
    bullets: [
      'Conducted quantitative testing to evaluate accuracy and frequency response across multiple sensor data collection methods, informing instrument selection and measurement reliability.',
      'Designed a control station that mixed and regulated the output of tracer gas used in the wind tunnel testing of the air quality from various exhausts produced by buildings.',
      'Built and assembled city-scape proximity models for data collection in wind tunnels.',
    ],
    tech: ['Data Collection', 'Systems Engineering', 'Wind Tunnel Testing'],
  },
];
