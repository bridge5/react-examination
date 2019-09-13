import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Selection.css';

class Selection extends Component {
  render() {
    const { onSelectData } = this.props;
    return (
      <select className={styles.selectOption} onChange={e => onSelectData(e.target.value)}>
        <option>ALL</option>
        <option>SF</option>
        <option>SG</option>
        <option>PF</option>
        <option>PG</option>
      </select>
    );
  }
}

Selection.propTypes = {
  onSelectData: PropTypes.func.isRequired,
};

Selection.defaultProps = {
  onSelectData: () => {},
};

export default Selection;
