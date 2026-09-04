"use client";

import { translations } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const { language } = useLanguage();
  const copy = translations[language].navigation;
  const links = [
    { label: copy.home, href: "#home" },
    { label: copy.about, href: "#about" },
    { label: copy.skills, href: "#skills" },
    { label: copy.projects, href: "#projects" },
    { label: copy.experience, href: "#experience" },
    { label: copy.contact, href: "#contact" },
  ];

  return (
    <header className="header-shell">
      <div className="site-header">
        <a className="brand" href="#home" aria-label={`Wut Pongsakorn — ${copy.home}`}>
          <span className="brand-mark">P</span>
          <span>Wut Pongsakorn</span>
        </a>
        <nav className="desktop-nav" aria-label={copy.mainLabel}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageToggle />
          <details className="mobile-menu">
            <summary aria-label={copy.openMenu}><span /><span /></summary>
            <nav aria-label={copy.mobileLabel}>
              {links.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
