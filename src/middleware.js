import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { roles } from './data/rolesPermissions'; // Import roles

export async function middleware(req) {
  // Hämta token från begäran
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  console.log('Token:', token); // Debugging
  console.log('Roles:', roles); // Debugging
  
  // Lista över skyddade rutter
  const protectedRoutes = ['/profile', '/account-settings', '/admincp'];

  // Funktion för att kontrollera om en användare har en specifik behörighet
  const hasPermission = (userRole, permission) => {
    const rolePermissions = roles[userRole]?.permissions || [];
    console.log(`Checking permission for role: ${userRole}, Permission: ${permission}`); // Debugging
    return rolePermissions.includes(permission);
  };

  // Kontrollera om begäran är skyddad
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    // Om användaren inte är inloggad, omdirigera till inloggningssidan
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    } 
    
    // Om du har tagit bort behörighetskontrollen, hoppa över den här kontrollen
    // else if (req.nextUrl.pathname === '/admincp' && !hasPermission(token.role, 'accessAdminCP')) {
    //   const url = req.nextUrl.clone();
    //   url.pathname = '/403'; // En sida för att visa åtkomst nekad eller förbjuden
    //   return NextResponse.redirect(url);
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/account-settings', '/admincp'], // Rutter som ska skyddas
};
