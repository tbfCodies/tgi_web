// src/components/Shared/Statistics.js
import React from 'react';
import styles from '../../assets/styles/Shared/Statistics.module.css';

const Statistics = () => {
  return (
    <div className={styles.statisticsContainer}>
      <div className={styles.statistic}>
        <p>16</p>
        <h3>Services</h3>
        <p>we offer</p>
      </div>
      <div className={styles.statistic}>
        <p>14,431</p>
        <h3>Active Members</h3>
        <p>on our services</p>
      </div>
      <div className={styles.statistic}>
        <p>32,123</p>
        <h3>Discord</h3>
        <p>Members</p>
      </div>
    </div>
  );
};

export default Statistics;
