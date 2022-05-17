import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PlayerListItem.css';
import { Select } from 'antd';
const { Option } = Select;

class PlayerListItem extends Component {
  #DEFEND = '防守';
  #OFFENSES = '进攻';
  render() {
    return (
      <li className={styles.playerListItem}>
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
        <div className={`playerActions`}>
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
          <Select defaultValue={this.#DEFEND} style={{ width: 100 }}>
            <Option value={this.#DEFEND}>{this.#DEFEND}</Option>
            <Option value={this.#OFFENSES}>{this.#OFFENSES}</Option>
          </Select>
          <Select defaultValue={'位置'} style={{ width: 100 }} onChange={this.handleChangeLocation}>
            {
              ['SP', 'SG', 'SF'].map(_it => {
                return <Option value={_it} key={_it}>{_it}</Option>
              })
            }
          </Select>
        </div>
      </li>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      actionFeature: '',
      actionLocation: '',
    }
  }

  handleChangeFeature = newFeature => {
    // ? 不太懂NBA的位置防守之类的，这个不知道怎么设置
    this.setState({
      ...this.state,
      actionFeature: newFeature
    })
  }

  handleChangeLocation = newLoaction => {
    this.props.updatePlayer(
      {
        id: this.props.id, 
        location: newLoaction
      }
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
