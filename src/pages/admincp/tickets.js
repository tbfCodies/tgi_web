import { useEffect, useState } from 'react';

const AdminTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch tickets without checking for permissions
    fetch('/api/admin/tickets')
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  return (
    <div>
      <h1>All Tickets</h1>
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

export default AdminTickets;
