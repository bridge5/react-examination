import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';
import { selectOptions } from '../constants/Options';

class AddPlayerInput extends Component {
  render() {
    const teamList = selectOptions.teamList.map((item, i) => {
      return (
        <option key={i} value={item}>{item}</option>
      )
    });

    const positionList = selectOptions.positionList.map((item, i) => {
      return (
        <option key={i} value={item}>{item}</option>
      )
    });

    return (
      <>
        <input
          type="text"
          autoFocus={true}
          className={classnames('form-control', styles.addPlayerInput)}
          placeholder="Type the name of a player"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        <div>
          <span>Team:</span>
          <select onChange={this.setTeam.bind(this)}>
            {teamList}
          </select>
        </div>
        <div>
          <span>Position:</span>
          <select onChange={this.setPosition.bind(this)}>
            {positionList}
          </select>
        </div>
      </>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      position: this.props.position || 'SF',
      team: this.props.team || 'LOS ANGELES LAKERS'
    };
  }

  setPosition(e) {
    this.setState({ position: e.target.value });
  }

  setTeam(e) {
    this.setState({ team: e.target.value });
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    const position = this.state.position;
    const team = this.state.team;
    if (name === '') {
      return;
    }
    if (e.which === 13) {
      this.props.addPlayer({name, position, team});
      this.setState({ name: '' });
    }
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;
