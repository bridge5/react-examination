import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./AddPlayerInput.css";

class AddPlayerInput extends Component {
  render() {
    return (
      <div className="addPlayerInputBox">
        <input
          type="text"
          name="name"
          autoFocus={true}
          className={classnames("form-control", styles.addPlayerInput)}
          placeholder="Type the name of a player"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        <select 
          name="position"  
          value={this.state.position} 
          onChange={(e) => {
            this.handleChange(e);
          }}
          className={classnames("form-control", styles.addPlayerSelectInput)}
        >
        　<option value="SF">SF</option>
        　<option value="PG">PG</option>
        </select>
        <input 
          type="submit" 
          value="add"
          onClick={() => {
            this.handleSubmit.call(this, {which: 13})
          }}
        />
      </div>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || "",
      position: 'SF',
    };
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    const name = this.state.name.trim();
    if (e.which === 13 && !!name) {
      this.props.addPlayer(name, this.state.position);
      this.setState({ name: "", position: 'SF' });
    }
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired
};

export default AddPlayerInput;
