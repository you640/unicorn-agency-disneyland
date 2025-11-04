import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

type Language = 'sk' | 'en';
type TranslationKey = keyof typeof translations.sk;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, vars?: { [key: string]: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sk');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: TranslationKey, vars: { [key: string]: string } = {}): string => {
    let translation = translations[language][key] || translations.sk[key];
    
    Object.keys(vars).forEach(varKey => {
      const regex = new RegExp(`{{${varKey}}}`, 'g');
      translation = translation.replace(regex, vars[varKey]);
    });

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
