import React from "react";

const SelectFilter = props => {
  const selectOnChange = e => {
    props.filterPlayer(e.target.value);
  }

  return (
    <div>
      <select onChange={selectOnChange}>
        <option value="ALL">ALL</option>
        <option value="SF">SF</option>
        <option value="PG">PG</option>
      </select>
    </div>
  );
}

export default SelectFilter;
