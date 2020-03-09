import React, {Component} from 'react';
import styles from './PlayerListApp.css';
import {connect} from 'react-redux';

import {addPlayer, changeIndex, deletePlayer, starPlayer, switchStatus} from '../actions/PlayersActions';
import {AddPlayerInput, PageComponent, PlayerList, TabComponent} from '../components';

class PlayerListApp extends Component {

    //分页
    handChange(index) {
        this.props.changeIndex(index)
    }


    render() {
        const {playerlist: {playersById, status, index, size}} = this.props;
        const actions = {
            addPlayer: this.props.addPlayer,
            deletePlayer: this.props.deletePlayer,
            starPlayer: this.props.starPlayer,
            switchStatus: this.props.switchStatus
        };
        let len = playersById.length;
        let list = [];
        if(len>0){
            //根据页码和每页条数截取显示数据
            list = playersById.slice((index - 1) * size, size * index);
        }
        return (
            <div className={styles.playerListApp}>
                <h1>NBA Players</h1>
                <AddPlayerInput addPlayer={actions.addPlayer}/>
                <TabComponent switchStatus={actions.switchStatus} playersById={list}/>
                <PlayerList players={list} actions={actions} status={status}/>
                {len > 5 ? <PageComponent pageSize={size} pageIndex={index} total={len} pageOnChange={this.handChange.bind(this)}/> : null}

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
        switchStatus,
        changeIndex
    },
)(PlayerListApp);
