import React, { Component } from "react";
import styles from "./PlayerListApp.module.scss";
import { connect } from "react-redux";

import {
  addPlayer,
  deletePlayer,
  starPlayer,
  filterPlayer,
} from "../actions/PlayersActions";
import { PlayerList, AddPlayerInput } from "../components";
import { Options } from "../constants/posTypes";

class PlayerListApp extends Component {
  handleOnPostionChange = (e) => {
    this.props.filterPlayer(e.target.value);
  };

  render() {
    const {
      playerlist: { playersById, showPosition },
    } = this.props;
    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };

    return (
      <div className={styles.playerListApp}>
        <div className={styles.header}>
          <h1>NBA Players</h1>
          <select onChange={this.handleOnPostionChange}>
            <option value="">all</option>
            {Options}
          </select>
        </div>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList
          showPosition={showPosition}
          players={playersById}
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
  filterPlayer,
})(PlayerListApp);
