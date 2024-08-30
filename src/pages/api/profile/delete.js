import { getSession } from 'next-auth/react';
import User from '../../../models/User';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  if (req.method === 'DELETE') {
    try {
      const user = await User.findById(session.user.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      await user.remove();
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
