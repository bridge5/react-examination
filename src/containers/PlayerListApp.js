import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer,pageCurrentChangePlayer } from '../actions/PlayersActions';

import { PlayerList, AddPlayerInput } from '../components';

class PlayerListApp extends Component {
  render() {
    const {
      playerlist: { playersById }
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
      pageCurrentChangePlayer: this.props.pageCurrentChangePlayer
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={playersById} currentPage={this.props.playerlist.currentPage} actions={actions} />
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
    pageCurrentChangePlayer
  },
)(PlayerListApp);
