import React, { createContext, useContext, useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { roles, permissions } from '../../data/rolesPermissions'; // Importera roller och behörigheter

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (session && session.user) {
        // Här antas att session.user har en roll. Se till att detta stämmer överens med din auth-provider.
        const user = {
          id: null, // Hantera detta beroende på din logik
          name: session.user.name,
          email: session.user.email,
          role: session.user.role || 'Member', // Default roll om ingen roll finns
          image: session.user.image || '/default-profile.png'
        };
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    };

    fetchSession();
  }, []);

  // Hantera inloggning via next-auth
  const login = async (email, password) => {
    // Här används next-auth för autentisering, så den här metoden är egentligen redundant
    // men kan vara användbar för teständamål.
    const user = Object.values(hardcodedUsers).find(
      user => user.email === email && password === 'password123'
    );

    if (user) {
      setCurrentUser(user);
    } else {
      alert('Invalid credentials');
    }
  };

  // Hantera utloggning via next-auth
  const logout = () => {
    setCurrentUser(null);
  };

  // Kontrollera om användaren har rätt behörighet
  const userHasPermission = (permission) => {
    if (!currentUser) return false;
    const userRole = currentUser.role;

    // Kontrollera om behörigheten är definierad
    if (!permissions[permission]) {
      console.warn(`Permission "${permission}" does not exist.`);
      return false;
    }

    // Kontrollera om användarens roll har den angivna behörigheten
    const rolePermissions = roles[userRole]?.permissions || [];
    return rolePermissions.includes(permission);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, userHasPermission }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
