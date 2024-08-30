import React from 'react';
import Link from 'next/link';
import styles from '../../assets/styles/Admin/Sidebar.module.css';

const Sidebar = ({ currentUser }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTitle}>STAFF</div>
      <ul>
        <li>
          <Link href="/admincp">Dashboard</Link>
        </li>
        <li>
          <Link href="/admincp/users">Users</Link>
        </li>
        <li>
          <Link href="/admincp/tickets">Tickets</Link>
        </li>
        <li>
          <Link href="/admincp/appeals">Appeals</Link>
        </li>
        <li>
          <Link href="/admincp/punishments">Punishments</Link>
        </li>
        {/* Lägg till fler länkar utan behörighetskontroll */}
        <li>
          <Link href="/admincp/reports">Reports</Link>
        </li>
        <li>
          <Link href="/admincp/logs">Logs</Link>
        </li>
        <li>
          <Link href="/admincp/settings">Settings</Link>
        </li>
        <li>
          <Link href="/admincp/api-keys">API Keys</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
