import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./PlayerList.module.scss";
import PlayerListItem from "./PlayerListItem";

class PlayerList extends Component {
  render() {
    return (
      <ul className={styles.playerList}>
        {this.props.players.map((player) => {
          console.log(
            !this.props.showPosition,
            this.props.showPosition,
            player.position
          );

          return !this.props.showPosition ||
            this.props.showPosition === player.position ? (
            <PlayerListItem
              key={player.id}
              id={player.id}
              name={player.name}
              team={player.team}
              position={player.position}
              starred={player.starred}
              {...this.props.actions}
            />
          ) : null;
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
