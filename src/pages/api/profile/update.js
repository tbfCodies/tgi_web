import { getSession } from 'next-auth/react';
import User from '../../../models/User';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  if (req.method === 'PUT') {
    const { updates } = req.body;

    try {
      const user = await User.findById(session.user.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      Object.assign(user, updates);
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
