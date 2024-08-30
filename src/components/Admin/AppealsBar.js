import React from 'react';
import styles from '../../assets/styles/Admin/AppealsBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell, faClock, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const AppealsBar = ({ statusFilter = 'All', onStatusChange }) => {
  const handleClick = (status) => {
    if (typeof onStatusChange === 'function') {
      onStatusChange(status);
    }
  };

  return (
    <div className={styles.appealsBarWrapper}>
      {/* AppealsBar */}
      <div className={styles.appealsBar}>
        <div
          className={`${styles.appealsBarItem} ${statusFilter === 'All' ? styles.active : ''}`}
          onClick={() => handleClick('All')}
        >
          <FontAwesomeIcon icon={faEnvelope} className={styles.appealsBarIcon} />
          All Appeals
        </div>
        <div
          className={`${styles.appealsBarItem} ${statusFilter === 'New' ? styles.active : ''}`}
          onClick={() => handleClick('New')}
        >
          <FontAwesomeIcon icon={faBell} className={styles.appealsBarIcon} />
          New Appeals
        </div>
        <div
          className={`${styles.appealsBarItem} ${statusFilter === 'Pending' ? styles.active : ''}`}
          onClick={() => handleClick('Pending')}
        >
          <FontAwesomeIcon icon={faClock} className={styles.appealsBarIcon} />
          Pending Appeals
        </div>
        <div
          className={`${styles.appealsBarItem} ${statusFilter === 'Accepted' ? styles.active : ''}`}
          onClick={() => handleClick('Accepted')}
        >
          <FontAwesomeIcon icon={faCheckCircle} className={styles.appealsBarIcon} />
          Accepted Appeals
        </div>
        <div
          className={`${styles.appealsBarItem} ${statusFilter === 'Denied' ? styles.active : ''}`}
          onClick={() => handleClick('Denied')}
        >
          <FontAwesomeIcon icon={faTimesCircle} className={styles.appealsBarIcon} />
          Denied Appeals
        </div>
      </div>
    </div>
  );
};

export default AppealsBar;
