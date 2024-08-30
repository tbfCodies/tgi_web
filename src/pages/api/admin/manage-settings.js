import { getSession } from 'next-auth/react';
import Settings from '../../../models/Settings'; // Exempelmodell, justera enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Access Denied' });
  }

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const settings = await Settings.find({});
        res.status(200).json(settings);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'PUT':
      try {
        const updatedSettings = await Settings.findByIdAndUpdate(req.body.id, req.body, { new: true });
        res.status(200).json(updatedSettings);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
