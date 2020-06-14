/* eslint-disable no-shadow */
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import styles from "./PlayerListApp.css";

import {
  addPlayer,
  deletePlayer,
  starPlayer,
  changePage
} from "../actions/PlayersActions";
import { PlayerList, AddPlayerInput, PageList } from "../components";
// eslint-disable-next-line react/prefer-stateless-function
class PlayerListApp extends Component {
  render() {
    const {
      playerlist: { playersById, positionList, pageSize, current },
      addPlayer,
      deletePlayer,
      starPlayer,
      changePage
    } = this.props;
    const new_players = _.slice(
      playersById,
      current * 5,
      current * 5 + pageSize
    );
    const total = playersById.length / 5;
    const actions = {
      addPlayer,
      deletePlayer,
      starPlayer,
      changePage
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput
          addPlayer={actions.addPlayer}
          positionList={positionList}
        />
        <PlayerList players={new_players} actions={actions} />
        <PageList
          total={total}
          current={current}
          changePage={actions.changePage}
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
  changePage
})(PlayerListApp);
