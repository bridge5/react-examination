import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from "react";
import styles from './Pager.module.css';

const Pager = (props) => {
    const { total, current, onChange } = props;
    // const [page, setPage] = useState();

    const pagespan = new Array(Math.ceil(total / 5)).fill(1).map((_, index) => index + 1 + "");
    return (
        <div className={styles["pager-bar"]}>
            <div>
                <button onClick={() => onChange(current - 1)}>
                    prev
                </button>
            </div>
            <div className={styles["page-list"]}>
                {
                    pagespan.map((item, index) => (
                        <div key={index + item} className={styles["page-item"]} onClick={() => onChange(item)}>
                            <span>
                                {item}
                            </span>
                        </div>
                    ))
                }
            </div>
            <div>
                <button onClick={() => onChange(current + 1)}>
                    next
                </button>
            </div>
        </div>
    );
};

Pager.propTypes = {
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default React.memo(Pager);