import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerListItem.css';

class PlayerListItem extends Component {
  delete = (id) => {
    this.props.deletePlayer(id);
    this.props.resetCurrentList(id);
  }
  star = (id) => {
    this.props.starPlayer(id);
  }
  render() {
    const { id, team, name, starred, position } = this.props;
    return (
      <li className={styles.playerListItem}>
        <div className={styles.playerInfos}>
          <div>
            <span>{name}</span>
          </div>
          <div>
            <small>
              {team} · {position}
            </small>
          </div>
        </div>
        <div className={styles.playerActions}>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.star(id)}
          >
            <i className={`fa fa-star${starred ? '' : '-o'}`} />
          </button>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.delete(id)}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

PlayerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starPlayer: PropTypes.func.isRequired,
};

export default PlayerListItem;
