import { getSession } from 'next-auth/react';
import users from '../../../data/mockUsers'; // Anta att du har en mockdatafil för användare

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'Administrator') {
    return res.status(403).json({ error: 'Access denied' });
  }

  const { userId } = req.query;

  if (req.method === 'GET') {
    try {
      const user = users.find((u) => u.id === userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  } else if (req.method === 'PUT') {
    const { updates } = req.body;
    try {
      // Lägg till logik för att uppdatera en användare
      res.status(200).json({ message: 'User updated' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Lägg till logik för att ta bort en användare
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
