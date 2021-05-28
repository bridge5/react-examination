import React, { Component } from 'react';
import styles from './index.module.css'
class SelectPosition extends Component {
  render() {
    return (
      <select
        ref="select"
        onChange={(e) => this.handleSelect(e)} 
        className={styles.select}>
        <option value ="SF">SF</option>
        <option value ="PG">PG</option>
      </select>
    );
  }
  componentDidMount(){
    console.log(this.refs.select.value);
    this.props.selectPosition(this.refs.select.value)
    // this.refs.select
}
 
  handleSelect(e) {
    this.props.selectPosition(e.target.value)
  }
}

export default SelectPosition
