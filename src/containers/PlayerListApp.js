import React, { Component } from 'react';
import styles from './PlayerListApp.module.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer,selectPosition,setPage} from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput, Pagination,SelectPosition} from '../components';

class PlayerListApp extends Component {
  render() {
    const {
      playerlist: { playersById, pageList },
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
      selectPosition: this.props.selectPosition,
      setPage: this.props.setPage,
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <div className={styles.topBar}>
          <AddPlayerInput addPlayer={actions.addPlayer} />
          <SelectPosition selectPosition={actions.selectPosition}/>
        </div>
        <PlayerList players={pageList} actions={actions} />
        <Pagination items={playersById} setPage={actions.setPage} />
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
    selectPosition,
    addPlayer,
    deletePlayer,
    starPlayer,
    setPage
  },
)(PlayerListApp);
