import { getSession } from 'next-auth/react';
import Ticket from '../../../models/Ticket';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  if (req.method === 'POST') {
    const { title, description, priority } = req.body;

    try {
      const ticket = new Ticket({
        userId: session.user.id,
        title,
        description,
        priority,
      });

      await ticket.save();
      res.status(201).json(ticket);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create ticket' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
