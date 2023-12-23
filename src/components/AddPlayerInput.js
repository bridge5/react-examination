import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { PLAYER_POSITION, PLAYER_TEAM } from "../constants";

import styles from "./AddPlayerInput.module.css";

const AddPlayerInput = ({ handleAddPlayer, addPlayerSuccessCallback }) => {
  // 球员基本信息
  const [playerInfo, setPlayerInfo] = useState({
    name: "",
    position: PLAYER_POSITION[0].value,
    team: PLAYER_TEAM[0].value,
  });

  const handleSubmit = (e) => {
    if (e.which === 13 && playerInfo?.name !== "") {
      handleAddPlayer(playerInfo);
      // 添加成功后初始化数据、并重新请求数据
      setPlayerInfo({
        name: "",
        position: PLAYER_POSITION[0].value,
        team: PLAYER_TEAM[0].value,
      });
      addPlayerSuccessCallback();
    }
  };

  return (
    <>
      <h3>add player:</h3>
      <div className={styles["add-player-layout"]}>
        <span className={styles["label"]}>球员姓名：</span>
        <input
          type="text"
          autoFocus={true}
          className={classnames("form-control", styles.addPlayerInput)}
          placeholder="请输入球员姓名"
          value={playerInfo?.name}
          onChange={(e) =>
            setPlayerInfo({ ...playerInfo, name: e.target.value.trim() })
          }
          onKeyDown={handleSubmit}
        />
        <span className={styles["label"]}>球员位置：</span>
        <select
          className={styles["select"]}
          value={playerInfo?.position}
          onChange={(e) => {
            // 这里不能用 e.target.value
            setPlayerInfo({
              ...playerInfo,
              position: e.nativeEvent.target.value,
            });
          }}
          onKeyDown={handleSubmit}
        >
          {PLAYER_POSITION.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <span className={styles["label"]}>所属团队：</span>
        <select
          className={styles["select"]}
          value={playerInfo?.position}
          onChange={(e) => {
            //  这里不能用 e.target.value
            setPlayerInfo({
              ...playerInfo,
              team: e.nativeEvent.target.value,
            });
          }}
          onKeyDown={handleSubmit}
        >
          {PLAYER_TEAM.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

AddPlayerInput.propTypes = {
  handleAddPlayer: PropTypes.func.isRequired,
  addPlayerSuccessCallback: PropTypes.func.isRequired,
};

export default AddPlayerInput;
