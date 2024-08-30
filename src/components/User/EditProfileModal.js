// src/components/User/EditProfileModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import TextEditor from '../Shared/TextEditor';
import styles from '../../assets/styles/User/EditProfileModal.module.css';

Modal.setAppElement('#__next'); // Set the app root element for accessibility

const EditProfileModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    aboutMe: '',
    gender: '',
    location: '',
    interests: '',
    website: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEditorChange = (content) => {
    setFormData({
      ...formData,
      aboutMe: content
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Data:', formData);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Profile"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>
            About Me:
            <TextEditor value={formData.aboutMe} onChange={handleEditorChange} />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            Contact Methods Website URL:
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Not telling">Not telling</option>
            </select>
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            Interests:
            <input
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.buttonsContainer}>
          <button type="submit" className={styles.submitButton}>Save</button>
          <button type="button" onClick={onRequestClose} className={styles.cancelButton}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProfileModal;
