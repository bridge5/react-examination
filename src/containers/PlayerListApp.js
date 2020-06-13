import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';
import _ from 'lodash'

import { addPlayer, deletePlayer, starPlayer, changePage} from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput, PageList } from '../components';

class PlayerListApp extends Component {
  render() {
    const {
      playerlist: { playersById, curPageNumber,pageSize,positionList}
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
      changePage: this.props.changePage
    };
    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} positionList={positionList}/>
        <PlayerList players={_.slice(playersById,curPageNumber*5,curPageNumber*5+pageSize)} actions={actions} />
        <PageList totalPageNumber={(playersById.length / 5)} curPageNumber={curPageNumber} changePage={actions.changePage}/>
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
    changePage
  },
)(PlayerListApp);
