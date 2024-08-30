import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/Admin/UserForm.module.css';

const UserForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState(user || {
    name: '',
    email: '',
    profilePicture: '',
    access: '',
    lastActive: ''
  });

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Profile Picture URL:</label>
        <input
          type="text"
          name="profilePicture"
          value={formData.profilePicture}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Access:</label>
        <input
          type="text"
          name="access"
          value={formData.access}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Active:</label>
        <input
          type="text"
          name="lastActive"
          value={formData.lastActive}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" className={styles.saveButton}>Save</button>
        <button type="button" className={styles.cancelButton} onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default UserForm;
