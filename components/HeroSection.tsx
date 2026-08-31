"use client";

import { translations } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export function HeroSection() {
  const { language } = useLanguage();
  const copy = translations[language].hero;

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span /> {copy.availability}</p>
        <h1>{copy.titleFirst}<br /><span>{copy.titleSecond}</span></h1>
        <p className="hero-description">
          {copy.description}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">{copy.viewProjects} <span>↘</span></a>
          <a className="button button-secondary" href="#contact">{copy.contactMe}</a>
        </div>
        <div className="hero-meta" aria-label={copy.focus}>
          <span>{copy.focus}</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-panel" aria-label={copy.profileLabel}>
          <div className="code-bar"><i /><i /><i /><span>pongsakorn.ts</span></div>
          <div className="code-content">
            <p><b>01</b><span className="code-blue">const</span> engineer = {'{'}</p>
            <p><b>02</b>&nbsp;&nbsp;name: <span className="code-green">&quot;Pongsakorn&quot;</span>,</p>
            <p><b>03</b>&nbsp;&nbsp;focus: <span className="code-green">&quot;Full Stack&quot;</span>,</p>
            <p><b>04</b>&nbsp;&nbsp;mindset: <span className="code-green">&quot;{copy.mindset}&quot;</span>,</p>
            <p><b>05</b>&nbsp;&nbsp;experience: <span className="code-green">&quot;{copy.experience}&quot;</span></p>
            <p><b>06</b>{'}'};</p>
          </div>
          <div className="panel-status"><span>●</span> {copy.systemsOnline} <b>TH / GMT+7</b></div>
        </div>
        <div className="floating-note note-top"><span>✓</span><div><b>{copy.productionReady}</b><small>{copy.reliableByDesign}</small></div></div>
        <div className="floating-note note-bottom"><span>↗</span><div><b>{copy.endToEnd}</b><small>{copy.process}</small></div></div>
      </div>
    </section>
  );
}
