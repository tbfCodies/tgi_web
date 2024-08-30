import { getSession } from 'next-auth/react';
import Appeal from '../../../models/Appeal'; // Exempelmodell, justera enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { method } = req;
  const { appealId } = req.query;

  switch (method) {
    case 'GET':
      try {
        const appeal = await Appeal.findById(appealId);
        if (!appeal) return res.status(404).json({ message: 'Appeal not found' });
        res.status(200).json(appeal);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'PUT':
      if (!session || session.user.role !== 'Admin') {
        return res.status(403).json({ message: 'Access Denied' });
      }
      
      try {
        const updatedAppeal = await Appeal.findByIdAndUpdate(appealId, req.body, { new: true });
        res.status(200).json(updatedAppeal);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'DELETE':
      if (!session || session.user.role !== 'Admin') {
        return res.status(403).json({ message: 'Access Denied' });
      }

      try {
        await Appeal.findByIdAndDelete(appealId);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
