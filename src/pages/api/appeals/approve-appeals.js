import { getSession } from 'next-auth/react';
import Appeal from '../../../models/Appeal'; // Exempelmodell, justera enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Access Denied' });
  }

  const { appealId } = req.body;

  try {
    const approvedAppeal = await Appeal.findByIdAndUpdate(appealId, { status: 'Approved' }, { new: true });
    res.status(200).json(approvedAppeal);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
