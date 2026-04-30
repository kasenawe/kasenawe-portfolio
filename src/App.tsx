import { useMemo, useState } from "react";

type Language = "es" | "en";

type Project = {
  name: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
};

type Copy = {
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

const copyByLanguage: Record<Language, Copy> = {
  es: {
    nav: {
      about: "Sobre mi",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Junior Developer | React + Node",
      title: "Maximiliano Quintana",
      subtitle:
        "Desarrollador con 3 anos de experiencia laboral en SuiteCRM, APIs y webhooks. Enfocado hoy en crear productos modernos con React y Node.js.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contactar",
    },
    about: {
      title: "Perfil profesional",
      intro:
        "Estoy en transicion hacia roles frontend/fullstack con React y Node.js, combinando experiencia real de negocio con nuevas practicas de producto.",
      points: [
        "3 anos trabajando en PHP y SuiteCRM con integraciones de APIs y webhooks.",
        "Bootcamp de React y Node.js con JavaScript, HTML y CSS.",
        "Enfoque en mejorar habilidades frontend para aportar mas valor en equipos de producto.",
      ],
    },
    projects: {
      title: "Proyectos destacados",
      intro:
        "Estos proyectos muestran mi evolucion desde mis primeras apps hasta soluciones mas completas con frontend y backend.",
      items: [
        {
          name: "Hackflix",
          description:
            "Clon de Netflix como SPA en React, consumiendo la API de TMDB mediante llamadas AJAX.",
          stack: ["React", "AJAX", "TMDB API"],
          liveUrl: "https://hackflix.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
        {
          name: "Ecommerce Joyeria Infantil",
          description:
            "Ecommerce para Uruguay con frontend en React + TypeScript y backend en Node.js + Express.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express",
          ],
          liveUrl: "https://lunaperla.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
        {
          name: "App de Quiropraxia",
          description:
            "Plataforma de reservas y pagos de sesiones con Firebase, Mercado Pago y asistente IA con Gemini.",
          stack: [
            "React 19",
            "TypeScript",
            "Firebase",
            "Vercel Functions",
            "Mercado Pago",
            "Gemini API",
          ],
          liveUrl: "https://quiropractica.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
      ],
    },
    contact: {
      title: "Contacto",
      intro: "Estoy buscando una nueva oportunidad como React/Node developer.",
      emailLabel: "Email",
      locationLabel: "Ubicacion",
      openToWork: "Disponible para entrevistas y desafios tecnicos.",
    },
    footer: "Construido con React + TypeScript + Vite",
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Junior Developer | React + Node",
      title: "Maximiliano Quintana",
      subtitle:
        "Developer with 3 years of professional experience in SuiteCRM, APIs, and webhooks. Now focused on building modern products with React and Node.js.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact me",
    },
    about: {
      title: "Professional profile",
      intro:
        "I am transitioning into frontend/fullstack roles with React and Node.js, combining business experience with modern product practices.",
      points: [
        "3 years working with PHP and SuiteCRM, including API and webhook integrations.",
        "React and Node.js bootcamp with JavaScript, HTML, and CSS.",
        "Focused on strengthening frontend skills to deliver more impact in product teams.",
      ],
    },
    projects: {
      title: "Featured projects",
      intro:
        "These projects show my growth from early apps to more complete frontend and backend solutions.",
      items: [
        {
          name: "Hackflix",
          description:
            "Netflix clone built as a React SPA, consuming TMDB API data through AJAX calls.",
          stack: ["React", "AJAX", "TMDB API"],
          liveUrl: "https://hackflix.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
        {
          name: "Kids Jewelry Ecommerce",
          description:
            "Ecommerce for Uruguay built with a React + TypeScript frontend and a Node.js + Express backend.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express",
          ],
          liveUrl: "https://lunaperla.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
        {
          name: "Chiropractic App",
          description:
            "Booking and online payment platform with Firebase, Mercado Pago, and a Gemini-powered AI assistant.",
          stack: [
            "React 19",
            "TypeScript",
            "Firebase",
            "Vercel Functions",
            "Mercado Pago",
            "Gemini API",
          ],
          liveUrl: "https://quiropractica.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
      ],
    },
    contact: {
      title: "Contact",
      intro:
        "I am actively looking for a new opportunity as a React/Node developer.",
      emailLabel: "Email",
      locationLabel: "Location",
      openToWork: "Available for interviews and technical challenges.",
    },
    footer: "Built with React + TypeScript + Vite",
  },
};

function App() {
  const [language, setLanguage] = useState<Language>("es");
  const copy = useMemo(() => copyByLanguage[language], [language]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          MQ
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">{copy.nav.about}</a>
          <a href="#projects">{copy.nav.projects}</a>
          <a href="#contact">{copy.nav.contact}</a>
        </nav>

        <div
          className="language-switch"
          role="group"
          aria-label="Language switcher"
        >
          <button
            type="button"
            className={language === "es" ? "active" : ""}
            onClick={() => setLanguage("es")}
          >
            ES
          </button>
          <button
            type="button"
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <p className="hero-badge">{copy.hero.badge}</p>
          <h1>{copy.hero.title}</h1>
          <p className="hero-subtitle">{copy.hero.subtitle}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              {copy.hero.ctaPrimary}
            </a>
            <a className="btn btn-secondary" href="#contact">
              {copy.hero.ctaSecondary}
            </a>
          </div>
        </section>

        <section id="about" className="content-section">
          <h2>{copy.about.title}</h2>
          <p>{copy.about.intro}</p>
          <ul className="bullet-list">
            {copy.about.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="content-section">
          <h2>{copy.projects.title}</h2>
          <p>{copy.projects.intro}</p>

          <div className="project-grid">
            {copy.projects.items.map((project) => (
              <article key={project.name} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="stack-line">{project.stack.join(" • ")}</p>
                <div className="project-actions">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Repo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-card">
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.intro}</p>
          <p>
            <strong>{copy.contact.emailLabel}:</strong> urumax@gmail.com
          </p>
          <p>
            <strong>{copy.contact.locationLabel}:</strong> Montevideo, Uruguay
          </p>
          <p className="open-to-work">{copy.contact.openToWork}</p>

          <div className="social-links">
            <a
              href="https://github.com/kasenawe"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maximiliano-quintana-tabarez/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">{copy.footer}</footer>
    </div>
  );
}

export default App;
