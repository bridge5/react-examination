import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';

import ReactPaginate from 'react-paginate';


class PlayerListApp extends Component {

  render() {
    const {
      playerlist: { playersById, pageData, selectedPage },
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };
      
    const pagination = {
        pageCount: Math.ceil(playersById.length / this.props.playerlist.numberPerPage)
    }
    
    actions.handlePageClick = data => {
      this.props.playerlist.selectedPage = data.selected;
      var offset = Math.ceil(data.selected * this.props.playerlist.numberPerPage);
      var players = this.props.playerlist.playersById.slice(offset, offset + this.props.playerlist.numberPerPage);
      this.props.playerlist.pageData = players;
      this.forceUpdate();
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={pageData} actions={actions} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pagination.pageCount}
          forcePage={selectedPage}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={actions.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  var offset = Math.ceil(state.playerlist.selectedPage * state.playerlist.numberPerPage);
  var players = state.playerlist.playersById.slice(offset, offset + state.playerlist.numberPerPage);
  if(!players || players.length <= 0){
      if(state.playerlist.selectedPage >= 1) {
         state.playerlist.selectedPage--;
        offset = Math.ceil(state.playerlist.selectedPage * state.playerlist.numberPerPage);
        players = state.playerlist.playersById.slice(offset, offset + state.playerlist.numberPerPage);
      }
  }
  state.playerlist.pageData = players;

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
