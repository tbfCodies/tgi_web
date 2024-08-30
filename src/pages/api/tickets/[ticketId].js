import { getSession } from 'next-auth/react';
import Ticket from '../../../models/Ticket';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const { ticketId } = req.query;

  switch (req.method) {
    case 'GET':
      // Hämta en specifik biljett
      try {
        const ticket = await Ticket.findById(ticketId);
        if (!ticket) {
          return res.status(404).json({ error: 'Ticket not found' });
        }
        res.status(200).json(ticket);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch ticket' });
      }
      break;

    case 'PUT':
      // Uppdatera en specifik biljett
      if (session.user.role !== 'Administrator' && session.user.role !== 'Manager') {
        return res.status(403).json({ error: 'Access denied' });
      }
      const { title, description, priority } = req.body;
      try {
        const ticket = await Ticket.findById(ticketId);
        if (!ticket) {
          return res.status(404).json({ error: 'Ticket not found' });
        }

        ticket.title = title || ticket.title;
        ticket.description = description || ticket.description;
        ticket.priority = priority || ticket.priority;

        await ticket.save();
        res.status(200).json(ticket);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update ticket' });
      }
      break;

    case 'DELETE':
      // Ta bort en specifik biljett
      if (session.user.role !== 'Administrator') {
        return res.status(403).json({ error: 'Access denied' });
      }
      try {
        const ticket = await Ticket.findByIdAndDelete(ticketId);
        if (!ticket) {
          return res.status(404).json({ error: 'Ticket not found' });
        }
        res.status(200).json({ message: 'Ticket deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete ticket' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
