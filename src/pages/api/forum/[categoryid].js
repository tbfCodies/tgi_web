import { getSession } from 'next-auth/react';
import ForumCategory from '../../../models/ForumCategory';

export default async function handler(req, res) {
  const session = await getSession({ req });

  const { categoryId } = req.query;

  if (req.method === 'GET') {
    try {
      const category = await ForumCategory.findById(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch category' });
    }
  } else if (req.method === 'PUT') {
    const { updates } = req.body;
    try {
      const category = await ForumCategory.findById(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      Object.assign(category, updates);
      await category.save();
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update category' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const category = await ForumCategory.findById(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      await category.remove();
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete category' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
