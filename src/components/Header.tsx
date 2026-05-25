import type { Copy, Language } from "../types/portfolio";

type Props = {
  nav: Copy["nav"];
  language: Language;
  setLanguage: (language: Language) => void;
};

export function Header({ nav, language, setLanguage }: Props) {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        MQ
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#about">{nav.about}</a>
        <a href="#projects">{nav.projects}</a>
        <a href="#contact">{nav.contact}</a>
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
  );
}
