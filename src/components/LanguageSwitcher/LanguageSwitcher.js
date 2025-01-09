import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${i18n.language === 'pt' ? 'active' : ''}`}
        onClick={() => changeLanguage('pt')}
      >
        <img src="/icons/flag-br.svg" alt="Português" />
      </button>

      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        <img src="/icons/flag-us.svg" alt="English" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
