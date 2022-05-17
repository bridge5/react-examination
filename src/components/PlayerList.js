import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import { Pagination } from 'antd';

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: Math.ceil(this.props.players.length / 5),
      actionTotal: 1,
    }
  }
  render() {
    return (
      <>
        <ul className={styles.playerList}>
          {this.renderList()}
        </ul>
        <Pagination defaultPageSize={5} defaultCurrent={1} total={this.state.total * 5} onChange={this.handleChangeTotal} />
      </>
    );
  }

  handleChangeTotal = newActionTotal => {
    this.setState({
      ...this.state,
      actionTotal: newActionTotal
    })
  }

  renderList = () => {
    let showPlayers = this.props.players.slice((this.state.actionTotal - 1) * 5, this.state.actionTotal * 5);
    return (
      <>
        {showPlayers.map((player, index) => {
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
      </>
    )
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
