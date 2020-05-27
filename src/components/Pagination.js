
import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
  handleClick = e => {
    const pageNum = e.target.dataset.page
    if (pageNum) {
      this.props.onselected(pageNum)
    }
  }
  render() {
    const {pageCounts, currentPage} = this.props
    const pageList = [...Array(pageCounts)]
    return (
      <ul className='pagination'>
        {pageList.map((item, index) => {
          let page = index + 1
          return (
            <li
              key={index}
              data-page={page}
              onClick={this.handleClick}
              className={currentPage === page ? 'selected': ''}
            >
              {page}
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Pagination;
