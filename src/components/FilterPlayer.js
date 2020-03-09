import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './FilterPlayer.css';

const FilterPlayer = ({ data, onChange, value = '' }) => {
  return (
    <select
      onChange={onChange}
      value={value}
      data-test='position-filter'
    >
      <option value="">请选择</option>
      {
        data.map(item => {
          return <option value={item} key={item}>{item}</option>
        })
      }
    </select>
  )
}

FilterPlayer.propTypes = {
  value: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterPlayer;
