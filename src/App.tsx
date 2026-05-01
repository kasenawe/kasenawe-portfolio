import { useMemo, useState } from "react";
import type { Language } from "./types/portfolio";
import { copyByLanguage } from "./i18n/copy";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { profileConfig } from "./config/profile";

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
        <HeroSection hero={copy.hero} />
        <AboutSection about={copy.about} />
        <ProjectsSection projects={copy.projects} />
        <ContactSection contact={copy.contact} profile={profileConfig} />
      </main>

      <footer className="site-footer">{copy.footer}</footer>
    </div>
  );
}

export default App;
