// src/pages/403.js
import React from 'react';
import styles from '../assets/styles/Error-Pages/403.module.css'; // Anpassa stilen som du vill

const Forbidden = () => {
  return (
    <div className={styles.container}>
      <h1>403 - Forbidden</h1>
      <p>You do not have permission to access this page.</p>
    </div>
  );
};

export default Forbidden;
