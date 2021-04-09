import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';

class PlayerListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTip: false
    };
  }

  render() {
    const { displayTip } = this.state;
    const {
      playerlist: { playersById },
    } = this.props;

    const enhancedDeletePlayer = (id) => {
      this.setState(() => ({displayTip: true}), () => {
        setTimeout(() => {
          this.setState(() => ({displayTip: false}));
        }, 2e3);
      });
      this.props.deletePlayer(id);
    }

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: enhancedDeletePlayer,
      starPlayer: this.props.starPlayer,
    };

    return (
      <>
        <div className={styles.playerListApp}>
          <h1>NBA Players</h1>
          <AddPlayerInput addPlayer={actions.addPlayer} />
          <PlayerList players={playersById} actions={actions} />
        </div>
        {
          displayTip ? (
            <div className={classnames("alert", "alert-primary")} role="alert">
              Delete complete
            </div>
          ) : null
        }
      </>
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
