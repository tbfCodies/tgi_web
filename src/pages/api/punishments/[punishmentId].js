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
      case 'GET':
        const punishment = await Punishment.findById(punishmentId);
        if (!punishment) return res.status(404).json({ message: 'Punishment not found' });

        // Kontrollera behörigheter för att visa straff
        if (session.user.role !== 'Admin' && punishment.userId !== session.user.id) {
          return res.status(403).json({ message: 'Access Denied' });
        }

        res.status(200).json(punishment);
        break;

      case 'PUT':
        // Kontrollera behörigheter för att uppdatera straff
        if (session.user.role !== 'Admin') {
          return res.status(403).json({ message: 'Access Denied' });
        }

        const updatedPunishment = await Punishment.findByIdAndUpdate(punishmentId, req.body, { new: true });
        res.status(200).json(updatedPunishment);
        break;

      case 'DELETE':
        // Kontrollera behörigheter för att ta bort straff
        if (session.user.role !== 'Admin') {
          return res.status(403).json({ message: 'Access Denied' });
        }

        await Punishment.findByIdAndDelete(punishmentId);
        res.status(204).end();
        break;

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
