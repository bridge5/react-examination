import React, { PureComponent } from 'react';
// import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Pagination.css';

class PaginationItem extends PureComponent {
  render() {
    const { page, currentPage, gotoPage } = this.props;
    const isCurrentPage = currentPage === page;
    return (
      <li
        className={`${styles.page} ${isCurrentPage ? styles.current : ''}`}
        onClick={e => gotoPage(page)}>
        {page}
      </li>
    );
  }
}

PaginationItem.propTypes = {
  page: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  gotoPage: PropTypes.func.isRequired,
};

export default PaginationItem;
