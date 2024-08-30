import React, { useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import StatisticsCard from '../../components/Admin/StatisticsCard';
import mockStatistics from '../../data/mockStatistics';
import { useAuth } from '../../auth/context/AuthContext'; // Importera useAuth
import styles from '../../assets/styles/Admin/Admin.module.css';

const AdminCP = () => {
  const { currentUser } = useAuth();

  // Logga ut currentUser för att kontrollera innehållet
  useEffect(() => {
    console.log("Current User:", currentUser);
  }, [currentUser]);

  if (!currentUser) return <p>Loading...</p>; // Visa en laddningsindikator medan sessionen hämtas

  return (
    <AdminLayout showStatistics={true} showAppealsBar={true}>
      <div className={styles.statisticsContainer}>
        {mockStatistics.map((stat, index) => (
          <StatisticsCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminCP;
