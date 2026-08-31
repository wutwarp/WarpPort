"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { isSupportedLanguage, type Language } from "@/lib/i18n";

const STORAGE_KEY = "portfolio-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
      if (isSupportedLanguage(savedLanguage)) {
        setLanguageState(savedLanguage);
        document.documentElement.lang = savedLanguage;
      }
    } catch {
      // English remains the safe default when storage is unavailable.
    }
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;

    try {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // The in-memory selection still works if storage is unavailable.
    }
  }, []);

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
