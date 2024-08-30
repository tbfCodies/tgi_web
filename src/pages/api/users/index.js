import { getSession } from 'next-auth/react';
import users from '../../../data/mockUsers'; // Anta att du har en mockdatafil för användare

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'Administrator') {
    return res.status(403).json({ error: 'Access denied' });
  }

  if (req.method === 'GET') {
    try {
      res.status(200).json(users); // Returnerar alla användare
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  } else if (req.method === 'POST') {
    const { newUser } = req.body;
    try {
      // Lägg till logik för att lägga till en ny användare
      res.status(201).json({ message: 'User created' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
