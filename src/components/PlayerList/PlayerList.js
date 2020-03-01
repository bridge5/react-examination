import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from '../PlayerListItem/PlayerListItem';

const PlayerList = ({ players }) => {
  const { playerList } = styles;
  return (
    <ul className={playerList}>
      {players.map((player, index) => {
        return <PlayerListItem key={index} id={index} {...player} />;
      })}
    </ul>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};

export default PlayerList;
