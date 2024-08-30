import { useState } from 'react';

const usePagination = (initialPage = 1, itemsPerPage = 10) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const paginate = (data) => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return data.slice(start, end);
    };

    const nextPage = () => setCurrentPage(prevPage => prevPage + 1);
    const prevPage = () => setCurrentPage(prevPage => prevPage - 1);

    return { currentPage, paginate, nextPage, prevPage };
};

export default usePagination;
