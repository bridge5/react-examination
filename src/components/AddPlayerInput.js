import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';
import PlayerPositionSelect from "./PlayerPositionSelect";

class AddPlayerInput extends Component {
  render() {
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
        <PlayerPositionSelect
          value={this.state.position}
          onChange={this.handleSelectChange}/>
      </>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      position: "SF"
    };
  }

  handleSelectChange = (value) => {
    this.setState({position: value});
  };

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      const {position} = this.state;
      this.props.addPlayer(name,position);
      this.setState({name: ''});
    }
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;
