import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AR_TRANSLATIONS } from '../i18n/ar';
import { FR_TRANSLATIONS } from '../i18n/fr';
import { Language, TranslationDictionary } from '../i18n/types';

const LANGUAGE_STORAGE_KEY = 'abhygo_language_v1';

const DICTIONARIES: Record<Language, TranslationDictionary> = {
  fr: FR_TRANSLATIONS,
  ar: AR_TRANSLATIONS,
};

interface LanguageContextValue {
  language: Language;
  isRtl: boolean;
  t: TranslationDictionary;
  setLanguage: (nextLanguage: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'fr';
  try {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get('lang');
    if (queryLang === 'ar' || queryLang === 'fr') {
      return queryLang;
    }

    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === 'ar' || stored === 'fr') {
      return stored;
    }
  } catch {
    // Ignore localStorage or URLSearchParams restrictions
  }
  return 'fr';
}

function syncLangQueryParamIfPresent(nextLanguage: Language) {
  if (typeof window === 'undefined') return;
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', nextLanguage);
      window.history.replaceState(null, '', url.toString());
    }
  } catch {
    // Ignore URL mutation issues
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage write errors gracefully
    }
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    syncLangQueryParamIfPresent(nextLanguage);
    setLanguageState(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next: Language = prev === 'fr' ? 'ar' : 'fr';
      syncLangQueryParamIfPresent(next);
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isRtl: language === 'ar',
      t: DICTIONARIES[language],
      setLanguage,
      toggleLanguage,
    }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
