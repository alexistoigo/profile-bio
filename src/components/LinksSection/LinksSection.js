import React from 'react';
import { useTranslation } from 'react-i18next';
import './LinksSection.css';

const LinksSection = () => {
  const { t } = useTranslation();

  return (
    <section className="links">
      <h2>{t('linksSection.title')}</h2>
      <ul>
        {/* <li>
          <a href="https://link-para-seu-curriculo" target="_blank" rel="noreferrer">
            {t('linksSection.resume')}
          </a>
        </li>
        <li>
          <a href="https://link-para-seus-artigos" target="_blank" rel="noreferrer">
            {t('linksSection.articles')}
          </a>
        </li> */}
        <li>
          <a href="https://linkedin.com/in/alexistoigo" target="_blank" rel="noreferrer">
            {t('linksSection.linkedin')}
          </a>
        </li>
        <li>
          <a href="https://github.com/alexistoigo" target="_blank" rel="noreferrer">
            {t('linksSection.github')}
          </a>
        </li>
        <li>
          <a href="mailto:alexistoigo@gmail.com" target="_blank" rel="noreferrer">
            {t('linksSection.email')}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default LinksSection;
