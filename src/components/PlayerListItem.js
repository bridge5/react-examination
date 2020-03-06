import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PlayerListItem.css';

class PlayerListItem extends Component {
  render() {
    return (
      <div className="ptb8 bor-b b-side d-f ac jc-b">
        <div className={styles.playerInfos}>
          <div>
            <span>{this.props.name}</span>
          </div>
          <div>
            <small>
              {this.props.team} · {this.props.position}
            </small>
          </div>
        </div>
        <div className={styles.playerActions}>
          <button
            className={`btn-n plr8 ptb2 mr16 ${styles.btnAction}`}
            onClick={() => this.props.starPlayer(this.props.id)}
          >
            <span className="pr4">collect</span>
            {
              this.props.starred ? '✓':""
            }
          </button>
          <button
            className={`btn-n bg-fail plr8 ptb2 ${styles.btnAction}`}
            onClick={() => this.props.deletePlayer(this.props.id)}
          >
            delete
          </button>
        </div>
      </div>
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
