import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/Admin/RolesForm.module.css';

const RoleForm = ({ role, onSave, onCancel }) => {
  const [roleName, setRoleName] = useState('');

  useEffect(() => {
    if (role) {
      setRoleName(role.name);
    }
  }, [role]);

  const handleSave = () => {
    if (roleName.trim() === '') {
      alert('Role name cannot be empty.');
      return;
    }

    const updatedRole = role
      ? { ...role, name: roleName }
      : { id: Date.now(), name: roleName }; // Ny roll om ingen roll är vald

    onSave(updatedRole);
  };

  return (
    <div className={styles.roleFormContainer}>
      <div className={styles.formGroup}>
        <label htmlFor="roleName">Role Name</label>
        <input
          type="text"
          id="roleName"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          className={styles.inputField}
        />
      </div>
      <div className={styles.formActions}>
        <button onClick={handleSave} className={styles.saveButton}>
          Save
        </button>
        <button onClick={onCancel} className={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RoleForm;
