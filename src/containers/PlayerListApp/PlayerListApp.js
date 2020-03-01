import React from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { PlayerList, AddPlayerInput } from '../../components';

const PlayerListApp = ({ playersById }) => {
  const { playerListApp } = styles;

  return (
    <div className={playerListApp}>
      <h1>NBA Players</h1>
      <AddPlayerInput />
      <PlayerList players={playersById} />
    </div>
  );
};

const mapStateToProps = ({ playerlist }) => {
  return playerlist;
};

export default connect(mapStateToProps)(PlayerListApp);
