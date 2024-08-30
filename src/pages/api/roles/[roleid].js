// src/pages/api/roles/[rikeud].js

import { getSession } from 'next-auth/react';
import roles from '../../../data/mockRoles';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'Administrator') {
    return res.status(403).json({ error: 'Access denied' });
  }

  const { roleId } = req.query;

  if (req.method === 'GET') {
    try {
      const role = roles[roleId];
      if (!role) {
        return res.status(404).json({ error: 'Role not found' });
      }
      res.status(200).json(role);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch role' });
    }
  } else if (req.method === 'PUT') {
    const { updates } = req.body;
    try {
      // Implement role update logic
      res.status(200).json({ message: 'Role updated' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update role' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Implement role deletion logic
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete role' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
