import React from 'react';
import { useTranslation } from 'react-i18next';
import './EducationSection.css';

const EducationSection = () => {
  const { t } = useTranslation();

  // Retorna o array de formações do arquivo de tradução
  const educationItems = t('educationSection.education', { returnObjects: true });

  return (
    <section className="education">
      <h2>{t('educationSection.title')}</h2>
      <ul>
        {educationItems.map((item, index) => (
          <li key={index} className="education__item">
            <p>
              <strong>{item.type}:</strong> {item.course}
            </p>
            
            {item.activities && item.activities.length > 0 && (
              <ul className="education__activities">
                {item.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EducationSection;
