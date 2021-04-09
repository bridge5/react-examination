import React from 'react';
import PropTypes from 'prop-types';
import styles from './Selector.module.css';

const Selector = (props) => {
    const { handlePositionChange } = props;

    return (
        <div className={styles["selector-panel"]}>
            <select aria-label="Default select example" onChange={handlePositionChange}>
                <option value="" selected></option> 
                <option value="SF">SF</option>
                <option value="PG">PG</option>
            </select>
        </div>
    )
}

Selector.propTypes = {
    handlePositionChange: PropTypes.func.isRequired,
};  

export default Selector;