"use client";

import { skillGroups } from "@/data/portfolio";
import { translations } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export function SkillsSection() {
  const { language } = useLanguage();
  const copy = translations[language].skills;

  return (
    <section className="skills-section" id="skills">
      <div className="section-shell skills-layout">
        <div className="skills-intro">
          <p className="section-label">{copy.label}</p>
          <h2>{copy.titleFirst}<br /><span>{copy.titleSecond}</span></h2>
          <p>{copy.description}</p>
          <div className="skills-principle"><b>{copy.approachLabel}</b><span>{copy.approach}</span></div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title.en}>
              <div className="skill-card-head"><span>{group.icon}</span><b>0{index + 1}</b></div>
              <h3>{group.title[language]}</h3>
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
