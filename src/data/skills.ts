import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Infrastructure & DevOps',
    skills: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'Prometheus', 'Grafana'],
  },
  {
    category: 'Data & Backend',
    skills: ['MongoDB', 'PostGIS', 'MySQL', 'SQLite', 'gRPC', 'RESTful APIs', 'SQLAlchemy'],
  },
  {
    category: 'Big Data & Machine Learning',
    skills: ['PyTorch', 'PySpark', 'Apache Spark', 'Hadoop MapReduce', 'TensorFlow', 'Machine Learning'],
  },
  {
    category: 'Practices & Domains',
    skills: [
      'Distributed Systems',
      'Big Data',
      'Test Driven Development',
      'Agile',
      'TCP Networking',
      'Artificial Intelligence',
    ],
  },
];
