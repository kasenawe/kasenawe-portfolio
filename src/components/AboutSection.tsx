import type { Copy } from "../types/portfolio";

type Props = {
  about: Copy["about"];
};

export function AboutSection({ about }: Props) {
  return (
    <section id="about" className="content-section">
      <h2>{about.title}</h2>
      <p>{about.intro}</p>
      <ul className="bullet-list">
        {about.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
