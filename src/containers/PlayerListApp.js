import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { filterPlayer, addPlayer, deletePlayer, starPlayer, setCurrentPlayers, setCurrentPage } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput, FilterPlayerSelect, Pagination } from '../components';
import { PER_LIST_ITEMS } from '../constants/';

class PlayerListApp extends Component {
  render() {
    const {
      playerlist: {
        filteredPlayers,
        currentPlayers,
        currentPage
      },
    } = this.props;

    const listActions = {
      filterPlayer: this.props.filterPlayer,
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
      setCurrentPlayers: this.props.setCurrentPlayers,
      setCurrentPage: this.props.setCurrentPage,
    };
    
    const totalPlayers = filteredPlayers.length;
    const perListItems = PER_LIST_ITEMS;

    return (
      <div className={styles.playerListApp}>
        <h1>
          NBA Players
          <FilterPlayerSelect
            filterPlayer={listActions.filterPlayer} />
        </h1>
        <AddPlayerInput
          addPlayer={listActions.addPlayer} />
        <PlayerList
          players={currentPlayers}
          actions={listActions} />
        <Pagination
          currentPage={currentPage}
          totalItems={totalPlayers}
          perListItems={perListItems}
          onPageChanged={this.onPageChanged} />
      </div>
    );
  }

  onPageChanged = data => {
    const {
      playerlist: { filteredPlayers },
      setCurrentPlayers,
      setCurrentPage
    } = this.props;
    const { currentPage, perListItems } = data;
    const offset = (currentPage - 1) * perListItems;
    const currentPlayers = filteredPlayers.slice(offset, offset + perListItems);

    setCurrentPlayers(currentPlayers)
    setCurrentPage(currentPage)
  };
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    filterPlayer,
    addPlayer,
    deletePlayer,
    starPlayer,
    setCurrentPlayers,
    setCurrentPage
  },
)(PlayerListApp);
