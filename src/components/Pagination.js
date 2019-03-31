import React, { Component } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';

const defaultProps = {
  initialPage: 1
};

const maxPageRange = 14;

class Pagination extends Component {

  state = {
    pager: {},
    currentPage: 1
  }

  componentDidMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.state.currentPage);
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.items && prevProps.pageOfItemSize && prevProps.pageOfItemSize !== this.props.pageOfItemSize) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const differentItems = this.props.items !== prevProps.items;
    const differentPageSize = this.props.pageOfItemSize !== prevProps.pageOfItemSize;

    if (differentItems || differentPageSize || snapshot) {
      this.setPage(this.state.currentPage);
    }
    // if (this.props.items !== prevProps.items || (prevProps.pageOfItemSize && this.props.pageOfItemSize !== prevProps.pageOfItemSize) || snapshot) {
    //     this.setPage(this.state.currentPage);
    // }
  }

  setPage(page) {
    var items = this.props.items;
    var pager = this.state.pager;
    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, this.props.pageOfItemSize);

    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager: pager });
    this.setState({ currentPage: pager.currentPage});
    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || maxPageRange;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    if (currentPage > totalPages) {
      currentPage = totalPages;
      this.setState({currentPage: totalPages});
    }

    var startPage, endPage;
    if (totalPages <= maxPageRange) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // if (currentPage <= maxPageRange - 1) {
      //     startPage = 1;
      //     endPage = maxPageRange;
      // } else {
      //     startPage = totalPages - (maxPageRange - 1);
      //     endPage = totalPages;
      // }
      if (currentPage <= (Math.floor(maxPageRange/2) + 1)) {
        startPage = 1;
        endPage = maxPageRange;
      } else if (currentPage + (maxPageRange - (Math.floor(maxPageRange/2) + 1)) >= totalPages) {
        startPage = totalPages - (maxPageRange - 1);
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxPageRange/2);
        endPage = currentPage + (maxPageRange - (Math.floor(maxPageRange/2) + 1));
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {
    var pager = this.state.pager;
    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <ul className="pagination">
        {pager.pages.map((page, index) =>
          <li key={index} className={pager.currentPage === page ? 'active' : page > maxPageRange ? 'exceed' : ''}>
            <span onClick={() => this.setPage(page)}>{page}</span>
          </li>
        )}
      </ul>
    );
  }
}

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number
};

Pagination.defaultProps = defaultProps;

export default Pagination;