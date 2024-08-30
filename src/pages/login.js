// src/pages/login.js
import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import styles from '../assets/styles/Auth/LoginPage.module.css'; 

const LoginPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
