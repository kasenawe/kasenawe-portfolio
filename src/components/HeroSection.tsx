import type { Copy } from "../types/portfolio";

type Props = {
  hero: Copy["hero"];
};

export function HeroSection({ hero }: Props) {
  return (
    <section className="hero-section">
      <p className="hero-badge">{hero.badge}</p>
      <h1>{hero.title}</h1>
      <p className="hero-subtitle">{hero.subtitle}</p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          {hero.ctaPrimary}
        </a>
        <a className="btn btn-secondary" href="#contact">
          {hero.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
