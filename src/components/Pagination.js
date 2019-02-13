import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.css';
import PaginationItem from './PaginationItem';

class Pagination extends Component {
  componentDidMount() {
    const { currentPage } = this.props;
    this.gotoPage(currentPage);
  }

  render() {
    const { currentPage } = this.props;
    const totalPages = this.getTotalPages();

    return (
      <nav>
        <ul className={styles.pagination}>
          {totalPages.map((page, index) => 
            <PaginationItem
              key={index} 
              currentPage={currentPage}
              gotoPage={this.gotoPage}
              page={page} />
          )}
        </ul>
      </nav>
    );
  }

  gotoPage = page => {
    const { onPageChanged, perListItems } = this.props;
    const totalPages = this.getTotalPages();

    const paginationData = {
      currentPage: page,
      totalPages,
      perListItems
    };

    onPageChanged(paginationData)
  };

  getTotalPages = () => {
    const { totalItems, perListItems } = this.props
    const reminder = totalItems % perListItems;
    let pages = parseInt(totalItems / perListItems, 10);
    if (reminder) {
      pages = pages + 1;
    }
    const totalPages = Array.from({ length: pages }, (v, i) => i + 1);
    return totalPages;
  };
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  perListItems: PropTypes.number,
  onPageChanged: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
  perListItems: 3
};

export default Pagination;
