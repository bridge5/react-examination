import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';
import { Paging } from 'slucky';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';

class PlayerListApp extends Component {
  constructor(props) {
    super(props)
    const {
      playerlist: {
        playersById
      },
    } = this.props;

    this.state = {
      dataList: playersById,
      dataView: [],
      pageInfo: {
        total: playersById.length,
        maxToShow: 5,
        currentPage: 1
      }
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    const {
      currentPage
    } = this.state.pageInfo
    const {
      playerlist: {
        playersById
      },
    } = nextProps;
    this.setState({
      dataList: playersById,
      pageInfo: {
        total: playersById.length,
        maxToShow: 5,
        currentPage
      }
    },()=>{
      this.getDataByList(currentPage)
    })
    
  }

  componentDidMount(){
    this.getDataByList()
  }

  getDataByList(currentPage = 1) {
    const index = (currentPage - 1) * 5
    const {
      dataList
    } = this.state
    this.setState({
      dataView: dataList.slice(index, index + 5),
      pageInfo: {
        currentPage,
        total: dataList.length,
        maxToShow: 5
      }
    })
  }

  handleChangePage=(currentPage)=>{
    this.getDataByList(currentPage)
  }

  render() {

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };

    return (
      <div className={[styles.playerListApp,'bor b-side p32 paper'].join(' ')}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={this.state.dataView} actions={actions} />
        <Paging pageInfo={this.state.pageInfo} onAction={this.handleChangePage} />
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
