import { getSession } from 'next-auth/react';
import ForumCategory from '../../../models/ForumCategory'; // Exempelmodell, justera enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { method } = req;
  const { categoryid } = req.query;

  switch (method) {
    case 'GET':
      try {
        const category = await ForumCategory.findById(categoryid);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(category);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'PUT':
      try {
        const updatedCategory = await ForumCategory.findByIdAndUpdate(categoryid, req.body, { new: true });
        res.status(200).json(updatedCategory);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'DELETE':
      try {
        await ForumCategory.findByIdAndDelete(categoryid);
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
