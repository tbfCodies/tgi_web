import React, { useState } from 'react';
import styles from '../../assets/styles/Auth/LoginForm.module.css';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Attempting sign in');
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl: `${window.location.origin}/`, // Redirect to the homepage
      });

      console.log('Sign in result:', result);

      if (result.error) {
        alert(result.error);
      } else if (result.url) {
        window.location.href = result.url;
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
