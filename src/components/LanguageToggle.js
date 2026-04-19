import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'kz', label: 'KZ' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <div className="language-toggle">
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <button
            className={`language-button ${language === lang.code ? 'active' : ''}`}
            onClick={() => setLanguage(lang.code)}
            title={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && <span className="language-separator">|</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageToggle;
