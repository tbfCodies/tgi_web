import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import RoleList from '../../components/Admin/RolesList';
import RoleForm from '../../components/Admin/RolesForm';
import mockRoles from '../../data/mockRoles'; // Mockad data för roller
import styles from '../../assets/styles/Admin/RolesPage.module.css';

const RolesPage = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showRoleForm, setShowRoleForm] = useState(false);

  useEffect(() => {
    // Använd mockad data istället för API-anrop
    setRoles(mockRoles);
  }, []);

  const handleEdit = (role) => {
    setSelectedRole(role);
    setShowRoleForm(true);
  };

  const handleDelete = (roleId) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== roleId));
  };

  const handleSave = (savedRole) => {
    setRoles((prevRoles) => {
      const existingRoleIndex = prevRoles.findIndex((role) => role.id === savedRole.id);
      if (existingRoleIndex !== -1) {
        // Uppdatera befintlig roll
        const updatedRoles = [...prevRoles];
        updatedRoles[existingRoleIndex] = savedRole;
        return updatedRoles;
      } else {
        // Lägg till ny roll
        return [...prevRoles, savedRole];
      }
    });
    setShowRoleForm(false);
    setSelectedRole(null);
  };

  return (
    <AdminLayout
      currentUser={{ name: 'Admin' }}
      showAppealsBar={false}
    >
      <div className={styles.header}>
        <h1>Manage Roles and Permissions</h1>
        <button
          className={styles.createButton}
          onClick={() => {
            setSelectedRole(null);
            setShowRoleForm(true);
          }}
        >
          Create Role
        </button>
      </div>
      <RoleList
        roles={roles}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {showRoleForm && (
        <RoleForm
          role={selectedRole}
          onSave={handleSave}
          onCancel={() => setShowRoleForm(false)}
        />
      )}
    </AdminLayout>
  );
};

export default RolesPage;
