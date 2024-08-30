import React, { useState, useEffect } from 'react';
import UserList from '../../components/Admin/UserList';
import UserForm from '../../components/Admin/UserForm';
import RoleList from '../../components/Admin/RolesList'; // Importera RoleList-komponent
import mockUsers from '../../data/mockUsers';
import styles from '../../assets/styles/Admin/UsersPage.module.css';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [status, setStatus] = useState('All');
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [activeTab, setActiveTab] = useState('users'); // Lägg till state för aktiv flik

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUserSave = (updatedUser) => {
    if (selectedUser) {
      // Uppdatera användare
      setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    } else {
      // Skapa ny användare
      setUsers([...users, { id: users.length + 1, ...updatedUser }]);
    }
    setSelectedUser(null);
  };

  const handleUserCancel = () => {
    setSelectedUser(null);
  };

  const handleUserDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleSelect = (selectedIds) => {
    setSelectedUserIds(selectedIds);
  };

  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (status === 'All' || user.status === status)
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.navigationButtons}>
        <button
          className={`${styles.navButton} ${activeTab === 'users' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button
          className={`${styles.navButton} ${activeTab === 'roles' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('roles')}
        >
          Roles
        </button>
      </div>
      <div className={styles.content}>
        {activeTab === 'users' && (
          <>
            <div className={styles.header}>
              <h1>Create a new user, customize users permissions, add roles to users, remove roles from users, add roles and customize permissions, and/or remove users from your application.</h1>
              <div className={styles.searchContainer}>
                <select className={styles.statusDropdown} value={status} onChange={handleStatusChange}>
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search users"
                  className={styles.searchInput}
                />
                <button className={styles.createButton} onClick={() => setSelectedUser({})}>Create User</button>
              </div>
            </div>
            {selectedUser ? (
              <UserForm user={selectedUser} onSave={handleUserSave} onCancel={handleUserCancel} />
            ) : (
              <UserList
                users={filteredUsers}
                onEdit={setSelectedUser}
                onDelete={handleUserDelete}
                onSelect={handleSelect}
              />
            )}
          </>
        )}
        {activeTab === 'roles' && (
          <RoleList />
        )}
      </div>
    </div>
  );
};

export default UsersPage;
