import React, { createContext, useState, useContext } from 'react';
import translations from '../translations.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // default is Spanish

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'pt' : 'es'));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
