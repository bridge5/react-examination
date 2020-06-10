import React, { Component } from "react";
import styles from "./PlayerListApp.css";
import Pagination from "../components/Pagination";
import Switch from "../components/Switch";
import { connect } from "react-redux";
import { addPlayer, deletePlayer, starPlayer } from "../actions/PlayersActions";
import { PlayerList, AddPlayerInput } from "../components";

const pageSize = 5;

class PlayerListApp extends Component {
  render() {
    const { currentPage, players, type } = this.state;
    const {
      playerlist: { playersById },
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={players} actions={actions} />
        <Switch type={type} onChange={this.handleOnTypeChange.bind(this)} />
        <Pagination
          total={playersById.length}
          currentPage={currentPage}
          onChange={this.handleOnPageChange.bind(this)}
        />
      </div>
    );
  }

  constructor(props, context) {
    super(props, context);
    const {
      playerlist: { playersById },
    } = this.props;

    this.state = {
      currentPage: 1,
      players: playersById.slice(0, pageSize),
      type: "",
    };
  }

  componentWillUpdate(nextProps, nextState) {
    const {
      playerlist: { playersById },
    } = nextProps;
    const { currentPage, players, type } = nextState;
    const newPlayers = playersById.filter(item => {
      if(type === "") return true;
      
      return item.position === type
    }).slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    if (JSON.stringify(newPlayers) !== JSON.stringify(players)) {
      this.setState({
        players: newPlayers,
      });
    }
  }

  handleOnPageChange(pageNumber) {
    this.setState({
      currentPage: pageNumber,
    });
  }

  handleOnTypeChange(type) {
    this.setState({
      type: type,
    });
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  addPlayer,
  deletePlayer,
  starPlayer,
})(PlayerListApp);
