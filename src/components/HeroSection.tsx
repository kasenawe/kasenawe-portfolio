import type { Copy } from "../types/portfolio";
import avatarImg from "../assets/avatar.jpg";

type Props = {
  hero: Copy["hero"];
};

export function HeroSection({ hero }: Props) {
  return (
    <section className="hero-section">
      <img className="hero-avatar" src={avatarImg} alt={hero.title} />
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
