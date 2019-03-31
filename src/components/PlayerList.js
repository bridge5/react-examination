import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

const PlayerList = (props) => {
  return (
    <ul className={styles.playerList}>
      {props.players.map((player, index) => {
        return (
          <PlayerListItem
            key={index}
            id={index}
            name={player.name}
            team={player.team}
            position={player.position}
            starred={player.starred}
            {...props.actions}
          />
        );
      })}
    </ul>
  );
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
