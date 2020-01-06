import React, { Component } from "react";
import styles from "./PlayerListApp.css";
import { connect } from "react-redux";

import { addPlayer, deletePlayer, starPlayer } from "../actions/PlayersActions";
import { PlayerList, AddPlayerInput } from "../components";
import Pagination from "../components/Pagination";

class PlayerListApp extends Component {
  state = {
    page: 1
  };

  setPage = pageNumber => {
    console.log("pageNumber", pageNumber);
    this.setState({ page: pageNumber });
  };

  render() {
    const {
      playerlist: { playersById }
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer
    };
    const { page } = this.state;

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList page={page} players={playersById} actions={actions} />
        <Pagination page={page} setPage={this.setPage} players={playersById} />
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
  starPlayer
})(PlayerListApp);
