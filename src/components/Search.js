import React from 'react';

const Search = props => {
  const { players = [], currentPosition, searchPosition } = props;
  const positions = players.map(item => item.position);
  const uniqPos = [...new Set(positions)];
  // console.log(uniqPos);
  const select = value => {
    searchPosition(value);
  }
  return (
    <div>
      Search Position:
      <select value={currentPosition} onChange={e => select(e.target.value)} >
        <option value='ALL'>ALL</option>
        {
          uniqPos.map(item => <option value={item} key={item}>{item}</option>)
        }
      </select>
    </div>
  );
}

export default Search;