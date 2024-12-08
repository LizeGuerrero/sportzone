import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string | null>(null);

  // Establecer tema inicial desde localStorage o predeterminado (basado en preferencia del sistema)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(savedTheme || systemTheme);
  }, []);

  // Cambiar el tema
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : theme === 'light' ? 'auto' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else if (newTheme === 'light') {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-bs-theme');
    }
  };

  return (
    <button
      className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
      id="bd-theme"
      type="button"
      aria-expanded="false"
      data-bs-toggle="dropdown"
      aria-label="Toggle theme (auto)"
      onClick={toggleTheme}
    >
      <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
        <use href="#circle-half"></use>
      </svg>
      <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
