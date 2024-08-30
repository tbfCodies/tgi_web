// src/components/Admin/AdminLayout.js
import React, { memo } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import AppealsBar from './AppealsBar';
import styles from '../../assets/styles/Admin/Admin.module.css';

const AdminLayout = memo(({ children, showAppealsBar, statusFilter, onStatusChange, currentUser }) => {
  console.log('AdminLayout Rendered');
  return (
    <div className={styles.container}>
      <Sidebar currentUser={currentUser} />
      <div className={styles.mainWrapper}>
        <TopBar /> {/* Render TopBar here */}
        {showAppealsBar && <AppealsBar statusFilter={statusFilter} onStatusChange={onStatusChange} />}
        <main className={showAppealsBar ? styles.mainContentWithAppeals : styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
});

export default AdminLayout;
