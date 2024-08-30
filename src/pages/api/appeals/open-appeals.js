import { getSession } from 'next-auth/react';
import Appeal from '../../../models/Appeal'; // Exempelmodell, justera enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { method } = req;

  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  switch (method) {
    case 'GET':
      try {
        const appeals = await Appeal.find({ status: 'Open' });
        res.status(200).json(appeals);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
