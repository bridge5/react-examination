import React from "react";
import PropTypes from "prop-types";
import styles from "./PlayerList.css";
import PlayerListItem from "./PlayerListItem";

const PlayerList = ({ players, actions }) => {
  return (
    <ul className="player-list">
      {players.map((player, index) => (
        <PlayerListItem
          key={index}
          id={index}
          name={player.name}
          team={player.team}
          position={player.position}
          starred={player.starred}
          {...actions}
        />
      ))}
    </ul>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
