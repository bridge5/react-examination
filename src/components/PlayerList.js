import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 0};
  }
  
  changePage = (action) => {
    this.setState({
      page: this.state.page + action
    })
  }

  render() {
    return (
      <div>
        <ul className={styles.playerList}>
          {this.props.players.map((player, index) => {
            if (0 <= index-this.state.page*5 && index-this.state.page*5 < 5) {
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
            }
          })}
        </ul>
        <nav className="pagination">
          <ul className="pagination justify-content-end">
            <li className={classnames('page-item', this.state.page === 0 ? 'disabled' : '')}>
              <a className="page-link" href="#" onClick={() => this.changePage(-1)}>Previous</a>
            </li>
            <li className={classnames('page-item', this.state.page === Math.floor(this.props.players.length / 5) ? 'disabled' : '')}>
              <a className="page-link" href="#" onClick={() => this.changePage(1)}>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
