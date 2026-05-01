export type Language = "es" | "en";

export type Project = {
  name: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
};

export type Copy = {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    intro: string;
    points: string[];
  };
  projects: {
    title: string;
    intro: string;
    actions: {
      live: string;
      repo: string;
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
