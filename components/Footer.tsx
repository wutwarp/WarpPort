"use client";

import { translations } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { language } = useLanguage();
  const copy = translations[language].footer;

  return (
    <footer>
      <div className="section-shell footer-inner">
        <a className="brand" href="#home"><span className="brand-mark">P</span><span>Wut Pongsakorn</span></a>
        <p>{copy.role}</p>
        <a href="#home">{copy.backToTop} ↑</a>
      </div>
    </footer>
  );
}
