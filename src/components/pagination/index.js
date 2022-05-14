import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { changeCurrentPage } from '../../actions/PlayersActions';

import classnames from 'classnames';
import { PaginationWrapper } from "./style";

//条数
const PAGE_SIZE = 5;

const Pagination = memo((props) => {
  const { total } = props;
  //页码
  const page = Math.ceil(total / PAGE_SIZE);

  const dispatch = useDispatch();
  const { currentPage } = useSelector(state => ({
    currentPage: state.playerlist.currentPage
  }), shallowEqual);

  function handleCurrentPage(page, tag) {
    dispatch(changeCurrentPage(page, tag));
  };

  return (
    <PaginationWrapper>
      <button 
        className="prev" 
        onClick={e => handleCurrentPage(-1)}
        disabled={currentPage === 0}
      >
        &lt; prev
      </button>

      {
        Array(page).fill(0).map((_, index) => {
          return <button 
                    key={index}
                    className={classnames('page', {
                      'active': currentPage === index
                    })}
                    onClick={e => handleCurrentPage(index, 'page')}
                  >
                    {index + 1}
                  </button>
        })
      }

      <button 
        className="next"
        onClick={e => handleCurrentPage(1)}
        disabled={(currentPage + 1) * PAGE_SIZE >= total}
      >
        next &gt;
      </button>
    </PaginationWrapper>
  )
});

export default Pagination;