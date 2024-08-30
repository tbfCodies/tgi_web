const apiConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
};

export default apiConfig;
