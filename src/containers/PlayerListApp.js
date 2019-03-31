import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer, modifyPosition } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput, Pagination } from '../components';

const pageSize = 5;

class PlayerListApp extends Component {
  render() {
    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
      modifyPosition: this.props.modifyPosition
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <div className={`${styles.paginationAreaLaunchpad}`}>
          {this.paginationView()}
        </div>
        <PlayerList players={this.state.currentPageList} actions={actions} />
      </div>
    );
  }

  state = {
    currentPageList: this.props.playerlist.playersById
  }

  isTotalMatterListExists () {
    return (this.props.playerlist.playersById && this.props.playerlist.playersById.length > 0);
  }

  isCurrentPageSizeExists () {
    return !!pageSize;
  }

  onChangePage = (pageList) => {
    this.setState({ currentPageList: pageList});
  }

  paginationView() {
    var pagination = '';
    var tmpArr = this.props.playerlist.playersById;

    if (this.isTotalMatterListExists() && this.isCurrentPageSizeExists()) {
      pagination = (<Pagination items={tmpArr} pageOfItemSize={pageSize} onChangePage={this.onChangePage} />);
    }

    return pagination;
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
    modifyPosition,
  },
)(PlayerListApp);
