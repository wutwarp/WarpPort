"use client";

import { translations } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export function HeroSection() {
  const { language } = useLanguage();
  const copy = translations[language].hero;

  return (
    <section className="hero" id="home">
      <picture className="hero-media" aria-hidden="true">
        <source media="(max-width: 780px)" srcSet="/images/hero-mobile_result.avif" type="image/avif" />
        <img
          src="/images/hero-cat-sky.avif"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero-scrim" />
      <div className="section-shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {copy.availability}</p>
          <p className="hero-greeting">{copy.greeting}</p>
          <h1>{copy.titleFirst}<br /><span>{copy.titleSecond}</span></h1>
          <p className="hero-description">{copy.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">{copy.viewProjects} <span>→</span></a>
            <a className="button button-secondary" href="#contact">{copy.contactMe}</a>
          </div>
          <div className="hero-meta" aria-label={copy.focus}><span>{copy.focus}</span></div>
        </div>
        <div className="hero-cards" aria-label={copy.profileLabel}>
          <div className="role-card glass-card">
            <span className="role-icon">&lt;/&gt;</span>
            <div><b>{copy.roleTitle}</b><p>{copy.roleDescription}</p></div>
          </div>
          <div className="stats-card glass-card">
            <div><b>4+</b><span>{copy.years}</span></div>
            <div><b>15+</b><span>{copy.projects}</span></div>
            <div><b>100%</b><span>{copy.mindsetStat}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
