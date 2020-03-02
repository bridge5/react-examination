import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer, changePagin, filterPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput,  PagingDevice } from '../components';

class PlayerListApp extends Component {
  render() {
    const {
      playerlist: { playersById, pagingNum, filterVal },
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
      changePagin: this.props.changePagin,
      filterPlayer: this.props.filterPlayer
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} filterPlayer={actions.filterPlayer} />
        <PlayerList players={playersById} actions={actions} pagingNum={pagingNum} filterVal={filterVal} />
        <PagingDevice players={playersById} changePagin={actions.changePagin}/>
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
    changePagin,
    filterPlayer
  },
)(PlayerListApp);
