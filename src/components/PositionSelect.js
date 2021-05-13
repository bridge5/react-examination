import React, { Component } from 'react'

export default class PositionSelect extends Component {
  render() {
    return (
      <select
        onChange={e => {this.props.selectPosition(e.target.value)}}
        defaultValue={this.props.defaultPosition}
      >
        <option value="PG">PG</option>
        <option value="SG">SG</option>
        <option value="SF">SF</option>
        <option value="PF">PF</option>
        <option value="C">C</option>
      </select>
    )
  }
}
