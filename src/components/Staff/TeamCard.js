// src/components/Staff/TeamCard.js
import React from 'react';
import styles from '../../assets/styles/Staff/StaffPage.module.css';

const TeamCard = ({ member }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.teamImageWrapper}>
          <img className={styles.teamMemberImage} src={member.image} alt={member.name} />
        </div>
        <p className={styles.name}>{member.name}</p>
        <p className={styles.position}>{member.position}</p>
        <p className={styles.featureText}>{member.bio}</p>
        <div className={styles.socialIcons}>
          {member.socialLinks.twitter && (
            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon-url" alt="Twitter" />
            </a>
          )}
          {member.socialLinks.facebook && (
            <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon-url" alt="Facebook" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
