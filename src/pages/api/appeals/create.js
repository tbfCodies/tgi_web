import { getSession } from 'next-auth/react';
import Appeal from '../../../models/Appeal'; // Exempelmodell, justera enligt din modell

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  const { title, description } = req.body;

  try {
    const newAppeal = new Appeal({
      title,
      description,
      userId: session.user.id,
      status: 'Pending' // Standardstatus, justera enligt behov
    });

    await newAppeal.save();
    res.status(201).json(newAppeal);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
