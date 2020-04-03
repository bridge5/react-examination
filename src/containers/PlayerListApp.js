import React, { Component } from 'react';
import styles from './PlayerListApp.module.css';
import { connect } from 'react-redux';
import classnames from 'classnames'
import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInputGroup, PageController } from '../components';

class PlayerListApp extends Component {
  state = {
    page: 1,
    pageSize: 5
  }

  setPage = page => {
    const { playerlist: { playersById } } = this.props
    const { pageSize } = this.state
    const total = playersById.length
    if (page < 1) {
      page = 1
    }
    if (page > (total / pageSize)) {
      page = Math.ceil(total / pageSize)
    }
    this.setState({
      page
    })
  }

  render() {
    const {
      playerlist: { playersById },
    } = this.props;
    const { pageSize, page } = this.state;
    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };
    let currentPlayers = playersById.slice((page - 1) * pageSize, page * pageSize)
    return (
      <div
        className={classnames('row', styles.playerListApp)}
      >
        <h1>NBA Players</h1>
        <AddPlayerInputGroup
          addPlayer={actions.addPlayer}
        />
        <PlayerList
          page={page}
          setPage={this.setPage}
          pageSize={pageSize}
          players={currentPlayers}
          actions={actions}
        />
        <PageController
          total={playersById.length}
          page={page}
          setPage={this.setPage}
          pageSize={pageSize}
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
