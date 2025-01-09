import React from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header__container">
        <h1>{t('header.title')}</h1>
        <p>{t('header.description')}</p>
      </div>
      <div className="header__actions">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
