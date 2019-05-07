import React from 'react';

const PlayerPagination = props => {
  const onClickPage = (pageNumber) => {
    props.selectPageNum(pageNumber)
  }

  return(
    <>
      {[...new Array(props.pageCount)].map((_, idx) => {
          return <button key={idx} onClick={() => onClickPage(idx+1) } >{ idx + 1 }</button>
      })}
    </>
  )
}

export default PlayerPagination;
