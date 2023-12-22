import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./AddPlayerInput.css";

// 定义球员位置
const PLAYER_POSITION = ["SF", "PF", "PG", "SG"];
// 定义球队
const PLAYER_TEAM = [
  "LOS ANGELES LAKERS",
  "GOLDEN STATE WARRIORS",
  "NEW ORLEANS PELICANS",
  "HOUSTON ROCKETS",
  "TORONTO RAPTORS",
];

const AddPlayerInput = ({ addPlayer, addPlayerSuccessCallback }) => {
  // 球员基本信息
  const [playerInfo, setPlayerInfo] = useState({
    name: "",
    position: PLAYER_POSITION[0],
    team: PLAYER_TEAM[0],
  });

  const handleSubmit = (e) => {
    if (e.which === 13 && playerInfo?.name !== "") {
      addPlayer(playerInfo);
      setPlayerInfo({
        name: "",
        position: PLAYER_POSITION[0],
        team: PLAYER_TEAM[0],
      });
      addPlayerSuccessCallback();
    }
  };

  return (
    <>
      <h3>add player:</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>球员姓名：</span>
        <input
          style={{ width: "200px", marginRight: "20px" }}
          type="text"
          autoFocus={true}
          className={classnames("form-control", styles.addPlayerInput)}
          placeholder="Type the name of a player"
          value={playerInfo?.name}
          onChange={(e) =>
            setPlayerInfo({ ...playerInfo, name: e.target.value.trim() })
          }
          onKeyDown={handleSubmit}
        />
        <span>球员位置：</span>
        <select
          style={{ width: "200px", margin: "0 20px" }}
          value={playerInfo?.position}
          onChange={(e) => {
            // 这里不能用 e.target.value
            setPlayerInfo({
              ...playerInfo,
              position: e.nativeEvent.target.value,
            });
          }}
        >
          {PLAYER_POSITION.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span>所属团队：</span>
        <select
          style={{ width: "200px", margin: "0 20px" }}
          value={playerInfo?.position}
          onChange={(e) => {
            //  这里不能用 e.target.value
            setPlayerInfo({
              ...playerInfo,
              team: e.nativeEvent.target.value,
            });
          }}
        >
          {PLAYER_TEAM.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  addPlayerSuccessCallback: PropTypes.func.isRequired,
};

export default AddPlayerInput;
