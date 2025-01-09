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
      <button onClick={() => changeLanguage('pt')}>
        <img src="/icons/flag-br.svg" alt="Português" />
      </button>
      <button onClick={() => changeLanguage('en')}>
        <img src="/icons/flag-us.svg" alt="English" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
