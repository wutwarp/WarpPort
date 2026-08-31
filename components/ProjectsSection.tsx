import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-shell">
        <div className="section-heading">
          <div><p className="section-label">Selected work</p><h2>Systems built for<br /><span>real-world impact.</span></h2></div>
          <p>From enterprise workflows to 3D simulations, each project started with a real problem and ended with a dependable solution.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
