import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from '../PlayerListItem/PlayerListItem';

class PlayerList extends Component {
  deletePlayers(id) {
    if (this.props.players.length === 1) {
      this.props.changePage();
      this.props.actions.deletePlayer(id);
    } else {
      this.props.actions.deletePlayer(id);
    }
  }
  render() {
    return (
      <ul className={styles.playerList}>
        {this.props.players && this.props.players.map((player, index) => {
          return (
            <PlayerListItem
              key={index}
              id={player.id}
              name={player.name}
              team={player.team}
              position={player.position}
              starred={player.starred}
              deletePlayers={id => this.deletePlayers(id)}
              {...this.props.actions}
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
