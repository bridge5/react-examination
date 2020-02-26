/*
 * @author: Vision
 * @Date: 2020-02-26 09:52:06
 * @LastEditors: vision
 * @LastEditTime: 2020-02-26 16:33:32
 */
import React, { Component } from "react";
import styles from "./PlayerListApp.css";
import { connect } from "react-redux";

import {
  addPlayer,
  deletePlayer,
  starPlayer,
  changeShowPosition,
} from "../actions/PlayersActions";
import { PlayerList, AddPlayerInput } from "../components";

class PlayerListApp extends Component {
  render() {
    const {
      playerlist: { playersById, positionVisible },
      changeShowPosition,
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };

    return (
      <div className={styles.playerListApp}>
        <h1>
          <span>NBA Players</span>
          <span className={styles.playerPosition}>
            <button onClick={changeShowPosition}>
              {!positionVisible ? "show position" : "hidden position"}
            </button>
          </span>
        </h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList
          players={playersById}
          actions={actions}
          positionVisible={positionVisible}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  addPlayer,
  deletePlayer,
  starPlayer,
  changeShowPosition,
})(PlayerListApp);
