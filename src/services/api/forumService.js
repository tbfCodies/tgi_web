import api from './api';

export const getCategories = async () => {
    try {
        const response = await api.get('/forum/categories');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getPostsByCategory = async (categoryId) => {
    try {
        const response = await api.get(`/forum/${categoryId}/posts`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Andra funktioner relaterade till forum
