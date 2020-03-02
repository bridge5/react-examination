import React, { Component } from 'react';
import {POSITION} from '@/constants/Dataes';
import { changePosition } from './../actions/PlayersActions';

class Position extends Component {
  state = {
    value: "SF",
  }
  render() {
    return (
      <select onChange={this.selectChange} className="form-control" value={this.state.value}>
        {POSITION.map((v, i) => {
          return (
            <option key={i}>{v}</option>
          )
        })}
      </select>
    );
  }
  selectChange = (e) => {
    e.preventDefault();
    let option = e.target.options[e.target.selectedIndex];
    let v = option.value
    this.setState({
      value: v
    })
    // console.log(this.props)
    this.props.changePosition(v)
  }
}

export default Position;