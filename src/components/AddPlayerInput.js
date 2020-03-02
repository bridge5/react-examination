import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';

class AddPlayerInput extends Component {
  render() {
    return (
      <div> 
        <input
          type="text"
          autoFocus={true}
          className={classnames('form-control', styles.addPlayerInput)}
          placeholder="Type the name of a player"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        <select onChange={this.handleSelectChange.bind(this)} defaultValue="ALL" style={{width: '100%'}}>
          <option value="ALL">ALL</option>
          <option value="PG">PG</option>
          <option value="SF">SF</option>
        </select>
      </div>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addPlayer(name);
      this.setState({ name: '' });
    }
  }

  handleSelectChange(e) {
    this.props.filterPlayer(e.target.value)
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  filterPlayer: PropTypes.func.isRequired
};

export default AddPlayerInput;
