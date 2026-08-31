"use client";

import { useLanguage } from "./LanguageProvider";
import { supportedLanguages, translations } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle" role="group" aria-label={translations[language].navigation.languageLabel}>
      {supportedLanguages.map((item) => (
        <button
          className={language === item ? "is-active" : ""}
          type="button"
          key={item}
          onClick={() => setLanguage(item)}
          aria-pressed={language === item}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
