// TopBar.js
import React, { useState, useRef, useEffect } from 'react';
import styles from '../../assets/styles/Admin/TopBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useAuth } from '../../auth/context/AuthContext';

const TopBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleNavigate = (path) => {
    router.push(path);
    setDropdownOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.topBarContainer}>
      <div className={styles.leftSection}>
        {/* Lägg till logotyper eller navigeringslänkar här */}
      </div>
      <div className={styles.rightSection}>
        <div className={styles.profileSection} ref={dropdownRef}>
          <FontAwesomeIcon 
            icon={faUserCircle} 
            size="2x" 
            className={styles.profileIcon} 
            onClick={handleDropdownToggle} 
          />
          <span className={styles.userName}>{currentUser?.name || 'Loading...'}</span>
          <FontAwesomeIcon 
            icon={faCaretDown} 
            size="lg" 
            className={styles.dropdownArrow} 
            onClick={handleDropdownToggle} 
          />
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <button onClick={() => handleNavigate('/adminprofile')}>Profile</button>
              <button onClick={() => handleNavigate('/adminprofilesettings')}>Settings</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
