"use client";

import { translations } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export function AboutExperienceSection() {
  const { language } = useLanguage();
  const copy = translations[language].about;

  return (
    <section className="about-section" id="about">
      <div className="section-shell about-card">
        <div>
          <p className="section-label">{copy.label}</p>
          <h2>{copy.titleFirst}<br /><span>{copy.titleSecond}</span></h2>
        </div>
        <div className="about-copy" id="experience">
          <p>{copy.description}</p>
          <div className="experience-note"><b>{copy.experienceLabel}</b><span>{copy.experienceText}</span></div>
        </div>
      </div>
    </section>
  );
}
