import React, {useMemo, useCallback} from 'react';

import './Pagination.css';

const Pagination = ({ page, pageSize, total, onChange }) => {

  const handleChange = useCallback((curPage)=>{
    onChange(curPage, pageSize)
  }, [onChange, pageSize])

  const lis = useMemo(() => {
    const arr = Array.from({length: Math.ceil(total / pageSize)}).map((item, index) => index + 1);
    return arr.map(item => (
      <li className={`pg-page ${item === page ? 'active' : ''}`} onClick={() => handleChange(item)} key={item}>
        <button>{item}</button>
      </li>
    ))
  }, [page, pageSize, total, handleChange]);
  
  return (
    <ul className="pagination">
      {lis}
    </ul>
  )
};

export default Pagination;
