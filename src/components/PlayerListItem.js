import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PlayerListItem.css';

class PlayerListItem extends Component {
	
	state={position:this.props.position}
	
	handleChange=(event)=>{
		event.persist()
		this.setState({position:event.target.value})
		setTimeout(()=>this.props.changePosition({id:this.props.id,position:this.state.position}))
		
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
        </div>
		<div>
			<select value={this.state.position} onChange={this.handleChange}>
				<option value='SF'>SF</option>
				<option value='PF'>PF</option>
				<option value='PG'>PG</option>
				<option value='SG'>SG</option>
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
};

export default PlayerListItem;
