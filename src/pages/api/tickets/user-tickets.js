import { getSession } from 'next-auth/react';
import Ticket from '../../../models/Ticket';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  if (req.method === 'GET') {
    try {
      const tickets = await Ticket.find({ userId: session.user.id });
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tickets' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
