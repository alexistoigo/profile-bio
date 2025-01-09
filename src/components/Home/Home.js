import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home">
      <h2>{t('home.welcome', { name: 'Seu Nome' })}</h2>
      <p>{t('home.bio')}</p>
    </section>
  );
};

export default Home;
