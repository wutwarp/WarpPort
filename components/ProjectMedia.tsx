"use client";

import { useState } from "react";
import type { Project } from "@/data/portfolio";

function Placeholder({ project }: { project: Project }) {
  return (
    <div className={`project-placeholder preview-${project.preview}`} style={{ "--project-accent": project.accent } as React.CSSProperties}>
      <div className="mock-window">
        <div className="mock-top"><i /><i /><i /><span>{project.shortName}</span></div>
        <div className="mock-body">
          <div className="mock-side"><b /><b /><b /><b /></div>
          <div className="mock-content">
            <div className="mock-heading"><span /><small /></div>
            <div className="mock-stat-row"><i /><i /><i /></div>
            <div className="mock-chart"><span /><span /><span /><span /><span /></div>
            <div className="mock-lines"><i /><i /><i /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectMedia({ project, imageAlt }: { project: Project; imageAlt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="project-media">
      {!failed && (
        <img
          src={project.image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      {failed && <Placeholder project={project} />}
      <span className="project-index" aria-hidden="true">↗</span>
    </div>
  );
}
