// components/Navigation.js
import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css'; // Din CSS-modul för navigation

const Navigation = () => {
  return (
    <div className={styles.navigationButtons}>
      <Link href="/users">
        <a className={styles.navButton}>Users</a>
      </Link>
      <Link href="/roles">
        <a className={styles.navButton}>Roles</a>
      </Link>
    </div>
  );
};

export default Navigation;
