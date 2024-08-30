import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../auth/context/AuthContext'; // Importera useAuth
import styles from '../../assets/styles/Layout/Navbar.module.css';

const Navbar = () => {
  const { data: session, status } = useSession();
  const { currentUser } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/">News</Link></li>
        <li className={styles.navItem}><Link href="/Rules">Rules</Link></li>
        <li className={styles.navItem}><Link href="/Store">Store</Link></li>
        <li className={styles.navItem}><Link href="/Forums">Forums</Link></li>
        <li className={styles.navItem}><Link href="/StaffPage">Staff</Link></li>
        <li className={styles.navItem}><Link href="/Support">Support</Link></li>
      </ul>
      <div className={styles.profileSection}>
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : !session ? (
          <Link href="/login">
            <div className={styles.profileIcon}>
              <FontAwesomeIcon icon={faUserCircle} size="2x" />
            </div>
          </Link>
        ) : (
          <div className={styles.loggedInMenu} ref={dropdownRef}>
            <FontAwesomeIcon icon={faUserCircle} size="2x" className={styles.profileIcon} onClick={toggleDropdown} />
            <span className={styles.userName}>{session.user.name || 'Inloggad användare'}</span>
            <FontAwesomeIcon icon={faCaretDown} size="lg" className={styles.dropdownArrow} onClick={toggleDropdown} />
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/profile">Profile</Link>
                {/* Ta bort behörighetskontroll för AdminCP-länken */}
                <Link href="/admincp">AdminCP</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
