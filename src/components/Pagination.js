import React, { Component } from 'react';
import styles from './Pagination.css';

class Pagination extends Component {
  render() {
    const { paginationPage, clickPage } = this.props;
    return (
      <div className={styles.paginationBtn}>
        {paginationPage.map((players, idx) => (
          <button onClick={() => clickPage(idx)} key={idx}> {idx+1} </button>
        ))}
      </div>
    );
  }
}

Pagination.defaultProps = {
  paginationPage: [[{}]],
};

export default Pagination;
