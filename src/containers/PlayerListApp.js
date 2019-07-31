import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';
import { Paginator } from '../components/Paginator/Paginator';
import { chunk } from 'lodash';

class PlayerListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  changePage(number) {
    this.setState({ currentPage: number });
  }

  render() {
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
        <PlayerList
          changePage={() => this.changePage(this.state.currentPage - 1)}
          players={playersByIdPage[this.state.currentPage - 1]}
          actions={actions}
        />
        <Paginator
          totalPage={chunk(this.props.playerlist.playersById, 5).length}
          cb={number => this.changePage(number)}
          currentPage={this.state.currentPage}
        />
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
