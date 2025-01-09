import React from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();

  const contactIcons = [
    {
      name: 'LinkedIn',
      icon: '/icons/linkedin.svg',
      url: 'https://linkedin.com/in/alexistoigo'
    },
    {
      name: 'GitHub',
      icon: '/icons/github.svg',
      url: 'https://github.com/alexistoigo'
    },
    {
      name: 'E-mail',
      icon: '/icons/email.svg',
      url: 'mailto:alexistoigo@gmail.com'  
    }
  ];

  return (
    <header className="header">
      <div className="header__container">
        <h1>{t('header.title')}</h1>
        <p>{t('header.description')}</p>
      </div>

      <div className="header__actions">
        <div className="header__contacts">
          {contactIcons.map((contact, idx) => (
            <a
              key={idx}
              href={contact.url}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <img src={contact.icon} alt={contact.name} />
            </a>
          ))}
        </div>

        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
