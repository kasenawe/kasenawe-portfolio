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
          <article
            key={project.name}
            className={`project-card${project.featured ? " project-card-featured" : ""}`}
          >
            <div className="project-heading">
              <h3>{project.name}</h3>
              {project.status && (
                <span className="project-status">{project.status}</span>
              )}
            </div>
            {project.role && <p className="project-role">{project.role}</p>}
            <p>{project.description}</p>

            {project.highlights && (
              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}

            <ul className="tech-stack">
              {project.stack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            {(project.liveUrl || project.repoUrl) && (
              <div className="project-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    {projects.actions.live}
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    {projects.actions.repo}
                  </a>
                )}
              </div>
            )}

            {project.caseStudy && (
              <details className="project-case-study">
                <summary>{projects.actions.caseStudy}</summary>
                <div className="case-study-grid">
                  {project.caseStudy.map((section) => (
                    <section key={section.title}>
                      <h4>{section.title}</h4>
                      <p>{section.body}</p>
                    </section>
                  ))}
                </div>
              </details>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
