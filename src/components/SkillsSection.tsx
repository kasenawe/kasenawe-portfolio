import type { Copy } from "../types/portfolio";

type Props = { skills: Copy["skills"] };

function SkillIcon({ index }: { index: number }) {
  const shared = {
    width: 28,
    height: 28,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (index) {
    case 0:
      return <svg {...shared}><rect x="3" y="5" width="26" height="22" rx="3" /><path d="M3 11h26M13 15l-4 4 4 4m6-8 4 4-4 4" /></svg>;
    case 1:
      return <svg {...shared}><rect x="4" y="5" width="24" height="9" rx="2" /><rect x="4" y="18" width="24" height="9" rx="2" /><path d="M8 9.5h.01M8 22.5h.01M20 9.5h4M20 22.5h4" /></svg>;
    case 2:
      return <svg {...shared}><ellipse cx="14" cy="7" rx="10" ry="4" /><path d="M4 7v14c0 2.2 4.5 4 10 4m0-11c-5.5 0-10-1.8-10-4m17-3v6" /><path d="M23 16l6 2.5V23c0 3-2.4 5-6 6-3.6-1-6-3-6-6v-4.5l6-2.5Z" /></svg>;
    default:
      return <svg {...shared}><path d="M8 6h16a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z" /><path d="M5 12h22m-16 8 3 3 7-7" /></svg>;
  }
}

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
            <span className="skill-icon"><SkillIcon index={index} /></span>
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
