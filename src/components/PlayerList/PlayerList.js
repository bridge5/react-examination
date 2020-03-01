import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from '../PlayerListItem/PlayerListItem';
import Pagination from '../Pagination/Pagination';

const { playerList } = styles;
const PlayerList = ({ players }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const totalPageIndex = Math.ceil(players.length / 5) - 1;

  const changePage = action => {
    setCurrentPageIndex(currentPageIndex + action);
  };
  return (
    <Fragment>
      <ul className={playerList}>
        {players.map((player, index) => {
          return 0 <= index - currentPageIndex * 5 &&
            index - currentPageIndex * 5 < 5 ? (
            <PlayerListItem key={index} id={index} {...player} />
          ) : null;
        })}
      </ul>
      <Pagination
        currentPageIndex={currentPageIndex}
        changePage={changePage}
        totalPageIndex={totalPageIndex}
      />
    </Fragment>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};

export default PlayerList;
