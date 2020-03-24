import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PlayerListItem.css';

const options = [
  {key:'SF',value:'SF'},
  {key:'SG',value:'SG'},
  {key:'PE',value:'PE'},
  {key:'PG',value:'PG'},
]
class PlayerListItem extends Component {

  componentDidMount() {
    // console.log(this.props)
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
              {this.props.team} · {this.props.position}
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
          <select onChange={(e) => this.props.selectedPlay(this.props.id,e.target.value)} value={this.props.position}  className={`btn btn-default selectPlay`}>
            {
              options.map((item,index)=>{
                return (
                  <option value={item.key} key={index}>{item.value}</option>
                )
              })
            }
          </select>
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
  selectedPlay:PropTypes.func.isRequired,
};

export default PlayerListItem;
