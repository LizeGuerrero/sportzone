'use client';
import React, { ReactNode, useState, useEffect } from 'react';  // Importar useState y useEffect para manejar el tema
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar Bootstrap JS de manera estática
import Header from './Header';
import Footer from './Footer';
import styles from './MainLayout.module.css';  // Importar los estilos del archivo CSS

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');  // Estado para manejar el tema
  const [themeIcon, setThemeIcon] = useState<string>('auto.png'); // Estado para manejar la imagen del tema

  // Función para manejar el cambio de tema
  const handleThemeChange = (newTheme: 'light' | 'dark' | 'auto') => {
    setTheme(newTheme);
  };

  // Aplicar el tema dinámicamente y cambiar la imagen
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('bg-dark');
      document.body.classList.remove('bg-light');
      setThemeIcon('moon.png'); // Cambiar a la imagen del tema oscuro
    } else if (theme === 'light') {
      document.body.classList.add('bg-light');
      document.body.classList.remove('bg-dark');
      setThemeIcon('sun.png'); // Cambiar a la imagen del tema claro
    } else {
      document.body.classList.remove('bg-dark', 'bg-light');
      setThemeIcon('auto.png'); // Cambiar a la imagen del tema automático
    }
  }, [theme]);

  return (
    <div className={styles.layout}>
      <Header />
      
      {/* Botón que despliega el menú de temas */}
      <button
        className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme (auto)"
      >
        <img src={`/${themeIcon}`} alt="Theme Icon" className="theme-icon" width="20" height="20" />
        <span className="visually-hidden" id="bd-theme-text">
          Toggle theme
        </span>
      </button>

      {/* Menú desplegable para el tema */}
      <ul className="dropdown-menu" aria-labelledby="bd-theme">
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleThemeChange('dark')} // Cambiar al tema oscuro
          >
            Dark Mode
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleThemeChange('light')} // Cambiar al tema claro
          >
            Light Mode
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleThemeChange('auto')} // Cambiar al tema automático
          >
            Auto Mode
          </a>
        </li>
      </ul>

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
