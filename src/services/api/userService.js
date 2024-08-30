// src/services/api/userService.js
import api from '../api';

export const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      // Kontrollera att data är en array
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error('Data från servern är inte en array:', response.data);
        throw new Error('Data är inte en array');
      }
    } catch (error) {
      console.error('Misslyckades med att hämta användare:', error);
      throw error;
    }
  };
  
export const addUser = async (userData) => {
    try {
        const response = await api.post('/users', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await api.delete(`/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getUserProfile = async (userId) => {
    try {
        const response = await api.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateUserProfile = async (userId, profileData) => {
    try {
        const response = await api.put(`/users/${userId}`, profileData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


// Andra funktioner relaterade till användare
