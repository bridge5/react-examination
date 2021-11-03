import React from "react";
import {currentPageChange} from "../actions/PlayersActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import AddPlayerInput from "./AddPlayerInput";

function Pagination(props) {
    const {
        playerList: {currentPage}, playersList
    } = props

    function topPage() {
        if (currentPage === 1) return
        props.currentPageChange(currentPage - 1)
    }

    function btmPage() {
        if (Math.ceil(playersList.length / 5) === currentPage) return
        props.currentPageChange(currentPage + 1)
    }

    let list = props.playersList.map((item, index) => {
        return Math.ceil((index + 1) / 5)
    })
    list = list?.length ? [...new Set(list)] : []

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <span className={'mr-10 icon'} onClick={topPage}> {`<`} </span>
            {list?.map((item, index) => {
                return <span
                    className={'mr-10 icon'}
                    style={{color: currentPage === index+1 ? 'red' : ''}}
                    key={index}
                    onClick={() => {
                        props.currentPageChange(item)
                    }
                    }>{item}</span>

            })}
            <span className={'icon'} onClick={btmPage}> {`>`} </span>
        </div>
    )
}
export default connect(({playerList}) => ({playerList}), {
    currentPageChange
})(Pagination)