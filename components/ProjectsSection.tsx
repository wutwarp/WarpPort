"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import { translations } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";
import { ProjectCard } from "./ProjectCard";
import { ProjectGalleryModal } from "./ProjectGalleryModal";

const featuredProjectNames = [
  "ITService",
  "StinHR",
  "CUNurse",
  "ETDA Website",
  "Enterprise RPT",
  "3D Door Configurator",
] as const;

export function ProjectsSection() {
  const { language } = useLanguage();
  const copy = translations[language].projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const featuredProjects = featuredProjectNames
    .map((shortName) => projects.find((project) => project.shortName === shortName))
    .filter((project): project is Project => Boolean(project));
  const visibleProjects = showAllProjects
    ? [...featuredProjects, ...projects.filter((project) => !featuredProjectNames.includes(project.shortName as (typeof featuredProjectNames)[number]))]
    : featuredProjects;

  return (
    <section className="projects-section" id="projects">
      <div className="section-shell">
        <div className="section-heading">
          <div><p className="section-label">{copy.label}</p><h2>{copy.titleFirst}<br /><span>{copy.titleSecond}</span></h2></div>
          <p>{copy.description}</p>
        </div>
        <div className="projects-grid" id="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.shortName}
              project={project}
              index={index}
              language={language}
              copy={copy}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {!showAllProjects && (
          <div className="projects-more">
            <button type="button" onClick={() => setShowAllProjects(true)} aria-controls="projects-grid">
              {copy.viewAllProjects} <span>→</span>
            </button>
          </div>
        )}
      </div>
      {selectedProject && (
        <ProjectGalleryModal
          project={selectedProject}
          language={language}
          copy={copy}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
