import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PlayerListItem.module.css';



class PlayerListItem extends Component {
  state = {
    isShowMenu: false
  }
  render() {
    return (
      <li className={styles.playerListItem}>
        <div className={styles.playerInfos}>
          <div>
            <span>{this.props.name}</span>
          </div>
          <div>
            <small>
              {this.props.team} ·
            </small>
            <small style={{ color: '#3498db' }}>
              <button
                style={{
                  border: 'none',
                  backgroundColor: 'white'
                }}
                onClick={() => this.setState({ isShowMenu: !this.state.isShowMenu })}
              >&nbsp;{this.props.position}</button>
              <div style={{
                display: this.state.isShowMenu ? 'inline-block' : 'none',
                // marginLeft: '133px',
                marginTop: '5px',
              }}>
                <small style={{ color: '#3498db' }}>
                  <button
                    className={styles.button}
                    onClick={() => this.changePosition('SF')}
                  >SF</button>
                </small>
                <small style={{ color: '#3498db' }}>
                  <button
                    className={styles.button}
                    onClick={() => this.changePosition('PG')}
                  >PG</button>
                </small>
              </div>
            </small>
          </div>
        </div>
        <div className={styles.playerActions}>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.starPlayer(this.props.id)}
          >
            <i
              className={classnames('fa', {
                'fa-star': this.props.starred,
                'fa-star-o': !this.props.starred,
              })}
            />
          </button>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.deletePlayer(this.props.id)}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

  changePosition = (position) => {
    if (position === this.props.position) {
      this.setState({ isShowMenu: !this.state.isShowMenu })
      return
    }
    let data = {
      name: this.props.name,
      team: this.props.team,
      position: position,
      starred: this.props.starred,
    }
    this.props.changePosition(data,this.props.id)
    this.setState({ isShowMenu: !this.state.isShowMenu })
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
