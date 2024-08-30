import { getSession } from 'next-auth/react';
import UserSettings from '../../../models/UserSettings'; // Exempelmodell, justera enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const settings = await UserSettings.findOne({ userId: session.user.id });
        if (!settings) return res.status(404).json({ message: 'Settings not found' });
        res.status(200).json(settings);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'PUT':
      try {
        const updatedSettings = await UserSettings.findOneAndUpdate(
          { userId: session.user.id },
          req.body,
          { new: true, upsert: true }
        );
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
