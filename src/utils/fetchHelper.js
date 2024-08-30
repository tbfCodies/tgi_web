export const fetchData = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

export const postData = async (url, data) => {
    return fetchData(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};
