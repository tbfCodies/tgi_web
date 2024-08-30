// src/components/Layout/FrontLayout.js
import React from 'react';
import styles from '../../assets/styles/Layout/FrontLayout.module.css'; // Kontrollera att importvägen är korrekt
import Navbar from '../Layout/Navbar'; // Importera Navbar-komponenten
import Footer from '../Layout/Footer'; // Importera Footer-komponenten

const FrontLayout = ({ children }) => {
  return (
    <div className={`${styles.pageContainer} ${styles.frontContainer}`}>
      <header className={styles.header}>
        <Navbar /> {/* Använd Navbar-komponenten här */}
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <Footer /> {/* Använd Footer-komponenten här */}
    </div>
  );
};

export default FrontLayout;
