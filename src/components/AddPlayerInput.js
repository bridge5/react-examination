import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import OptionSelect from "./OptionSelect/index.js";
import styles from "./AddPlayerInput.css";

class AddPlayerInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // eslint-disable-next-line react/destructuring-assignment
      name: this.props.name || "",
      optionId: 0
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    const { optionId } = this.state;
    if (e.which === 13) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.addPlayer(name, optionId);
      this.setState({ name: "" });
    }
  }

  handleSelectChange(optionId) {
    this.setState({ optionId });
  }

  render() {
    const { positionList } = this.props;
    const { name } = this.state;
    return (
      <d>
        <OptionSelect
          positionList={positionList}
          onSelectChange={e => this.handleSelectChange(e)}
        />
        <input
          type="text"
          className={classnames("form-control", styles.addPlayerInput)}
          placeholder="Type the name of a player"
          value={name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
      </d>
    );
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired
};

export default AddPlayerInput;
