import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import Pagination from "./pagination";
class PlayerList extends Component {
  render() {
    const { players, currentPage } = this.props;

    return (
      <>
        <ul className={styles.playerList}>
          {players.slice(currentPage * 5, (currentPage + 1) * 5).map((player, index) => {
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

        {
          players.length > 5 && <Pagination total={players.length} />
        }
      </>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
