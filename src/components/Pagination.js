import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PaginationRc from 'rc-pagination';

import 'rc-pagination/assets/index.css'

const Pagination = ({ current = 1, total, pageSize = 5, onChange }) => {
  return (
    <PaginationRc
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
    />
  )
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
