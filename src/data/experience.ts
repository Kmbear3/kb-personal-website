import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company',
    title: 'Software Engineer',
    location: 'Remote',
    startDate: '2023',
    endDate: 'Present',
    bullets: [
      'Designed and implemented RESTful APIs serving 10K+ daily active users with sub-200ms response times.',
      'Led migration of legacy frontend to React, improving page load performance by 40%.',
      'Collaborated with product and design teams to ship features on a two-week sprint cadence.',
      'Mentored junior engineers through code reviews and pair programming sessions.',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'exp-2',
    company: 'Startup Inc.',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    startDate: '2021',
    endDate: '2023',
    bullets: [
      'Built core product features from prototype to production, including authentication and real-time notifications.',
      'Reduced deployment time by 60% by implementing CI/CD pipelines with automated testing.',
      'Integrated third-party APIs and payment processing, enabling the company\'s first revenue-generating feature.',
    ],
    tech: ['JavaScript', 'React', 'Python', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'exp-3',
    company: 'University Research Lab',
    title: 'Software Development Intern',
    location: 'Boston, MA',
    startDate: '2020',
    endDate: '2021',
    bullets: [
      'Developed data visualization dashboards for research teams, processing datasets of 1M+ records.',
      'Wrote automated test suites that increased code coverage from 45% to 85%.',
      'Documented APIs and onboarding guides used by 15+ researchers.',
    ],
    tech: ['Python', 'Flask', 'JavaScript', 'D3.js', 'SQLite'],
  },
];
