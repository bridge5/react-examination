import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" onClick={() => this.props.toggleSFPG()}/>
        <ul className={styles.playerList}>
          {this.props.players.map((player, index) => {
            return (
              <PlayerListItem
                key={index}
                id={index}
                name={player.name}
                team={player.team}
                position={player.position}
                starred={player.starred}
                {...this.props.actions}
              />
            );
          })}
        </ul>

        {
          this.props.players.length > 5 &&
          <div>
            <button onClick={() => this.props.prePage()}>
              <span>pre</span>
            </button>
            <span>{this.props.currentPage}</span>
            <button onClick={() => this.props.nextPage()}>
              <span>next</span>
            </button>
          </div>
        }

      </div>
      
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  players: state.players.playersById.filter((item, index) => {
    let start = (state.currentPage - 1) * 5;
    let end = start + 4;
    let onlySFPG = state.onlySFPG;
    if(!onlySFPG) {
      return (index >= start && index <= end);
    } else {
      let isSFPG = item.position === 'SF' || item.position === 'PG';
      return (index >= start && index <= end && isSFPG);
    }
  })
});

export default PlayerList;
