/**
 * 搜索区域
 */

import React from "react";
import classnames from "classnames";

import { PLAYER_POSITION, PLAYER_TEAM } from "../constants";

import styles from "./AddPlayerInput.module.css";

const SearchContent = ({ filterParams, setFilterParams }) => {
  return (
    <div>
      <h3>search player:</h3>
      <div className={styles["add-player-layout"]}>
        <span className={styles["label"]}>球员姓名：</span>
        <input
          type="text"
          className={classnames("form-control", styles.addPlayerInput)}
          placeholder="请搜索球员姓名"
          value={filterParams?.keyword}
          onChange={(e) =>
            setFilterParams({
              ...filterParams,
              keyword: e.target.value.trim(),
            })
          }
        />
        <span className={styles["label"]}>球员位置：</span>
        <select
          className={styles["select"]}
          value={filterParams?.position}
          onChange={(e) => {
            // 这里不能用 e.target.value
            setFilterParams({
              ...filterParams,
              position: e.nativeEvent.target.value,
            });
          }}
        >
          {[{ label: "所有", value: "" }, ...PLAYER_POSITION].map(
            ({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            )
          )}
        </select>
        <span className={styles["label"]}>所属团队：</span>
        <select
          className={styles["select"]}
          value={filterParams?.team}
          onChange={(e) => {
            //  这里不能用 e.target.value
            setFilterParams({
              ...filterParams,
              team: e.nativeEvent.target.value,
            });
          }}
        >
          {[{ label: "所有", value: "" }, ...PLAYER_TEAM].map(
            ({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
};

export default SearchContent;
