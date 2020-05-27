import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput, Pagination } from '../components';

class PlayerListApp extends Component {
  playsPerPage = 5 // 每页显示数量
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1
    }
  }
  handlePageSelected = (pageNum) => {
    pageNum = +pageNum
    if (this.state.currentPage !== pageNum) {
      this.setState({
        currentPage: pageNum
      })
    }
  }
  render() {
    const {
      playerlist: { playersById },
    } = this.props;

    const pageCounts = Math.ceil(playersById.length / this.playsPerPage)
    const { currentPage } = this.state
    const currentList = playersById.slice((currentPage-1)*this.playsPerPage, currentPage*this.playsPerPage)
    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={currentList} actions={actions} />
        <Pagination
          pageCounts={pageCounts}
          currentPage={currentPage}
          onselected={this.handlePageSelected}
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
