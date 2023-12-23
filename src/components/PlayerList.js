import React from "react";
import PropTypes from "prop-types";
import styles from "./PlayerList.module.css";
import PlayerListItem from "./PlayerListItem";

const PlayerList = ({ players, ...rest }) => {
  return (
    <ul className={styles["player-list"]}>
      {players?.length > 0 ? (
        players.map((player, index) => (
          <PlayerListItem
            key={player?.id}
            id={player?.id}
            name={player?.name || "- -"}
            team={player?.team || "- -"}
            position={player?.position || "- -"}
            starred={player?.starred || false}
            {...rest}
          />
        ))
      ) : (
        <div
          style={{
            background: "#eee",
            height: "200px",
            textAlign: "center",
            lineHeight: "200px",
          }}
        >
          暂无数据
        </div>
      )}
    </ul>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  handleDeletePlayer: PropTypes.func.isRequired,
  handleStarPlayer: PropTypes.func.isRequired,
  successCallback: PropTypes.func.isRequired,
};

export default PlayerList;
