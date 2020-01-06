import React from "react";
import PropTypes from "prop-types";

function Pagination({ page, setPage, players }) {
  const paginationCount = Math.ceil(players.length / 5);
  return (
    <div>
      {Array.from(Array(paginationCount).keys()).map(number => (
        <button
          onClick={() => setPage(number + 1)}
          type="button"
          key={number + 1}
        >
          {number + 1}
        </button>
      ))}
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  players: PropTypes.array
};

export default Pagination;
