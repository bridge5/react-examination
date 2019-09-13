import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './PlayerListApp.css';
import {
  addPlayer, deletePlayer, starPlayer, paginatePlayer, clickPage,
} from '../actions/PlayersActions';
import {
  PlayerList, AddPlayerInput, Pagination, Selection,
} from '../components';

class PlayerListApp extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'ALL',
    }
  }
  componentDidMount() {
    const { playerlist: { playersById }, paginatePlayer } = this.props;
    paginatePlayer(playersById);
  }

  onSelectData(selected) {
    const { playerlist: { playersById }, paginatePlayer, clickPage } = this.props;
    let filterPlayer = playersById;
    if (selected !== "ALL") {
      filterPlayer = playersById.filter(player => selected.indexOf(player.position) !== -1);
    }
    
    clickPage(0);
    paginatePlayer(filterPlayer);
    this.setState({ selected });
  }

  render() {
    const {
      playerlist: { playersById, paginationPage, currentPage },
    } = this.props;

    const {
      selected,
    } = this.state;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
      paginatePlayer: this.props.paginatePlayer,
      clickPage: this.props.clickPage,
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput
          addPlayer={actions.addPlayer}
          paginatePlayer={actions.paginatePlayer}
          players={playersById}
        />
        <Selection 
          onSelectData={data => this.onSelectData(data)}
        />
        <PlayerList
          selected={selected}
          currentPage={currentPage}
          paginationPage={paginationPage}
          players={playersById}
          actions={actions}
        />
        <Pagination 
          clickPage={actions.clickPage}
          paginationPage={paginationPage} 
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
    paginatePlayer,
    clickPage,
  },
)(PlayerListApp);
