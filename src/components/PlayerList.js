/*
 * @author: Vision
 * @Date: 2020-02-26 09:52:06
 * @LastEditors: vision
 * @LastEditTime: 2020-02-27 13:39:07
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./PlayerList.css";
import PlayerListItem from "./PlayerListItem";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class PlayerList extends Component {
  state = {
    current: 1,
    pageSize: 5,
  };

  // 分割数组数据
  sliceArray = array => {
    const { pageSize } = this.state;
    const result = [];
    for (let x = 0; x < Math.ceil(array.length / pageSize); x++) {
      const start = x * pageSize;
      const end = start + pageSize;
      result.push(array.slice(start, end));
    }
    return result;
  };

  onPageChange = (current, pageSize) => {
    this.setState({
      current,
      pageSize,
    });
  };

  render() {
    const { current, pageSize } = this.state;
    const { players, actions } = this.props;
    const isPagination = players.length > 5;

    if (!isPagination) {
      return (
        <ul className={styles.playerList}>
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
    }

    const sliceArr = this.sliceArray(players, 5);

    return (
      <>
        <ul className={styles.playerList}>
          {sliceArr[current - 1].map((player, index) => (
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
        <div className={styles.pagination}>
          <Pagination
            showLessItems
            total={players.length}
            pageSize={pageSize}
            current={current}
            onChange={this.onPageChange}
          />
        </div>
      </>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
