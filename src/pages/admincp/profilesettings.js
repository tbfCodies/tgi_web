// src/pages/profilesettings.js
import React from 'react';
import AdminLayout from '../components/Admin/AdminLayout';

const AdminProfileSettings = () => {
  return (
    <AdminLayout showStatistics={false} showAppealsBar={false}>
      <h1>Admin Profile Settings</h1>
      {/* Här kommer inställningar att laddas */}
    </AdminLayout>
  );
};

export default AdminProfileSettings;
