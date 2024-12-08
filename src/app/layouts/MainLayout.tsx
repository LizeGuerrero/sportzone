'use client';

import React, { ReactNode, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useEffect(() => {
    // Importa el bootstrap.bundle.min.js solo en el cliente
    // @ts-expect-error: Ignorar la falta de tipos para bootstrap.bundle.min.js
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []); // Asegura que solo se cargue una vez, en el cliente

  return (
    <div className={styles.layout}>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
