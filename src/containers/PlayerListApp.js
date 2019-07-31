import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';
import { Paginator } from "../components/Paginator/Paginator";
import { chunk } from "lodash";

class PlayerListApp extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currentPage: 0,
      }
  }


  changePage(number) {
      this.setState({currentPage: number})
  }

  render() {
    const playersById = this.props.playerlist.playersById;
    const playersByIdPage = chunk(this.props.playerlist.playersById, 5);
    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };
    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={playersByIdPage[this.state.currentPage]} actions={actions} />
        <Paginator totalPage={playersByIdPage.length} cb={(number) => this.changePage(number)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    addPlayer,
    deletePlayer,
    starPlayer,
  },
)(PlayerListApp);
