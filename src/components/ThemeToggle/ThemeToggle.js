import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'light' ? (
        <img src="/icons/moon.svg" alt="Switch to dark mode" />
      ) : (
        <img src="/icons/sun.svg" alt="Switch to light mode" />
      )}
    </button>
  );
};

export default ThemeToggle;
