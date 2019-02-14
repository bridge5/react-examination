import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';

class AddPlayerInput extends Component {
  render() {
    return (
        <div className={styles.addPlayerBox}>
            <input
                type="text"
                autoFocus={true}
                className={classnames('form-control', styles.addPlayerInput)}
                placeholder="Type name"
                value={this.state.name}
                onChange={this.handleChangeName.bind(this)}
            />
            <input
                type="text"
                autoFocus={true}
                className={classnames('form-control', styles.addPlayerInput)}
                placeholder="Type team"
                value={this.state.team}
                onChange={this.handleChangeTeam.bind(this)}
            />
            <select 
                value={this.state.position} 
                className={classnames('form-control', styles.addPlayerPosition)}
                onChange={this.handleChangePosition.bind(this)}>
                <option value="SF">SF</option>
                <option value="PF">PF</option>
                <option value="C">C</option>
                <option value="PG">PG</option>
                <option value="SG">SG</option>
            </select>
            <button 
                className={classnames('form-control',styles.addPlayerButton)}
                onClick={this.handleSubmit.bind(this)}>
                Add Player
            </button>
        </div>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      team: this.props.team || 'LOS ANGELES LAKERS',
      position: this.props.position || 'SF',
    };
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeTeam(e) {
    this.setState({ team: e.target.value });
  }

  handleChangePosition(e) {
    this.setState({ position: e.target.value });
  }

  handleSubmit() {
      if(!this.state.name){
         alert('Invalid Name');
      }else if(!this.state.team){
         alert('Invalid Team');   
      }else{
         this.props.addPlayer(this.state.name, this.state.team, this.state.position);
         this.setState({ name: '', team: '' });
      }
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;
