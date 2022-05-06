import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayerList.css';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {
  render() {
    return (
      <div>
      <ul className='playerList'>
        {this.props.players.map((player, index) => {
          return (
            <PlayerListItem
              key={player.id}
              id={player.id}
              name={player.name}
              team={player.team}
              position={player.position}
              starred={player.starred}
              {...this.props.actions}
            />
          );
        })}
      </ul>
        </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
