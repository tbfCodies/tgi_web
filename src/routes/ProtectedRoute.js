// src/components/ProtectedRoute.js
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ProtectedRoute = ({ children, roles = [] }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session || (roles.length && !roles.includes(session.user.role))) {
      router.push('/login');
    }
  }, [session, status, roles, router]);

  if (status === 'loading' || !session) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
