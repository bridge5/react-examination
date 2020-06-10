import React, {useMemo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./index.css";

const Pagination = React.memo(({ total, onChange, currentPage }) => {
  const paginationItems = useMemo(() => {
    const length = Math.ceil(total / 5);

    return new Array(length).fill("").map((_, index) => {
      const pageNumber = index + 1;

      return (
        <li
          key={pageNumber}
          className={classnames("pagination-item", {
            "pagination-item--active": pageNumber === currentPage,
          })}
          onClick={() => onChange(pageNumber)}
        >
          {pageNumber}
        </li>
      );
    });
  }, [total, currentPage, onChange]);

  return <div className="pagination">{paginationItems}</div>;
});

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
