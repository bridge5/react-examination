import React, {useCallback} from 'react';

import './SelectOptions.css';

const SelectOptions = (props) => {
  const handleSelect = useCallback((postion) => {
    props.onSelect(postion);
  }, [props])

  return (
    <div className="sp-container">
      <button className="sp-button" onClick={() => handleSelect()}>ALL</button>
      <button className="sp-button" onClick={() => handleSelect('SF')}>SF</button>
      <button className="sp-button" onClick={() => handleSelect('PF')}>PF</button>
    </div>
  );
}

export default SelectOptions;
