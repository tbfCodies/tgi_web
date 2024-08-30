// src/pages/StaffPage.js
import React from 'react';
import axios from 'axios';
import styles from '../assets/styles/Staff/StaffPage.module.css';

const StaffPage = ({ staffData }) => {
  const groupByRole = (data) => {
    return data.reduce((acc, member) => {
      (acc[member.position] = acc[member.position] || []).push(member);
      return acc;
    }, {});
  };

  // Gruppera personal efter roll
  const staffGroups = groupByRole(staffData);
  const roles = ['Manager', 'Administrator', 'Supervisor', 'Staff'];

  return (
    <div className={styles.container}>
      <h1 className={styles.teamHeadText}>Our Team</h1>

      <div className={styles.contentWrapper}>
        <div className={styles.staffContent}>
          {roles.map((role) => (
            <div key={role} className={styles.roleSection}>
              <h2 className={styles.roleHeading}>{role}</h2>
              <div className={styles.responsiveContainerBlock}>
                {(staffGroups[role] || []).map((member) => (
                  <div key={member.id} className={styles.cardContainer}>
                    <div className={styles.card}>
                      <div className={styles.teamImageWrapper}>
                        <img
                          className={styles.teamMemberImage}
                          src={member.imageUrl}
                          alt={member.name}
                        />
                      </div>
                      <p className={styles.name}>{member.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.applySection}>
          <div className={styles.applyBox}></div>
          <button className={styles.applyButton}>Apply</button>
        </div>
      </div>
    </div>
  );
};

// Använd axios för att ladda data från API:n med server-side rendering
export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/staff'); // Ändra URL till din API-route
    const staffData = response.data;

    return {
      props: {
        staffData,
      },
    };
  } catch (error) {
    console.error('Error fetching staff data:', error);

    return {
      props: {
        staffData: [], // Returnera tom array om det blir ett fel
      },
    };
  }
}

export default StaffPage;
