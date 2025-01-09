import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import EducationSection from './components/EducationSection/EducationSection';
import LinksSection from './components/LinksSection/LinksSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <ExperienceSection />
        <EducationSection />
        <LinksSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
