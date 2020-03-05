import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import styles from './styles.scss';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>NBA Players</h1>
          <AddPlayer/>
          <PlayerList/>
        </div>
      </div>
    )
  }
}

export default Home;

