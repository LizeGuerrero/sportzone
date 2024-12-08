'use client';
// src/app/layouts/MainLayout.tsx
import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';  // Importar el componente Navbar
import Header from './Header';
import Footer from './Footer';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />  {/* Incluir el componente Navbar aquí */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;


