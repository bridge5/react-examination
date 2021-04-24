import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { POS_TYPES, Options } from "../../constants/posTypes";

import styles from "./AddPlayerInput.module.scss";

class AddPlayerInput extends Component {
  render() {
    return (
      <div className={styles.addPlayerFeild}>
        <input
          type="text"
          autoFocus={true}
          className={classnames("form-control", styles.addPlayerInput)}
          placeholder="Type the name of a player"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        <select onChange={this.handlePositionSelect}>{Options}</select>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: POS_TYPES.SF,
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  handlePositionSelect = (e) => {
    this.setState({ position: e.target.value });
  };
  handleSubmit(e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      console.log(this.state.position);
      this.props.addPlayer({ name, position: this.state.position });
      this.setState({ name: "" });
    }
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;
