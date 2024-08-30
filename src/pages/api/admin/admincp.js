// src/pages/api/admincp.js
import { getToken } from 'next-auth/jwt';
import roles from '../../../data/mockRoles';

export default async function handler(req, res) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Kontrollera om token finns och om användaren har rätt behörighet
  if (!token || !roles[token.role] || !roles[token.role].permissions.includes('accessAdminCP')) {
    return res.status(403).json({ message: 'Access Denied' });
  }

  // Hantera logik för admin-panelen här
  res.status(200).json({ message: 'Welcome to the admin panel' });
}
