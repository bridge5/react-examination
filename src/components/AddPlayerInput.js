import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';

class AddPlayerInput extends Component {
  render() {
    return (
      <div className="playerInput">
        <input
          type="text"
          autoFocus={true}
          className={classnames('form-control', styles.addPlayerInput)}
          placeholder="Type the name of a player"
          value={this.state.name}
          onChange={(e) => { this.handleInputChange(e, 'name') }}
          onKeyDown={(e) => { this.handleSubmit(e) }}
        />
        <input 
          type="text"
          className={classnames('form-control')}
          placeholder="Type the team of the player"
          value={this.state.team}
          onChange={(e) => this.handleInputChange(e, 'team')}
        />
        <select className={classnames('form-control', 'addPlayerOption')} value={this.state.position} onChange={this.handleOptionChange.bind(this)}>
          <option value="SF">SF</option>
          <option value="PF">PF</option>
          <option value="PG">PG</option>
          <option value="SG">SG</option>
        </select>

      </div>

    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      position: this.props.name || 'SF',
      team: this.props.name || '',
    };
  }

  handleInputChange(e, type) {
    if (type === 'name') {
      this.setState({ name: e.target.value });
    }
    else if (type === 'team') {
      this.setState({ team: e.target.value });
    }
  }

  handleOptionChange(e) {
    this.setState({ position: e.target.value });
  }


  handleSubmit(e) {
    if (e.which === 13) {
      this.props.addPlayer(this.state.name, this.state.team, this.state.position);
      this.setState({ name: '', team: '', position: 'SF' });
    }
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;
