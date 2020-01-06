import React from "react";
import PropTypes from "prop-types";
import styles from "./PlayerList.css";
import PlayerListItem from "./PlayerListItem";

function PlayerList(props) {
  const { players, page } = props;
  return (
    <ul className={styles.playerList}>
      {players.slice(page * 5 - 5, page * 5).map((player, index) => {
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
  actions: PropTypes.object.isRequired
};

export default PlayerList;
