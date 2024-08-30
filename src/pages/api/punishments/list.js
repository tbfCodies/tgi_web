import { getSession } from 'next-auth/react';
import Punishment from '../../../models/Punishment'; // Anpassa enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { method } = req;

  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    switch (method) {
      case 'GET':
        // Kontrollera behörigheter för att se alla straff
        if (session.user.role !== 'Admin') {
          return res.status(403).json({ message: 'Access Denied' });
        }

        const punishments = await Punishment.find({});
        res.status(200).json(punishments);
        break;

      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
