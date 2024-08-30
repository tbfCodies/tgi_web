// src/pages/account-settings.js
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from '../assets/styles/User/AccountSettings.module.css';

const AccountSettings = () => {
  const { data: session } = useSession();
  const [displayName, setDisplayName] = useState(session?.user.name || '');
  const [email, setEmail] = useState(session?.user.email || '');
  const [password, setPassword] = useState('');
  const [notificationSettings, setNotificationSettings] = useState(true); // Example setting

  const handleSave = () => {
    // Handle save logic here
    alert('Settings updated!');
  };

  return (
    <div className={styles.settingsContainer}>
      <h1>Account Settings</h1>
      <div className={styles.formGroup}>
        <label htmlFor="displayName">Display Name</label>
        <input
          id="displayName"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Change Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="notifications">Enable Notifications</label>
        <input
          id="notifications"
          type="checkbox"
          checked={notificationSettings}
          onChange={(e) => setNotificationSettings(e.target.checked)}
        />
      </div>
      <button className={styles.saveButton} onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default AccountSettings;
