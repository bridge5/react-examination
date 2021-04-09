import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import Selector from './Selector';
import Pager from './Pager';

const pageLimit = 5;
class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageindex: 0,
      position: ""
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
  }

  handlePageChange(page) {

    const players = this.props.players;
    const total = players.length;
    if (page > 0 && Math.ceil(total / pageLimit) >= page) {
      this.setState(() => ({pageindex: page - 1}));
    }
  }

  handlePositionChange(event) {
    const { value } = event.target;
    this.setState(() => ({
      position: value,
      pageindex: 0,
    }));
  }

  render() {
    const { pageindex, position } = this.state;
    const players = position === "" ? this.props.players : this.props.players.filter((item) => item.position === position);
    const total = players.length;

    const start = pageindex * pageLimit;
    const end = start + pageLimit > total ? total : start + pageLimit;
    const partPlayers = players.slice(start, end);

    return (
      <>
        <Selector handlePositionChange={this.handlePositionChange} />
        <div>
          <ul className={styles.playerList}>
            {partPlayers.map((player, index) => {
              return (
                <PlayerListItem
                  key={start + index + "-" + player.name}
                  id={start + index}
                  name={player.name}
                  team={player.team}
                  position={player.position}
                  starred={player.starred}
                  {...this.props.actions}
                />
              );
            })}
          </ul>
          <Pager total={total} current={pageindex + 1} onChange={this.handlePageChange} />
        </div>
      </>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
