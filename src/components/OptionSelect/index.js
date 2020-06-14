import React from "react";

function OptionSelect(props) {
  const { positionList, onSelectChange } = props;

  const onChange = e => {
    onSelectChange(e.target.value.trim());
  };

  return (
    <select className="positionOption" onChange={onChange}>
      {positionList.map((v, index) => {
        return (
          <option key={index} value={index}>
            {v.position}
          </option>
        );
      })}
    </select>
  );
}

export default OptionSelect;
