import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { changePlayerList } from '../../actions/PlayersActions';

import { SearchPlayerWrapper } from "./style";

const SearchPlayerInput = memo(() => {
  const dispatch = useDispatch();

  function handleSlectChange(e) {
    e.persist();
    dispatch(changePlayerList(e.target.value));
  };

  return (
    <SearchPlayerWrapper>
      <select 
       name="pets"
       id="select" 
       onChange={e => handleSlectChange(e)}
      >
        <option value="">--Please add options to select player SF / PG--</option>
        <option value="SF">SF</option>
        <option value="PG">PG</option>
      </select>
    </SearchPlayerWrapper>
  )
});

export default SearchPlayerInput