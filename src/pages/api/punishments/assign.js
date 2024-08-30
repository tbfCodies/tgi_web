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
      case 'POST':
        // Kontrollera behörigheter för att tilldela straff
        if (session.user.role !== 'Admin') {
          return res.status(403).json({ message: 'Access Denied' });
        }

        const { userId, type, reason, details } = req.body;
        const newPunishment = new Punishment({
          userId,
          type,
          reason,
          details,
          assignedBy: session.user.id,
        });

        await newPunishment.save();
        res.status(201).json(newPunishment);
        break;

      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
