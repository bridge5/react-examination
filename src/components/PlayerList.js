import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {
  render() {
    const { players, currentPage, actions, resetCurrentList } = this.props;
    const start = 5 * (currentPage - 1);
    const currentPlayers = players.slice(start, 5 * currentPage);
    return (
      <ul className={styles.playerList} style={{height: 380, padding: '10px'}}>
        {currentPlayers.map((player) => {
          return (
            <PlayerListItem
              key={player.id}
              id={player.id}
              name={player.name}
              team={player.team}
              position={player.position}
              starred={player.starred}
              resetCurrentList={resetCurrentList}
              {...actions}
            />
          );
        })}
      </ul>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
