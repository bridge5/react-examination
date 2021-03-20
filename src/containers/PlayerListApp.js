import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer, editPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';
import Pagination from "../components/Pagination";
import Search from "../components/Search";

class PlayerListApp extends Component {
  constructor(props) {
    super(props);
    const allPlayers = props.playerlist.playersById || [];
    this.state = {
      currentPage: 1,
      allPlayers,
      displayPlayers: allPlayers,
      currentPosition: 'ALL'
    }
  }

  changePage = number => {
    this.setState({ currentPage: number });
  }

  searchPosition = position => {
    let displayPlayers = [];
    if (position === 'ALL') {
      displayPlayers = this.state.allPlayers;
    } else {
      displayPlayers = this.state.allPlayers.filter(item => item.position === position);
    }
    this.setState({ displayPlayers, currentPosition: position });
  }

  restList = () => {
    this.setState({
      currentPosition: 'ALL',
      displayPlayers: this.state.allPlayers
    })
  }

  resetCurrentList = (id) => {
    const displayPlayers = this.state.displayPlayers.filter(item => item.id !== id);
    this.setState({displayPlayers});
  }

  render() {
    const { currentPage, allPlayers, displayPlayers, currentPosition } = this.state;
    const { addPlayer, deletePlayer, starPlayer, editPlayer } = this.props;
    const actions = { addPlayer, deletePlayer, starPlayer, editPlayer };
    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} restList={this.restList}/>
        <hr />
        <Search players={allPlayers} searchPosition={this.searchPosition} position={currentPosition} />
        <PlayerList players={displayPlayers} actions={actions} currentPage={currentPage} resetCurrentList={this.resetCurrentList}/>
        <Pagination currentPage={currentPage} changePage={this.changePage} size={displayPlayers.length} />
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
    editPlayer
  },
)(PlayerListApp);
