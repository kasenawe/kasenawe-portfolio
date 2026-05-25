import { useMemo, useState } from "react";
import type { Language } from "./types/portfolio";
import { copyByLanguage } from "./i18n/copy";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { profileConfig } from "./config/profile";

function App() {
  const [language, setLanguage] = useState<Language>("es");
  const copy = useMemo(() => copyByLanguage[language], [language]);

  return (
    <div className="app-shell">
      <Header nav={copy.nav} language={language} setLanguage={setLanguage} />
      <main id="top">
        <HeroSection hero={copy.hero} />
        <AboutSection about={copy.about} />
        <ProjectsSection projects={copy.projects} />
        <ContactSection contact={copy.contact} profile={profileConfig} />
      </main>
      <Footer footer={copy.footer} />
    </div>
  );
}

export default App;
