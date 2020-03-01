import React from 'react';
import styles from './Pagination.css';
const { pageContainer } = styles;
export default ({ currentPageIndex, changePage, totalPageIndex }) => {
  return (
    <div className={pageContainer}>
      {currentPageIndex <= 0 ? null : (
        <button className="btn btn-default" onClick={() => changePage(-1)}>
          &laquo;
        </button>
      )}
      <button className="btn btn-default">{currentPageIndex + 1}</button>
      {currentPageIndex === totalPageIndex ? null : (
        <button className="btn btn-default" onClick={() => changePage(1)}>
          &raquo;
        </button>
      )}
    </div>
  );
};
