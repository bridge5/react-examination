import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer ,clearData} from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';
import { Pagination,Button } from 'antd';


class PlayerListApp extends Component {
  constructor(props,context){
    super()
    this.state = {
      playersById: props.playerlist.playersById.slice(0,5)
    }
  }
  render() {
    let list = this.props.playerlist.playersById;
    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };

    let onChange = (ev)=>{
      let ye = ev - 1;
      let first = ye * 5;
      let end = first + 5;
      if(first-1 < 0){
        first = 1;
        end = 6;
      }
      this.setState({
        playersById : list.slice(first-1,end-1)
      })
    }

    let clear = ()=>{
      this.setState({
        playersById : []
      })
    }

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        
        <AddPlayerInput addPlayer={actions.addPlayer} />
        
        <PlayerList players={this.state.playersById} actions={actions} />
 
        <Button onClick = {clear}>清空当前页</Button>
        <Pagination defaultCurrent={1} total={40} onChange={onChange} />
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
    clearData
  },
)(PlayerListApp);
