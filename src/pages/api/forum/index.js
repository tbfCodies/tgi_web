import { getSession } from 'next-auth/react';
import ForumCategory from '../../../models/ForumCategory';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === 'GET') {
    try {
      const categories = await ForumCategory.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch forum categories' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
