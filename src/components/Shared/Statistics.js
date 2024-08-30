// src/components/Shared/Statistics.js
import styles from '../../assets/styles/Shared/Statistics.module.css';

const Statistics = () => {
  return (
    <div className={styles.statisticsContainer}>
      <h2>Statistics</h2>
      <div className={styles.statisticsBox}>
        <div className={styles.statistic}>
          <h3>Number of Services</h3>
          <p>100</p> {/* Ersätt med dynamisk data senare */}
        </div>
        <div className={styles.statistic}>
          <h3>Active Members</h3>
          <p>2000</p> {/* Ersätt med dynamisk data senare */}
        </div>
        <div className={styles.statistic}>
          <h3>Discord Members</h3>
          <p>500</p> {/* Ersätt med dynamisk data senare */}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
