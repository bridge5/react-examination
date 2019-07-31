import React, { useState, useEffect } from 'react';
import styles from './Paginator.scss';
import { Range, Set } from 'immutable';
import classnames from 'classnames';

export function buildPageButtons(currentPage, totalPage) {
  let range;
  if (totalPage <= 5 || currentPage <= 3) {
    range = Range(1, Set([totalPage, 5]).min() + 1);
  } else if (currentPage > 3 && totalPage - currentPage > 2) {
    range = Range(currentPage - 2, currentPage + 3);
  } else {
    range = Range(totalPage - 4, totalPage + 1);
  }
  const buttons = range
    .map(pageIndex => ({ label: String(pageIndex), value: pageIndex }))
    .toList()
    .asMutable();
  if (currentPage === 1) {
    buttons
      .rest()
      .toList()
      .unshift({ label: '1', value: 1 });
  } else if (currentPage === totalPage) {
    buttons
      .butLast()
      .toList()
      .push({ label: totalPage.toString(), value: totalPage });
  }
  return buttons.asImmutable();
}

export const Paginator = ({ cb, totalPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageButton, setPageButton] = useState(buildPageButtons(1, 20));
  console.log(pageButton)

  const onClickPage = pageNumber => {
    setCurrentPage(pageNumber);
    cb && cb();
  };

  useEffect(() => {
    if(currentPage > pageButton.get(4).value || currentPage < pageButton.get(0).value) {
      setPageButton(buildPageButtons(currentPage, 20))
    }

  }, [currentPage]);


  return (
    <div className={styles.wrap}>
      {currentPage > 1 && (
        <li
          onClick={() => onClickPage(currentPage - 1)}
          className={`${styles.btn}`}
        >
          Prev
        </li>
      )}
      {pageButton.map((v, i) => (
        <li
          onClick={() => onClickPage(v.value)}
          key={v.value}
          className={`${styles.btn} ${classnames({
            active: currentPage === v.value,
          })}`}
        >
          {v.label}
        </li>
      ))}
      {currentPage < 20 && (
        <li
          onClick={() => onClickPage(currentPage + 1)}
          className={`${styles.btn}`}
        >
          Prev
        </li>
      )}
    </div>
  );
};
