import type { Project } from "@/data/portfolio";
import { ProjectMedia } from "./ProjectMedia";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card ${index === 0 ? "project-featured" : ""}`}>
      <ProjectMedia project={project} priority={index === 0} />
      <div className="project-copy">
        <div className="project-kicker"><span>{project.type}</span><b>{String(index + 1).padStart(2, "0")}</b></div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tech-list" aria-label="Technology stack">
          {project.techStack.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
      </div>
    </article>
  );
}
