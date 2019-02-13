import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FilterPlayerSelect.css';
import { POSITIONS, DEFAULT_POSITION } from '../constants/';

class FilterPlayerSelect extends Component {
  render() {
    const { position } = this.state;
    const positions = POSITIONS;

    return (
      <select
        className={styles.filterPlayerSelect}
        value={position}
        onChange={this.handleChange}>
        {positions.map((position, index) =>
          <option
            key={index}
            value={position}>
            {position}
          </option>
        )}
      </select>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      position: this.props.position || DEFAULT_POSITION,
    };
  }

  handleChange = e => {
    const position = e.target.value
    this.setState({ position });
    this.props.filterPlayer(position);
  }
}

FilterPlayerSelect.propTypes = {
  filterPlayer: PropTypes.func.isRequired,
};

export default FilterPlayerSelect;
