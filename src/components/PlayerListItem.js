import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./PlayerListItem.css";

function PlayerListItem(props) {
  const [positionValue, setPositionValue] = useState("");
  const handlePosition = position => {
    const options = ["SF", "PG"];
    if (options.includes(position)) {
      return (
        <select
          value={positionValue || position}
          onChange={e => setPositionValue(e.target.value)}
        >
          <option value="SF">SF</option>
          <option value="PG">PG</option>
        </select>
      );
    }
    return position;
  };
  return (
    <li className={styles.playerListItem}>
      <div className={styles.playerInfos}>
        <div>
          <span>{props.name}</span>
        </div>
        <div>
          <small>
            {props.team} · {handlePosition(props.position)}
          </small>
        </div>
      </div>
      <div className={styles.playerActions}>
        <button
          className={`btn btn-default ${styles.btnAction}`}
          onClick={() => props.starPlayer(props.id)}
        >
          <i
            className={classnames("fa", {
              "fa-star": props.starred,
              "fa-star-o": !props.starred
            })}
          />
        </button>
        <button
          className={`btn btn-default ${styles.btnAction}`}
          onClick={() => props.deletePlayer(props.id)}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
}

PlayerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starPlayer: PropTypes.func.isRequired
};

export default PlayerListItem;
