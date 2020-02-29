import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.css';

function Pagination(props) {
    const { size, actions, currentPage } = props;
    const pages = [];

    for (let i = 0; i < size; i++) {
        pages.push((<button className={currentPage===(i+1)?"active":""} key={i} onClick={() => actions.goPage(i + 1)}>{i + 1}</button>));
    }

    return (
        <div className={styles.wrapperPagination}>
            <button onClick={actions.prevPage}>{'<<Prev'}</button>
            {pages}
            <button onClick={actions.nextPage}>{'Next>>'}</button>
        </div>
    )
}

Pagination.propTypes = {
    size: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
}

export default Pagination;