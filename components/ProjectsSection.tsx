"use client";

import { projects } from "@/data/portfolio";
import { translations } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { language } = useLanguage();
  const copy = translations[language].projects;

  return (
    <section className="projects-section" id="projects">
      <div className="section-shell">
        <div className="section-heading">
          <div><p className="section-label">{copy.label}</p><h2>{copy.titleFirst}<br /><span>{copy.titleSecond}</span></h2></div>
          <p>{copy.description}</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={project.shortName} project={project} index={index} language={language} copy={copy} />)}
        </div>
      </div>
    </section>
  );
}
