// src/pages/api/roles/index.js

import { getSession } from 'next-auth/react';
import roles from '../../../data/mockRoles';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'Administrator') {
    return res.status(403).json({ error: 'Access denied' });
  }

  if (req.method === 'GET') {
    try {
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch roles' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
