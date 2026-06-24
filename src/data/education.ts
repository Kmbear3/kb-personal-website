import type { Education } from '../types';

export const education: Education[] = [
  {
    id: 'edu-ms',
    degree: 'Master of Science, Computer Science',
    institution: 'Colorado State University',
    location: 'Fort Collins, CO',
    startDate: 'Aug 2022',
    endDate: 'May 2025',
    bullets: [
      'Graduated Summa cum Laude (4.0 GPA).',
      'Awarded Best Paper at the 2023 International ACM/IEEE Big Data Conference.',
      'Published research in 4 competitive IEEE/ACM international computer science conferences.',
      'Won award at CURC (Celebrating Undergraduate Research and Creativity).',
    ],
  },
  {
    id: 'edu-bs',
    degree: 'Bachelor of Science, Computer Science',
    institution: 'Colorado State University',
    location: 'Fort Collins, CO',
    startDate: 'Aug 2017',
    endDate: 'May 2022',
    bullets: [
      'Graduated Cum Laude (3.95 GPA).',
      'Awarded National Science Foundation Research Grant to research distributed systems and big data technologies.',
      'Participated in research to facilitate communication between Pixhawk 4 Flight Controller and the Inertial Measurement Unit attached to drones using C++.',
    ],
  },
];
