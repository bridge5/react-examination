import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./AddPlayerInput.scss";

class AddPlayerInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
      team: "",
      position: "PG"
    };
  }

  handleSubmit() {
    const { name, team, position } = this.state;
    this.props.addPlayer(name, team, position);
    this.setState({ name: "", team: "", position: "PG" });
  }

  render() {
    const { name, team, position } = this.state;
    return (
      <div className={styles.wrap}>
        <input
          type="text"
          className={classnames("form-control", styles.addPlayerInput)}
          placeholder="Name"
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <input
          type="text"
          className={classnames("form-control", styles.addPlayerInput)}
          placeholder="Team Name"
          value={team}
          onChange={e => this.setState({ team: e.target.value })}
        />
        <select
          value={position}
          className={classnames("form-control")}
          placeholder="Position"
          onChange={e => this.setState({ position: e.target.value })}
        >
          <option value="PG">PG</option>
          <option value="SG">SG</option>
          <option value="SF">SF</option>
          <option value="PF">PF</option>
          <option value="C">C</option>
        </select>
        <button
          className={` btn btn-primary `}
          onClick={() => this.handleSubmit()}
        >
          Add Player
        </button>
      </div>
    );
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired
};

export default AddPlayerInput;
