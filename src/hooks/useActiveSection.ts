import { useEffect, useState } from 'react';

const SECTION_IDS = ['about', 'experience', 'publications', 'projects', 'contact'];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeSection;
}

export const navSections = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Publications', id: 'publications' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
