export type Language = "es" | "en";

export type Project = {
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  status?: string;
  role?: string;
  highlights?: string[];
  caseStudy?: {
    title: string;
    body: string;
  }[];
};

export type Copy = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaResume: string;
    resumeFileName: string;
  };
  about: {
    title: string;
    intro: string;
    points: string[];
  };
  skills: {
    title: string;
    intro: string;
    groups: { title: string; items: string[] }[];
    evidence: string;
    cta: string;
  };
  projects: {
    title: string;
    intro: string;
    actions: {
      live: string;
      repo: string;
      caseStudy: string;
    };
    items: Project[];
  };
  contact: {
    title: string;
    intro: string;
    emailLabel: string;
    locationLabel: string;
    openToWork: string;
  };
  footer: string;
};
