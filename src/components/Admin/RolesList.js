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
    console.log('Fetching roles...');
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    console.log('Starting fetchRoles function');
    try {
      const response = await fetch('/api/roles');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched roles:', data);
      setRoles(data);
    } catch (error) {
      console.error('Failed to fetch roles:', error);
    }
    console.log('fetchRoles function completed');
  };

  const handleEdit = (role) => {
    console.log('handleEdit called with role:', role);
    setSelectedRole(role);
    setShowRoleForm(true);
  };

  const handleDelete = (roleId) => {
    console.log('handleDelete called with roleId:', roleId);
    // Implementera borttagning av roll här
  };

  return (
    <AdminLayout
      currentUser={{ name: 'Admin' }}
      showAppealsBar={false}
    >
      <div className={styles.header}>
        <h1>Manage Roles and Permissions</h1>
        <button 
          className={styles.createRoleButton} 
          onClick={() => {
            console.log('Create Role button clicked');
            setShowRoleForm(true);
          }}
        >
          Create Role
        </button>
      </div>
      <RoleList
        roles={roles}
        onEdit={(role) => {
          console.log('RoleList onEdit called with role:', role);
          handleEdit(role);
        }}
        onDelete={(roleId) => {
          console.log('RoleList onDelete called with roleId:', roleId);
          handleDelete(roleId);
        }}
      />
      {showRoleForm && (
        <RoleForm
          role={selectedRole}
          onSave={() => {
            console.log('RoleForm onSave called');
            setShowRoleForm(false);
            fetchRoles(); // Reload roles after save
          }}
          onCancel={() => {
            console.log('RoleForm onCancel called');
            setShowRoleForm(false);
          }}
        />
      )}
    </AdminLayout>
  );
};

export default RolesPage;
