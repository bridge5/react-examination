import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

const positions = ['PG', 'SG', 'SF', 'PF', 'C', 'All']

class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.page = 1;
    this.state.selectedPosition = 'All';

    this.togglePage = this.togglePage.bind(this);
    this.togglePosition = this.togglePosition.bind(this);
  }

  togglePage(page) {
    this.setState({
      page
    });
  }

  togglePosition(position) {
    if (this.state.selectedPosition !== position) {
      this.setState({
        selectedPosition: position,
        page: 1
      });
    }
  }

  render() {

    const filteredPlayers = this.state.selectedPosition === 'All' ? this.props.players : this.props.players.filter(player => player.position === this.state.selectedPosition);
    return (
      <div>
        <div className={styles.positionToggleSection}>
          Position
          <div className={styles.positionList}>
            {
              positions.map((position, index) => (
                <div onClick={() => this.togglePosition(position)} key={index} className={this.state.selectedPosition === position ? styles.selectedPositionToggle : styles.positionToggle}>
                  {position}
                </div>
              ))
            }
          </div>
        </div>
        <ul className={styles.playerList}>
          {filteredPlayers.slice((this.state.page-1) * 5, Math.min(filteredPlayers.length, this.state.page*5)).map((player, index) => {
            return (
              <PlayerListItem
                key={player.id}
                id={player.id}
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
          filteredPlayers.length > 5 ?
          <ul className={styles.pagingList}>
            {
              [...Array(Math.floor((filteredPlayers.length - 1) / 5) + 1)].map((e, i) => {
                return (
                  <a onClick={() => this.togglePage(i+1)} key={i} className={this.state.page === i+1 ? styles.selectedPageButton : styles.pageButton}>{i+1}</a>
                )
              })
            }
          </ul>:
          ''
        }
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
