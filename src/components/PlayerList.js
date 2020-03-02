import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import { connect } from 'react-redux';

function pagin (players, num, actions, filterVal) {
  
  var playerArr = [];
  if(filterVal !== "ALL") {
    playerArr = players.filter(item => {
      return item.position === filterVal
    })
  }else{
    playerArr = players
  }
  let len = playerArr.length;
  let n = 5; //显示5个
  let lineNum = len % 5 === 0 ? len / 5 : Math.floor( (len / 5) + 1 );
  let newArr = [];
  for (let i = 0; i < lineNum; i++) {
    let temp = playerArr.slice(i*n, i*n+n);
    newArr.push(temp);
  }
  console.log(filterVal);
  return newArr[num].map((player, index) => {
    return (
      <PlayerListItem
        key={index}
        id={index}
        name={player.name}
        team={player.team}
        position={player.position}
        starred={player.starred}
        {...actions}
      />
    );
  })
}

class PlayerList extends Component {
  render() {
    const { players, pagingNum, actions, filterVal } = this.props
    return (
      <ul className={styles.playerList}>
        { pagin(players, pagingNum, actions, filterVal) } 
      </ul>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  pagingNum: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(PlayerList);
