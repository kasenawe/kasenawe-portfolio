import type { Copy } from "../types/portfolio";

type Props = { skills: Copy["skills"] };

export function SkillsSection({ skills }: Props) {
  return (
    <section id="skills" className="content-section skills-section" aria-labelledby="skills-title">
      <div className="skills-heading">
        <div>
          <h2 id="skills-title">{skills.title}</h2>
          <p>{skills.intro}</p>
        </div>
      </div>

      <div className="skills-grid">
        {skills.groups.map((group, index) => (
          <div className="skill-card" key={group.title}>
            <span className="skill-index" aria-hidden="true">0{index + 1}</span>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="skills-footer">
        <p>{skills.evidence}</p>
        <a href="#projects">{skills.cta} <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
