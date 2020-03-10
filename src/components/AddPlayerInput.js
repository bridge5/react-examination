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
          // onKeyDown={this.handleSubmit.bind(this)}
        />
        <div>
          <select name="" id="" onChange={this.handleChangePosition.bind(this)}>
            <option value="">please select position</option>
            <option value="sf">sf</option>
            <option value="ps">ps</option>
            <option value="pg">pg</option>
            <option value="sg">sg</option>
          </select>
        </div>
        <div>
          <button onClick={this.handleSubmit.bind(this)}>submit</button>
        </div>
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
  handleChangePosition(e) {

    this.setState({ position: e.target.value });
  }
  handleSubmit(e) {
    const name = this.state.name;
    const position  = this.state.position
    if(!name || !position){
      alert("name or position don't empty")
      return false;
    }

    this.props.addPlayer({
      name,position
    });
    this.setState({ name: ''});

  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;
