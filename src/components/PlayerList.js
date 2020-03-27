import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {
	
    state={
		n:1
	}
	
	handleClick=(event)=>{
		event.persist()
		this.setState({n:Number(event.target.innerText)})
		
	}
	
  render() {
	  var totalCount=this.props.players.length//总条数
	  var pageCount=5//每页总条数
	  var totalPage//总页数
	  var start,end
	  var {n} =this.state
	  //先计算可以分为多少页-----------------
	  　　　　　　　　　　if(totalCount % pageCount === 0){
	  　　　　　　　　　　　　//整除，页面为整数
	  　　　　　　　　　　　　totalPage=totalCount/pageCount;
	  　　　　　　　　　　}else{
	  　　　　　　　　　　　　//有余数，页面加一
	  　　　　　　　　　　　　totalPage=Math.ceil(totalCount/pageCount);
	  　　　　　　　　　　}
	  //查询页面数据--------------------------
	  　　　　　　　　　　if(totalCount % pageCount === 0){
	  　　　　　　　　　　　　//整除的时候每页的初始数据
	  　　　　　　　　　　　　start=(n-1)*pageCount+1;
	  　　　　　　　　　　　　//整除的时候每页的最后数据
	  　　　　　　　　　　　　end=n*pageCount;
	  　　　　　　　　　　}else{
	  　　　　　　　　　　　　//有余数的时候查询页的初始数据
	  　　　　　　　　　　　　start=(n-1)*pageCount+1;
	  　　　　　　　　　　　　if(1<=n && n<totalPage){
	      　　　　　　　　　　　　　　//有余数的时候查询页的最终数据
	  　　　　　　　　　　　　　　　end=n*pageCount;
	  　　　　　　　　　　　　}else{
	  　　　　　　　　　　　　　　　//有余数的时候最后一页的最终数据
	  　　　　　　　　　　　　　　　end=totalCount;
	  　　　　　　　　　　　　}
	   　　　　　　　　　　}
	   
	   var newPlayers=this.props.players.slice(start-1,end)
	   var pages=[]
	   for(let p=0;p<totalPage;p++){
		   pages.push('')
	   }
	   

	  
    return (
	<div>
	 <ul className={styles.playerList}>
        {newPlayers.map((player, index) => {
          return (
            <PlayerListItem
              key={index}
              id={(n-1)*pageCount+index}
              name={player.name}
              team={player.team}
              position={player.position}
              starred={player.starred}
              {...this.props.actions}
            />
          );
        })}
      </ul>
	  <ul style={{listStyle:'none'}}>
		{  
			pages.map((page,index)=>{
				return (<li key={index}><a href="#" style={{float:'left'}} onClick={this.handleClick}>{index+1}</a></li>)
			})
		 
		}
	  </ul>
	 </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
