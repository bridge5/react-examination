/**
 * 搜索区域
 */

import React from "react";
import classnames from "classnames";

import styles from "./AddPlayerInput.css";

const SearchContent = ({ filterParams, setFilterParams }) => {
  return (
    <div>
      <h3>search player:</h3>

      <div style={{ display: "flex", alignItems: "center" }}>
        <span>球员姓名：</span>
        <input
          style={{ width: "200px", marginRight: "20px" }}
          type="text"
          className={classnames("form-control", styles.addPlayerInput)}
          placeholder="请输入球员姓名"
          value={filterParams?.keyword}
          onChange={(e) =>
            setFilterParams({
              ...filterParams,
              keyword: e.target.value.trim(),
            })
          }
        />
        {/* <span>球员位置：</span>
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
        </select> */}
      </div>
    </div>
  );
};

export default SearchContent;
