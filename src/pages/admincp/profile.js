// src/pages/profile.js
import React from 'react';
import AdminLayout from '../components/Admin/AdminLayout';

const AdminProfile = () => {
  return (
    <AdminLayout showStatistics={false} showAppealsBar={false}>
      <h1>Admin Profile</h1>
      {/* Här kommer profilinformation att laddas */}
    </AdminLayout>
  );
};

export default AdminProfile;
