import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import RoleList from './RolesList';
import RoleForm from './RolesForm';
import styles from '../../assets/styles/Admin/RolesPage.module.css';

const RolesPage = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showRoleForm, setShowRoleForm] = useState(false);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await fetch('/api/roles');
      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.error('Failed to fetch roles:', error);
    }
  };

  const handleEdit = (role) => {
    setSelectedRole(role);
    setShowRoleForm(true);
  };

  const handleDelete = (roleId) => {
    // Implementera borttagning av roll här
  };

  return (
    <AdminLayout
      currentUser={{ name: 'Admin' }}
      showAppealsBar={false}
    >
      <div className={styles.header}>
        <h1>Manage Roles and Permissions</h1>
        <button className={styles.createRoleButton} onClick={() => setShowRoleForm(true)}>Create Role</button>
      </div>
      <RoleList
        roles={roles}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {showRoleForm && (
        <RoleForm
          role={selectedRole}
          onSave={() => {
            setShowRoleForm(false);
            fetchRoles(); // Reload roles after save
          }}
          onCancel={() => setShowRoleForm(false)}
        />
      )}
    </AdminLayout>
  );
};

export default RolesPage;
