import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer, setCurrentPage, positionPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput, Pagination } from '../components';

class PlayerListApp extends Component {
  render() {
    const {
      playerlist: { playersById },
      setCurrentPage
    } = this.props;
    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
      positionPlayer: this.props.positionPlayer
    };

    const {currentPage} = this.props
    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList currentPage={currentPage.page} players={playersById} actions={actions} />
        <Pagination setCurrentPage={setCurrentPage} playersById={playersById}/>
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
    positionPlayer,
    setCurrentPage
  },
)(PlayerListApp);
