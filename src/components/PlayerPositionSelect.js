import React, {Component} from "react";
import PropTypes from "prop-types";

const POSITION = ["C", "PG", "SG", "SF", "PF"];

class PlayerPositionSelect extends Component {
  selectChange=(e)=>{
    this.props.onChange(e.target.value);
  };

  render() {
    return <select defaultValue={this.props.value} onChange={this.selectChange}>
      {POSITION.map(item => {
        return <option key={item} value={item}>{item}</option>
      })}
    </select>;
  }
}

PlayerPositionSelect.propTypes = {
  onChange:PropTypes.func,
  value:PropTypes.string
};
PlayerPositionSelect.defaultProps = {
  onChange:()=>{},
  value:POSITION[0]
};
export default PlayerPositionSelect;
