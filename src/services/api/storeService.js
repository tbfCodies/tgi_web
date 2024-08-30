import api from './api';

export const getProducts = async () => {
    try {
        const response = await api.get('/store/products');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createOrder = async (orderData) => {
    try {
        const response = await api.post('/store/orders', orderData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Andra funktioner relaterade till butiken
