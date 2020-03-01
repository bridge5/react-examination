import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer, jumpPage } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput,Pagination } from '../components';

class PlayerListApp extends Component {
  render() {
    const {
      playerlist: { playersById, pageNum, pageSize },
    } = this.props;
    const currentList = playersById.slice((pageNum - 1) * pageSize, pageNum * pageSize)
    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };
    const total = Math.ceil(playersById.length / pageSize)
    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={currentList} actions={actions} />
        <Pagination pageNum={pageNum} total={total} jumpPage={this.jumpPage}></Pagination>
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
    jumpPage,
  },
)(PlayerListApp);
