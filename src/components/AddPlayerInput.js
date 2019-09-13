import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes, { shape } from 'prop-types';
import styles from './AddPlayerInput.css';

class AddPlayerInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name,
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const { addPlayer } = this.props;
    const name = e.target.value.trim();
    if (e.which === 13) {
      addPlayer(name);
      this.setState({ name: '' });
    }
  }

  render() {
    return (
      <input
        type="text"
        autoFocus={true}
        className={classnames('form-control', styles.addPlayerInput)}
        placeholder="Type the name of a player"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
      />
    );
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  paginatePlayer: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(shape([])),
  name: PropTypes.string,
};

AddPlayerInput.defaultProps = {
  players: [],
  name: '',
};

export default AddPlayerInput;
