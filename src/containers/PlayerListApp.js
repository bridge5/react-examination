import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { goPage, nextPage, prevPage } from '../actions/PaginationActions';
import { options } from '../constants/Options';
import { PlayerList, AddPlayerInput } from '../components';
import Pagination from '../components/Pagination';

class PlayerListApp extends Component {

  render() {
    const {
      playerlist: { playersById, pageNum },
    } = this.props;

    const displayPlayers = playersById.slice((pageNum - 1) * options.maxPageItem, (pageNum - 1) * options.maxPageItem + options.maxPageItem);

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer
    };
    
    const pageActions = {
      goPage: this.props.goPage,
      nextPage: this.props.nextPage,
      prevPage: this.props.prevPage
    }

    const paginationSize = Math.ceil(playersById.length / options.maxPageItem);

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={displayPlayers} actions={actions} />
        <Pagination size={paginationSize} actions={pageActions} currentPage={pageNum} />
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
    nextPage,
    prevPage,
    goPage
  },
)(PlayerListApp);
