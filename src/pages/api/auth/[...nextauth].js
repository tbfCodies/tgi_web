// src/pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const hardcodedUsers = {
          Manager: {
            id: 1,
            name: 'Manager',
            email: 'manager@example.com',
            role: 'Manager',
            image: '/default-profile.png'
          },
          Administrator: {
            id: 2,
            name: 'Administrator',
            email: 'admin@example.com',
            role: 'Administrator',
            image: '/default-profile.png'
          },
          Supervisor: {
            id: 3,
            name: 'Supervisor',
            email: 'supervisor@example.com',
            role: 'Supervisor',
            image: '/default-profile.png'
          },
          Staff: {
            id: 4,
            name: 'Staff',
            email: 'staff@example.com',
            role: 'Staff',
            image: '/default-profile.png'
          },
          Member: {
            id: 5,
            name: 'Member',
            email: 'member@example.com',
            role: 'Member',
            image: '/default-profile.png'
          }
        };

        // Här kontrollerar vi om den inloggande användaren matchar någon i hardcodedUsers
        const user = Object.values(hardcodedUsers).find(
          user => user.email === credentials.email && credentials.password === 'password123'
        );

        if (user) {
          return user; // Returnera användarobjektet om inloggningen är giltig
        } else {
          throw new Error('Invalid credentials'); // Kasta ett fel om inloggningen är ogiltig
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt', // Använd JWT för sessionhantering
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Lägg till användarrollen i JWT token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role; // Lägg till användarrollen i sessionen
      return session;
    }
  },
});
