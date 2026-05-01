import type { Copy } from "../types/portfolio";

type Props = {
  projects: Copy["projects"];
};

export function ProjectsSection({ projects }: Props) {
  return (
    <section id="projects" className="content-section">
      <h2>{projects.title}</h2>
      <p>{projects.intro}</p>

      <div className="project-grid">
        {projects.items.map((project) => (
          <article key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="stack-line">{project.stack.join(" • ")}</p>
            <div className="project-actions">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                {projects.actions.live}
              </a>
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                {projects.actions.repo}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
