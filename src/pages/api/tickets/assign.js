import { getSession } from 'next-auth/react';
import Ticket from '../../../models/Ticket'; // Exempelmodell, justera enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Access Denied' });
  }

  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { ticketId, userId } = req.body;
        const ticket = await Ticket.findById(ticketId);
        if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
        
        ticket.assignedTo = userId;
        await ticket.save();
        
        res.status(200).json(ticket);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
