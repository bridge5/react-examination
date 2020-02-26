import React, { Component } from 'react';
import styles from './PositionSelect.css';
import PropTypes from 'prop-types';

class PositionSelect extends Component {
  render() {
    const { value } = this.state;
    return (   
      <div className={styles.PositionSelect}>
        <span>Select Positon:</span>
        <select value={value} onChange={(e) => this.handleChange(e)}>
          <option value="All">All</option>
          <option value="SF">SF</option>
          <option value="PG">PG</option>
        </select>
      </div>         
    );
  }  
  constructor(props) {
    super(props);
    this.state = {
      value: 'All',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { value } = e.target
    this.setState({ value });
    this.props.onChange(value);
  }
}
PositionSelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}
PositionSelect.defaultProps = {
  value: 'All'
}

export default PositionSelect;