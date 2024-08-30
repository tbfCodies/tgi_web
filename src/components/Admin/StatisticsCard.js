import React from 'react';
import styles from '../../assets/styles/Admin/StatisticsCard.module.css';

const StatisticsCard = ({ title, value }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default StatisticsCard;
