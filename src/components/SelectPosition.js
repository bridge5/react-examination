import React from "react";
import {connect} from 'react-redux';
import {PositionType} from '../enumeration'
import {selectPosition} from '../actions/PlayersActions';


function SelectPosition(props) {
    return (
        <div>
            <select
                style={{width:'180px',margin:'20px 0'}}
                onChange={(event) => {
                    props.selectPosition(event.target.value)
                }}>
                {PositionType.map((item, index) => (
                    <option  key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default connect(function (state) {
    return state
}, {
    selectPosition
})(SelectPosition)