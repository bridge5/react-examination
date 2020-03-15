import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {
  render() {
    const {currentPage} = this.props
    return (
      <ul className={styles.playerList}>
        {this.props.players.map((player, index) => {
          if((index < 5*(currentPage - 1)) || index >= 5*currentPage) return null
          return (
            <PlayerListItem
              key={index}
              id={index}
              name={player.name}
              team={player.team}
              position={player.position}
              starred={player.starred}
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
  currentPage: PropTypes.number.isRequired,
};

export default PlayerList;
