import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';

class PlayerListApp extends Component {
  render() {
    const {
      playerlist: { playersById },
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };


    function playersByStarred (playersById) {
      let starred = [];
      let unstarred = [];
      for (let i = 0; i < playersById.length; i++) {
        if (playersById[i].starred) {
          starred.push(playersById[i])
        }
        else {
          unstarred.push(playersById[i])
        }
      }
      return [...starred,...unstarred]
    }

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={playersByStarred(playersById)} actions={actions} />
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
