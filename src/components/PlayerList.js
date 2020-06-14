/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./PlayerList.css";
import PlayerListItem from "./PlayerListItem";

class PlayerList extends Component {
  render() {
    const { players, actions } = this.props;
    return (
      <ul className={styles.playerList}>
        {players.map((player, index) => {
          return (
            <PlayerListItem
              key={index}
              id={index}
              name={player.name}
              team={player.team}
              position={player.position}
              starred={player.starred}
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
  actions: PropTypes.object.isRequired
};

export default PlayerList;
