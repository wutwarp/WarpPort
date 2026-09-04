import type { Project } from "@/data/portfolio";
import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
import { ProjectMedia } from "./ProjectMedia";

export function ProjectCard({ project, index, language, copy, onOpen }: { project: Project; index: number; language: Language; copy: (typeof translations)[Language]["projects"]; onOpen: () => void }) {
  return (
    <article
      className={`project-card project-card-clickable ${index === 0 ? "project-featured" : ""}`}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`${copy.openProject}: ${project.name[language]}`}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
    >
      <ProjectMedia project={project} imageAlt={`${project.shortName} ${copy.screenshotSuffix}`} />
      <div className="project-copy">
        <div className="project-kicker"><span>{project.type[language]}</span><b>{String(index + 1).padStart(2, "0")}</b></div>
        <h3>{project.name[language]}</h3>
        <p>{project.description[language]}</p>
        <div className="tech-list" aria-label={copy.techStackLabel}>
          {project.techStack.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        {project.demoUrl && (
          <a
            className="project-demo-link"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            {copy.liveDemo} <span>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
