// src/components/Admin/Pagination.js
import React from 'react';
import styles from '../../assets/styles/Admin/Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={currentPage === index + 1 ? styles.activePage : ''}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
