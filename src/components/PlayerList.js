import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {
  render() {
    const { paginationPage, currentPage, selected } = this.props;
    return (
      <ul className={styles.playerList}>
        {paginationPage[currentPage].map((player, index) => {
          return selected === 'ALL'
            ?
            <PlayerListItem
              key={index}
              page={currentPage}
              id={index}
              name={player.name}
              team={player.team}
              position={player.position}
              starred={player.starred}
              {...this.props.actions}
            />
            :
            selected === player.position && (
              <PlayerListItem
                key={index}
                page={currentPage}
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
};

PlayerList.defaultProps = {
  players: [],
  actions: {},
  paginationPage: [[]],
  currentPage: 0,
};

export default PlayerList;
