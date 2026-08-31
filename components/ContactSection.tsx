"use client";

import { translations } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

const contactLinks = [
  { labelKey: "email", value: "pongsakorn.thepkun@gmail.com", href: "mailto:pongsakorn.thepkun@gmail.com", mark: "@", external: false },
  { labelKey: "github", value: "github.com/wutwarp", href: "https://github.com/wutwarp", mark: "GH", external: true },
  { labelKey: "tel", value: "085-342-9184", href: "tel:085-342-9184", mark: "TEL", external: false },
  { labelKey: "line", value: "wutpskw", href: "https://line.me/ti/p/~wutpskw", mark: "LN", external: true },
  //{ labelKey: "linkedIn", value: "linkedin.com/in/wutpskw", href: "https://linkedin.com/in/wutpskw", mark: "in", external: true },
] as const;

export function ContactSection() {
  const { language } = useLanguage();
  const copy = translations[language].contact;

  return (
    <section className="contact-section" id="contact">
      <div className="section-shell">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="section-label">{copy.label}</p>
            <h2>{copy.titleFirst}<br /><span>{copy.titleSecond}</span></h2>
            <p>{copy.description}</p>
            <a className="button button-light" href="mailto:pongsakorn.thepkun@gmail.com">{copy.button} <span>↗</span></a>
          </div>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a href={link.href} key={link.labelKey} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
                <span className="contact-mark">{link.mark}</span>
                <span><small>{copy[link.labelKey]}</small><b>{link.value}</b></span>
                <i>↗</i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
