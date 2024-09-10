// src/pages/users.js
import React, { useState } from 'react';
import UserList from '../../components/Admin/UserList';
import RoleList from '../../components/Admin/RolesList'; // Om du har en sådan komponent
import styles from '../../assets/styles/Admin/UsersPage.module.css';
import mockUsers from '../../data/mockUsers'; // Mock data, om du har det

const UsersPage = () => {
  const [activeView, setActiveView] = useState('users'); // Default view
  const [users, setUsers] = useState(mockUsers); // Mock data or your user data
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  const handleSelect = (selectedIds) => {
    setSelectedUserIds(selectedIds);
  };

  const handleEdit = (user) => {
    // Handle edit
  };

  const handleDelete = (userId) => {
    // Handle delete
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigationButtons}>
        <button
          className={`${styles.navButton} ${activeView === 'users' ? styles.activeTab : ''}`}
          onClick={() => setActiveView('users')}
        >
          Users
        </button>
        <button
          className={`${styles.navButton} ${activeView === 'roles' ? styles.activeTab : ''}`}
          onClick={() => setActiveView('roles')}
        >
          Roles
        </button>
      </div>
      <div className={styles.content}>
        {activeView === 'users' ? (
          <>
            <div className={styles.header}>
              <h1>Manage Users</h1>
              {/* Your search and user creation components here */}
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Search users"
                  className={styles.searchInput}
                />
                <button className={styles.createButton}>
                  Create User
                </button>
              </div>
            </div>
            <UserList 
              users={users} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
              onSelect={handleSelect} 
            />
          </>
        ) : (
          <>
            <div className={styles.header}>
              <h1>Manage Roles</h1>
            </div>
            <RoleList />
          </>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
