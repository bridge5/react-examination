/*
 * @author: Vision
 * @Date: 2020-02-26 09:52:06
 * @LastEditors: vision
 * @LastEditTime: 2020-02-27 14:02:39
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

const positionOption = ['ALL','SF', 'PG','PF']

class PlayerListApp extends Component {
  render() {
    const {
      playerlist: { playersById, filterPlayers },
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
            <select onChange={(v)=>{changeShowPosition(v.target.value)}}>
              {positionOption.map(item=><option key={item} value={item}>{item}</option>)}
            </select>
            {/* <button onClick={changeShowPosition}>
              {!positionVisible ? "show position" : "hidden position"}
            </button> */}
          </span>
        </h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList
          players={filterPlayers || playersById}
          actions={actions}
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
