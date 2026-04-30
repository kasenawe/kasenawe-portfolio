import { useMemo, useState } from "react";
import type { Language } from "./types/portfolio";
import { copyByLanguage } from "./i18n/copy";

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
