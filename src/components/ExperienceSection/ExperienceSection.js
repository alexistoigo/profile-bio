import React from 'react';
import { useTranslation } from 'react-i18next';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const { t } = useTranslation();
  
  const experiences = t('experienceSection.experiences', { returnObjects: true });

  return (
    <section className="experience">
      <h2>{t('experienceSection.title')}</h2>
      {experiences.map((exp, index) => (
        <div className="experience__item" key={index}>
          <h3>{exp.company}</h3>
          <p><strong>{exp.role}</strong> | {exp.duration}</p>

          <p><strong>Projects:</strong> {exp.projects.join(', ')}</p>

          {exp.activities && exp.activities.length > 0 && (
            <ul className="experience__activities">
              {exp.activities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
