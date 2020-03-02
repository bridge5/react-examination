import React from 'react';

export default ({ idx, pages, list, onSet }) => {
  const onPre = () => {
    if (idx === 1) {
      return;
    } else {
      const arr = [...list].splice((idx - 2) * 5, 5);
      onSet(idx - 1, arr);
    }
  };

  const onItemClick = q => {
    if (idx === q) {
      return;
    } else {
      const arr = [...list].splice((q - 1) * 5, 5);
      onSet(q, arr);
    }
  };

  const onNext = () => {
    if (idx === pages.length) {
      return;
    } else {
      const arr = [...list].splice(idx * 5, 5);
      onSet(idx + 1, arr);
    }
  };

  return (
    <ul className='pagination'>
      <li onClick={() => onPre()}>
        <a href='#' aria-label='Previous'>
          <span aria-hidden='true'>&laquo;</span>
        </a>
      </li>
      {pages.map(len => {
        return (
          <li onClick={() => onItemClick(len)} key={len}>
            <a href='#'>{len}</a>
          </li>
        );
      })}
      <li onClick={() => onNext()}>
        <a href='#' aria-label='Next'>
          <span aria-hidden='true'>&raquo;</span>
        </a>
      </li>
    </ul>
  );
};
