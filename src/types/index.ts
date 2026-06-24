export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bioShort: string;
  bioLong: string;
  personalDetail: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  tech: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  highlights: string[];
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  abstract: string;
  award?: string;
  url?: string;
}
