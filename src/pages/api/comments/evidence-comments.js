import { getSession } from 'next-auth/react';
import EvidenceComment from '../../../models/EvidenceComment'; // Exempelmodell, justera enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const newComment = new EvidenceComment({
          ...req.body,
          author: session.user.id
        });
        await newComment.save();
        res.status(201).json(newComment);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'GET':
      try {
        const comments = await EvidenceComment.find({ evidenceId: req.query.evidenceId });
        res.status(200).json(comments);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
