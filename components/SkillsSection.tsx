import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-shell skills-layout">
        <div className="skills-intro">
          <p className="section-label">Technical toolkit</p>
          <h2>Tools I use to<br /><span>ship with confidence.</span></h2>
          <p>A practical stack shaped by enterprise systems, production constraints, and the needs of the people using the product.</p>
          <div className="skills-principle"><b>My approach</b><span>Understand deeply → Build simply → Improve continuously</span></div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-head"><span>{group.icon}</span><b>0{index + 1}</b></div>
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
