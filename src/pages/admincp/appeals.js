import React, { useState } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import AppealsList from '../../components/Admin/AppealsList';
import styles from '../../assets/styles/Admin/AppealsPage.module.css';

const AppealsPage = () => {
  // Ändra 'all' till 'All' för att matcha statusarna som används i AppealsBar och AppealsList
  const [statusFilter, setStatusFilter] = useState('All');

  return (
    <AdminLayout showStatistics={false} showAppealsBar={true} statusFilter={statusFilter} onStatusChange={setStatusFilter}>
      <AppealsList statusFilter={statusFilter} />
    </AdminLayout>
  );
};

export default AppealsPage;
