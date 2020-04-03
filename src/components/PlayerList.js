import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.module.css';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {

  state = {}

  static getDerivedStateFromProps(props, state) {
    const { page, setPage, players } = props
    if (!players.length && page > 1) {
      setPage(page - 1)
    }
    return null
  }

  render() {
    const { page, pageSize, actions, players } = this.props
    if (players.length) {
      return (
        <ul className={styles.playerList}>
          {players.map((player, index) => {
            return (
              <PlayerListItem
                key={player.name + index}
                id={(page - 1) * pageSize + index}
                name={player.name}
                team={player.team}
                position={player.position}
                starred={player.starred}
                {...actions}
                page={page}
              />
            )
          })}
        </ul>
      )
    } else {
      return (
        <div className={styles.noData}>
          <p className="text-primary">Choose your favorite player</p>
        </div>
      )
    }
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default PlayerList;
