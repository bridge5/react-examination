import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./index.css";

const Pagination = React.memo(({ type, onChange }) => {
  const paginationItems = useMemo(() => {
    return [
      {
        label: "selectAll",
        value: "",
      },
      {
        label: "SF",
        value: "SF",
      },
      {
        label: "PF",
        value: "PF",
      },
      {
        label: "PG",
        value: "PG",
      },
      {
        label: "SG",
        value: "SG",
      },
    ].map((item) => {
      return (
        <li
          key={item.value}
          className={classnames("pagination-item", {
            "pagination-item--active": item.value === type,
          })}
          onClick={() => {
            onChange(item.value);
          }}
        >
          {item.label}
        </li>
      );
    });
  }, [type, onChange]);

  return <div className="pagination">{paginationItems}</div>;
});

Pagination.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
