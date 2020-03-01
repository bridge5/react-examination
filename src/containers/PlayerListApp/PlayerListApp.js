import React, { useState } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import {
  PlayerList,
  AddPlayerInput,
  PlayerPositionFilter
} from '../../components';

const PlayerListApp = ({ playersById }) => {
  const [position, setPosition] = useState('ALL');
  const { playerListApp, playerListTitle } = styles;
  const players =
    position === 'ALL'
      ? playersById
      : playersById.filter(player => player.position === position);
  return (
    <div className={playerListApp}>
      <div className={playerListTitle}>
        <h1>NBA Players</h1>
        <PlayerPositionFilter setPosition={setPosition} />
      </div>
      <AddPlayerInput />
      <PlayerList players={players} />
    </div>
  );
};

const mapStateToProps = ({ playerlist }) => {
  return playerlist;
};

export default connect(mapStateToProps)(PlayerListApp);
