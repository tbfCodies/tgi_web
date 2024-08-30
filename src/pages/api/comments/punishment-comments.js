import { getSession } from 'next-auth/react';
import Punishment from '../../../models/Punishment'; // Anpassa enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { method } = req;
  const { punishmentId } = req.query;

  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    switch (method) {
      case 'POST':
        // Lägg till en kommentar på ett straff
        const { comment } = req.body;
        const punishment = await Punishment.findById(punishmentId);
        if (!punishment) return res.status(404).json({ message: 'Punishment not found' });

        // Kontrollera behörigheter för att kommentera
        if (session.user.role !== 'Admin' && punishment.userId !== session.user.id) {
          return res.status(403).json({ message: 'Access Denied' });
        }

        punishment.comments.push({ author: session.user.id, comment });
        await punishment.save();
        res.status(200).json(punishment);
        break;

      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
