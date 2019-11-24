import React, { Component } from "react";
import styles from "./PlayerListApp.scss";
import { connect } from "react-redux";

import { addPlayer, deletePlayer, starPlayer } from "../actions/PlayersActions";
import { PlayerList, AddPlayerInput, Paginator } from "../components";
import { chunk } from "lodash";
import classnames from "classnames";

class PlayerListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      position: "ALL"
    };
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  deletePlayer(id, playersByPage) {
    const { currentPage } = this.state;
    if (playersByPage.length === 1) {
      this.changePage(currentPage - 1);
    }
    this.props.deletePlayer(id);
  }

  render() {
    const {
      playerlist: { playersById }
    } = this.props;

    const { currentPage, position } = this.state;
    const players =
      position === "ALL"
        ? playersById
        : playersById.filter(player => player.position === position);
    const totalPage = Math.ceil(players.length / 5);
    const playersByPage = totalPage ? chunk(players, 5)[currentPage - 1] : [];
    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: id => this.deletePlayer(id, playersByPage),
      starPlayer: this.props.starPlayer
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <div className={styles.selectWrap}>
          <select
            value={position}
            className={classnames("form-control")}
            onChange={e =>
              this.setState({ position: e.target.value, currentPage: 1 })
            }
          >
            <option value="ALL">ALL</option>
            <option value="PG">PG</option>
            <option value="SG">SG</option>
            <option value="SF">SF</option>
            <option value="PF">PF</option>
            <option value="C">C</option>
          </select>
        </div>
        <PlayerList
          players={playersByPage}
          actions={actions}
          currentPage={currentPage}
        />
        <Paginator
          totalPage={totalPage}
          currentPage={currentPage}
          changePage={page => this.changePage(page)}
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
  starPlayer
})(PlayerListApp);
