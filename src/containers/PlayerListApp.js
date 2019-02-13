import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';

import ReactPaginate from 'react-paginate';


// set number of players per page
var PER_PAGE = 5;

class PlayerListApp extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      pageData: this.props.playerlist.playersById.slice(0, PER_PAGE)
    };
  }

  handlePageClick = data => {
    var offset = Math.ceil(data.selected * PER_PAGE);
    var players = this.props.playerlist.playersById.slice(offset, offset + PER_PAGE);
    this.setState({
      pageData: players
    });
  };

  render() {
    const {
      playerlist: { playersById },
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };
      
    const pagination = {
        pageCount: Math.ceil(playersById.length / PER_PAGE)
    }

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={this.state.pageData} actions={actions} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pagination.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
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
