// src/pages/support/my-tickets.js
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      fetch('/api/tickets/user-tickets')
        .then(res => res.json())
        .then(data => setTickets(data));
    }
  }, [session]);

  if (!session) {
    return <p>You need to be logged in to view your tickets.</p>;
  }

  return (
    <div>
      <h1>My Tickets</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket._id}>
            <h2>{ticket.title}</h2>
            <p>Status: {ticket.status}</p>
            <p>{ticket.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTickets;
