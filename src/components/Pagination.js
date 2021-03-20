import React from "react";
import PropTypes from "prop-types";

function Pagination({ currentPage, changePage, size }) {
  const paginationCount = Math.ceil(size / 5);
  return (
    <div>
      {Array.from(Array(paginationCount).keys()).map(number => {
        const page = number + 1;
        return (
          <button
            onClick={() => changePage(page)}
            key={page}
            style= {{
              color: currentPage === page ? '#999' : '#000',
              margin: 2
            }}
          >
            {page}
          </button>
        )
      })}
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  changePage: PropTypes.func,
  size: PropTypes.number
};

export default Pagination;
