import { getSession } from 'next-auth/react';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Access Denied' });
  }

  const { method } = req;
  const { productId } = req.query;

  switch (method) {
    case 'GET':
      try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;
    
    case 'PUT':
      try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(updatedProduct);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'DELETE':
      try {
        await Product.findByIdAndDelete(productId);
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
