import '../assets/styles/global.css'; // Globala stilar
import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from '../auth/context/AuthContext'; // Importera AuthProvider
import AdminLayout from '../components/Admin/AdminLayout';
import FrontLayout from '../components/Layout/FrontLayout'; // Lägg till detta
import { useRouter } from 'next/router'; // Importera useRouter

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Kontrollera om du är på en admin-sida
  const isAdminRoute = router.pathname.startsWith('/admincp');

  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider>
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
