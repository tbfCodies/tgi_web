// src/pages/_app.js
import '../assets/styles/global.css'; // Global styles
import { SessionProvider } from 'next-auth/react';
import AdminLayout from '../components/Admin/AdminLayout';
import FrontLayout from '../components/Layout/FrontLayout'; // Added this import
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for routing checks
import { AuthProvider } from '../providers/AuthProvider'; // Import AuthProvider

function MyApp({ Component, pageProps }) {
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const router = useRouter(); // Use router to access current route

  useEffect(() => {
    // Check if the current route is an admin route
    setIsAdminRoute(router.pathname.startsWith('/admincp'));
  }, [router.pathname]); // Dependency array includes router.pathname

  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider> {/* Wrap the application with AuthProvider */}
        {isAdminRoute ? (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        ) : (
          <FrontLayout>
            <Component {...pageProps} />
          </FrontLayout>
        )}
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
