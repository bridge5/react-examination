import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer, filterPlayer, selectPageNum } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput, SelectFilter, PlayerPagination } from '../components';
import { playersFilterbyPageNum, getPageCount } from '../selectors/playerlistApp.selector'

class PlayerListApp extends Component {
  render() {
    const { playersById, pageCount } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
      filterPlayer: this.props.filterPlayer,
      selectPageNum: this.props.selectPageNum
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <SelectFilter filterPlayer={actions.filterPlayer} ></SelectFilter>
        <PlayerList players={playersById} actions={actions} />
        <PlayerPagination pageCount={pageCount} selectPageNum={actions.selectPageNum} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return { 
    ...state.playerlist,
    playersById: playersFilterbyPageNum(state),
    pageCount: getPageCount(state)
  }
}

export default connect(
  mapStateToProps,
  {
    addPlayer,
    deletePlayer,
    starPlayer,
    filterPlayer,
    selectPageNum
  },
)(PlayerListApp);
