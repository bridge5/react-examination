import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PlayerListItem.css';
import { Select } from 'antd';

const { Option } = Select;

class PlayerListItem extends Component {
  onChange = (value) => {
    const {id, positionPlayer} = this.props
    positionPlayer({id,position:value})
  }
  render() {
    return (
      <li className={styles.playerListItem}>
        <div className={styles.playerInfos}>
          <div>
            <span>{this.props.name}</span>
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
            <small style={{lineHeight:'34px',textAlign:'center'}}>
              {this.props.team} · {this.props.position}
            </small>
            <Select
              style={{ width: 300 ,marginLeft: 20}}
              defaultValue="select a position"
              onChange={this.onChange}
            >
              <Option value="PG">PG</Option>
              <Option value="PF">PF</Option>
              <Option value="SG">SG</Option>
              <Option value="SF">SF</Option>
            </Select>   
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
}

PlayerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starPlayer: PropTypes.func.isRequired,
  positionPlayer: PropTypes.func.isRequired
};

export default PlayerListItem;
