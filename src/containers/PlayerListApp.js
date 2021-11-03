import React, {Component} from 'react';
import styles from './PlayerListApp.css';
import {connect} from 'react-redux';

import {addPlayer, deletePlayer, starPlayer,} from '../actions/PlayersActions';
import {PlayerList, AddPlayerInput} from '../components';
import SelectPosition from "../components/SelectPosition";
import Pagination from "../components/Pagination";

class PlayerListApp extends Component {
    render() {
        console.log(this.props, 'props')
        const {
            playerList: {playersById, position, currentPage}
        } = this.props;
        let playersByIds = position !== '全部类型' ? playersById.filter((item, index) => item.position === position) : playersById
        let currentPlayersByIds = playersByIds?.filter((item, index) => {
            if (
                Math.ceil((index + 1) / 5) === currentPage) {
                return true
            }
        })
        console.log(playersByIds, 'currentPlayersByIds', currentPlayersByIds)
        const actions = {
            addPlayer: this.props.addPlayer,
            deletePlayer: this.props.deletePlayer,
            starPlayer: this.props.starPlayer,
        };

        return (
            <div className={styles.playerListApp}>
                <h1>NBA Players</h1>
                <AddPlayerInput addPlayer={actions.addPlayer} playersByIdList={playersById}/>
                <SelectPosition/>
                <PlayerList players={currentPlayersByIds} actions={actions}/>
                {currentPlayersByIds.length ? <div>
                    <Pagination playersList={playersByIds}/>
                </div>:<div>暂无数据</div>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(
    mapStateToProps,
    {
        addPlayer,
        deletePlayer,
        starPlayer,
    },
)(PlayerListApp);
