import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';
import _ from 'lodash'
import './PlayerListApp.css'
import { Select,Pagination } from 'antd';

const { Option } = Select;

class PlayerListApp extends Component {

  constructor(){
    super()
    this.state={
      selectValue:'',
      current:1,
    }
  }

  setData=()=>{
    const {
      playerlist: { playersById },
    } = this.props;
    const {selectValue} = this.state
    let data =_.map(playersById,(item,ind)=>{
      return {
        ...item,
        id:ind
      }
    })
    if(selectValue)  data = _.filter(playersById,(item)=>item.position===selectValue)
    if(this.state.current>1&&_.slice(data,(this.state.current-1)*5,(this.state.current-1)*5+5).length===0){
      this.setState((pre)=>({
        current:pre.current-1
      }))
    }
    return data
  }

  render() {
    const {
      playerlist: { playersById },
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };

    return (
      <div className='playerListApp'>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <Select 
        allowClear
        style={{ width: '100%' }} 
        placeholder='请选择球员位置'
        onChange={(value)=>{
          this.setState({
            selectValue:value,
            current:1
          })
        }}> 
          <Option value="SF">SF</Option>
          <Option value="PG">PG</Option>
        </Select>
        <PlayerList players={_.slice(this.setData(),(this.state.current-1)*5,(this.state.current-1)*5+5)} actions={actions} />
        {
          playersById.length>5&&<div className='playerListAppPagination'>
          <Pagination size="small" 
          current={this.state.current} 
          pageSize='5'
          onChange={page => {
            this.setState({
              current: page,
            });
          }} 
        total={playersById.length} />
          </div>
        }
        
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
