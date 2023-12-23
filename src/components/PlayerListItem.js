import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./PlayerListItem.module.css";

const PlayerListItem = ({
  id,
  name,
  team,
  position,
  starred,
  handleDeletePlayer,
  handleStarPlayer,
  successCallback,
}) => {
  return (
    <li className={styles["playerListItem"]}>
      <div className={styles["playerInfos"]}>
        <div>
          <span>{name}</span>
        </div>
        <div>
          <small>
            {team} · {position}
          </small>
        </div>
      </div>
      <div className={styles["playerActions"]}>
        <button
          className={`btn btn-default ${styles["btnAction"]}`}
          onClick={() => {
            handleStarPlayer(id);
            successCallback();
          }}
        >
          <i
            className={classnames("fa", {
              "fa-star": starred,
              "fa-star-o": !starred,
            })}
          />
        </button>
        <button
          className={`btn btn-default ${styles.btnAction}`}
          onClick={() => {
            handleDeletePlayer(id);
            successCallback();
            // TODO：这里如果删除后请求的数据为空，应该重新去请求上一页的数据
          }}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
};

PlayerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  handleDeletePlayer: PropTypes.func.isRequired,
  handleStarPlayer: PropTypes.func.isRequired,
  successCallback: PropTypes.func.isRequired,
};

export default PlayerListItem;
