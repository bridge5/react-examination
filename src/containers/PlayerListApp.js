import React from "react";
import styles from "./PlayerListApp.css";
import { connect } from "react-redux";
import { Button } from "antd";

import {
  addPlayer,
  deletePlayer,
  starPlayer,
  handleShow
} from "../actions/PlayersActions";
import { PlayerList, AddPlayerInput } from "../components";

const getCurrentList = (todos, filter) => {
  console.log(todos, filter);
  switch (filter) {
    case "SF":
      return todos.filter(t => t.position === "SF");
    case "PG":
      return todos.filter(t => t.position === "PG");
    case "ALL":
      return todos;
    default:
  }
};

export const PlayerListAppView = props => {
  const { playerlist = [], handleShow } = props;

  const actions = {
    addPlayer: props.addPlayer,
    deletePlayer: props.deletePlayer,
    starPlayer: props.starPlayer
  };

  return (
    <div className={styles.playerListApp}>
      <h1>NBA Players</h1>
      <AddPlayerInput addPlayer={actions.addPlayer} />
      <Button
        onClick={() => {
          handleShow("SF");
        }}
      >
        "show SF"
      </Button>
      <Button
        onClick={() => {
          handleShow("PG");
        }}
      >
        "show PG"
      </Button>
      <Button
        onClick={() => {
          handleShow("ALL");
        }}
      >
        "show ALL"
      </Button>
      <PlayerList players={playerlist} actions={actions} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    playerlist: getCurrentList(
      state.playerlist.playersById,
      state.playerlist.visible
    )
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addPlayer: id => {
      dispatch(addPlayer(id));
    },
    deletePlayer: id => {
      dispatch(deletePlayer(id));
    },
    starPlayer: id => {
      dispatch(starPlayer(id));
    },
    handleShow: id => {
      dispatch(handleShow(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerListAppView);
