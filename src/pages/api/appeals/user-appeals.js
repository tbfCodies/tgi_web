import { getSession } from 'next-auth/react';
import Appeal from '../../../models/Appeal'; // Justera enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { method } = req;

  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    switch (method) {
      case 'GET':
        // För att hämta alla appeals för den inloggade användaren
        const appeals = await Appeal.find({ userId: session.user.id });
        res.status(200).json(appeals);
        break;

      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
