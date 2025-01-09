import React from 'react';
import { useTranslation } from 'react-i18next';
import './LinksSection.css';

const LinksSection = () => {
  const { t } = useTranslation();

  const linksData = [
  {
      key: 'linkedin',
      url: 'https://linkedin.com/in/alexistoigo',
      icon: '/icons/linkedin.svg'
    },
    {
      key: 'github',
      url: 'https://github.com/alexistoigo',
      icon: '/icons/github.svg'
    },
    {
      key: 'email',
      url: 'mailto:alexistoigo@gmail.com',
      icon: '/icons/email.svg'
    }
  ];

  return (
    <section className="links">
      <h2>{t('linksSection.title')}</h2>
      <ul>
        {linksData.map((linkItem) => (
          <li key={linkItem.key}>
            <a href={linkItem.url} target="_blank" rel="noreferrer">
              <img
                src={linkItem.icon}
                alt={t(`linksSection.${linkItem.key}`)}
                className="link-icon"
              />
              {t(`linksSection.${linkItem.key}`)}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LinksSection;
