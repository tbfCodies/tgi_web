// src/pages/support/create-ticket.js
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const CreateTicket = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/tickets/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, priority }),
    });

    if (res.ok) {
      router.push('/support/my-tickets');
    }
  };

  if (!session) {
    return <p>You need to be logged in to create a ticket.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Describe your issue"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default CreateTicket;
