// src/pages/profile.js
import React from 'react';
import { getSession } from 'next-auth/react';
import EditProfileModal from '../components/User/EditProfileModal';
import styles from '../assets/styles/User/Profile.module.css';
import TextEditor from '../components/Shared/TextEditor';

const Profile = ({ session }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.profileContainer}>
      <header className={styles.header}>
        <div className={styles.coverPhoto}></div>
        <div className={styles.profileInfo}>
          <img src={session.user.image || '/default-profile-pic.svg'} className={styles.profileImage} />
          <h1 className={styles.userName}>{session.user.name}</h1>
          <p className={styles.userBio}>{session.user.bio || 'No bio available'}</p>
          <button className={styles.editProfileButton} onClick={handleOpenModal}>Edit Profile</button>
        </div>
      </header>
      <main className={styles.mainContent}>
        {/* Other profile content */}
        <footer className={styles.footer}>
          <button className={styles.logoutButton} onClick={() => signOut()}>Sign Out</button>
        </footer>
      </main>
      <EditProfileModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // Redirect to login page if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Profile;
