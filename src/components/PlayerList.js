import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import { connect } from 'react-redux';
import Pagination  from './pagination';
import './style.css'

//import {addPlayer, deletePlayer, starPlayer} from "../actions/PlayersActions";

class PlayerList extends Component {
  constructor(props){
    super(props)


    this.state = {
      indexList : this.props.players.slice(0,5), //初始化第一页，只取5条
      totalNum:this.props.players.length,//总记录数
      totalData:[],
      current: 1, //当前页码
      pageSize:5, //每页显示的条数5条
      totalPage:Math.ceil(this.props.players.length/5),//总页数
    }
  }
  componentWillReceiveProps(nextProps, nextContext) {

    this.setState({
      totalPage:Math.ceil(nextProps.players.length/5),
      indexList: nextProps.players.slice(0,5)
    },()=>{
      if(this.state.totalPage >=  this.state.current){
        this.pageClick(this.state.current)
      }
    })

  }

  componentWillMount(){

  }
  splitPlayersArr(data){
    let arr = [];
    for(var i=0;i<data.length;i+=5){
      arr.push(data.slice(i,i+5));
    }
  }
  //点击翻页
  pageClick(pageNum){
    let _pageNum = pageNum - 1;
    let _playersArr = this.props.players;
    let _result = [];
    for(var i=0;i<_playersArr.length;i+=5){
      _result.push(_playersArr.slice(i,i+5));
    }
    this.setState({
      indexList : _result[_pageNum],
      totalPage:Math.ceil(_playersArr.length/5),
      current : pageNum
    });
    if(pageNum != this.state.current){
      this.setState({

        current : pageNum
      });
    }


  }
  //上一步
  goPrevClick(){

    let cur = this.state.current-1;
    if(cur > 0){
      this.pageClick(cur);
    }
  }
  //下一步
  goNext(){

    let cur = this.state.current;
    if(cur < this.state.totalPage){
      this.pageClick(cur + 1);
    }
  }
  render() {
    return (
      <div>
        <ul className={styles.playerList}>
          {this.state.indexList.map((player, index) => {
            return (
              <PlayerListItem
                key={index}
                id={index}
                current={this.state.current-1}
                name={player.name}
                team={player.team}
                position={player.position}
                starred={player.starred}
                {...this.props.actions}
              />
            );
          })}
        </ul>
        <Pagination total={this.state.totalNum}
                       current={this.state.current}
                       totalPage={this.state.totalPage}

                       pageClick={this.pageClick.bind(this)}
                       goPrev={this.goPrevClick.bind(this)}
                       goNext={this.goNext.bind(this)}
                        />
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;


// function mapStateToProps(state) {
//   return state;
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     changePlayerId: (state) => dispatch(state)
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(PlayerList);
